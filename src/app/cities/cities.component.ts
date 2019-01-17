import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  zip: string;
  cities: any[];

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.zip = params['zip'];
      }
    );

    this.getCities();
  }

  getCities() {
    this.api.searchCity(this.zip)
            .subscribe(
              data => {
                let res: any = data;
                this.cities = res.data.data;
              },
              err => {
                console.log(err);
              }
            );
  }


  onSubmit() {
    this.getCities();
  }

}
