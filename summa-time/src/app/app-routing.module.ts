import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'homefd', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'projects', component: ProjectsComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
