import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  tableData: any[] = [
    { id: 1,course : 'B.Pharma'  },
    { id: 2,course : 'M.Phil'},
    { id: 3,course : 'M.Pharma' }
  ];

  constructor() { }

  ngOnInit() {
  }
}
