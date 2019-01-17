import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    return this.http.get(this.domain + 'api/categories/favourite');
  }

  getCategories() {
    return this.http.get(this.domain+ 'api/categories');
  }

  searchCity(query: string) {
    return this.http.get(this.domain + 'api/city?zipCode='+ query);
  }

  getCityData(cityId: string) {
    return this.http.get(this.domain+ 'api/get/city/'+ cityId);
  }

  getRestaurantsByCity(cityId: string, categories: string = null) {
    let params: any = cityId;
    if (categories !== null && categories !== "") {
      params += '?categories='+ categories
    }
    return this.http.get(this.domain+ 'api/restaurant/'+ params);
  }

}
