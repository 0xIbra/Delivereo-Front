import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Gender } from '../models/gender';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit, AfterViewInit {
  user: any;

  constructor(public auth: AuthService, private router: Router, private loader: LoaderService) {}

  ngOnInit() {
    this.user = {};
    this.initFormData();
  }

  ngAfterViewInit() {
    this.loader.showLoader();
    $(document).ready(() => {
      $('select').formSelect();
      this.loader.hideLoader();
    });
  }

  initFormData() {
    this.user.id = this.auth.user.$id;
    this.user.first_name = this.auth.user.$first_name;
    this.user.last_name = this.auth.user.$last_name;
    this.user.username = this.auth.user.$username;
    this.user.gender = this.auth.user.$gender;
  }


  userFormSubmit() {
    this.auth.editUser(this.user).subscribe(
      data => {
        let res: any = data;
        M.toast({ html: res.data.message });
        this.auth.reloadUser();
        this.router.navigate(['/profile']);
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

  uploadImage(event) {
    this.loader.showLoader();
    let image = event.target.files[0];
    this.auth.uploadImage(image).subscribe(
      data => {
        let res: any = data;
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
      }
    );
  }

  deleteImage() {
    if (this.auth.user.$image === undefined) {
      M.toast({ html: "Vous n'avez pas d'image pour supprimer." });
    } else {
      this.loader.showLoader();      
      this.auth.deleteImage().subscribe(
        data => {
          let res: any = data;
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
        }
      );
    }
  }

}
