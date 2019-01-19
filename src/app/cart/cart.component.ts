import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    // this.cart = new Array<Object>();
    this.getCartData();
  }

  getCartData() {
    this.auth.getCart().subscribe(
      data => {
        let res: any = data;
        this.cart = res.data;
        console.log(this.cart);
      },
      err => {
        console.log(err);
      }
    );
  }


  increaseQ(item: any) {
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

  decreaseQ(item: any) {
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

  getTotal() {
    let total: number = 0;
    this.cart.items.forEach(item => {
      total += item.menu.price * item.quantity;
    });
    return total;
  }

}
