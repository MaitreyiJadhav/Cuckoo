import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { PricingComponent } from './pricing/pricing.component';
import { FreeTrialComponent } from './free-trial/free-trial.component';
import { ManagerheaderComponent } from './managerheader/managerheader.component';
import { RequestsComponent } from './requests/requests.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FeatureComponent,
    PricingComponent,
    FreeTrialComponent,
    ManagerheaderComponent,
    RequestsComponent,
    ScheduleComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
