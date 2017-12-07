import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfBoatsComponent } from './list-of-boats/list-of-boats.component';
import { SearchAndBookComponent } from './search-and-book/search-and-book.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { DisplayAllBookingsComponent } from './display-all-bookings/display-all-bookings.component';
import { DisplaySelectedBoatComponent } from './display-selected-boat/display-selected-boat.component';

const routes: Routes = [
  {path : '', redirectTo: 'list-of-boats', pathMatch: 'full'},
  {path : 'list-of-boats', component : ListOfBoatsComponent},
  {path : 'search-and-book', component: SearchAndBookComponent},
  {path : 'search-and-book/:boatType', component : SearchAndBookComponent},
  {path : 'confirm-booking', component : ConfirmBookingComponent},
  {path : 'confirm-booking/:boatType/:location', component : ConfirmBookingComponent},
  {path : 'display-all-bookings', component: DisplayAllBookingsComponent},
  {path : 'display-selected-boat/:txnId', component: DisplaySelectedBoatComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
