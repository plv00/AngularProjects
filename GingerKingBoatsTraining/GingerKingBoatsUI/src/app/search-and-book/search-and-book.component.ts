import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchAndBookService } from './search-and-book.service';

@Component({
  selector: 'app-search-and-book',
  templateUrl: './search-and-book.component.html',
  styleUrls: ['./search-and-book.component.css'],
  providers: [SearchAndBookService]
})
export class SearchAndBookComponent implements OnInit {

  boatType: string; // stores the value of the boat type from the URL
  sendData: any; // used to send data to the service function searchAndBook()
  locations: any; // stores the value for the response from the service function searchAndBook()

  constructor(private fb: FormBuilder, private router: Router,private searchAndBookService: SearchAndBookService, private activatedRoute: ActivatedRoute) { 
                this.activatedRoute.params.subscribe(params => {
                  // stores the boatType parameter passed through the URL from the previous page into the boatType variable for this component
                  this.boatType = params['boatType'];
                });
  }

  bookGroup = this.fb.group({
    boatType: ['', [Validators.required]],
    location: ['' , [Validators.required]]
  });

  fetchLocations(boatType){
    this.sendData = {'boatType': this.boatType};
    // prepares boatType in JSON format to send to the back-end and recieve the necessary response
    this.searchAndBookService.searchAndBook(this.sendData)
    .then(response => {
      this.locations = response;
    })
    .catch(error => {
      this.locations = error.message;
    })
  }

  boatChange() {
    // updates the locations based on the boat type dynamically upon selection of a new boat type
    this.bookGroup.valueChanges.subscribe(type => {
      this.boatType = this.bookGroup.value.boatType;
    });
    this.fetchLocations(this.boatType);
  }


  ngOnInit() {
    this.boatChange();
    this.bookGroup.setValue({boatType: this.boatType, location: ''});
  }

}
