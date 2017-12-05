import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
              <input [(ngModel)]="email" (keyup.enter)="displayValue()" />
              <br/><br/>
              <p>{{courseDet.title | uppercase }}</p>
              <p>{{courseDet.trainer | lowercase}}</p>
              <p>{{courseDet.strength | number}}</p>
              <p>{{courseDet.date | date:'shortDate'}}</p>
              <p>{{courseDet.price | currency:"INR"}}</p>
            `,
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent{

  email = "sharath@gmail.com"

  courseDet = {
    "title" : "AngularJs",
    "trainer" : "Mosh",
    "strength" : "30897",
    "date" : new Date(2017,5,11),
    "price" : 190
  }

  displayValue(){
    console.log(this.email);
  }

}
