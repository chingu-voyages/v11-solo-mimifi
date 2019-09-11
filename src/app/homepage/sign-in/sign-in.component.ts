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
    public dialogRef: MatDialogRef<SignInComponent>,
    public authenticationService: AuthService) {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
