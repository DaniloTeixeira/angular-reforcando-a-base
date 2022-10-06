import { Injectable } from '@angular/core';
import { courses } from '../data/course';
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  getAll(): Course[] {
    return courses;
  }

  getById(id: number): Course {
    return courses.find((course) => course.id === id) as Course;
  }

  edit(course: Course): void {
    const courses = this.getAll();
    const index = courses.findIndex((c) => c.id === course.id);

    courses[index] = course;
  }
}
