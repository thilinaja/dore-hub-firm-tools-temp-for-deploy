import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';


// Component
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';

import { HorizontalComponent } from './horizontal/horizontal.component';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    TopbarComponent,
       HorizontalComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SimplebarAngularModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),

  ],
  providers: [],
})
export class LayoutsModule { }
