import { Component } from '@angular/core';

@Component({
  selector: 'app-safe-traversal-op',
  templateUrl: './safe-traversal-op.component.html',
  styleUrls: ['./safe-traversal-op.component.css']
})
export class SafeTraversalOpComponent{

    task = {
       title: "safe traverasl Operator" ,
       assignee : {
         name: 'first Task'
       }
    }

}
