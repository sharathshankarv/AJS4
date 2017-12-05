import { EllipsesPipe } from './Ellipses.pipe';
import { CourseService } from './course/course.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { TableComponent } from './table/table.component';
import { AddClassOnConditionComponent } from './add-class-on-condition/add-class-on-condition.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventFilteringComponent } from './event-filtering/event-filtering.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    TableComponent,
    AddClassOnConditionComponent,
    EventBindingComponent,
    EventFilteringComponent,
    TwoWayBindingComponent,
    CustomPipesComponent,
    EllipsesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
