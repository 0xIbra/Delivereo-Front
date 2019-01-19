import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { Gender } from '../models/gender';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User;

  plainPasswordFirst: string;
  plainPasswordSecond: string;

  genders: Gender[] = [new Gender(1, 'Homme'), new Gender(2, 'Femme')];
  

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user = new User({});
  }

  onSubmit(){
    if (this.plainPasswordFirst === this.plainPasswordSecond){
      this.user.$password = this.plainPasswordFirst;
      this.auth.register(this.user).subscribe(
        data => {
          let res: any = data;
          M.toast({ html: res.message, displayLength: 5000 });
        },
        err => {
          console.log(err);
          M.toast({ html: err.error.message });
        }
      );

    } else {
      M.toast({ html: 'Les 2 mots de passe ne sont pas identiques.' });
    }
  }

}
