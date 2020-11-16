import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-car-list',
  templateUrl: './update-car-list.component.html',
  styleUrls: ['./update-car-list.component.css']
})
export class UpdateCarListComponent implements OnInit {

  //#region  upload image

// all the system to convert the upluad image to bash 64 

UserPictureBash64: string;
  
UploadImage(event) {

  var reader = new FileReader();
  if (event.target.files && event.target.files.length > 0) {
    var file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      let a: string;
       a=(reader.result.toString().split(',')[1]);
       alert("your car picture is upload to the system, now please complete and click the Update Car buttum")

       this.UserPictureBash64=a;
       
    };
  }
  }

// end of system that convert the image to base64
//#endregion
//#region //bring all car type list from back ser service
arrCarsType: any;
//#endregion

//#region add car function- send data to backsersevice
UpdateCar(CarTypeId: string, kilometer:number,Undamage:string,Avilable:string,carNumber:string,Branch:number){

//to get the full string of carTypeId and convert to get only the first letter int
let changeStringCarType=Number(CarTypeId.charAt(0));

//convert bool undamage to int
let afterUndamage:number;
if(Undamage=="Undamage"){
afterUndamage=0;
}
else if(Undamage="Damage"){
 afterUndamage=1; 
}

//convert bool available to int
let afterAvailable:number;
if(Avilable=="Available"){
afterAvailable=0;
}
else if(Avilable=="UnAvailable"){
  afterAvailable=1;
  }

this.BacKSer.UpdateCarListBackService(changeStringCarType,kilometer,afterUndamage,afterAvailable,carNumber,Branch,this.UserPictureBash64);
this.router.navigate(['/admin'])
}

//#endregion


  constructor(private BacKSer:BackEndService,private router:Router) { 

    this.arrCarsType=BacKSer.arrCarType;
    
  }

  ngOnInit(): void {
  }

}
