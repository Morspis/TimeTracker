import { Component, OnInit } from '@angular/core';
import { Time } from 'src/app/models/time.model';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-add-time',
  templateUrl: './add-time.component.html',
  styleUrls: ['./add-time.component.css']
})
export class AddTimeComponent implements OnInit {
  time: Time = {
    numMinutes: 0,
    description: '',
    userID: 0,
    date: '',
    teamName: ''
  };
  submitted = false;

  constructor(private timeService: TimeService) { }

  ngOnInit(): void {
  }

  saveTime(): void {
    const data = {
      numMinutes: this.time.numMinutes,
      description: this.time.description
    };

    this.timeService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTime(): void {
    this.submitted = false;
    this.time = {
      numMinutes: 0,
      description: '',
      userID: 0,
      date: '',
      teamName: '',
    };
  }

}