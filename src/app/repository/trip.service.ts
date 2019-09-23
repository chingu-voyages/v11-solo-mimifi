import {Injectable} from "@angular/core";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {TripEntity} from "./entity/trip";
import {TripModel} from "./models/trip.model";
import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

@Injectable({providedIn: "root"})
export class TripService {
  private tripsCollection: AngularFirestoreCollection<TripEntity>;
  trips: Observable<TripEntity[]>;

  constructor(private afStore: AngularFirestore) {
    this.tripsCollection = afStore.collection<TripEntity>('trips', ref => ref.orderBy('title'));
    this.trips = this.tripsCollection.snapshotChanges().pipe(
      map(actions => actions.map(action => {
        const trip = action.payload.doc.data() as TripEntity;
        const tripId = action.payload.doc.id;
        return {id: tripId, ...trip};
      })));
  }

  public getTrip(): Observable<TripModel[]> {
    return this.trips.pipe(map((tripEntities) => tripEntities.map((tripEntity) => {
      let startDate = TripService.convertTimestampToDate(tripEntity.startDate);
      let endDate = TripService.convertTimestampToDate(tripEntity.endDate);
      return {...tripEntity, startDate, endDate} as TripModel;
    })))
  }

  private static convertTimestampToDate(timestamp: Timestamp) {
    let timestampSeconds = null;
    if (timestamp) {
      timestampSeconds = timestamp.toDate();
      return new Date(timestampSeconds);
    }
  }

  public addTrip(trip: TripModel) {
    let startDate = null;
    let endDate = null;
    if (trip.startDate) {
      startDate = firebase.firestore.Timestamp.fromDate(trip.startDate)
    } if (trip.endDate) {
      endDate = firebase.firestore.Timestamp.fromDate(trip.endDate);
    }
    const newTrip = {...trip, startDate, endDate} as TripEntity;
    this.tripsCollection.add(newTrip);
  }
}
