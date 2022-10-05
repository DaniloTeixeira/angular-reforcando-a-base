import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { CourseListComponent } from './core/course/pages/course-list';
import { StarComponent } from './core/components/star';
import { FormsModule } from '@angular/forms';
import { TransformCodePipe } from './core/pipes/transform-code.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseListComponent,
    StarComponent,
    TransformCodePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
