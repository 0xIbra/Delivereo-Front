import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: Category[];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.categories = new Array<Category>();
    this.api.getFavoriteCategories();
    this.categories = this.api.categories;
  }


  onSubmit() {
    
  }

}
