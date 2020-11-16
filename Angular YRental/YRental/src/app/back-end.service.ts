import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';



@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  //#region 
  // this var will get all the user table from the ctor and var to change user type

  MainUserTable: any;

  userType: number;

  searchAvailbleBackSer: any;

  //#endregion

  //#region add new user
  //main function to add Regular User on Register

  addingRegularUser(Firstname: string, Lastname: string, gender: string, Birthday: string, Email: string, userName: string, Password: string, Picture: string) {

    alert("the system try to Add your deatils")


    this.http1.post("https://localhost:44326//api/Users",
      {
        "User_Type": this.userType, "First_Name": Firstname, "Last_Name": Lastname,
        "Gender": gender, "BirthDay": Birthday, "Email": Email, "User_Name": userName, "Password": Password, "Picture": Picture
      }).subscribe(
        f =>
          setTimeout(() => {
            alert("you are now registered to the system -make your booking")
            this.http1.get("https://localhost:44326//api/Users").subscribe(t => this.MainUserTable = t);

            this.router.navigate(['/main-page'])
          }, 2000)

      )

  }

  //END OF main function to add Regular User on Register
  //#endregion

  //#region main function to delete users
  deleteUser(id: number) {

    this.http1.delete("https://localhost:44326//api/Users/" + id).subscribe(
      f => setTimeout(() => {
        alert("the user deleted")
        this.http1.get("https://localhost:44326//api/Users").subscribe(t => this.MainUserTable = t);

      }, 1000)

    );

  }

  //#endregion

  //#region  main function to update users
  //to save the id of update user
  UserUpdateId: number;
  UserUpdateType: number;

  UpdateUserBackService(Firstname: string, Lastname: string, gender: string, Birthday: string, Email: string, userName: string, Password: string, pic: string) {

    alert(Firstname + Lastname + gender + Birthday + Email + userName + Password + this.UserUpdateId + this.UserUpdateType)

    this.http1.put("https://localhost:44326//api/Users/" + this.UserUpdateId, {
      "User_Type": this.UserUpdateType, "First_Name": Firstname, "Last_Name": Lastname,
      "Gender": gender, "BirthDay": Birthday, "Email": Email, "User_Name": userName, "Password": Password, "Picture": pic
    }).subscribe(
      f =>
        setTimeout(() => {
          alert("user was updtaed")
          this.http1.get("https://localhost:44326//api/Users").subscribe(t => this.MainUserTable = t);
        }, 1000)
    );
  }
  //#endregion

  //#region Car Type function and data

  arrCarType: any;


  addingCarTyPe(Manufactor: string, Model: string, PricePerDay: number, PriceDelay: number, ProductionYear: number, Gear: number) {

    alert("the system try to Add CarType")

    this.http1.post("https://localhost:44326/api/cartype",
      {
        "Manufactor_Name": Manufactor, "Model": Model, "Price_PerDay": PricePerDay,
        "Price_Delay": PriceDelay, "Production_Year": ProductionYear, "Gear": Gear

      }).subscribe(
        f =>
          setTimeout(() => {
            alert("you are now Add Car Type to the system")
            this.http1.get("https://localhost:44326//api/CarType").subscribe(t => this.arrCarType = t);
            this.router.navigate(['/admin'])
          }, 1000)
      )
  }
  //#endregion

  //#region  Delete Car Type 

  deleteCarType(id: number) {

    this.http1.delete("https://localhost:44326//api/CarType/" + id).subscribe(
      f => setTimeout(() => {
        alert("The Car Type Deleted")
        this.http1.get("https://localhost:44326//api/CarType").subscribe(t => this.arrCarType = t);
      }, 1000)
    );
  }

  //#endregion

  //#region  Update Car Type

  //to save the id of Car Type

  CarTypeUpdateId: number;

  UpdateCarTypeBackService(Manufactor: string, Model: string, PricePerDay: number, PriceDelay: number, ProductionYear: number, Gear: number) {



    this.http1.put("https://localhost:44326//api/CarType/" + this.CarTypeUpdateId, {
      "Manufactor_Name": Manufactor, "Model": Model, "Price_PerDay": PricePerDay,
      "Price_Delay": PriceDelay, "Production_Year": ProductionYear, "Gear": Gear
    }).subscribe(
      f =>
        setTimeout(() => {
          alert("Car Type was updtaed")
          this.http1.get("https://localhost:44326//api/CarType").subscribe(t => this.arrCarType = t);
        }, 1000)
    );
  }

  //#endregion

  //#region Update Car From List

  //to save the id of Car Type

  CarListUpdateId: number;

  UpdateCarListBackService(CarTypeId: number, kilometer: number, Undamage: number, Avilable: number, carNumber: string, Branch: number, Picture: string) {

    this.http1.put("https://localhost:44326/api/MainCars/" + this.CarListUpdateId, {
      "Car_Type_ID": CarTypeId, "Kilometer": kilometer, "Picture": Picture,
      "Undamaged": Undamage, "Available": Avilable, "Car_number": carNumber, "Branch_ID": Branch
    }).subscribe(
      f =>
        setTimeout(() => {
          alert("Car was updtaed secccefuly")
          this.http1.get("https://localhost:44326/api/MainCars").subscribe(t => this.arrCarsList = t);
        }, 1000)
    );
  }

  //#endregion

  //#region  get all car list data from server
  arrCarsList: any;
  //#endregion

  //#region Add New Car to server
  addingCarBackSer(CarTypeId: number, kilometer: number, Undamage: number, Avilable: number, carNumber: string, Branch: number, Picture: string) {

    alert("the system try to Add new Car")

    this.http1.post("https://localhost:44326/api/MainCars",
      {
        "Car_Type_ID": CarTypeId, "Kilometer": kilometer, "Picture": Picture,
        "Undamaged": Undamage, "Available": Avilable, "Car_number": carNumber, "Branch_ID": Branch

      }).subscribe(
        f =>
          setTimeout(() => {
            alert("you are now Add New Car to the system")
            this.http1.get("https://localhost:44326/api/MainCars").subscribe(t => this.arrCarsList = t);
            this.router.navigate(['/admin'])
          }, 1000)
      )
  }

  //#endregion

  //#region Delete Car from List
  // will get data from car admin to delete and send to the server

  deleteCarBackSer(id: number) {

    this.http1.delete("https://localhost:44326/api/MainCars/" + id).subscribe(
      f => setTimeout(() => {
        alert("The Car Was Deleted from car List")
        this.http1.get("https://localhost:44326/api/MainCars").subscribe(t => this.arrCarsList = t);
      }, 1000)
    );
  }

  //#endregion

  //#region Get All Orders Data from server

  MainOrdersTable: any;

  //#endregion

  //#region Add New Order





  addingOrderBackSer(CarId: number, StartDate: Date, ReturEstimateDate: Date, ReturnRealDate: Date, UserId: number, OrderStatus: string,
    CarNumber: string, NumberOfDays: number, PricePerDay: number, EstimateCost: number, NumberOfDelay: number, PricePerDelay: number, TotalCost: number) {


       alert("the system try to Add new Order")

      // add new headers of http
    let h = new HttpHeaders();
    h = h.append("Authorization", "basic "+this.UserNameBack+":"+this.PasswordBack);

    this.http1.post("https://localhost:44326/api/Orders",
      {
        "Car_ID": CarId, "Start_Date": StartDate, "Return_Estimate_Date": ReturEstimateDate,
        "Return_Real_Date": ReturnRealDate, "User_ID": UserId, "Order_Status": OrderStatus, "Car_Number": CarNumber,
        "Number_Of_Days": NumberOfDays, "Price_PerDay": PricePerDay, "Estimate_Cost": EstimateCost, "Number_Of_Delay": NumberOfDelay,
        "PricePerDelay": PricePerDelay, "Total_Cost": TotalCost},
        {headers: h,
      
      }).subscribe(
        f =>
          setTimeout(() => {
            alert("you Add New Order to the system")
            this.changeAvailable(CarId)
            this.http1.get("https://localhost:44326/api/Orders").subscribe(t => this.MainOrdersTable = t)
            this.router.navigate(['/main-page'])
          }, 1000)
      )
  }

  //change the car id available on car main list when have reservation
  changeAvailable(carid: number) {

    this.http1.put("https://localhost:44326/available/" + carid, {
      "Available": 1
    }).subscribe(
      f =>
        setTimeout(() => {
          this.http1.get("https://localhost:44326/api/MainCars").subscribe(t => this.arrCarsList = t);
          this.http1.get("https://localhost:44326/search").subscribe(t => this.searchAvailbleBackSer = t);
        }, 1000)
    );
  }

  //#endregion

  //#region Delete order - get data from admim order and send to server

  deleteOrderBackSer(id: number) {

    this.http1.delete("https://localhost:44326/api/Orders/" + id).subscribe(
      f => setTimeout(() => {
        alert("The Order Deleted from Order List")
        this.http1.get("https://localhost:44326/api/Orders").subscribe(t => this.MainOrdersTable = t);
      }, 1000)
    );
  }

  //#endregion

  //#region Update Order From List
  //to save the id of Order
  OrderUpdateId: number;

  UpdateOrderBackService(CarId: number, StartDate: Date, ReturEstimateDate: Date, ReturnRealDate: Date, UserId: number, OrderStatus: string,
    CarNumber: string, NumberOfDays: number, PricePerDay: number, EstimateCost: number, NumberOfDelay: number, PricePerDelay: number, TotalCost: number) {

    this.http1.put("https://localhost:44326/api/Orders/" + this.OrderUpdateId, {

      "Car_ID": CarId, "Start_Date": StartDate, "Return_Estimate_Date": ReturEstimateDate,
      "Return_Real_Date": ReturnRealDate, "User_ID": UserId, "Order_Status": OrderStatus, "Car_Number": CarNumber,
      "Number_Of_Days": NumberOfDays, "Price_PerDay": PricePerDay, "Estimate_Cost": EstimateCost, "Number_Of_Delay": NumberOfDelay,
      "PricePerDelay": PricePerDelay, "Total_Cost": TotalCost

    }).subscribe(
      f =>
        setTimeout(() => {
          alert("Order was updtaed secccefuly")
          this.http1.get("https://localhost:44326/api/Orders").subscribe(t => this.MainOrdersTable = t);
        }, 1000)
    );
  }

  //#endregion

