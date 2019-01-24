import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  selectedAddress: any;

  constructor(private auth: AuthService, private router: Router, private loader: LoaderService) { }

  ngOnInit() {
  }


  choseAddress(address: any) {
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

}
