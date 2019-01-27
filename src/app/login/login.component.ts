import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  errors: Array<any> = [];



  constructor(private auth: AuthService, private router: Router, private loader: LoaderService) {}

  ngOnInit() {
    
  }

  onSubmit() {
    this.loader.showLoader('Connexion');
    const payload = { 
      username: this.username, 
      password: this.password, 
      rememberme: this.rememberMe 
    };

    this.auth.authenticate(payload)
              .subscribe(
                data => {
                  this.auth.setData(data, payload.rememberme);
                  if (this.auth.isLoggedIn()) {
                    this.auth.loadUser();
                    this.router.navigate(['/']);
                  }
                }, 
                err => {
                  this.loader.hideLoader();
                  M.toast({ html: err.error.message });
                },

                () => {
                  this.loader.hideLoader();
                }
              );
  }

}
