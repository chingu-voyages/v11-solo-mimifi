import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RegistrationComponent} from "./registration/registration.component";
import {SignInComponent} from "./sign-in/sign-in.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(public dialog: MatDialog) {
  }

  openRegistration(): void {
    this.dialog.open(RegistrationComponent, {
      width: '600px'
    });
  }

  openSignIn() {
    this.dialog.open(SignInComponent, {
      width: '600px'
    });
  }
}
