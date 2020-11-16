import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  searchAvailable: any;

  //#region  get rememebered car from local storage
search1:any;
search2:any;
search3:any;


  //#endregion

 
    //#region  GET CAR to pass data to order
    getinfo(i){
  this.BacKSer.GetCarIdBackSer=this.searchAvailable[i].Car_ID;
 
  this.BacKSer.carTypeBackSer=this.searchAvailable[i].Car_Type_ID
  this.BacKSer.CarNumberFromIdBackSer=this.searchAvailable[i].Car_number
  this.BacKSer.manufactorBackSer=this.searchAvailable[i].Manufactor_Name
  this.BacKSer.modelBackSer=this.searchAvailable[i].Model
  this.BacKSer.productionYearBackSer=this.searchAvailable[i].Production_Year
  this.BacKSer.gearBackSer=this.searchAvailable[i].Gear
  this.BacKSer.PricePerDayBackSer=this.searchAvailable[i].Price_PerDay
  this.BacKSer.priceDelayBackSer=this.searchAvailable[i].Price_Delay

  this.router.navigate(['/get-car'])  
  
  }
  
//#endregion


  constructor(private BacKSer:BackEndService, private router:Router,private http1: HttpClient) {

     // this will get all search available car table when upload the page
     this.http1.get("https://localhost:44326/search").subscribe(t => this.searchAvailable = t);

     this.search1=localStorage.getItem("CarSearch1")
     this.search2=localStorage.getItem("CarSearch2")
     this.search3=localStorage.getItem("CarSearch3")

   }

  ngOnInit(): void {
  }

}
