import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);

  this.router.navigate(['org']);
  }
}
