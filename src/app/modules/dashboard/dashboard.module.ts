import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, NavbarComponent, TableComponent],
})
export class DashboardModule {}
