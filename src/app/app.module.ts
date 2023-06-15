import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TablComponent } from './tabl/tabl.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { TblComponent } from './tbl/tbl.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TablComponent,
    TblComponent    
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
