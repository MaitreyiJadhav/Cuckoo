import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { PricingComponent } from './pricing/pricing.component';
import { FreeTrialComponent } from './free-trial/free-trial.component';

import { RequestsComponent } from './requests/requests.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
{ path: 'login', component: LoginComponent},
{ path: 'contact', component: ContactComponent},
{ path: 'footer', component: FooterComponent},
{ path: '', component: HomeComponent},
{ path: 'feature', component: FeatureComponent},
{ path: 'pricing', component: PricingComponent},
{path:'free-trail',component: FreeTrialComponent},
{path:'requests',component: RequestsComponent},
{path:'schedule', component: ScheduleComponent},
{path:'dashboard', component: DashboardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
