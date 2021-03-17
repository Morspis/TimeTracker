import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component'
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component'
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component'



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'homefd', component: AppComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'login', component: LoginComponent},
  { path: 'test', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
