import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  restaurants: any[];
  categories: any[];
  city: Object;

  checklist: string[];

  cityId: string;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.checklist = [];
    this.route.params.subscribe(
      params => {
        this.cityId = params['city'];
      }
    );

    this.getCity();
    if (this.city !== null || this.city !== undefined) {
      this.getRestaurants();
      this.initCategories();
    }
  }

  getCity() {
    this.api.getCityData(this.cityId)
            .subscribe(
              data => {
                let res: any = data;
                this.city = res.data;
              },
              err => {
                console.log(err);
              }
            );
  }



  getRestaurants(categories: string = null) {
    this.api.getRestaurantsByCity(this.cityId, categories)
            .subscribe(
              data => {
                let res: any = data;
                this.restaurants = res.data;
              }, 
              err => {
                console.log(err);
              }
            );
  }

  initCategories() {
    this.api.getCategories()
            .subscribe(
              data => {
                let res: any = data;
                this.categories = res.data;
              },
              err => {
                console.log(err);
              }
            );
  }

  onSubmit() {

  }

  onCheck() {
    this.getRestaurants(this.getChecklist().toString());
  }

  getChecklist() {
    let data: any[] = [];
    this.checklist.forEach((checked, index) => {
      if (checked) {
        data.push(index);
      }
    });
    return data;
  }

}
