import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  listOfElements: any;
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();

    return day !== 0 && day !== 6;
  }

  constructor(private http: HttpClient, private flights: FlightsService) {

  }
  getFlights() {
    this.flights.getData().subscribe(response => {

      this.listOfElements = response;
      console.log(this.listOfElements)
    })


  }

  ngOnInit(): void {
    this.getFlights();
  }

}
