import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../repository/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(
    private dialogRef: MatDialogRef<SignInComponent>,
    private authenticationService: AuthService) {
  }

  onSignInClick(email: string, password: string) {
    this.authenticationService.signIn(email, password);
    this.dialogRef.close();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
