import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    // this.cart = new Array<Object>();
    this.auth.loadCart();
  }


  increaseQ(item: any) {
    if (item.quantity >= 20) {
      M.toast({ html: 'La quantité maximale a été atteinte' });
    } else {
      this.auth.increaseCartQuantity(item.id).subscribe(
        data => {
          let res: any = data;
          item.quantity = res.data.quantity;
          M.toast({ html: res.data.message });
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  decreaseQ(item: any) {
    if (item.quantity <= 1) {
      M.toast({ html: 'La quantité minimale a été atteinte' });
    } else {
      this.auth.decreaseCartQuantity(item.id).subscribe(
        data => {
          let res: any = data;
          item.quantity = res.data.quantity;
          M.toast({ html: res.data.message });
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  getTotal() {
    let total: number = 0;
    this.auth.cart.items.forEach(item => {
      total += item.menu.price * item.quantity;
    });
    return total;
  }

}
