import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {FooterComponent} from "./footer/footer.component";
import {RegistrationComponent} from "./homepage/registration/registration.component";
import {SignInComponent} from "./homepage/sign-in/sign-in.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [
  {
    path: '', redirectTo: '/homepage', pathMatch: 'full'
  }, {
    path: 'homepage', component: HomepageComponent
  }, {
    path: 'registration', component: RegistrationComponent
  }, {
    path: 'signIn', component: SignInComponent
  }, {
    path: 'dashboard', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

// use export routingComponents to prevent import every module in app.module.ts
export const routingComponents = [HomepageComponent, FooterComponent, RegistrationComponent, SignInComponent, DashboardComponent
];
