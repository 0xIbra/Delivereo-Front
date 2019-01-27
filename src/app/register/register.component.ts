import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { Gender } from '../models/gender';
import { LoaderService } from '../services/loader.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User;

  plainPasswordFirst: string;
  plainPasswordSecond: string;

  genders: Gender[] = [new Gender({ id: 1, name: 'Homme' }), new Gender({ id: 2, name: 'Femme' })];
  

  constructor(private auth: AuthService, private loader: LoaderService) { }

  ngOnInit() {
    this.user = new User({});
  }

  onSubmit(){
    if (this.plainPasswordFirst === this.plainPasswordSecond){
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
        }
      );

    } else {
      M.toast({ html: 'Les 2 mots de passe ne sont pas identiques.' });
    }
  }

}
