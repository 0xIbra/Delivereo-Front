import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { Restaurant } from '../models/restaurant';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-partner-application',
  templateUrl: './partner-application.component.html',
  styleUrls: ['./partner-application.component.scss']
})
export class PartnerApplicationComponent implements OnInit, AfterViewInit {
  categories: any[];
  restaurant: Restaurant;
  selectedCategories: any[];

  constructor(private auth: AuthService, private api: ApiService, private loader: LoaderService) {}

  ngOnInit() {
    this.restaurant = new Restaurant({});
    this.selectedCategories = new Array<any>();
    this.getCategories();
  }

  ngAfterViewInit() {
    this.initForm();
  }

  initForm() {
    this.loader.showLoader('Initialisation...');
    $(document).ready(() => {
      setTimeout(() => {
        $('select').formSelect();
        this.loader.hideLoader();
      }, 1000);
    });
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

  }

  log() {
    console.log(this.restaurant);
  }

}
