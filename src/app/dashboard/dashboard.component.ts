import {Component} from '@angular/core';
import {PageName} from "../navbar/navbar.component";
import {MatDialog} from "@angular/material/dialog";
import {NewTripComponent} from "./new-trip/new-trip.component";

export interface Trip {
  id: number,
  tripName: string,
  tripDestination: string,
  startDate: string,
  endDate: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  public dashboardPage: PageName = PageName.DASHBOARD;
  trips: Trip[] = [{
    id: 0,
    tripName: 'World Travel',
    tripDestination: 'Sri Lanka',
    startDate: '15.06.18',
    endDate: '28.11.2019'
  },
    {id: 1, tripName: 'Summer Vacation', tripDestination: 'Italy', startDate: '01.06.2020', endDate: '15.06.2020'},
    {id: 2, tripName: 'winter Vacation', tripDestination: 'Austria', startDate: '01.12.2020', endDate: '15.12.2020'},
    {id: 3, tripName: 'Spring Vacation', tripDestination: 'Iran', startDate: '01.03.2020', endDate: '15.03.2020'}
  ];

  constructor(public dialog: MatDialog) {
  }

  openNewTripDialog() {
    this.dialog.open(NewTripComponent, {
      width: '600px'
    })
  }
}
