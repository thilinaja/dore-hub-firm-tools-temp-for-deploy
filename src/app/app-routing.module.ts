import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';
import { MsalGuard } from './msal-guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)  },

  { path: '', component: LayoutComponent, canActivate: [MsalGuard], loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { } //
