import {Component} from '@angular/core';
import {PageName} from "../navbar/navbar.component";
import {MatDialog} from "@angular/material/dialog";
import {NewTripComponent} from "./new-trip/new-trip.component";

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

export class DashboardComponent {

  public dashboardPage: PageName = PageName.DASHBOARD;
  trips: Trip[] = [];

  constructor(private dialog: MatDialog) {
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
