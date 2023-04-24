import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { RouterModule } from '@angular/router';
import { CollapseComponent } from 'src/app/shared/components/collapse/collapse.component';
import { UserService } from '@app/core/services/user/user.service';
import { User } from '@app/core/models/user.models';
import { DayService } from '@app/core/services/day/day.service';
import { Day } from '@app/core/models/day.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TableComponent, RouterModule, CollapseComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public isOpenModal = false;
  public user!: User;
  public days!: Day[];

  public get daysUser(): any[] {
    return this.days?.map((day) => {
      const userDay = this.user.days?.find((userDay: Day) => userDay.id === day.id);
      return {
        ...day,
        checked: !!userDay,
      };
    });
  }

  constructor(private readonly userService: UserService, private readonly dayService: DayService) {}

  public ngOnInit(): void {
    this.getUser();
    this.getDays();
  }

  public getUser(): void {
    this.userService.getUser().subscribe({
      next: (user) => (this.user = user),
      error: (error) => console.log(error),
    });
  }

  public getDays(): void {
    this.dayService.getDays().subscribe({
      next: (days) => (this.days = days),
      error: (error) => console.log(error),
    });
  }

  public chooseDay(id: number): void {
    this.userService.chooseDay(id).subscribe({
      next: (user) => {
        console.log(user);
        this.user = user ?? this.user;
      },
      error: (error) => console.log(error),
    });
  }
}
