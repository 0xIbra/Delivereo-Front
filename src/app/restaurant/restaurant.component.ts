import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit, AfterContentInit {
  restaurant: any;
  restaurantId: string;

  modal: any;
  modalMenu: Object;
  quantity: number = 1;

  constructor(private auth: AuthService,private api: ApiService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.restaurantId = params['id'];
        this.getRestaurant(params['id']);
      }
    );
  }

  ngAfterContentInit() {
    // Calling to initialize the plugin
    this.openModal({});
  }

  getRestaurant(id: string) {
    this.api.getRestaurantData(id)
          .subscribe(
            data => {
              let res: any = data;
              this.restaurant = res.data;
            },
            err => {
              console.log(err);
              M.toast({ html: err.error.data.message });
              this.router.navigate(['/']);
            }
          );
  }


  initModal() {
    this.modal = M.Modal.init(document.getElementById('item-modal'));
  }

  openModal(menu: Object) {
    this.initModal();
    this.modalMenu = menu;
    if (this.modal !== null) {
      this.modal.open();
    }
  }


  increaseQ() {
    if (this.quantity >= 20) {
      M.toast({ html: 'La quantité maximale a été atteinte' });
      return;
    }
    this.quantity++;
  }

  decreaseQ() {
    if (this.quantity <=1) {
      M.toast({ html: 'La quantité minimale a été atteinte' });
      return; 
    }
    this.quantity--;
  }


  toCart(menu: Object, quantity: number) {
    if (!this.auth.isLoggedIn()) {
      M.toast({ html: 'Vous devez être connectée pour accéder au panier' });
    } else {
      this.auth.addToCart(menu, quantity);
    }
  }

}
