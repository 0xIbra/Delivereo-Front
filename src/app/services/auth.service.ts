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

  user: User = null;

  constructor(private http: HttpClient, private router: Router) { }

  register(payload: User) {

  }

  authenticate(payload: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.loginEndpoint, JSON.stringify(payload), {headers: headers});
  }


  logout() {
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.refreshKey);
    localStorage.removeItem(this.rememberKey);
    localStorage.removeItem(this.userKey);
    this.router.navigate(['/']);
  }

  loadUser() {
    this.http.get(this.accountEndpoint, { headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ this.getToken()}) })
                    .subscribe(
                      data => {
                        let res: any = data;
                        this.user = new User(res.user);
                        this.setUser(this.user);
                      },
                      err => {
                        console.log(err);
                      }
                    );
  }

  setData(data, rememberme) {
    this.setToken(data.token);
    if (rememberme)
    {
      this.setRefreshToken(data.refresh_token);
      localStorage.setItem(this.rememberKey, '1');
    }
  }

  setUser(user: User) {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  getUser() {
    if (localStorage.getItem(this.userKey) === null) {
      return null;
    }
    
    if (this.user === undefined) {
      this.user = new User(JSON.parse(localStorage.getItem(this.userKey)));
      console.log(this.user);
    }

    return JSON.parse(localStorage.getItem(this.userKey));
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
