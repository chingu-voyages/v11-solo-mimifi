import {Injectable} from "@angular/core";
import * as firebase from "firebase";
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import {UserModel} from "./models/user.model";

@Injectable({
  providedIn: "root"
})

export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private router: Router) {
  }

  public authState = this.afAuth.authState;

  public signUp(email, password, displayName) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({displayName: displayName})
          .then(() => {
            this.sendVerificationEmail();
            this.setUserData(result.user);
          })
      }).catch((error) => {
      window.alert(error.message)
    })
  }

  public sendVerificationEmail() {
    this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['/dashboard'])
      })
  }

  public signIn(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
          this.router.navigate(['/dashboard'])
      }).catch((error) => {
      window.alert(error.message)
    })
  }

  public setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
    const userData: UserModel = {
      userId: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    return userRef.set(userData, {
      merge: true
    })
  }

  public signOut() {
    this.afAuth.auth.signOut()
      .then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['/homepage'])
      })
  }

  public updateUserDate(tripId: string) {
    const userRef = this.afStore.collection('users').doc(this.afAuth.auth.currentUser.uid);

    userRef.update({
      trips: firebase.firestore.FieldValue.arrayUnion(tripId)
    });
  }
}
