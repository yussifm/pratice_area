import { Component, OnInit } from '@angular/core';
import { Courses, Menbers } from '../course';

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
    nam: 'Web Develoment HUb',
  };

  menbers: Menbers = {
    names: 'coded',
    ages: 22,
    gender: 'M',
  };

  ngOnInit(): void {}
}
