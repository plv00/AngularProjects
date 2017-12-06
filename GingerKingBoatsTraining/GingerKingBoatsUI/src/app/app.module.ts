import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { DisplayAllBookingsComponent } from './display-all-bookings/display-all-bookings.component';
import { DisplaySelectedBoatComponent } from './display-selected-boat/display-selected-boat.component';
import { ListOfBoatsComponent } from './list-of-boats/list-of-boats.component';
import { SearchAndBookComponent } from './search-and-book/search-and-book.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmBookingComponent,
    DisplayAllBookingsComponent,
    DisplaySelectedBoatComponent,
    ListOfBoatsComponent,
    SearchAndBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
