import {TripModel} from "./trip.model";

export interface UserModel {
  userId: string;
  email: string;
  emailVerified: boolean;
  displayName: string;
  photoURL: string;
  trips: TripModel[];
}
