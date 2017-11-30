import { CourseService } from './course.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `<h2>Courses</h2>
            <ul>
              <li *ngFor="let course of courses">{{ course }}</li>
            </ul>
  `,
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  courses;

  constructor(service: CourseService){    
    this.courses = service.getCourses();
  }
  
}
