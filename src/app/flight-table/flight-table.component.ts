import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightsService } from '../flights.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort/public-api';


@Component({
  selector: 'app-flight-table',
  templateUrl: './flight-table.component.html',
  styleUrls: ['./flight-table.component.css',]
})


export class FlightTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', "icon"];




  listOfElements: any;


  constructor(private http: HttpClient, private flights: FlightsService,) {

  }
  getFlights() {
    this.flights.getData().subscribe(response => {

      this.listOfElements = response;
      console.log(this.listOfElements)
    })


  }
  ngOnInit() {
    this.getFlights();

  }
}