//#region pass data from order to update order
UserIdOfOrder:any;

startHireOrder:any;
endHireOrder:any;

CarIdOfOrder:any;
carTypeOForder:any;
CarNewTypeOfOrder:any
updateString:any;

numberOfDaysOrder:any;
TotalCostOrder:any;

passDataUpdateOrder(){
this.carTypeOForder=this.arrCarsList.filter(x=> x.Car_ID===this.CarIdOfOrder)
// this.carTypeOForder= this.arrCarType.filter(x => x.Car_Type_ID === this.CarIdOfOrder);
console.log(this.carTypeOForder)
this.CarNewTypeOfOrder=this.carTypeOForder[0].Car_Type_ID
this.updateString=this.CarNewTypeOfOrder+") The Car Id Is:"+this.CarIdOfOrder 
}

//#endregion

  //#region Login User
  UserNameBack: any;
  PasswordBack: any;
  UserTypeLoginBack: any;
  UserIdBack: any;
  PictureUserBack: any;



  signUpBackService(username: string, password: string) {

    for (let i = 0; i < this.MainUserTable.length; i++) {

      if (this.MainUserTable[i].User_Name == username && this.MainUserTable[i].Password == password) {
        if (this.MainUserTable[i].User_Type == 0) {

          this.UserNameBack = username;
          //save to local Storage
          localStorage.setItem("UserNameBack", username);


          this.PasswordBack = password;
          //save to local Storage
          localStorage.setItem("PasswordBack", password);

          this.UserIdBack = this.MainUserTable[i].User_ID
          //save to local Storage
          localStorage.setItem("UserIdBack", this.MainUserTable[i].User_ID);

          this.PictureUserBack = this.MainUserTable[i].Picture
          //save to local Storage
          localStorage.setItem("PictureUserBack", this.MainUserTable[i].Picture);

          this.UserTypeLoginBack = 0;
          //save to local Storage
          localStorage.setItem("UserTypeLoginBack", "0");

          alert("Hello Custumer you are now sign in")
          return
        }
        if (this.MainUserTable[i].User_Type == 1) {
          this.UserNameBack = username;
          //save to local Storage
          localStorage.setItem("UserNameBack", username);

          this.PasswordBack = password;
          //save to local Storage
          localStorage.setItem("PasswordBack", password);

          this.UserIdBack = this.MainUserTable[i].User_ID
          //save to local Storage
          localStorage.setItem("UserIdBack", this.MainUserTable[i].User_ID);

          this.PictureUserBack = this.MainUserTable[i].Picture
          //save to local Storage
          localStorage.setItem("PictureUserBack", this.MainUserTable[i].Picture);

          this.UserTypeLoginBack = 1;
          //save to local Storage
          localStorage.setItem("UserTypeLoginBack", "1");
          alert("Hello Worker you are now sign in")
          return
        }
        if (this.MainUserTable[i].User_Type == 2) {
          this.UserNameBack = username;
          //save to local Storage
          localStorage.setItem("UserNameBack", username);

          this.PasswordBack = password;
          //save to local Storage
          localStorage.setItem("PasswordBack", password);

          this.UserIdBack = this.MainUserTable[i].User_ID
          //save to local Storage
          localStorage.setItem("UserIdBack", this.MainUserTable[i].User_ID);

          this.PictureUserBack = this.MainUserTable[i].Picture
          //save to local Storage
          localStorage.setItem("PictureUserBack", this.MainUserTable[i].Picture);

          this.UserTypeLoginBack = 2;
          //save to local Storage
          localStorage.setItem("UserTypeLoginBack", "2");
          alert("Hello Manager you are now sign in")
          return
        }

      }
    }

    alert("you are not in the system- please register")

  }

  //#endregion

  //#region  car remember when serach on get car

  element = 1;
  CarRemember(search1: string) {

      if (this.element == 1) {
        //save to local Storage
        localStorage.setItem("CarSearch1", search1);
        this.element++;

      }
     else if (this.element == 2) {
        //save to local Storage
        localStorage.setItem("CarSearch2", search1);
        this.element++;
      }
      else if (this.element == 3) {
        //save to local Storage
        localStorage.setItem("CarSearch3", search1);
        this.element++;
      }
      else if (this.element > 3) {
        //save to local Storage
        this.element=1;
        this.CarRemember(search1)
      }
  }


  //#endregion

  //#region UserSearch select

  StartDateBack: any;
  EndDateBack: any;
  TotalNumberDaysBack: any;
  gearSelectBack: any;
  ManufatorSelectBack: any;

  ChangedSelectedUser(start: Date, end: Date, totalNum: number, manufactor: string, gear: string) {
    this.StartDateBack = start;
    this.EndDateBack = end;
    this.TotalNumberDaysBack = totalNum;
    this.gearSelectBack = gear;
    this.ManufatorSelectBack = manufactor;
  }

  //#endregion

  //#region  to pass data from search result to get car
  GetCarIdBackSer: any;
  EndBackSer: Date;
  startBackSer: Date;
  carTypeBackSer: any;
  CarNumberFromIdBackSer: any;
  manufactorBackSer: any;
  modelBackSer: any;
  productionYearBackSer: any;
  gearBackSer: any;
  PricePerDayBackSer: any;
  priceDelayBackSer: any;
  totalDaysBackSer: any;

  //#endregion


  constructor(private http1: HttpClient, private router: Router) {
    // this will get all user data table when upload the page
    this.http1.get("https://localhost:44326//api/Users").subscribe(t => this.MainUserTable = t);
    // this will get all cars type data table when upload the page
    this.http1.get("https://localhost:44326//api/CarType").subscribe(t => this.arrCarType = t);
    // this will get all cars list data table when upload the page
    this.http1.get("https://localhost:44326/api/MainCars").subscribe(t => this.arrCarsList = t);
    // this will get all orders list data table when upload the page
    this.http1.get("https://localhost:44326/api/Orders").subscribe(t => this.MainOrdersTable = t);
    // this will get all search available car table when upload the page
    this.http1.get("https://localhost:44326/search").subscribe(t => this.searchAvailbleBackSer = t);



  }
}
