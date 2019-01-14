import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    if (this.auth.user === null) {
      this.auth.loadUser();
      this.user = this.auth.user;
    }else {
      this.user = this.auth.user;
    }
    
  }

}
