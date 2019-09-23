import {Injectable} from "@angular/core";
import {User} from "firebase";
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import {UserModel} from "./models/user.model";

@Injectable({
  providedIn: "root"
})

export class AuthService {
  userData: User;

  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private router: Router) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('userData', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('userData'))
      } else {
        localStorage.setItem('userData', null);
        JSON.parse(localStorage.getItem('userData'))
      }
    })
  }

  public signUp(email, password, displayName) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.sendVerificationEmail();
        this.setUserData(result.user, displayName);
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
        this.router.navigate(['/dashboard']);
      }).catch((error) => {
      window.alert(error.message)
    })
  }

  public setUserData(user, displayName) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
    const userData: UserModel = {
      userId: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName,
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

}
