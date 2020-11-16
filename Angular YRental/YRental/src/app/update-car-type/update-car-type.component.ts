import { Component, OnInit } from '@angular/core';
import {BackEndService } from '../back-end.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-car-type',
  templateUrl: './update-car-type.component.html',
  styleUrls: ['./update-car-type.component.css']
})
export class UpdateCarTypeComponent implements OnInit {



GearChoice:any;

UpdateCarType(Manufactor:string,Model: string, PricePerDay: number, PriceDelay:number, ProductionYear:number){

this.BacKSer.UpdateCarTypeBackService(Manufactor,Model,PricePerDay,PriceDelay,ProductionYear,this.GearChoice)

this.router.navigate(['/admin'])

}



  constructor(private BacKSer:BackEndService,private router:Router) { }
  ngOnInit(): void {
  }

}
