import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { OrganizationComponent } from './organization/organization.component';
import { BillingComponent } from './billing/billing.component';
import { ErrorComponent } from './error/error.component';

import { OrganizationService } from './organization/organization.service';

const appRoutes: Routes = [
  {path: 'org' , component: OrganizationComponent},
  {path: 'billing' , component: BillingComponent},
  {path: 'error' , component: ErrorComponent},
  {path: '' , component: BillingComponent, pathMatch:'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    BillingComponent,
    ErrorComponent
      ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [OrganizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
