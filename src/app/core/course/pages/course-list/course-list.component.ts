import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { Course } from '../../models/Course';
import { CourseService } from '../../services';
import { CreateCourseComponent } from '../create-course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit, OnDestroy {
  private courses: Course[] = [];

  private filterBy?: string;

  filteredCourses: Course[] = [];

  destroyed$ = new Subject<void>();

  constructor(
    private courseService: CourseService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCourses();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  set filter(value: string) {
    this.filterBy = value;

    this.filteredCourses = this.courses.filter(
      (c) => c.name.toLowerCase().indexOf(this.filterBy!.toLowerCase()) > -1
    );
  }

  get filter(): string {
    return this.filterBy!;
  }

  openDialog(): void {
    const dialogRef = this.matDialog.open(CreateCourseComponent, {
      width: '350px',
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((params) => {
        if (params?.reload) {
          this.getCourses();
        }
      });
  }

  deleteCourse(id: number): void {
    this.courseService
      .delete(id)
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: () => {
          console.log('Course deleted successfully!');
          this.getCourses();
        },
      });
  }

  private getCourses(): void {
    this.courseService
      .getAll()
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: (courses) => {
          this.courses = courses;
          this.filteredCourses = courses;
        },
        error: (e) => console.log('ERROR: ', e.error),
      });
  }
}
