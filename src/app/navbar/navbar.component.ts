import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RegistrationComponent} from "../homepage/registration/registration.component";

export enum PageName {
  DASHBOARD = 'New Trip',
  TASKLIST = 'New Category'
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() public pageName: PageName;

  constructor(public dialog: MatDialog) {
  }

  openAddTrip() {
    this.dialog.open(RegistrationComponent, {
      width: '600px'
    })
  }

  openProfile() {

  }

  signOut() {

  }
}
