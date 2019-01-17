import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Category } from '../models/category';
import { Image } from '../models/image';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: Category[];
  search: string;

  cities: any[];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.categories = new Array<Category>();
    this.api.getFavoriteCategories().subscribe(
      data => {
        let res: any = data;
        res.data.forEach(item => {
          const image = new Image(item.image.id, item.image.title, item.image.url);
          this.categories.push(new Category(item.id, item.name, image));
        });
        // console.log(this.categories);
      },
      error => {
        console.log(error);
      }
    );
  }


  onSubmit() {
    alert(this.search);
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
