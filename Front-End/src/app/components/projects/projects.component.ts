import { Component, OnInit } from '@angular/core';
import { Time } from 'src/app/models/time.model';
import { TimeService } from 'src/app/services/time.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectSelected: Boolean = false;

  times?: Time[];
  currentTime?: Time;
  currentIndex = -1;
  numMinutes = 0;
  teamName = "testingTeam"; //FIXME
  user?: User;
  sum?: Number;

  constructor(private timeService: TimeService, private userService: UserService) { }

  ngOnInit(): void {
    this.retrieveTimes(this.teamName);
  }

  selectProject(): void {
    this.projectSelected = true;
    
    this.calcTotalTime(1);
    this.getUserName(1);
    // let index: any;
    // // for (index in this.times){
    // //   let userID = this.times![index].userID;
    // //   this.sums![userID!] = this.calcTotalTime(userID!);
    // // }
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

  calcTotalTime(userID: number): void {
    let index: any;
    let sum = 0;
    for (index in this.times) {
      if (this.times![index].userID == userID) {
        sum += this.times![index].numMinutes!;
      }
    }
    this.sum = sum;
  }

  getUserName(userID: any): void {
    
    this.userService.getUser(userID).subscribe(
      data => {
        this.user = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}
