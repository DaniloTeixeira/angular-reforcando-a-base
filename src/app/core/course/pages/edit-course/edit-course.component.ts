import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../models/Course';
import { CourseService } from '../../services';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit {
  course!: Course;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.GetCourseById();
  }

  editCourse(course: Course): void {
    this.courseService.edit(course);
    this.router.navigate(['/']);
  }

  private getCourses(): Course[] {
    return this.courseService.getAll();
  }

  private GetCourseById(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;

    this.course = this.courseService.getById(id);
  }
}
