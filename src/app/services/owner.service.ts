import { Injectable,  } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private baseUrl = environment.baseUrl;

  public restaurant: any;

  constructor(private http: HttpClient, private auth: AuthService) { }

  createOrUpdateMenu(menu: any) {
    return this.http.post(`${this.baseUrl}api/auth/owner/restaurant/menu`, JSON.stringify(menu), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  loadRestaurant() {
    if (this.auth.isOwner()) {
      this.restaurant = this.auth.user.$restaurant;
    }
  }

  reloadRestaurant() {
    return this.http.get(`${this.baseUrl}api/auth/owner/restaurant`).subscribe(
      (res: any) => {
        this.restaurant = res.data;
        console.log(res.data);
      },
      err => {
        console.log(err);
      }
    );
  }

  addCategories(categories: any[]) {
    return this.http.post(`${this.baseUrl}api/auth/owner/restaurant/categories`, JSON.stringify(categories), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  removeCategory(id: string) {
    return this.http.delete(`${this.baseUrl}api/auth/owner/restaurant/categories`, {params: new HttpParams().set('categoryId', id)});
  }

  searchOrder(query: string) {
    return this.http.get(`${this.baseUrl}api/auth/owner/orders/search`, { params: new HttpParams().set('query', query) });
  }

  getOrders() {
    return this.http.get(`${this.baseUrl}api/auth/owner/orders`);
  }

  hasCategory(testCategory: any) {
    let test: boolean = false;
    this.restaurant.categories.forEach(category => {
      if (category.id === testCategory.id) {
        test = true;
      }
    });
    return test;
  }

}
