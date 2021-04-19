import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

import { AddTimeComponent } from './components/add-time/add-time.component'
import { TimesListComponent } from './components/times-list/times-list.component'
import { TimeDetailsComponent } from './components/time-details/time-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './components/register/register.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';

import { authInterceptorProviders } from './helpers/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'; // a plugin

import { NgxChartsModule } from '@swimlane/ngx-charts';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
  
    ProjectsComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    AddTimeComponent,
    TimesListComponent,
    TimeDetailsComponent,
    RegisterComponent,
    BoardAdminComponent,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FullCalendarModule
  ],
  providers: [authInterceptorProviders, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
