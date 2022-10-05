import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit {
  courseId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.setCourseId();
  }

  private setCourseId(): void {
    this.courseId = +this.route.snapshot.paramMap.get('id')!;
  }
}
