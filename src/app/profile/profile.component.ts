import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { Address } from '../models/address';
import { City } from '../models/city';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  address: Address;
  city: Object;

  private modal: any;
  private editModal: any;

  private showingAddress: any;
  editAddress: any;

  constructor(public auth: AuthService, private loader: LoaderService) { }

  ngOnInit() {
    if (this.auth.user === null) {
      this.auth.loadUser();
      this.user = this.auth.user;
    }else {
      this.user = this.auth.user;
    }
    this.address = new Address({});
    this.address.$city = new City({ name: '', zip_code: '' });
    this.editAddress = {};
    this.editAddress.city = { name: '', zip_code: '' };
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

  showAddress(address: any) {
    this.showingAddress = address;
    let modal = M.Modal.init(document.getElementById('addressModal'));
    this.initAddressModalData(address);
    modal.open();
  }

  openEditAddressModal() {
    this.editAddress = this.showingAddress;
    let modal = M.Modal.init(document.getElementById('editAddressModal'));
    modal.open();
  }

  initAddressModalData(address: any) {
    document.querySelector('#addressModal .modal-title').innerHTML = address.name;
    document.querySelector('#addressModal #address').innerHTML = address.line1;
    document.querySelector('#addressModal #line2').innerHTML = address.line2;
    document.querySelector('#addressModal #city').innerHTML = address.city.name + ', ' + address.city.zip_code;
  }

  deleteAddress() {
    this.loader.showLoader();
    this.auth.deleteAddress(this.showingAddress).subscribe(
      (res: any) => {
        M.toast({ html: res.data.message });
        this.auth.reloadUser();
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
        let modal = M.Modal.getInstance(document.getElementById('addressModal'));
        modal.close();
      }
    );
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

  onAddressEdit() {
    let modal = M.Modal.init(document.getElementById('editAddressModal'));
    modal.close();
    this.loader.showLoader();
    this.auth.editAddress(this.editAddress).subscribe(
      (res: any) => {
        M.toast({ html: res.data.message });
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
