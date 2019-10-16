import {firestore} from "firebase";
import Timestamp = firestore.Timestamp;

export interface TripEntity {
  id: string;
  title: string;
  destination: string;
  startDate: Timestamp;
  endDate: Timestamp;
  userId: string;
}
