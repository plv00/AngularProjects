import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DisplayAllBookingsService {

    constructor(private http: Http) { }

  displayAllBookingsService(): Promise<any> {
    // connects to the specified URL to execute the associated query and bring the results to the front end as needed
    return this.http.get('http://localhost:3000/display-all-bookings')
    .toPromise()
    .then(response => {
      return response.json();
    })
    .catch(error => Promise.reject(error.json() || error));
  }

  deleteBookingDetails(data: any): Promise<any> {
    // connects to the specified URL and passes the provided data to execute the associated query
    // and bring the results to the front end as needed
    return this.http.delete(`http://localhost:3000/deleteDetails/${data.txnId}`)
    .toPromise()
    .then(response => {
      return response.json();
    })
    .catch(error => Promise.reject(error.json() || error));
  }

}
