import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Course } from '../../models/Course';
import { CourseService } from '../../services';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit, OnDestroy {
  course!: Course;
  courses: Course[] = [];

  destroyed$ = new Subject<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  editCourse(course: Course): void {
    this.courseService
      .edit(course, course.id)
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: () => {
          console.log('Course updated successfully!');
          this.redirectToCourses();
        },
        error: (e) => console.log('ERROR: ', e.error),
      });
  }

  private redirectToCourses(): void {
    this.router.navigate(['/']);
  }

  private GetCourseById(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;

    this.courseService
      .getById(id)
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: (course) => (this.course = course),
        error: (e) => console.log('ERROR', e.error),
      });
  }
}
