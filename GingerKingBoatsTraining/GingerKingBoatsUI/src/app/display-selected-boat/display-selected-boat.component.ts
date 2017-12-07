import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DisplaySelectedBoatService } from './display-selected-boat.service';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-display-selected-boat',
  templateUrl: './display-selected-boat.component.html',
  styleUrls: ['./display-selected-boat.component.css'],
  providers: [ DisplaySelectedBoatService, DatePipe]
})
export class DisplaySelectedBoatComponent implements OnInit {
  txnId: any; // stores the transaction Id that is passed from the previous page through the URL
  updateData: any; // stores the updated values that the user enters on this page to send through the service function updateDate()
  updateMessage: string; // stores the success or error message from the back-end and displays to the user
  startDateStr: any; // stores a properly formatted value of the inital start date from the transaction
  endDateStr: any; // stores a properly formatted value of the intial end date from the transaction
  mobileNoStr: any; // stores the initial mobile number from the transation
  txnInfo: any; // stores the raw transaction information from the service function displaySelectedBoatService()
  
  constructor(private displaySelectedBoatService: DisplaySelectedBoatService,
              private router: Router, private activatedRoute: ActivatedRoute,
              private fb: FormBuilder, private datePipe: DatePipe) {
                this.activatedRoute.params.subscribe(params => {
                  this.txnId = params['txnId'];
                });
  }
  
  updateForm = this.fb.group({
    startDate: [''],
    endDate: [''],
    mobileNo: ['']
  });

  getDetails(){
    this.updateMessage = '';
    this.displaySelectedBoatService.displaySelectedBoatService({'txnId':this.txnId})
    .then(result => {
      this.startDateStr = this.datePipe.transform(result[0].startDate, 'yyyy-MM-dd');
      this.endDateStr = this.datePipe.transform(result[0].endDate, 'yyyy-MM-dd');
      result[0].startDate = this.startDateStr;
      result[0].endDate = this.endDateStr;
      this.mobileNoStr = result[0].mobileNo;
      this.txnInfo = result[0];
      this.updateForm.setValue({ startDate: this.startDateStr,
                                 endDate: this.endDateStr,
                                 mobileNo: this.mobileNoStr});
    }).catch(error => this.txnInfo = error.message);
  }

  popUpdateData(){
    this.updateData = {
      'txnId': this.txnId,
      'startDate': this.updateForm.value.startDate,
      'endDate': this.updateForm.value.endDate,
      'mobileNo': this.updateForm.value.mobileNo
    };
  }

  updateDetails(){
    this.popUpdateData(); // populates the data to be sent to the back-end
    this.displaySelectedBoatService.updateDetails(this.updateData)
    .then(result => this.updateMessage = 'Transaction successfully updated')
    .catch(error => this.updateMessage = error.message);
    this.getDetails(); // calls the service function to display the data for the transaction again to update bsed on the user's changes
  }

  ngOnInit() {
    this.getDetails();
  }

}
