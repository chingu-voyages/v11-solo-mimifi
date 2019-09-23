import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../repository/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(
    public dialogRef: MatDialogRef<RegistrationComponent>,
    private authenticationService: AuthService) {
  }

  public onRegistrationClick(email: string, password: string, displayName: string) {
    this.authenticationService.signUp(email, password, displayName);
    this.dialogRef.close();
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }
}
