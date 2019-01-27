import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weather: any;
  private api: string = environment.baseUrl;

  public readonly icons = {
    '01d': 'wi-day-sunny',
    '02d': 'wi-day-cloudy',
    '03d': 'wi-cloud',
    '04d': 'wi-cloudy',
    '09d': 'wi-showers',
    '10d': 'wi-rain',
    '11d': 'wi-thunderstorm',
    '13d': 'wi-snow',
    '50d': 'wi-fog',
    '01n': 'wu-day-sunny',
    '02n': 'wi-day-cloudy',
    '03n': 'wi-cloud',
    '04n': 'wi-cloudy',
    '09n': 'wi-showers',
    '10n': 'wi-rain',
    '11n': 'wi-thunderstorm',
    '13n': 'wi-snow',
    '50n': 'wi-fog'
  };

  public readonly days = {
    'Mon': 'Lun',
    'Tue': 'Mar',
    'Wed': 'Mer',
    'Thu': 'Jeu',
    'Fri': 'Ven',
    'Sat': 'Sam',
    'Sun': 'Dim'
  };

  public readonly months = {
    '01': 'Janv',
    '02': 'Févr',
    '03': 'Mars',
    '04': 'Avr',
    '05': 'Mai',
    '06': 'Juin',
    '07': 'Juill',
    '08': 'Août',
    '09': 'Sept',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Déc'
  };

  constructor(private http: HttpClient) {}

  getWeather(restaurant: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams()
    .set('zip', restaurant.city.zip_code);
    return this.http.get(this.api + 'api/weather', { headers: headers, params: params });
  }

}
