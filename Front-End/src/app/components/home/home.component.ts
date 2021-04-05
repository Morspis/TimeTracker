import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AddTimeComponent } from '../add-time/add-time.component';
import { TokenStorageService } from '../../services/token-storage.service';
import { CalendarOptions } from '@fullcalendar/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  @ViewChild('myModal') modal!: AddTimeComponent;
  constructor(private userService: UserService, private tokenStorage: TokenStorageService) { }
  isLoggedIn = false;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridWeek',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'listWeek'
    },
    selectable: true,
    select: function(info) {
    }
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
    this.modal.open();
  }
}