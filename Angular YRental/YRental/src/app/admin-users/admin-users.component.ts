import { Component, OnInit } from '@angular/core';
import {BackEndService } from '../back-end.service';
import { Router, RouterModule } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import {UserTypePipe} from '../user-type.pipe';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css'],
  providers: [UserTypePipe]
})
export class AdminUsersComponent implements OnInit {

//#region  to get all data from back service+ change the user type when add users
  //get from backEnd Service all the users data
  arrUsers: any;

userType(usertype1:number){
  
  this.BacKSer.userType=usertype1;
  this.router.navigate(['/register'])

}
//#endregion


//#region this function to delete user- it will send to the back service the id and then navigate back to the admin
DeleteUser(userType:number){
this.BacKSer.deleteUser(userType);
this.router.navigate(['/admin'])
}
//#endregion



//#region  function to update users
UpdateUser(id: number ,Type: number){
  
  alert(id+"and"+Type);
  this.BacKSer.UserUpdateId=id;
  this.BacKSer.UserUpdateType=Type;
  this.router.navigate(['/update-user'])
}
//#endregion

  

  constructor(private BacKSer:BackEndService, private router:Router) {

    this.arrUsers=BacKSer.MainUserTable;

   }

  ngOnInit(): void {

  }


}
