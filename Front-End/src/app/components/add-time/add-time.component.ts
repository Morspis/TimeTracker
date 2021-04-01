import { Component, OnInit, ViewChild } from '@angular/core';
import { Time } from 'src/app/models/time.model';
import { TimeService } from 'src/app/services/time.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  @ViewChild('content') content: any;
  submitted = false;
  closeResult: string | undefined;

  constructor(private timeService: TimeService, private modal: NgbModal) { }

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
  
  open() {
    // and use the reference from the component itself
    this.modal.open(this.content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        console.log(reason);
    });
}

}