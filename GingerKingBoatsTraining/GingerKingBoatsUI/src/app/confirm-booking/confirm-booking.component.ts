import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmBookingService } from './confirm-booking.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DateValidator } from './validDates.validator';
@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css'],
  providers: [ConfirmBookingService]
})
export class ConfirmBookingComponent implements OnInit {

  boatType: string; // stores teh boat type carried over from previous page
  location: string; // stores the boat location carried over from previous page
  boatParams: any; // stores boat type and location to send to back-end in JSON form
  boatInfo: any[]; // an array that stores the details of all boats that are retrieved from the back-end
  bookNow: boolean; // determines which section of the page is shown
  bookedBoat: any; // stores only the details for the boat this is being booked
  today: string; // stores today's date as a string value
  confirmBoat: any; // an object to send the booking details to the back-end
  errorMessage: string; // stores the error message from back-end
  successMessage: string; // stores the success message from back-end
  errorBool: boolean; // if errorMsg is empty
  successBool: boolean; // if successMsg is empty

  constructor(private confirmBookingService: ConfirmBookingService, private router: Router,
              private activatedRoute: ActivatedRoute, private fb: FormBuilder ) {
                this.today = new Date().getFullYear + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
                this.bookNow = false;
                this.activatedRoute.params.subscribe(params => {
                  /*
                    stores the boatType and location parameters passed through the URL from the previous page
                    into the boatType and location variables for this component
                  */
                  this.boatType = params['boatType'];
                  this.location = params['location'];
                })
  }
  
  confirmBook = this.fb.group({
    userId: ['', [Validators.required, Validators.min(1000), Validators.max(9999)]],
    startDate: ['', [Validators.required, DateValidator.startDate]],
    endDate: ['', [Validators.required]],
    mobileNo: ['']
  })

  callConfirmService(){
    // retrieves the boat that matches the type and location provided by the user
    this.boatParams = { 'boatType': this.boatType, 'location': this.location };
    this.confirmBookingService.confirmBooking(this.boatParams)
    .then(response => {
      this.boatInfo = response;
    })
    .catch(error => {
      this.errorMessage = error.message;
      console.log('callconfirmServ: ', this.errorMessage);
    });
  }

  bookNowValue(btnValue){
    // directs the user to the section of the page where he/she can confirm their booking by giving necessary details
    this.bookNow = true;
    for(let i = 0; i < this.boatInfo.length; i++) {
      if(this.boatInfo[i].boatId == btnValue) {
        this.bookedBoat = this.boatInfo[i];
      }
    }
  }

  bookBoat() {
    //submits the user's provided booking details (if they all meet validation requirements)
    this.errorMessage = '';
    this.successMessage = '';
    this.errorBool = false;
    this.successBool = false;

    this.confirmBoat = {
      'boatId': this.bookedBoat.boatId,
      'mobileNo': this.confirmBook.value.mobileNo,
      'startDate': this.confirmBook.value.startDate,
      'endDate': this.confirmBook.value.endDate,
      'userId': this.confirmBook.value.userId,
      'totalCost': this.bookedBoat.basePrice * ((new Date(this.confirmBook.value.endDate).valueOf() - 
        new Date(this.confirmBook.value.startDate).valueOf()) / (1000 * 60 * 60 * 24)) * (1 - this.bookedBoat.discount)
    };
    this.confirmBookingService.bookBoat(this.confirmBoat)
      .then(response => {
        this.successBool = true;
        this.successMessage = response.message;
      })
      .catch(error => {
        this.errorBool = true;
        this.errorMessage = error.message;
      });
  }

  ngOnInit() {
    this.callConfirmService();
  }

}
