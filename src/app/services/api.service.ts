import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  domain: string = 'http://localhost/';
  
  categories: Category[];


  constructor(private http: HttpClient) {}

  getFavoriteCategories() {
    this.categories = new Array<Category>();
        return this.http.get(this.domain + 'api/categories')
            .subscribe(
              data => {
                data.data.forEach(item => {
                  const image = new Image(item.image.id, item.image.title, item.image.url);
                  this.categories.push(new Category(item.id, item.name, image));
                });
              },
              error => {
                console.log(error);
              }
            );
  }



}
