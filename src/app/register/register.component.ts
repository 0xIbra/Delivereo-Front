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
  }

  onSubmit(){
    if (this.plainPasswordFirst === this.plainPasswordSecond){
      // this.user.$firstName = 'Ibrahim';
      // this.user.$lastName = 'Abubakarov';
      // console.log(this.user);
      // M.toast({ html: 'Valide !' });
    }
  }

}
