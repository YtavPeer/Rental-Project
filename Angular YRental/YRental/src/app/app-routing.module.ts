import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import {AdminComponent } from './admin/admin.component';
import {AdminCarsComponent } from './admin-cars/admin-cars.component';
import { AdminOrdersComponent} from './admin-orders/admin-orders.component';
import {AdminUsersComponent } from './admin-users/admin-users.component';
import {UpdateUserComponent } from './update-user/update-user.component';
import { AddCarTypeComponent} from './add-car-type/add-car-type.component';
import { UpdateCarTypeComponent } from './update-car-type/update-car-type.component';
import { AddCarComponent } from './add-car/add-car.component';
import { UpdateCarListComponent } from './update-car-list/update-car-list.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { WorkerPageComponent } from './worker-page/worker-page.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { GetCarComponent } from './get-car/get-car.component';

const routes: Routes = [

  {path: '', redirectTo: 'main-page', pathMatch: 'full'  },
  { path: "main-page", component: MainPageComponent },
  { path: "contact", component: ContactComponent },
  { path: "register", component: RegisterComponent },
  { path: "admin", component: AdminComponent },
  { path: "admin-cars", component: AdminCarsComponent },
  { path: "admin-orders", component: AdminOrdersComponent },
  { path: "admin-users", component: AdminUsersComponent },
  { path: "update-user", component: UpdateUserComponent },
  { path: "add-car-type", component: AddCarTypeComponent },
  { path: "update-car-type", component: UpdateCarTypeComponent },
  { path: "add-car", component: AddCarComponent },
  { path: "update-car-list", component: UpdateCarListComponent  },
  { path: "add-order", component: AddOrderComponent},
  { path: "update-order", component: UpdateOrderComponent  },
  { path: "manage-booking", component: ManageBookingComponent  },
  { path: "worker-page", component: WorkerPageComponent  },
  { path: "search-result", component: SearchResultComponent  },
  { path: "get-car", component: GetCarComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
