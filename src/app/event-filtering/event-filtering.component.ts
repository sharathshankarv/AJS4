import { Component } from '@angular/core';

@Component({
  selector: 'app-event-filtering',
  template: `
            <label>input value using target
            <input (keyup.enter)="onEnter($event)" /></label>
            <br>
            <label>input value using #key name
            <input #name (keyup.enter)="onValEnter(name.value)" /></label>
  `,
  styleUrls: ['./event-filtering.component.css']
})
export class EventFilteringComponent {
  onEnter($event){
      console.log($event.target.value);  

  }
  onValEnter(name){
    console.log(name);  
  }
  constructor() { }

}
