import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AddTimeComponent } from '../add-time/add-time.component';
import { TokenStorageService } from '../../services/token-storage.service';
import { Calendar, CalendarOptions, DateSelectArg } from '@fullcalendar/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  @ViewChild('myModal') modal!: AddTimeComponent;
  @ViewChildren('myCalendar') calendar!: Calendar;
  constructor(private userService: UserService, private tokenStorage: TokenStorageService) { }
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
    this.modal.time.date = this.selectedDate;
  }
  
  // redoEvents(){
  //   this.calendarOptions.events = '';
  //   this.calendarOptions.events = this.events;
  // }

}