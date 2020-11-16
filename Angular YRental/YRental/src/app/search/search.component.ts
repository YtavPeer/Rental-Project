import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackEndService } from '../back-end.service';
import {formatDate} from '@angular/common';
import { CalculatorDaysService } from '../calculator-days.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDateRangeModule } from 'ngx-daterange';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

arrCarsType:any;



 //#region  search car  -send the data prefer to back server
SearchCar(manuf:string,gear:string){

  this.BacKSer.ChangedSelectedUser(this.start,this.end,this.NumberOfDays,manuf,gear)

  this.router.navigate(['/search-result'])  
}

//#endregion

//#region Calculate Number of Days- send data to calculator service and show the total number of days
public start: Date = new Date (); 
public end: Date = new Date ();
NumberOfDays:any=1;
totalCost:number;

onChangeHireDate(){
  this.NumberOfDays=this.CalculatorDays.days_between(this.start,this.end)
  this.arrCarsType = this.BacKSer.arrCarType;
}
//#endregion


  constructor(private BacKSer: BackEndService, private router: Router,private CalculatorDays: CalculatorDaysService) { 
this.arrCarsType = this.BacKSer.arrCarType;
  }

  ngOnInit(): void {
    this.arrCarsType = this.BacKSer.arrCarType;
  }

}
