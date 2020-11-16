import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';
import { Router } from '@angular/router';
import { CalculatorDaysService } from '../calculator-days.service';
import {UserManagePipe} from '../user-manage.pipe';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.css']
})
export class ManageBookingComponent implements OnInit {

  //#region get all data tables= orders, cars type users and cars list from backser service 
  arrOrders: any;
  arrCarsType: any;
  arrCarsList: any;
  arrUsers:any;
  //#endregion

//#region Delete Order from List -send to backserservice
DeleteOrder(OrderId:number){
this.BacKSer.deleteOrderBackSer(OrderId)
  this.router.navigate(['/main-page'])   
}
//#endregion

//#region Order in the List



UpdateOrder(OrderId:number){
  this.BacKSer.OrderUpdateId=OrderId;
  this.router.navigate(['/update-order'])
}

//#endregion

//#region  User Login

usernameHeaders:any;
passwordHeaders:any;
UserTypeHeaders:any;
UserIdHeaders:any;
UserPictue:any;



//#endregion

  constructor(private BacKSer: BackEndService, private router: Router) {

    this.arrCarsType = BacKSer.arrCarType;
    this.arrCarsList = BacKSer.arrCarsList;
    this.arrOrders=BacKSer.MainOrdersTable;
    this.arrUsers=BacKSer.MainUserTable;

    this.usernameHeaders=localStorage.getItem("UserNameBack")
    this.passwordHeaders=localStorage.getItem("PasswordBack")
    this.UserTypeHeaders=localStorage.getItem("UserTypeLoginBack")
    this.UserIdHeaders=localStorage.getItem("UserIdBack")
    this.UserPictue=localStorage.getItem("PictureUserBack")
 

  }

  ngOnInit(): void {
  }

}
