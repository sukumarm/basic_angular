import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class OrganizationService {

serviceData: any;
  private orgApiURL = 'http://localhost:4200/assets/org.json';
  constructor (public http: HttpClient) {}

   private extractData(res) {
      if (res.status < 200 || res.status >= 300) {
         throw new Error('Bad response status: ' + res.status);
      }
      this.serviceData = res.json();
      return this.serviceData || {};
    }

      retrieveOrgData() {
        return this.http.get(this.orgApiURL);
      }
}
