import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import { AddTimeComponent } from './components/add-time/add-time.component'
import { TimesListComponent } from './components/times-list/times-list.component'
import { TimeDetailsComponent } from './components/time-details/time-details.component'
import { ProfileComponent } from './components/profile/profile.component';
import { MenuComponent } from './menu/menu.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { RegisterComponent } from './components/register/register.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'homefd', component: AppComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'login', component: LoginComponent},
  { path: 'test', redirectTo: 'times', pathMatch: 'full' },
  { path: 'times', component: TimesListComponent },
  { path: 'times/:id', component: TimeDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add', component: AddTimeComponent },
  { path: 'profile', component: ProfileComponent },
   { path: 'menu', component: MenuComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
