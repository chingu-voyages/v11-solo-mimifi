import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class TripService {
  trips: Observable<any[]>;

  constructor(private afStore: AngularFirestore) {
    this.trips = this.afStore.collection('trips').valueChanges();
  }

  getTrips() {
    return this.trips;
  }
}
