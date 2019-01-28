import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  private sidebar: any;

  constructor(public auth: AuthService) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    let sidebar = document.querySelector('.sidenav.sidebar');
    this.sidebar = sidebar;
    M.Sidenav.init(sidebar, { edge: 'left' });
  }

}
