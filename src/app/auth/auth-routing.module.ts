import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

// component

const routes: Routes = [
  {
    path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule)
  },


  {
    path: "",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
