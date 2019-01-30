import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { Gender } from '../models/gender';
import { LoaderService } from '../services/loader.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  user: User;

  plainPasswordFirst: string;
  plainPasswordSecond: string;

  genders: Gender[] = [new Gender({ id: 1, name: 'Homme' }), new Gender({ id: 2, name: 'Femme' })];
  

  constructor(private auth: AuthService, private loader: LoaderService, private router: Router) { }

  ngOnInit() {
    this.user = new User({});
  }

  ngAfterViewInit() {
    this.loader.showLoader('Initialisation');
    setTimeout(() => {
      this.loader.hideLoader();
      M.FormSelect.init(document.querySelectorAll('select'));
    }, 1000);
  }

  onSubmit(){
    if (this.plainPasswordFirst === this.plainPasswordSecond) {
      this.user.$password = this.plainPasswordFirst;
      this.loader.showLoader('Inscription...');
      this.auth.register(this.user).subscribe(
        data => {
          let res: any = data;
          M.toast({ html: res.message, displayLength: 5000 });
        },
        err => {
          console.log(err);
          M.toast({ html: err.error.message });
          this.loader.hideLoader();
        },

        () => {
          this.loader.hideLoader();
          this.router.navigate(['/login']);
        }
      );

    } else {
      M.toast({ html: 'Les 2 mots de passe ne sont pas identiques.' });
    }
  }

}
