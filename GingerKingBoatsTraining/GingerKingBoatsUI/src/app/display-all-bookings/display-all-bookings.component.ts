import { Component, OnInit } from '@angular/core';
import { DisplayAllBookingsService } from './display-all-bookings.service';

@Component({
  selector: 'app-display-all-bookings',
  templateUrl: './display-all-bookings.component.html',
  styleUrls: ['./display-all-bookings.component.css'],
  providers: [ DisplayAllBookingsService]
})
export class DisplayAllBookingsComponent implements OnInit {
  allBookingData: any[]; // stores the response that is obtained from the back-end function displayAllBookingService()
  confirmDelete: boolean; // asks the user for confirmation before deleting a transaction

  constructor(private displayAllBookingsService: DisplayAllBookingsService) {
    this.displayAllBookingsService.displayAllBookingsService()
    // displays all of the transactions that are saved in the back-end
    .then(response => {
      this.allBookingData = response;
    })
    .catch(error => this.allBookingData = error.message);
  }

  deleteBookingDetails(txnId) {
    this.confirmDelete = confirm('Are you sure you want to DELETE---> ' + txnId);
    // displays a confirmation dialogue asking the user if they would like to delete a particular transaction
    const transactionId = {'txnId': txnId};
    // stores the transaction ID in JSON format to be sent to the back-end

    if (this.confirmDelete) {
      this.displayAllBookingsService.deleteBookingDetails(transactionId)
      // deletes the corresponsing transaction from the database
      .then(response => {
        this.displayAllBookingsService.displayAllBookingsService()
        // refreshes the component after each deletion to reflect the changes made by the user
        .then(res => {
          this.allBookingData = res;
        })
        .catch(error => {
          return error.message;
        });
      })
      .catch(error => {
          return error.message;
      });
    }
  }

  ngOnInit() { }

}
