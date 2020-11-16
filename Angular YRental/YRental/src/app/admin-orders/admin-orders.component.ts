import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  //#region get all data tables= orders, cars type users and cars list from backser service 
  arrOrders: any;
  arrCarsType: any;
  arrCarsList: any;
  arrUsers:any;
  //#endregion

//#region Delete Order from List -send to backserservice
DeleteOrder(OrderId:number){
this.BacKSer.deleteOrderBackSer(OrderId)
  this.router.navigate(['/admin'])   
}
//#endregion

//#region Order in the List

UpdateOrder(OrderId:number){
  this.BacKSer.OrderUpdateId=OrderId;
  this.router.navigate(['/update-order'])
}

//#endregion

  constructor(private BacKSer: BackEndService, private router: Router) {

    this.arrCarsType = BacKSer.arrCarType;
    this.arrCarsList = BacKSer.arrCarsList;
    this.arrOrders=BacKSer.MainOrdersTable;
    this.arrUsers=BacKSer.MainUserTable;
  }

  ngOnInit(): void {
  }

}
