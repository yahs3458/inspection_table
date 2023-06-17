import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Plugins } from '@capacitor/core';
import { FormGroup, FormControl } from '@angular/forms';
import {CameraResultType , CameraSource }  from '@capacitor/camera';



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
  imageSrc: string | undefined;
  form: FormGroup;
  constructor(){
    this.form = new FormGroup({
      image: new FormControl('')
    });

  }
  

  displayedColumns: string[] = ['course', 'yesNo', 'ifYes', 'inspectorRemark'];
  dataSource = ELEMENT_DATA;
  
  async openCamera() {
    const { Camera } = Plugins;
  
    const image = await Camera['getPhoto']({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });
  
    // Process the captured image or save it to your desired location
    console.log('Captured image:', image);
  }
  
  
  
}
