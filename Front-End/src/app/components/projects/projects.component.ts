import { Component, OnInit, NgModule } from '@angular/core';
import { Time } from 'src/app/models/time.model';
import { TimeService } from 'src/app/services/time.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserModule } from '@angular/platform-browser';
import { multi } from './data';

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
  sum1 = 0;
  sum2 = 0;
  sum3 = 0;

  uName1 = '';
  uName2 = '';
  uName3 = '';
  

  // Graph Options
  multi: any[] | undefined;
  view: any[] = [700, 300];

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Time Spent on Project (hours)';
  timeline: boolean = true;

  
  constructor(private timeService: TimeService, private userService: UserService) {
    Object.assign(this, { multi });
   }

   onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {
    this.retrieveTimes(this.teamName);
  }

  selectProject(): void {
    this.projectSelected = true;
    //demo stuff
    this.sum1 = this.calcTotalTime(1);
    this.sum2 = this.calcTotalTime(2);
    this.sum3 = this.calcTotalTime(3);
    this.uName1 = this.getUserName(1);
    this.uName2 = this.getUserName(2);
    this.uName3 = this.getUserName(3);
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
