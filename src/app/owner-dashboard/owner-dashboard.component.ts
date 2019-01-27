import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoaderService } from '../services/loader.service';

import { Chart } from 'chart.js';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.scss']
})
export class OwnerDashboardComponent implements OnInit, AfterViewInit {

  data: any;
  chartData: any;
  weatherSaver: any;
  weatherData: any;
  today: Date;

  @ViewChild('salesChart') salesChart: ElementRef;
  context: CanvasRenderingContext2D;
  private chart: any;

  constructor(public auth: AuthService, private loader: LoaderService, private weather: WeatherService) { }

  ngOnInit() {
    this.today = new Date();
    this.getData();
    this.getWeather();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getChartData();
    }, 1000);
  }


  getWeather() {
    this.weather.getWeather(this.auth.user.$restaurant).subscribe(
      (res: any) => {
        this.weatherData = res.data.weather[0];
        this.weatherSaver = res.data;
      },
      err => {
        console.log(err);
      }
    );
  }


  initChart(data: any) {
    this.context = (<HTMLCanvasElement>this.salesChart.nativeElement).getContext('2d');

    this.chart = new Chart(this.context, {
      type: 'line',
      data: {
        labels: data.dates,
        datasets: [
          {
            label: 'Clients',
            data: data.clients,
            backgroundColor: [
              'rgba(251, 150, 120, 0.7)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(251, 150, 120,0.7)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          },

          {
            label: 'Commandes',
            data: data.orders,
            backgroundColor: [
              'rgba(171, 140, 228, 0.7)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(171, 140, 228,0.7)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          },

          {
            label: 'Revenus',
            data: data.revenue,
            backgroundColor: [
              'rgba(0, 194, 146, 0.7)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(0, 194, 146,0.7)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  getData() {
    this.loader.showLoader();
    this.auth.getOwnerData().subscribe(
      (res: any) => {
        this.data = res.data;
      },
      err => {
        console.log(err);
        this.loader.hideLoader();
      },

      () => {
        this.loader.hideLoader();
      }
    );
  }

  getChartData() {
    this.loader.showLoader();
    this.auth.getOwnerChartData().subscribe(
      (res: any) => {
        this.chartData = res.data;
        this.initChart(res.data);
      },
      err => {
        console.log(err);
        this.loader.hideLoader();
      },

      () => {
        this.loader.hideLoader();
      }
    );
  }

}
