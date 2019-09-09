import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {LoginComponent} from "./homepage/login/login.component";


const routes: Routes = [
  {
    path: '', redirectTo: '/homepage', pathMatch: 'full'
  },
  {
    path: 'homepage', component: HomepageComponent
  }, {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

// use export routingComponents to prevent import every module in app.module.ts
export const routingComponents = [HomepageComponent, LoginComponent];
