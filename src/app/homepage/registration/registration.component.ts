import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../auth/auth.service";

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

  onRegistrationClick(email: string, password: string) {
    this.authenticationService.signUp(email, password);
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }
}
