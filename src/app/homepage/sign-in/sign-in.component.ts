import {Component} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {MatDialogRef} from "@angular/material/dialog";

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
    this.authenticationService.signIn(email, password)
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
