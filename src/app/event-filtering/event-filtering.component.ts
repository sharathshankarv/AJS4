import { Component } from '@angular/core';

@Component({
  selector: 'app-event-filtering',
  template: `
            <input (keyup.enter)="onEnter($event)" />
  `,
  styleUrls: ['./event-filtering.component.css']
})
export class EventFilteringComponent {
  onEnter($event){
      console.log($event.target.value);  

  }
  constructor() { }

}
