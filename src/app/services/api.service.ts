import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Category } from '../models/category';
import { Image } from '../models/image';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = environment.baseUrl;
  
  categories: Category[];


  constructor(private http: HttpClient) {}

  /**
   * This function gets 4 food categories from back-end server by an HTTP GET request.
   */
  getFavoriteCategories() {
    this.categories = new Array<Category>();
    return this.http.get(this.baseUrl + 'api/categories/favourite');
  }

  /**
   * This function gets all food categories from the back-end.
   */
  getCategories() {
    return this.http.get(this.baseUrl+ 'api/categories');
  }

  /**
   * This function sends an HTTP GET request to back-end server to search a city by it's zip code.
   * 
   * @param query 
   */
  searchCity(query: string) {
    return this.http.get(this.baseUrl + 'api/city?zipCode='+ query);
  }

  /**
   * This function gets data of a given city from the back-end by it's ID.
   * 
   * @param cityId 
   */
  getCityData(cityId: string) {
    return this.http.get(this.baseUrl+ 'api/get/city/'+ cityId);
  }

  /**
   * This function gets all restaurants from a given city.
   * 
   * @param cityId 
   * @param categories 
   */
  getRestaurantsByCity(cityId: string, categories: string = null) {
    let params: any = cityId;
    if (categories !== null && categories !== "") {
      params += '?categories='+ categories
    }
    return this.http.get(this.baseUrl+ 'api/restaurant/'+ params);
  }

  /**
   * This function gets all the data about a given restaurant from the back-end.
   * 
   * @param restaurantId 
   */
  getRestaurantData(restaurantId: string) {
    return this.http.get(this.baseUrl+ 'api/restaurant/data/'+ restaurantId);
  }

}
