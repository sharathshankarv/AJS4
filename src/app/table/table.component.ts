import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  template: `<table>
              <tr>
                <td [attr.colspan]="colspanVal"> Sharath Shankar Table<td>
              </tr>
            </table>`,
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  colspanVal = 2;
  constructor() { }


}
