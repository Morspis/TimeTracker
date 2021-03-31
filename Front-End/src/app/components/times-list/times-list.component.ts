import { Component, OnInit } from '@angular/core';
import { Time } from 'src/app/models/time.model';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-times-list',
  templateUrl: './times-list.component.html',
  styleUrls: ['./times-list.component.css']
})
export class TimesListComponent implements OnInit {
  times?: Time[];
  currentTime?: Time;
  currentIndex = -1;
  numMinutes = 0;
  userID = 0;

  constructor(private timeService: TimeService) { }

  ngOnInit(): void {
    this.retrieveTimes();
  }

  retrieveTimes(): void {
    this.timeService.getAll()
      .subscribe(
        data => {
          this.times = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTimes();
    this.currentTime = undefined;
    this.currentIndex = -1;
  }

  setActiveTime(time: Time, index: number): void {
    this.currentTime = time;
    this.currentIndex = index;
  }

  removeAllTimes(): void {
    this.timeService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.timeService.findByTitle(this.userID)
      .subscribe(
        data => {
          this.times = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}