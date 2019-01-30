import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-complete',
  templateUrl: './application-complete.component.html',
  styleUrls: ['./application-complete.component.scss']
})
export class ApplicationCompleteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(
      () => {
        this.router.navigate(['/profile']);
      }, 7000
    );
  }

}
