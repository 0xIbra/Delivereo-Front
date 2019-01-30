import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { Restaurant } from '../models/restaurant';
import { LoaderService } from '../services/loader.service';
import { Category } from '../models/category';
import { OwnerService } from '../services/owner.service';

import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner-application',
  templateUrl: './partner-application.component.html',
  styleUrls: ['./partner-application.component.scss']
})
export class PartnerApplicationComponent implements OnInit, AfterViewInit {
  categories: any[];
  restaurant: Restaurant = new Restaurant();
  selectedCategories: any[];

  constructor(private auth: AuthService, private api: ApiService, private loader: LoaderService, private owner: OwnerService, private router: Router) {}

  ngOnInit() {
    this.selectedCategories = new Array<any>();
    this.getCategories();
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.initForm();
  }

  setOpensAt(time: any) {
    console.log(time);
    return null;
  }

  initForm() {
    this.loader.showLoader('Initialisation...');
    setTimeout(() => {
      M.FormSelect.init(document.querySelectorAll('select'));
      M.Timepicker.init(document.querySelectorAll('#opens_at'), { twelveHour: false });
      M.Timepicker.init(document.querySelector('#closes_at'), { twelveHour: false });
      this.loader.hideLoader();
    }, 1000);
  }

  getCategories() {
    this.api.getCategories().subscribe(
      (res: any) => {
        this.categories = res.data;
      },
      err => {
        console.log(err);
      }
    );
  }

  onSubmit() {
    this.selectedCategories.forEach(category => {
      let cat = new Category();
      cat.$id = category.id;
      cat.$name = category.name;
      cat.$image = category.image;
      this.restaurant.$categories.push(cat);
    });

    let opensAt = M.Timepicker.getInstance(document.querySelector('#opens_at')).time;
    let closesAt = M.Timepicker.getInstance(document.querySelector('#closes_at')).time;

    if (opensAt === undefined || closesAt === undefined) {
      M.toast({ html: 'Veuillez entrer les horaires du restaurant.' });
      return;
    }

    let open = moment(`2019-01-30 ${opensAt}`);
    let close = moment(`2019-01-30 ${closesAt}`);
    
    this.restaurant.$opens_at = open.format('Y-m-d\TH:mm:ssP');
    this.restaurant.$closes_at = close.format('Y-m-d\TH:mm:ssP');
    
    this.loader.showLoader();
    this.owner.partnerApplication(this.restaurant).subscribe(
      (res: any) => {
        this.auth.reloadUser();
        this.owner.reloadRestaurant();
        M.toast({ html: res.data.message });
        
        setTimeout(() => {
          this.loader.hideLoader();
          console.log(this.auth.user);
          this.router.navigate(['/partner/application/complete']);
        }, 1500);
      },
      err => {
        this.loader.hideLoader();
        if (err.error.data.message !== undefined && err.error.data.message instanceof Array) {
          err.error.data.message.forEach(message => {
            M.toast({ html: message });
          });
        } else if (err.error.data.message !== undefined && !(err.error.data.message instanceof Array)) {
          M.toast({ html: err.error.data.message });
        } else {
          console.log(err);
        }
      }
    );
  }

  log() {
    // console.log(this.restaurant);
  }

}
