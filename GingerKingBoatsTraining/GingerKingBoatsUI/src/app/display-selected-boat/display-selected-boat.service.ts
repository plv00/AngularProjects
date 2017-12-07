import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DisplaySelectedBoatService {

  constructor(private http: Http, private datePipe: DatePipe) { }

  displaySelectedBoatService(data: any) : Promise<any> {
    /*
      connects to the specified URL and passes the provided data to execute the associated query
      and bring the results to the front end as needed
    */
    return this.http.post('http://localhost:3000/display-txnid', data)
    .toPromise()
    .then(response => {
      return response.json();
    })
    .catch(error => Promise.reject(error.json() || error));
  }

  updateDetails(data: any): Promise<any> {
    /*
      connects to the specified URL and passes the provided data to execute the associated query
      and bring the results to the front end as needed
    */
    return this.http.post('http://localhost:3000/updateDetails', data)
    .toPromise()
    .then(response => {
      return response.json();
    })
    .catch(error => Promise.reject(error.json() || error));
  }

}
