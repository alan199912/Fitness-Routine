import { Component, OnInit } from '@angular/core';
import { User } from '@app/core/models/user.models';
import { UserService } from '@app/core/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public user!: User;

  constructor(private readonly userService: UserService) {}

  public ngOnInit(): void {
    this.getUser();
  }

  public getUser(): void {
    this.userService.getUser().subscribe({
      next: (user) => {
        this.user = user;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
