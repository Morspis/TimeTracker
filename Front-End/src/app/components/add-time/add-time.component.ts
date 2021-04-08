import { Component, OnInit, ViewChild } from '@angular/core';
import { Time } from 'src/app/models/time.model';
import { TimeService } from 'src/app/services/time.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenStorageService } from '../../services/token-storage.service';
import { HomeComponent } from '../home/home.component'


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
    teamName: '',
  };
  currentUser: any;
  @ViewChild('content') content: any;
  submitted = false;
  closeResult: string | undefined;
  

  constructor(private timeService: TimeService,
    private modal: NgbModal, 
    private token: TokenStorageService,
    private home: HomeComponent){ }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.time.userID = this.currentUser.id;
  }

  saveTime(): void {
    const data = {
      numMinutes: this.time.numMinutes,
      description: this.time.description,
      userID: this.time.userID,
      date: this.time.date,
      project: this.time.teamName,
    };

    this.timeService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.home.calendarOptions.events = [{title: data.numMinutes! + " Minutes :\n " + data.description!,
                                         start: String(data.date),
                                         allDay: true}];
                                        
          // this.home.redoEvents();
          // console.log(this.home.events);
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