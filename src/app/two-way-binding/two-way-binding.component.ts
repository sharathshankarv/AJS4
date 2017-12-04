import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
              <input [(ngModel)]="email" (keyup.enter)="displayValue()" />
            `,
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent{

  email = "sharath@gmail.com"

  displayValue(){
    console.log(this.email);
  }

}
