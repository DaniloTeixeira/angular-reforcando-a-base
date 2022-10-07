import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatError } from '@angular/material/form-field';
import { Subject, takeUntil } from 'rxjs';
import { CreateCoursePayload } from '../../models/CreateCoursePayload';
import { CourseService } from '../../services';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
})
export class CreateCourseComponent implements OnInit, OnDestroy {
  form?: FormGroup<{
    name: FormControl<string>;
    price: FormControl<string>;
    rating: FormControl<string>;
    description: FormControl<string>;
  }>;

  destroyed$ = new Subject<void>();

  constructor(
    private dialogRef: MatDialogRef<CreateCourseComponent>,
    private fb: NonNullableFormBuilder,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onSubmit(): void {
    if (this.form?.invalid) {
      return;
    }

    this.createCourse();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      name: this.fb.control('', Validators.required),
      price: this.fb.control('', Validators.required),
      rating: this.fb.control('', [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
      description: this.fb.control('', Validators.required),
    });
  }

  private getCreateCoursePayload(): CreateCoursePayload {
    const form = this.form?.getRawValue();
    const price = +form!.price;
    const rating = +form!.rating;

    return {
      code: 'OUT-2022',
      name: form!.name,
      price,
      imageUrl: '/assets/images/cli.png',
      duration: 40,
      releaseDate: new Date().toISOString(),
      rating,
      description: form!.description,
    };
  }

  private createCourse(): void {
    const payload = this.getCreateCoursePayload();

    this.courseService
      .create(payload)
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: () => {
          console.log('Course created successfully!');
          this.dialogRef.close({
            reload: true,
          });
        },
        error: (e) => console.log(e.error),
      });
  }
}
