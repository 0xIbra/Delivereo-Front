import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Category } from '../models/category';
import { Image } from '../models/image';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: Category[];
  search: string;

  cities: any[];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.categories = new Array<Category>();
    this.api.getFavoriteCategories().subscribe(
      data => {
        let res: any = data;
        res.data.forEach(item => {
          this.categories.push(new Category(item));
        });
      },
      error => {
        console.log(error);
      }
    );
  }


  onSubmit() {
    this.router.navigate(['/search/city', this.search]);
  }


  searchCities() {
    if (this.search.length > 3) {
      this.api.searchCity(this.search)
              .subscribe(
                data => {
                  let res: any = data;
                  this.cities = res.data.data;
                }, 
                err => {
                  console.log(err);
                }
              );
    }
  }

}
