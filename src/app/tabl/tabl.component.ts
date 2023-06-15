import { Component } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatTableDataSource} from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';


interface PeriodicElement {
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1},
  {position: 2},
  {position: 3},
];
@Component({
  selector: 'app-tabl',
  templateUrl: './tabl.component.html',
  styleUrls: ['./tabl.component.css']
})

export class TablComponent {

    displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);
  
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows() {
      if (this.isAllSelected()) {
        this.selection.clear();
        return;
      }
  
      this.selection.select(...this.dataSource.data);
    }
  
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: PeriodicElement): string {
      if (!row) {
        return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
  
  
}
