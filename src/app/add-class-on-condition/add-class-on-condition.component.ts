import { Component } from '@angular/core';

@Component({
  selector: 'app-add-class-on-condition',
  template: `
                <div [class.show]="active">add class on condition</div>
                <div [class.hide]="active">add class on condition</div>
  `,
  styleUrls: ['./add-class-on-condition.component.css']
})
export class AddClassOnConditionComponent {

  constructor() { }

  active = true;

}
