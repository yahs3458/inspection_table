import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  course: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { course: 'B.Pharma'},
  { course: 'M.Pharma'},
  { course: 'M.Phil'},

];

@Component({
  selector: 'app-tbl',
  templateUrl: './tbl.component.html',
  styleUrls: ['./tbl.component.css']

})
export class TblComponent {

  displayedColumns: string[] = ['course', 'yesNo', 'ifYes', 'inspectorRemark'];
  dataSource = ELEMENT_DATA;
}
