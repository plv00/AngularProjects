import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ConfirmBookingService {

  constructor(private http: Http) { }

  confirmBooking(data: any): Promise<any> {
    /*
      connects to the specified URL and passes the provided data to execute the associated query
      and bring the results to the fron end as needed
    */
    return this.http.post('http://localhost:3000/confirm-booking', data)
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(error => Promise.reject(error.json() || error));
  }
  
  bookBoat(data: any): Promise<any> {
    /*
      connects to the specified URL and passes the provided data to execute the associated query
      and bring the results to the fron end as needed
    */
    return this.http.post('http://localhost:3000/book-now', data)
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(error => Promise.reject(error.json() || error));
  }

}
