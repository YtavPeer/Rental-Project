import { Component, OnInit } from '@angular/core';
import {BackEndService } from '../back-end.service';

@Component({
  selector: 'app-add-car-type',
  templateUrl: './add-car-type.component.html',
  styleUrls: ['./add-car-type.component.css']
})
export class AddCarTypeComponent implements OnInit {

//#region function to get from user the car add type and send info to the backservice

GearChoice:any;

AddCarType(Manufactor:string,Model: string, PricePerDay: number, PriceDelay:number, ProductionYear:number){

this.BacKSer.addingCarTyPe(Manufactor,Model,PricePerDay,PriceDelay,ProductionYear,this.GearChoice)

}
//#endregion



  constructor(private BacKSer:BackEndService) { }

  ngOnInit(): void {
  }

}
