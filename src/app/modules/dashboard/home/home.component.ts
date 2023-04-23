import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { RouterModule } from '@angular/router';
import { CollapseComponent } from 'src/app/shared/components/collapse/collapse.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TableComponent, RouterModule, CollapseComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
