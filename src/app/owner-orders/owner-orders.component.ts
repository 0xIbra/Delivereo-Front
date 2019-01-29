import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OwnerService } from '../services/owner.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-owner-orders',
  templateUrl: './owner-orders.component.html',
  styleUrls: ['./owner-orders.component.scss']
})
export class OwnerOrdersComponent implements OnInit, AfterViewInit {
  search: string;
  orders: any;
  selectedOrder: any;

  constructor(private owner: OwnerService, private loader: LoaderService) { }

  ngOnInit() {
    this.initOrders();
  }

  ngAfterViewInit() {
    this.initModal();
  }

  initOrders() {
    this.loader.showLoader('Initialisation...');
    this.owner.getOrders().subscribe(
      (res: any) => {
        this.orders = res.data;
        console.log(res.data);
      },
      err => {
        this.loader.hideLoader();
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

  onSubmit() {
    if (this.search.length > 3) {
      this.loader.showLoader();
      this.owner.searchOrder(this.search).subscribe(
        (res: any) => {
          this.orders = res.data;
        },
        err => {
          this.loader.hideLoader();
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
    } else if (this.search.length <= 0 || this.search === undefined) {
      this.initOrders();
    }
  }

  showOrder(order: any) {
    this.selectedOrder = order;
    let elem = document.getElementById('orderModal');
    let modal = M.Modal.init(elem);
    modal.open();
  }

  initModal() {
    let elem = document.getElementById('orderModal');
    let modal = M.Modal.init(elem);
    // modal.open();
  }

}
