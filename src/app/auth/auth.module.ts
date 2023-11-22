import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Route
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})

export class AuthModule { }
