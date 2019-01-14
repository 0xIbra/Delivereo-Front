import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Sidenav } from 'materialize-css';
import { Image } from '../models/image';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly storageKey:string = 'id_token';
  readonly refreshKey:string = 'refresh-token';
  readonly rememberKey: string = 'rememberme';
  readonly userKey: string = 'user';
  
  domain: string = 'http://localhost/';
  loginEndpoint:string = this.domain + 'api/login_check';
  registerEndpoint:string = this.domain + 'api/register';
  accountEndpoint:string = this.domain + 'api/auth/me';

  private helper: JwtHelperService = new JwtHelperService();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    })
  };

  user: User = new User();

  constructor(private http: HttpClient, private router: Router) { }

  register(payload: User) {

  }

  authenticate(payload: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.loginEndpoint, JSON.stringify(payload), {headers: headers});
  }

  getUser() {
    return this.http.get(this.accountEndpoint, this.httpOptions);
  }

  setData(data, rememberme) {
    this.setToken(data.token);
    if (rememberme)
    {
      this.setRefreshToken(data.refresh_token);
      localStorage.setItem(this.rememberKey, '1');
    }
  }

  isLoggedIn() {
    const token = this.getToken();
    if (token === null) {
      return false;
    }
    
    if (!this.helper.isTokenExpired(token)) {
      return true;
    }else {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem(this.storageKey);
  }

  setToken(token: string) {
    localStorage.setItem(this.storageKey, token);
  }

  getRefreshToken() {
    return localStorage.getItem(this.refreshKey);
  }

  setRefreshToken(token: string) {
    localStorage.setItem(this.refreshKey, token);
  }

  setRememberMe(value: string) {
    localStorage.setItem(this.rememberKey, value);
  }

  getRememberMe() {
    return localStorage.getItem(this.rememberKey);
  }

}
