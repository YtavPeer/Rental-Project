import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';
import { Router } from '@angular/router';
import { CalculatorDaysService } from '../calculator-days.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDateRangeModule } from 'ngx-daterange';
import {formatDate} from '@angular/common';




@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  

  //#region  GET CAR to pass data to order
GetCar(i,iteration1){
this.BacKSer.GetCarIdBackSer=i.Car_ID;
this.BacKSer.EndDateBack=this.end;
this.BacKSer.startBackSer=this.start;
this.BacKSer.carTypeBackSer=i.Car_Type_ID
this.BacKSer.CarNumberFromIdBackSer=i.Car_number
this.BacKSer.manufactorBackSer=i.Manufactor_Name
this.BacKSer.modelBackSer=i.Model
this.BacKSer.productionYearBackSer=i.Production_Year
this.BacKSer.gearBackSer=i.Gear
this.BacKSer.PricePerDayBackSer=i.Price_PerDay
this.BacKSer.priceDelayBackSer=i.Price_Delay
this.BacKSer.totalDaysBackSer=this.NumberOfDays
//to send the data to service in order to save the car info
this.BacKSer.CarRemember(iteration1);
this.router.navigate(['/get-car'])  

}



  //#endregion


  //#region gettind selected car choose from backserver after search on serach bar

  NumberOfDays: any;
  manufactorSelected: any="";
  modelSelected:any="";
  gearSelected: any="";
  yearSelected:any="";
  searchbar:any="";







ManufactorSelected(manufactor:string){
  this.manufactorSelected=manufactor;


}
ModelSelected(model:string){
  this.modelSelected=model;


}
GearSelected(gear:string){
  this.gearSelected=gear;


}

YearSelected(year:string){
  this.yearSelected=year;


}

  //#endregion

  //#region Calculate Number of Days- send data to calculator service and show the total number of days
  public start: Date = new Date();
  public end: Date = new Date();

  totalCost: number;

  onChangeHireDate() {
    this.NumberOfDays = this.CalculatorDays.days_between(this.start, this.end)
  }
  //#endregion

  //#region get all data tables= orders, cars type users and cars list from backser service 
  arrOrders: any;
  arrCarsType: any;
  arrCarsList: any;
  arrUsers: any;
  searchAvailable:any;
  //#endregion

  //#region  filter choosen user data by clint

  UserName: any;
  password: any;
  picture: any;
  ChoosenUser: any;
  UserDetailShow: string;


  //#endregion

  //#region to get the details type for the loop car result
  // choosenLoop:any;

  // getCarType(cartype:number):any{

  // this.choosenLoop = this.arrCarsType.filter(x => x.Car_Type_ID === cartype);
  // return this.choosenLoop;
  // }
  //#endregion



  constructor(private BacKSer: BackEndService, private router: Router, private CalculatorDays: CalculatorDaysService) {

    //getting data to tables main
    this.arrCarsType = BacKSer.arrCarType;
    this.arrCarsList = BacKSer.arrCarsList;
    this.arrOrders = BacKSer.MainOrdersTable;
    this.arrUsers = BacKSer.MainUserTable;
    this.searchAvailable=BacKSer.searchAvailbleBackSer;


    //getting user choose from back service
    this.start = BacKSer.StartDateBack;
    this.end = BacKSer.EndDateBack;
    this.NumberOfDays = BacKSer.TotalNumberDaysBack;
    this.gearSelected = BacKSer.gearSelectBack;
    this.manufactorSelected = BacKSer.ManufatorSelectBack;


//getting from local storage the user data
    this.UserName=localStorage.getItem("UserNameBack")
    this.password=localStorage.getItem("PasswordBack")
    this.picture=localStorage.getItem("PictureUserBack")
    this.ChoosenUser=localStorage.getItem("UserIdBack")


    
  }

  ngOnInit(): void {
  }

}


