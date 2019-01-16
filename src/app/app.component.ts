import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Delivereo';


  constructor(private auth: AuthService) {}

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      if (this.auth.user === null) {
        this.auth.loadUser();
      }
    }
  }

}
