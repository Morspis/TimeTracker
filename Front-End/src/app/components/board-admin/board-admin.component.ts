import { Component, OnInit } from '@angular/core';
import { Time } from 'src/app/models/time.model';
import { TimeService } from 'src/app/services/time.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  times?: Time[];
  currentTime?: Time;
  currentIndex = -1;
  numMinutes = 0;
  teamName = "testingTeam"; //FIXME
  user?: User;

  constructor(private timeService: TimeService, private userService: UserService) { }

  ngOnInit(): void {
    this.retrieveTimes(this.teamName);
  }

  retrieveTimes(teamName: String): void {
    this.timeService.getAllByProject(teamName)
      .subscribe(
        data => {
          this.times = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  calcTotalTime(userID: number): number {
    let index: any;
    let sum = 0;
    for (index in this.times) {
      if (this.times![index].userID == userID) {
        sum += this.times![index].numMinutes!;
      }
    }
    return sum;
  }

  getUserName(userID: any): string {
    
    this.userService.getUser(userID).subscribe(
      data => {
        this.user = data;
        console.log(data);
        return this.user;
      },
      error => {
        console.log(error);
      });
      return null!;
  }
}