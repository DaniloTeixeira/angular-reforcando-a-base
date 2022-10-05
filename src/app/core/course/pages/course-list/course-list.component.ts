import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/Course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor() {
    this.courses = [
      {
        id: 1,
        price: 99.99,
        rating: 4,
        duration: 120,
        name: 'Angular Forms',
        code: 'XPS-8796',
        imageUrl: '/assets/images/forms.png',
        releaseDate: new Date('01/11/2021').toISOString(),
      },
      {
        id: 2,
        price: 69.99,
        rating: 4.5,
        duration: 80,
        name: 'Angular HTTP',
        code: 'LKL-1094',
        imageUrl: '/assets/images/http.png',
        releaseDate: new Date('10/05/2022').toISOString(),
      },
    ];
  }

  ngOnInit(): void {}
}
