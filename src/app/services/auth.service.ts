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

  /**
   * This variable comes from the '@0auth/angular-jwt' Module. 
   * It is used to check if the JWT token is expired.
   */
  private helper: JwtHelperService = new JwtHelperService();

  /**
   * This variable is used as a global variable to provide other components access.
   */
  user: User = null;

  
  constructor(private http: HttpClient, private router: Router) { }

  register(payload: User) {

  }

  /**
   * This function is used to login.
   * It receives as a parameter an array of data [username: string, password: string, rememberme: boolean] 
   * which it sends to the back-end as an HTTP Post request for authentication.
   * If the username and password were incorrect, the back-end responds with an HTTP Response of 401 Unauthorized with a message.
   * If the username and password were correct, the back-end responds with an HTTP Response of 200 OK with the JWT token and an Refresh token.
   * After receiving the HTTP Response this function returns the result as an Observale to the LoginComponent to process.
   * 
   * @param payload 
   * @returns Observable
   */
  authenticate(payload: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.loginEndpoint, JSON.stringify(payload), {headers: headers});
  }


  /**
   * This function is used to logout. 
   * It deletes everything from local storage and redirects the user to the home page.
   */
  logout() {
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.refreshKey);
    localStorage.removeItem(this.rememberKey);
    localStorage.removeItem(this.userKey);
    this.router.navigate(['/']);
  }

  /**
   * This function first checks if the User exists in local storage, if it does, it sets it to the global user variable, if it does not, 
   * it it sends an HTTP GET request to the back-end with JWT token to get the User which after completing it sets it to the global user variable.
   */
  loadUser() {
    let user = JSON.parse(localStorage.getItem(this.userKey));

    if (user !== null) {
      this.user = new User(user);
    } else {
      this.http.get(this.accountEndpoint, { headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ this.getToken()}) })
                    .subscribe(
                      data => {
                        let res: any = data;
                        this.user = new User(res.user);
                        this.storeUser(this.user);
                      },
                      err => {
                        console.log(err);
                      }
                    );
    }
  }

  /**
   * This function receives 2 params, which are an array which contains the JWT token and a refresh token, and a boolean
   * which determines if the refresh token should be saved for re use.
   * 
   * @param data 
   * @param rememberme 
   */
  setData(data, rememberme) {
    this.storeToken(data.token);
    if (rememberme)
    {
      this.storeRefreshToken(data.refresh_token);
      this.storeRememberMe('1');
    }
  }

  /**
   * This function receives an object of type 'User' and stores it in local storage for re use.
   * 
   * @param user
   */
  storeUser(user: User) {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  /**
   * This function checks first if the JWT token is available and if so it checks if it is expired or not.
   * 
   * @returns boolean(True || False)
   */
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

  isAdmin() {
    console.log(this.user.$roles.includes('ROLE_OWNER'));
  }

  /**
   * This function gets the token from local storage and returns it as a string.
   * 
   * @returns string
   */
  getToken() {
    return localStorage.getItem(this.storageKey);
  }

  /**
   * This function receives the JWT token as a parameter and stores it in local storage.
   * 
   * @param token 
   */
  storeToken(token: string) {
    localStorage.setItem(this.storageKey, token);
  }

  /**
   * This function gets the refresh token from local storage and returns it as a string.
   * 
   * @returns string
   */
  getRefreshToken() {
    return localStorage.getItem(this.refreshKey);
  }

  /**
   * This function receives the refresh token as a parameter and stores it in local storage.
   * 
   * @param token
   */
  storeRefreshToken(token: string) {
    localStorage.setItem(this.refreshKey, token);
  }

  /**
   * This function receives the remember me varialble as a boolean and stores it in local storage.
   * 
   * @param value 
   */
  storeRememberMe(value: string) {
    localStorage.setItem(this.rememberKey, value);
  }

  /**
   * This function gets the remember me variable from local storage and returns it as a boolean
   * 
   * @returns boolean
   */
  getRememberMe() {
    let remember = localStorage.getItem(this.rememberKey);
    if (remember === null || remember === undefined || remember === '0') {
      return false;
    } else if (remember === '1') {
      return true;
    }
  }

}
