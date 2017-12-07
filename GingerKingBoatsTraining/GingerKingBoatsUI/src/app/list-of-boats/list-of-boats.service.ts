import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ListOfBoatsService {

  constructor(private http: Http) { }

  listAllBoats(): Promise<any> {
    // connects to the specified URL to execute the associated query and bring the results to the front end as needed
    return this.http.get('http://localhost:3000/list-of-boats')
    .toPromise()
    .then(response => {
      return response.json();
    })
    .catch(error => Promise.reject(error.json() || error));
  }

}
