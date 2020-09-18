import { Component, OnInit } from '@angular/core';
import { Courses } from '../course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor() {}
  course: Courses = {
    id: 1,
    name: `Angular`,
  };
  getname(name: string): void {
    alert(name);
  }

  ngOnInit(): void {}
}
