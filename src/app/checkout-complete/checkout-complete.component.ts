import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-checkout-complete',
  templateUrl: './checkout-complete.component.html',
  styleUrls: ['./checkout-complete.component.scss']
})
export class CheckoutCompleteComponent implements OnInit {

  constructor(public loader: LoaderService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.auth.orderComplete = false;
    setTimeout(() => {
      this.router.navigate(['/profile']);
    }, 5000);
  }



}
