import {Component, OnInit} from '@angular/core';
import {PageName} from "../navbar/navbar.component";
import {MatDialog} from "@angular/material/dialog";
import {NewTripComponent} from "./new-trip/new-trip.component";
import {TripService} from "../repository/trip.service";

export interface Trip {
  id: number,
  title: string,
  destination: string,
  startDate: Date,
  endDate: Date
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public dashboardPage: PageName = PageName.DASHBOARD;
  trips: Trip[] = [];

  constructor(private dialog: MatDialog,
              private tripService: TripService) {
  }

  ngOnInit() {
    this.tripService.getTrips().subscribe(trips => {
      this.trips = trips;
    })
  }

  public openNewTripDialog() {
    const dialogTrip = this.dialog.open(NewTripComponent, {
      width: '600px'
    });

    dialogTrip.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.trips.push(result);
      }
    })
  }


}
