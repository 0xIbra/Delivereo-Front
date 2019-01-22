import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-partner-application',
  templateUrl: './partner-application.component.html',
  styleUrls: ['./partner-application.component.scss']
})
export class PartnerApplicationComponent implements OnInit, AfterContentInit {
  categories: any[];
  restaurant: Restaurant;
  selectedCategories: any[];

  constructor(private auth: AuthService, private api: ApiService) { }

  ngOnInit() {
    this.getCategories();
    this.restaurant = new Restaurant({});
    this.selectedCategories = new Array<any>();
  }

  ngAfterContentInit() {
    this.initSelect();
  }

  initSelect() {
    M.AutoInit();
    let elems = document.querySelectorAll('select');
    let instances = M.FormSelect.init(elems);
    console.log(instances);
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

}
