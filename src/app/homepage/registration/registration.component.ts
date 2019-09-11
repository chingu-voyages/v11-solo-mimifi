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
    public authenticationService: AuthService) {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
