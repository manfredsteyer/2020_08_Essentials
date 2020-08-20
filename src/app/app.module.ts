import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { APP_ROUTES } from './app.routes';

import { LoggerLibModule } from 'logger-lib';

const DEBUG = true;

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      LoggerLibModule,
      // FlightBookingModule, // Would prevent lazy loading!
      RouterModule.forRoot(
         APP_ROUTES,
         {
           preloadingStrategy: PreloadAllModules
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
