import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import {RegisterComponent  } from '../register/register.component';
import {BackEndService } from '../back-end.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

usernameHeaders:any;
passwordHeaders:any
UserTypeHeaders:any;


  SignUp(user:string,password:string){
    this.BacKSer.signUpBackService(user,password);
    this.usernameHeaders=this.BacKSer.UserNameBack;
    this.passwordHeaders=this.BacKSer.PasswordBack;
    this.UserTypeHeaders=this.BacKSer.UserTypeLoginBack;

  }


  //#region  func for make type of user 0= client in the service 

  userType(usertype1:number){

   
    this.BacKSer.userType=usertype1;
  
    this.router.navigate(['/register'])
  
  }
  //#endregion
  
  
  constructor(private BacKSer:BackEndService, private router:Router) { 

   this.usernameHeaders=localStorage.getItem("UserNameBack")
   this.passwordHeaders=localStorage.getItem("PasswordBack")
   this.UserTypeHeaders=localStorage.getItem("UserTypeLoginBack")

  }

  ngOnInit(): void {
  }

}
