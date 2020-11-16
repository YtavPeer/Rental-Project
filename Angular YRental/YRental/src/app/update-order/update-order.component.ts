import { Component, OnInit } from '@angular/core';
import {BackEndService } from '../back-end.service';
import { Router } from '@angular/router';
import {formatDate} from '@angular/common';
import { CalculatorDaysService } from '../calculator-days.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDateRangeModule } from 'ngx-daterange';


@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {

   //#region get all data tables= orders, cars type users and cars list from backser service 
   arrOrders: any;
   arrCarsType: any;
   arrCarsList: any;
   arrUsers: any;
   //#endregion
 
 //#region  filter choosen car type and car main data  by client 
   //var to show car details to clients
   manufactor:any;
   model:any;
   productionYear:any;
   gear:any;
   PricePerDay:any;
   CarDetailShow: string;
   choosen:any;
   priceDelay:any;
 
   //var to get car id and show
   splited:any;
   CarIdS1:any;
   chosenCarId:any;
   CarNumberFromId:any;
   CarIdFromChosenCarId:any;
 
   //get the change of car id and set to car details
   onChange(IdValue) {
     //to get the full string of carIdvalue and convert to get only the first letter int for real id car

     let changeStringCarType = IdValue.split(")",2)
     let changeStringCarType2=Number(changeStringCarType[0])

     this.choosen= this.arrCarsType.filter(x => x.Car_Type_ID === changeStringCarType2);
     this.manufactor=this.choosen[0].Manufactor_Name;
     this.model=this.choosen[0].Model;
     this.PricePerDay=this.choosen[0].Price_PerDay;
     this.productionYear=this.choosen[0].Production_Year;
     this.gear=this.choosen[0].Gear;
     this.priceDelay=this.choosen[0].Price_Delay;
     this.totalCost=this.NumberOfDays*this.PricePerDay;
 
     //try to get full string and get the Choosen ID 
     this.splited=IdValue.split("Is:",2)
     this.CarIdS1=Number(this.splited[1]);
     this.chosenCarId=this.arrCarsList.filter(x=> x.Car_ID ===this.CarIdS1);
     this.CarNumberFromId=this.chosenCarId[0].Car_number;
     this.CarIdFromChosenCarId=this.chosenCarId[0].Car_ID
   }

   stringupdate:any;
 //#endregion
 
 //#region  filter choosen user data by clint
 
 UserName:any;
 password:any;
 picture:any;
 ChoosenUser:any;
 UserDetailShow: string;


 
 UserId:any;
 onChangeUser(IdValue) {
 
 let changeStringIdValue = Number(IdValue);
 this.ChoosenUser=this.arrUsers.filter(x => x.User_ID===changeStringIdValue);
 this.UserName=this.ChoosenUser[0].User_Name;
 this.password=this.ChoosenUser[0].Password;
 this.picture=this.ChoosenUser[0].Picture;
 this.UserId=IdValue;
 }
 
 //#endregion
 
 //#region Calculate Number of Days- send data to calculator service and show the total number of days
 public start: Date = new Date (); 
 public end: Date = new Date ();
 NumberOfDays:any;
 totalCost:number;
 NumberOfDelay:any;
 public actualReturn:Date = new Date ();

 onChangeActual(value){
this.actualReturn=value;
alert(value)

 }
 
 onChangeDelay(value){

  this.NumberOfDelay=value
  this.totalCost=this.NumberOfDays*this.PricePerDay+this.priceDelay*this.NumberOfDelay
 }

 onChangeHireDate(){
 
   this.NumberOfDays=this.CalculatorDays.days_between(this.start,this.end)
 this.totalCost=this.NumberOfDays*this.PricePerDay;
 }
 //#endregion
 
 //#region Add Orders send data to backser service
 orderStatus="0";
    
 UpdateOrder(userId:number)
   {   
     this.BacKSer.UpdateOrderBackService(this.CarIdFromChosenCarId ? this.CarIdFromChosenCarId : this.arrCarsList[0].Car_ID,this.start,this.end,this.actualReturn,userId,this.orderStatus
     ,this.CarNumberFromId ? this.CarNumberFromId : this.arrCarsList[0].Car_number,this.NumberOfDays ? this.NumberOfDays : 1,this.PricePerDay ? this.PricePerDay : this.arrCarsType[0].Price_PerDay,
     this.totalCost ? this.totalCost : this.PricePerDay,this.NumberOfDelay? this.NumberOfDelay: 0,this.priceDelay ? this.priceDelay : this.arrCarsType[0].Price_Delay,this.totalCost ? this.totalCost : this.PricePerDay)
     this.router.navigate(['/main-page'])
   }

   UpdateOrderAndReturn(userId:number)
   {   
     this.BacKSer.UpdateOrderBackService(this.CarIdFromChosenCarId ? this.CarIdFromChosenCarId : this.arrCarsList[0].Car_ID,this.start,this.end,this.actualReturn,userId,"1"
     ,this.CarNumberFromId ? this.CarNumberFromId : this.arrCarsList[0].Car_number,this.NumberOfDays ? this.NumberOfDays : 1,this.PricePerDay ? this.PricePerDay : this.arrCarsType[0].Price_PerDay,
     this.totalCost ? this.totalCost : this.PricePerDay,this.NumberOfDelay? this.NumberOfDelay: 0,this.priceDelay ? this.priceDelay : this.arrCarsType[0].Price_Delay,this.totalCost ? this.totalCost : this.PricePerDay)
     this.BacKSer.changeAvailable(this.CarIdFromChosenCarId)
     this.router.navigate(['/main-page'])
   }

 
 
 //#endregion
 
 
 
   constructor(private BacKSer: BackEndService, private router: Router,private CalculatorDays: CalculatorDaysService) {
 
     this.arrCarsType = BacKSer.arrCarType;
     this.arrCarsList = BacKSer.arrCarsList;
     this.arrOrders = BacKSer.MainOrdersTable;
     this.arrUsers = BacKSer.MainUserTable;
     this.PricePerDay=this.arrCarsType[0].Price_PerDay
     this.onChangeUser(BacKSer.UserIdOfOrder);
     this.onChange(BacKSer.updateString);
     this.stringupdate=BacKSer.updateString;
     this.start=BacKSer.startHireOrder;
     this.end=BacKSer.endHireOrder;
     this.actualReturn=BacKSer.endHireOrder;
 this.NumberOfDays=BacKSer.numberOfDaysOrder;
 this.totalCost=BacKSer.TotalCostOrder;
   }

 
   ngOnInit(): void {
   }
 
 }
 
 