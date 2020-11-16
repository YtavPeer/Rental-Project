import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

//#region  upload image
// all the system to convert the upluad image to bash 64 

UserPictureBash64: string;
  
UploadImage(event) {

  var reader = new FileReader();
  if (event.target.files && event.target.files.length > 0) {
    var file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      let a: string;
       a=(reader.result.toString().split(',')[1]);
       alert("your picture is upload to the system, now please complete and click the register buttum")
       this.UserPictureBash64=a; 
    };
  }
  }

// end of system that convert the image to base64
//#endregion


//#region  add regular user

myRadioGENDER:string;




UpdateUser(Firstname: string, Lastname: string,  Birthday: string, Email: string, userName: string, Password: string){

this.BacKSer.UpdateUserBackService(Firstname,Lastname,this.myRadioGENDER,Birthday,Email,userName,Password,this.UserPictureBash64)

this.router.navigate(['/admin'])


}

//#endregion


  constructor(private BacKSer:BackEndService,private router:Router) { }

  ngOnInit(): void {
  }

}











