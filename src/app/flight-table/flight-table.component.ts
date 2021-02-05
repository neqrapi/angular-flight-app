import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightsService } from '../flights.service';
@Component({
  selector: 'app-flight-table',
  templateUrl: './flight-table.component.html',
  styleUrls: ['./flight-table.component.css',]
})

export class FlightTableComponent implements OnInit {


  listOfElements: any;


  constructor(private http: HttpClient, private flights: FlightsService) {

  }
  getFlights() {
    this.flights.getData().subscribe(response => this.listOfElements = response)
  }
  ngOnInit() {
    this.getFlights();
  }
}

