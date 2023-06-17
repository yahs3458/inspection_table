import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inspection';
  // async openCamera() {
  //   const { Camera } = Plugins;
  
  //   const image = await Camera['getPhoto']({
  //     quality: 90,
  //     allowEditing: false,
  //     resultType: CameraResultType.Base64,
  //   });
  
  //   // Process the captured image or save it to your desired location
  //   console.log('Captured image:', image);
  // }
  
}
