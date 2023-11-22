import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Route
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

// simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// Counter
import { CountToModule } from 'angular-count-to';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
// Component
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgxSpinnerModule} from "ngx-spinner";


@NgModule({
  declarations: [
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CountToModule,
    NgxUsefulSwiperModule,
    BsDropdownModule.forRoot(),
    SimplebarAngularModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    LeafletModule,
    NgxSpinnerModule,
  ],
  providers: [
    DatePipe
  ]
})
export class PagesModule { }
