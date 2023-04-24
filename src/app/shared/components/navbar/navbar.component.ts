import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '@app/core/services/user/user.service';
import { User } from '@app/core/models/user.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isProfileDropOpen = true;
  public user!: User;

  constructor(private readonly userService: UserService) {}

  public ngOnInit(): void {
    this.getUser();
  }

  public logout(): void {
    localStorage.clear();

    window.location.href = '/';
  }

  public getUser(): void {
    this.userService.getUser().subscribe({
      next: (user) => (this.user = user),
      error: (error) => console.log(error),
    });
  }
}
