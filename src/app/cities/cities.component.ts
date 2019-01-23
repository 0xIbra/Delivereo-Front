import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  zip: string;
  cities: any[];

  constructor(private route: ActivatedRoute, private api: ApiService, private loader: LoaderService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.zip = params['zip'];
      }
    );

    this.getCities();
  }

  getCities() {
    this.loader.showLoader();
    this.api.searchCity(this.zip)
            .subscribe(
              data => {
                let res: any = data;
                this.cities = res.data.data;
              },
              err => {
                console.log(err);
              },

              () => {
                this.loader.hideLoader();
              }
            );
  }


  onSubmit() {
    this.getCities();
  }

}
