import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {FooterComponent} from "./footer/footer.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [
  {
    path: '', redirectTo: '/homepage', pathMatch: 'full'
  }, {
    path: 'homepage', component: HomepageComponent
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
export const routingComponents = [HomepageComponent, FooterComponent, DashboardComponent];
