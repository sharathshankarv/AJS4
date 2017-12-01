import { CourseService } from './course/course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { TableComponent } from './table/table.component';
import { AddClassOnConditionComponent } from './add-class-on-condition/add-class-on-condition.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    TableComponent,
    AddClassOnConditionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
