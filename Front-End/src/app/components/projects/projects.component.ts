import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectSelected: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  selectProject(): void {
    this.projectSelected = true;
  }
}
