import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AppMaterialModule} from "./app-material/app-material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/firestore";
import {MatListModule} from "@angular/material/list";
import {NavbarComponent} from "./navbar/navbar.component";
import {SignInComponent} from "./homepage/sign-in/sign-in.component";
import {RegistrationComponent} from "./homepage/registration/registration.component";
import {NewTripComponent} from "./dashboard/new-trip/new-trip.component";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FooterComponent,
    NavbarComponent,
    SignInComponent,
    RegistrationComponent,
    NewTripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppMaterialModule,
    FormsModule,
    MatListModule,
    ReactiveFormsModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
  entryComponents: [SignInComponent, RegistrationComponent, NewTripComponent]
})
export class AppModule {
}
