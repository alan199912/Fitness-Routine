import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collapse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
})
export class CollapseComponent {
  @Input() public title!: string;
  public isCollapsed = false;
}
