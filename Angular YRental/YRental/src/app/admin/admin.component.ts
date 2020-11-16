import { Component, OnInit } from '@angular/core';
import {AdminCarsComponent } from '../admin-cars/admin-cars.component';
import { AdminOrdersComponent} from '../admin-orders/admin-orders.component';
import {AdminUsersComponent } from '../admin-users/admin-users.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
