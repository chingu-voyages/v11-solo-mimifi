import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Trip} from "../dashboard.component";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent {
  newTripForm = new FormGroup({
    title: new FormControl(''),
    destination: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    image: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<NewTripComponent>) {
  }

  addNewTrip() {
    this.dialogRef.close({
      title: this.newTripForm.get('title').value,
      destination: this.newTripForm.get('destination').value,
      startDate: this.newTripForm.get('startDate').value,
      endDate: this.newTripForm.get('endDate').value,
    } as Trip);
  }

  public onCancelClick() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.newTripForm.reset();
  }
}
