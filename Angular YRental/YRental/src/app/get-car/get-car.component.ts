import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';
import { Router } from '@angular/router';
import { CalculatorDaysService } from '../calculator-days.service';

@Component({
  selector: 'app-get-car',
  templateUrl: './get-car.component.html',
  styleUrls: ['./get-car.component.css']
})
export class GetCarComponent implements OnInit {
  //#region get all data tables= orders, cars type users and cars list from backser service 
  arrOrders: any;
  arrCarsType: any;
  arrCarsList: any;
  arrUsers: any;
  searchAvailable: any;
  //#endregion

  //#region  getting the car deatils from result from back ser component 
  //var to show car details to clients

  chosenCarId: any;
  carType: any;
  CarNumberFromId: any;
  manufactor: any;
  model: any;
  productionYear: any;
  gear: any;
  PricePerDay: any;
  priceDelay: any;
  totalDays: any;


  //#region  filter choosen user data by clint

  UserName: any;
  password: any;
  picture: any;
  ChoosenUser: any;
  UserDetailShow: string;

  //#endregion

  //#region Calculate Number of Days- send data to calculator service and show the total number of days
  public start: Date = new Date();
  public end: Date = new Date();
  NumberOfDays: any;
  totalCost: number;

  onChangeHireDate() {
    this.NumberOfDays = this.CalculatorDays.days_between(this.start, this.end)
    this.totalCost = this.NumberOfDays * this.PricePerDay;
  }
  //#endregion

  //#region Add Orders send data to backser service
  orderStatus = "0";


  AddOrder() {
    this.BacKSer.addingOrderBackSer(this.chosenCarId, this.start, this.end, this.end, this.ChoosenUser, this.orderStatus
      , this.CarNumberFromId, this.NumberOfDays, this.PricePerDay,
      this.totalCost, 0, this.priceDelay, this.totalCost)    
  }

  //#endregion



  constructor(private BacKSer: BackEndService, private router: Router, private CalculatorDays: CalculatorDaysService) {

    this.arrCarsType = BacKSer.arrCarType;
    this.arrCarsList = BacKSer.arrCarsList;
    this.arrOrders = BacKSer.MainOrdersTable;
    this.arrUsers = BacKSer.MainUserTable;
    this.PricePerDay = this.arrCarsType[0].Price_PerDay
    this.searchAvailable = BacKSer.searchAvailbleBackSer;

    //getting from local storage the user data
    this.UserName = localStorage.getItem("UserNameBack")
    this.password = localStorage.getItem("PasswordBack")
    this.picture = localStorage.getItem("PictureUserBack")
    this.ChoosenUser = localStorage.getItem("UserIdBack")

    this.chosenCarId = BacKSer.GetCarIdBackSer;
    this.start = BacKSer.startBackSer;
    this.end = BacKSer.EndDateBack;
    this.carType = BacKSer.carTypeBackSer;
    this.CarNumberFromId = BacKSer.CarNumberFromIdBackSer;
    this.manufactor = BacKSer.manufactorBackSer;
    this.model = BacKSer.modelBackSer;
    this.productionYear = BacKSer.productionYearBackSer;
    this.gear = BacKSer.gearBackSer;
    this.PricePerDay = BacKSer.PricePerDayBackSer;
    this.priceDelay = BacKSer.priceDelayBackSer;
    this.NumberOfDays=BacKSer.totalDaysBackSer;
    this.totalCost=this.NumberOfDays*BacKSer.PricePerDayBackSer;
  }

  ngOnInit(): void {
  }

}



