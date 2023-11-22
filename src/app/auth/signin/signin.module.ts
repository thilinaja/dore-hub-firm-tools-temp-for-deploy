import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Route
import { SigninRoutingModule } from './signin-routing.module';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SigninModule { }
