import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { Address } from '../models/address';
import { City } from '../models/city';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  address: Address;
  city: Object;

  modal: any;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    if (this.auth.user === null) {
      this.auth.loadUser();
      this.user = this.auth.user;
    }else {
      this.user = this.auth.user;
    }
    this.address = new Address({});
    this.address.$city = new City({ name: 'name', zip_code: '00000' });
    M.AutoInit();
  }

  openAddAddress() {
    this.modal = M.Modal.init(document.getElementById('addAddressModal'));
    this.modal.open();
  }

  closeAddAddress() {
    this.modal = M.Modal.init(document.getElementById('addAddressModal'));
    this.modal.close();
  }

  onAddressSubmit() {
    this.auth.addAddress(this.address).subscribe(
      data => {
        let res: any = data;
        if (res.data.message !== undefined) {
          M.toast({ html: res.data.message });
        }
        this.auth.reloadUser();
        this.closeAddAddress();
      },
      err => {
        if (err.error.data.message !== undefined) {
          M.toast({ html: err.error.data.message });
        } else {
          console.log(err);
        }
      }
    );
  }

}
