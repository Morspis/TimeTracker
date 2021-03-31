import { Component, OnInit } from '@angular/core';
import { TimeService } from 'src/app/services/time.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Time } from 'src/app/models/time.model';

@Component({
  selector: 'app-time-details',
  templateUrl: './time-details.component.html',
  styleUrls: ['./time-details.component.css']
})
export class TimeDetailsComponent implements OnInit {
  currentTime: Time = {
    numMinutes: 0,
    description: '',
    userID: 0,
    date: ''
  };
  message = '';

  constructor(
    private timeService: TimeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTime(this.route.snapshot.params.id);
  }

  getTime(id: string): void {
    this.timeService.get(id)
      .subscribe(
        data => {
          this.currentTime = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  // updatePublished(status: boolean): void {
  //   const data = {
  //     numMinutes: this.currentTime.numMinutes,
  //     description: this.currentTime.description,
  //     published: status
  //   };

  //   this.timeService.update(this.currentTime.id, data)
  //     .subscribe(
  //       response => {
  //         this.currentTime.published = status;
  //         console.log(response);
  //         this.message = response.message;
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  updateTime(): void {
    this.timeService.update(this.currentTime.id, this.currentTime)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteTime(): void {
    this.timeService.delete(this.currentTime.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/times']);
        },
        error => {
          console.log(error);
        });
  }
}