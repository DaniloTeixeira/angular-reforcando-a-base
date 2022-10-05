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
}
