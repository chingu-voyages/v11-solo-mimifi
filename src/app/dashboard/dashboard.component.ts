import {Component, OnDestroy, OnInit} from '@angular/core';
import {PageName} from "../navbar/navbar.component";
import {MatDialog} from "@angular/material/dialog";
import {NewTripComponent} from "./new-trip/new-trip.component";
import {TripService} from "../repository/trip.service";
import {Observable, Subject} from 'rxjs';
import {takeUntil} from "rxjs/operators";
import {TripModel} from "../repository/models/trip.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {

  public dashboardPage: PageName = PageName.DASHBOARD;
  private _destroy = new Subject<boolean>();
  private trips: Observable<TripModel[]>;

  constructor(private dialog: MatDialog,
              private tripService: TripService) {
  }

  ngOnInit() {
    this.trips = this.tripService.getTrip().pipe(takeUntil(this._destroy));
  }

  public openNewTripDialog() {
    const dialogTrip = this.dialog.open(NewTripComponent, {
      width: '600px'
    });

    dialogTrip.afterClosed().subscribe((result: TripModel) => {
      if (result !== undefined) {
        this.tripService.addTrip(result);
      }
    })
  }

  ngOnDestroy(): void {
    this._destroy.next(true);
  }
}
