import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AddTimeComponent } from '../add-time/add-time.component';
import { TokenStorageService } from '../../services/token-storage.service';
import { Calendar, CalendarOptions, DateSelectArg } from '@fullcalendar/core';
import { TimeService } from '../../services/time.service'
import { Time } from '../../models/time.model'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  times?: Time[];
  currentTime?: Time;
  currentIndex = -1;
  numMinutes = 0;
  userID?: Number;


  @ViewChild('myModal') modal!: AddTimeComponent;
  @ViewChildren('myCalendar') calendar!: Calendar;
  constructor(private userService: UserService, private tokenStorage: TokenStorageService, private timeService: TimeService) { }
  isLoggedIn = false;
  selectedDate = '';
  // events = [{title: "Test", start: "2021-04-06", allDay: true}]

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridWeek',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'listWeek'
    },
    // events: this.events,
    selectable: true,
    select: this.setDate.bind(this)
  };

  ngOnInit(): void {
    //Checks if logged in
    if (!this.tokenStorage.getToken()) {
      this.userService.getPublicContent().subscribe(
        data => {
          this.content = data;
        },
        err => {
          this.content = JSON.parse(err.error).message;
        }
      );
    }
    else {
      this.isLoggedIn = true;
    }
  }
  addTime() {
    //this.modal.time.date = String(arg.startStr)
    this.modal.open()
    
  }

  setDate(arg: DateSelectArg) {
    this.selectedDate = String(arg.startStr)
    this.modal.time.date = String(arg.startStr);
    this.refreshList(this.selectedDate);
  }
  
  retrieveTimes(date: string): void {
    this.timeService.getAllByDate(date)
      .subscribe(
        data => {
          this.times = data;
          
          // let index :any;
          // let temp: Time[];
          // for (index in this.times){
          //   console.log(this.times![index].date);
          //   console.log(date);
          //   if (this.times![index].date == date){
          //     temp!.push(this.times![index]);
          //   }
          // }
          // this.times = temp!;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(date: string): void {
    this.retrieveTimes(date);
    this.currentTime = undefined;
    this.currentIndex = -1;
  }

  setActiveTime(time: Time, index: number): void {
    this.currentTime = time;
    this.currentIndex = index;
  }
  
  // redoEvents(){
  //   this.calendarOptions.events = '';
  //   this.calendarOptions.events = this.events;
  // }

}