import { Injectable, AfterContentInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService implements AfterContentInit {
  private loader: any;
  private loaderTitle: any;

  isLoading: boolean = true;

  constructor() {}

  ngAfterContentInit() {
    this.loader = document.getElementById('loader-wrapper');
    this.loaderTitle = document.getElementById('loader-title');
  }

  showLoader(title: string = null) {
    this.isLoading = true;
    document.getElementById('loader-wrapper').classList.add('active');
    if (title !== null) {
      document.getElementById('loader-title').innerHTML = title;
    }
  }

  hideLoader() {
    if (this.isLoading) {
      setTimeout(() => {
        this.hide();
      }, 1000);
    } else {
      this.hide();
    }
    
  }

  private hide() {
    document.getElementById('loader-wrapper').classList.remove('active');
    document.getElementById('loader-title').innerHTML = "Chargement...";
    this.isLoading = false;
  }

}
