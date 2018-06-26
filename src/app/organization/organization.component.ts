import { Component, OnInit } from '@angular/core';
import { OrganizationService } from './organization.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';


@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  private orgDetails: any;

  constructor(private orgService: OrganizationService,
              private router: Router,
              private http: Http) { }

  ngOnInit() {

      this.orgService.retrieveOrgData().subscribe(data => {
          this.orgDetails = data['orgs'];

          console.log(this.orgDetails);
      },
        error => {
          this.router.navigate(['error']);
          console.error('Error Retrieving Data');
        });
  }
}
