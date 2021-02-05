import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  apiURl: string = "https://flight-data4.p.rapidapi.com/get_airline_flights?airline=LOT";
  constructor(private http: HttpClient) { }
  public getData(): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': "8f13d8ed42mshf7b2dd109f59e4ap1d69ccjsn1a25ac96166b",
      "x-rapidapi-host": "flight-data4.p.rapidapi.com"
    });

    return this.http.get(this.apiURl, { headers: headers })

  }
}
