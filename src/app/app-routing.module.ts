import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthComponent } from './modules/auth/auth.component';
import { AuthService } from './modules/auth/services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    // canActivate: () => inject(AuthService).isAuthenticated(),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
