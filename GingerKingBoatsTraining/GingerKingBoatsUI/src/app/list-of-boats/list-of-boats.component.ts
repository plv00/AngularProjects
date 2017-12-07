import { Component, OnInit } from '@angular/core';

import { ListOfBoatsService } from './list-of-boats.service';

@Component({
  selector: 'app-list-of-boats',
  templateUrl: './list-of-boats.component.html',
  styleUrls: ['./list-of-boats.component.css'],
  providers: [ListOfBoatsService]
})
export class ListOfBoatsComponent implements OnInit {
  boatData: any []; // stores the response that is obtained from service function listAllBoats()

  constructor(private listOfBoatsService: ListOfBoatsService) { 
    this.listOfBoatsService.listAllBoats() 
    // sends a query to the database through the backEnd to retrieve a list of all avaiable boats
    .then(response => {
      this.boatData = response;
    }).catch(error => this.boatData = error.message);
   }

  ngOnInit() {
  }

}
