import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CarouselComponent } from './carousel/carousel.component';
import { WorldClockComponent } from './world-clock/world-clock.component';
import {SimplebarAngularModule} from "simplebar-angular";
import { TileListComponent } from './tile-list/tile-list.component';
import { GeneralComponent } from './general/general.component';
import { OperationsComponent } from './operations/operations.component';
import { BussinessComponent } from './bussiness/bussiness.component';
import { SupportCenterComponent } from './support-center/support-center.component';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    CarouselComponent,
    WorldClockComponent,
    TileListComponent,
    GeneralComponent,
    OperationsComponent,
    BussinessComponent,
    SupportCenterComponent
  ],
  imports: [
    CommonModule,
    SimplebarAngularModule,

  ],
  exports: [
    BreadcrumbsComponent,
    CarouselComponent,
    WorldClockComponent,
    TileListComponent,
    GeneralComponent,
    OperationsComponent,
    BussinessComponent,
    SupportCenterComponent

  ]
})
export class SharedModule { }
