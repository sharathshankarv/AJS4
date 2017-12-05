import { Component} from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  template: `    
  <p>{{courseDet.title | uppercase }}</p>
  <p>{{courseDet.desc | ellipses }}</p>  
  <p>{{courseDet.desc | ellipses:"20" }}</p>  
  <p>{{courseDet.desc}}</p>  
`,
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent {

  courseDet = {
    "title" : "AngularJs",
    "desc" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu "
  }

}
