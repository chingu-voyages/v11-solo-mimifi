import {Injectable} from "@angular/core";
import {User} from "firebase";
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: "root"
})

export class AuthService {
  userData: User;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router) {

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

  signUp(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/dashboard']);
        this.sendVerificationEmail();
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  sendVerificationEmail() {
    this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['/dashboard'])
      })
  }

  signIn(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/dashboard']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}
