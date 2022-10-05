import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/Course';
import { CourseService } from '../../services';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  filteredCourses: Course[] = [];

  _filterBy?: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.setCourses();
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this.courses.filter(
      (c) => c.name.toLowerCase().indexOf(this._filterBy!.toLowerCase()) > -1
    );
  }

  get filter(): string {
    return this._filterBy!;
  }

  private setCourses(): void {
    this.courses = this.courseService.getAll();
    this.filteredCourses = this.courses;
  }
}
