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

import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component'
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component'
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component'

@NgModule({
  declarations: [
    AppComponent,
  
    ProjectsComponent,
    HomeComponent,
    LoginComponent,
    AddTutorialComponent,
    TutorialsListComponent,
    TutorialDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
