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
    const dialogRegistration = this.dialog.open(RegistrationComponent, {
      width: '600px'
    });
    dialogRegistration.afterClosed().subscribe(result => {
      console.log(result.toString())
    })
  }

  openSignIn() {
    const dialogSignIn = this.dialog.open(SignInComponent, {
      width: '600px'
    });
    dialogSignIn.afterClosed().subscribe(result => {
      console.log('Sign In dialog is closed.')
    })
  }
}
