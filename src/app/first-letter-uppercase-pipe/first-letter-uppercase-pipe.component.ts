import { Component} from '@angular/core';

@Component({
  selector: 'app-first-letter-uppercase-pipe',
  template: `<ul>
                <li *ngFor="let student of students">{{student | fUppercase}}</li>                
            </ul> `,  
})
export class FirstLetterUppercasePipeComponent {

  students = ["sharath","shankar","abdulla","gajanan"];

}
