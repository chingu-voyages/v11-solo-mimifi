import {Injectable} from "@angular/core";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {TripEntity} from "./entity/trip";
import {TripModel} from "./models/trip.model";

@Injectable({providedIn: "root"})
export class TripService {
  private tripsCollection: AngularFirestoreCollection<TripEntity>;
  trips: Observable<TripEntity[]>;

  constructor(private afStore: AngularFirestore) {
    this.tripsCollection = afStore.collection<TripEntity>('trips');
    this.trips = this.tripsCollection.snapshotChanges().pipe(
      map(actions => actions.map(action => {
        const trip = action.payload.doc.data() as TripEntity;
        const tripId = action.payload.doc.id;
        return {id: tripId, ...trip};
      })));
  }

  getTrip(): Observable<TripModel[]> {
    return this.trips.pipe(map((tripEntities) => tripEntities.map((tripEntity) => {
      return {title: tripEntity.title, destination: tripEntity.destination} as TripModel;
    })))
  }

  addTrip(trip: TripModel) {
    const newTrip = {title: trip.title, destination: trip.destination} as TripEntity;
    this.tripsCollection.add(newTrip)
  }
}
