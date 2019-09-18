import {Component} from '@angular/core';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent {

  addNewTrip() {
    console.log('Add New Trip')
  }

  onCancelClick() {
    console.log('Click on cancel')
  }
}
