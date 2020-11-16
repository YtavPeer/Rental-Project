import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worker-page',
  templateUrl: './worker-page.component.html',
  styleUrls: ['./worker-page.component.css']
})
export class WorkerPageComponent implements OnInit {



//#region //bring all car  list from back ser service
arrCarsList:any;
arrOrders: any;
arrCarsType: any;
arrUsers:any;
//#endregion

// serach bar field
searchbar:any="";

// to change the car to return car
ReturnCar(carId:number){
  this.BacKSer.changeAvailable(carId);
  alert("car returend to the list")
  this.router.navigate(['/main-page'])
}
//end of change return



//#region Order in the List

UpdateOrder(OrderId:number,userId:number,carId:number,start:Date,end:Date,numberOFdays:number,totalCost:number){
  this.BacKSer.OrderUpdateId=OrderId;
  this.BacKSer.UserIdOfOrder=userId;
  this.BacKSer.CarIdOfOrder=carId;
  this.BacKSer.startHireOrder=start;
  this.BacKSer.endHireOrder=end;
  this.BacKSer.numberOfDaysOrder=numberOFdays;
  this.BacKSer.TotalCostOrder=totalCost;
  this.BacKSer.passDataUpdateOrder()
  this.router.navigate(['/update-order'])
 }
 
 //#endregion
 
 



constructor(private BacKSer:BackEndService, private router:Router) {
    
this.arrCarsList=BacKSer.arrCarsList;
this.arrCarsType = BacKSer.arrCarType;
this.arrOrders=BacKSer.MainOrdersTable;
this.arrUsers=BacKSer.MainUserTable;

  }

  ngOnInit(): void {
  }

}




