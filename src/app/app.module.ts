import { AppErrorHandler } from './common/app-error-hadler';
import { ServicesOfCurdHttpService } from './services/services-of-curd-http.service';
import { HttpModule } from "@angular/http";
import { SignupFormComponent } from './signup-form/signup-form.component';
import { fUppercase } from './fUppercase.pipe';
import { EllipsesPipe } from './Ellipses.pipe';
import { CourseService } from './course/course.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NgModule, ErrorHandler } from '@angular/core';



import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { TableComponent } from './table/table.component';
import { AddClassOnConditionComponent } from './add-class-on-condition/add-class-on-condition.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventFilteringComponent } from './event-filtering/event-filtering.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { FirstLetterUppercasePipeComponent } from './first-letter-uppercase-pipe/first-letter-uppercase-pipe.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { NgIfDirectiveComponent } from './ng-if-directive/ng-if-directive.component';
import { NgSwitchDirectiveComponent } from './ng-switch-directive/ng-switch-directive.component';
import { SafeTraversalOpComponent } from './safe-traversal-op/safe-traversal-op.component';
import { CustomDDirective } from './custom-d.directive';
import { CustomDirectiveImplementationComponent } from './custom-directive-implementation/custom-directive-implementation.component';
import { CreditCardValidationDirective } from './credit-card-validation.directive';
import { FormsComponent } from './forms/forms.component';
import { ConsumingHttpComponent } from './consuming-http/consuming-http.component';
import { ConsumeHttpPostComponent } from './consume-http-post/consume-http-post.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CourseComponent,
    TableComponent,
    AddClassOnConditionComponent,
    EventBindingComponent,
    EventFilteringComponent,
    TwoWayBindingComponent,
    CustomPipesComponent,
    EllipsesPipe,
    FirstLetterUppercasePipeComponent,
    fUppercase,    
    FavoriteComponent,
    NgIfDirectiveComponent,
    NgSwitchDirectiveComponent,
    SafeTraversalOpComponent,
    CustomDDirective,
    CustomDirectiveImplementationComponent,
    CreditCardValidationDirective,
    FormsComponent,
    ConsumingHttpComponent,
    ConsumeHttpPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
    
  ],
  providers: [
    CourseService,
    ServicesOfCurdHttpService,
    {provide: ErrorHandler, useClass:AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
