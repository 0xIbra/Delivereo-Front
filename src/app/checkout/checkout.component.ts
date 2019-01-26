import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoaderService } from '../services/loader.service';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, AfterViewInit {

  selectedAddress: any;
  selectedPayment: any;

  private stripe: any;
  elements: any;
  errors: any;
  private card: any;

  paymentMethods: any[] = [
    { id: 1, name: 'Paiement à la livraison' },
    { id: 2, name: 'Carte bancaire' }
  ];

  constructor(public auth: AuthService, private router: Router, private loader: LoaderService) { }

  ngOnInit() {
    this.stripe = (<any>window).Stripe(environment.stripeKey);
    this.elements = this.stripe.elements({ locale: 'fr' });
    this.errors = document.getElementById('card-errors');
    this.initPaymentForm();
  }

  ngAfterViewInit() {
    M.Tooltip.init(document.querySelectorAll('.tooltip'));
  }

  initPaymentForm() {
    const style = {
      base: {
        fontSize: '16px',
        color: '#32325d'
      }
    };

    this.card = this.elements.create('card', {style});
    this.card.mount('#card-element');
  }

  chooseAddress(address: any) {
    this.selectedAddress = address;
  }

  getTotal() {
    if (this.auth.cart !== undefined) {
      let total = 0;
      this.auth.cart.items.forEach(item => {
        total += item.menu.price * item.quantity;
      });
      return total;
    } else {
      return null;
    }
  }

  choosePayment(payment) {
    this.selectedPayment = payment;
    let ccform = document.getElementById('ccform');
    if (payment.id === 2) {
      ccform.classList.add('active');
    } else {
      ccform.classList.remove('active');
    }
  }

  async onSubmit(e: any) {
    e.preventDefault();


    if (this.selectedAddress === undefined || this.selectedPayment === undefined) {
      M.toast({ html: 'Merci de selectionner une adresse de livraison et un mode de paiement.' });
      return;
    }

    this.loader.showLoader();
    
    if (this.selectedPayment.id === 1) {
      let payload = {
        deliveryAddress: this.selectedAddress,
        paymentMethod: this.selectedPayment,
        stripe: false
      };

      this.auth.buy(payload).subscribe(
        (res: any) => {
          this.auth.orderComplete = true;
          M.toast({ html: res.data.message });
          this.auth.reloadUser();
          this.router.navigate(['/cart/checkout/complete']);
        },
        err => {
          if (err.error.data.message !== undefined) {
            M.toast({ html: err.error.data.message });
          } else {
            console.log(err);
          }
        },

        () => {
          this.loader.hideLoader();
        }
      );

    } else if (this.selectedPayment.id === 2) {

      const {token, error} = await this.stripe.createToken(this.card);

      if (error) {
        this.errors.textContent = error.message;
      } else {
        let payload = {
          deliveryAddress: this.selectedAddress,
          paymentMethod: this.selectedPayment,
          stripeToken: token.id,
          stripe: true
        };
        
        this.auth.buy(payload).subscribe(
          (res: any) => {
            this.auth.orderComplete = true;
            M.toast({ html: res.data.message });
            this.auth.reloadUser();
            this.router.navigate(['/cart/checkout/complete']);
          },
          err => {
            if (err.error.data.message !== undefined) {
              M.toast({ html: err.error.data.message });
            } else {
              console.log(err);
            }
          },
  
          () => {
            this.loader.hideLoader();
          }
        );
      }

    }

  }

}
