import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `<button (click)="onClickSave()" class="btn btn-primary">Save</button>`,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  constructor() { }
  onClickSave(){
    console.log("button clicked")
  }

}
