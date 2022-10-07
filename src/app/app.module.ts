import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar';
import { StarComponent } from './core/components/star';
import { NotFoundComponent } from './core/components/not-found';
import { EditCourseComponent } from './core/course/pages/edit-course';
import { CourseListComponent } from './core/course/pages/course-list';
import { TransformCodePipe } from './core/pipes/transform-code.pipe';
import { CreateCourseComponent } from './core/course/pages/create-course';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    TransformCodePipe,
    NavBarComponent,
    NotFoundComponent,
    EditCourseComponent,
    CreateCourseComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    CurrencyMaskModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
