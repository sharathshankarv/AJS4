import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  contactMode = [
    { id: 1, name:"Mail" },
    { id: 2, name:"Phone" }
  ]

  frmSubmit(logFrm){
    console.log(logFrm);
  }

}
