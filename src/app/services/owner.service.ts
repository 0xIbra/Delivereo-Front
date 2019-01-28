import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  searchOrder(query: string) {
    return this.http.get(`${this.baseUrl}api/auth/owner/orders/search`, { params: new HttpParams().set('query', query) });
  }

  getOrders() {
    return this.http.get(`${this.baseUrl}api/auth/owner/orders`);
  }

}
