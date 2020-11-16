import { Component, OnInit } from '@angular/core';
import {BackEndService } from '../back-end.service';
import { Router, RouterModule } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-admin-cars',
  templateUrl: './admin-cars.component.html',
  styleUrls: ['./admin-cars.component.css']
})
export class AdminCarsComponent implements OnInit {

//#region Delete Car Type

DeleteCarType(userCarType:number){
  this.BacKSer.deleteCarType(userCarType);
  this.router.navigate(['/admin'])   
}

//#endregion

//#region  Delete Car from List -send to backserservice

DeleteCarFromList(CarId:number){

  this.BacKSer.deleteCarBackSer(CarId);
  this.router.navigate(['/admin'])   
}

//#endregion

//#region Update Car Type
UpdateCarType(carTypeId:number){

    this.BacKSer.CarTypeUpdateId=carTypeId;
    this.router.navigate(['/update-car-type'])
  
}

//#endregion


//#region //bring all car type list from back ser service
arrCarsType: any;
//#endregion


//#region //bring all car  list from back ser service
arrCarsList:any;
//#endregion

//#region Update Car in the List

UpdateCarFromList(carId:number){

  this.BacKSer.CarListUpdateId=carId;
  this.router.navigate(['/update-car-list'])
}

//#endregion


constructor(private BacKSer:BackEndService, private router:Router) {
    
this.arrCarsType=BacKSer.arrCarType;

this.arrCarsList=BacKSer.arrCarsList;

  }

  ngOnInit(): void {
  }

}

