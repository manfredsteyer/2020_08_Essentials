import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

const DEBUG = true;

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      FlightBookingModule,
      RouterModule.forRoot(
         APP_ROUTES,
         {
            useHash: true,
            enableTracing: true
         })
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
