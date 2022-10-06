import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { courses } from '../data/course';
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  baseURL = '/api/courses';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseURL);
  }

  getById(id: number): Observable<Course> {
    const url = `${this.baseURL}/${id}`;

    return this.http.get<Course>(url);
  }

  edit(payload: Course, id: number): Observable<void> {
    const url = `${this.baseURL}/${id}`;

    return this.http.put<void>(url, payload);
  }

  delete(id: number): Observable<void> {
    const url = `${this.baseURL}/${id}`;

    return this.http.delete<void>(url);
  }
}
