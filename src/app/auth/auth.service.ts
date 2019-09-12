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
      .then((result) => {
        this.sendVerificationEmail();
        window.alert('You have been successfully registered!');
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  sendVerificationEmail() {
    this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['/homepage'])
      })
  }

  signIn(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['/homepage']);
        console.log('User is signed in successfully.')
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}
