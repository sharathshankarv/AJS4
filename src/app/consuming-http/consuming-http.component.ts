import { Http } from '@angular/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-consuming-http',
  templateUrl: './consuming-http.component.html',
  styleUrls: ['./consuming-http.component.css']
})
export class ConsumingHttpComponent {
  data: any[];
  constructor( http:Http ) {
    http.get("http://jsonplaceholder.typicode.com/posts")
    .subscribe(response => {
        this.data = response.json();
    })
   }

}
