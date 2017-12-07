import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchAndBookService {

  constructor(private http: Http) { }

  searchAndBook(data: any): Promise<any> {
    /*connects to the specified URL and passes the provided data to execute the associated query
      and bring the results to the front end as needed  */
    return this.http.post('http://localhost:3000/search-and-book', data)
    .toPromise()
    .then(response => {
      return response.json();
    })
    .catch(error => Promise.reject(error.json() || error));
  }

}
