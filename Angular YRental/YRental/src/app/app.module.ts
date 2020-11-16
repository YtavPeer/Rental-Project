import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import {HttpClientModule} from '@angular/common/http';
import { BackEndService } from './back-end.service';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminCarsComponent } from './admin-cars/admin-cars.component';
import { UserTypePipe } from './user-type.pipe';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddCarTypeComponent } from './add-car-type/add-car-type.component';
import { UpdateCarTypeComponent } from './update-car-type/update-car-type.component';
import { AddCarComponent } from './add-car/add-car.component';
import { UpdateCarListComponent } from './update-car-list/update-car-list.component';
import { OrderStatusPipe } from './order-status.pipe';
import { AddOrderComponent } from './add-order/add-order.component';
import { CalculatorDaysService } from './calculator-days.service';
import { NgxDateRangeModule } from 'ngx-daterange';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { WorkerPageComponent } from './worker-page/worker-page.component';
import { UserManagePipe } from './user-manage.pipe';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { SearchResultComponent } from './search-result/search-result.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterCarPipe } from './filter-car.pipe';
import { GetCarComponent } from './get-car/get-car.component';
import { WorkerpipePipe } from './workerpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    ContactComponent,
    SearchComponent,
    RegisterComponent,
    AdminComponent,
    AdminUsersComponent,
    AdminOrdersComponent,
    AdminCarsComponent,
    UserTypePipe,
    UpdateUserComponent,
    AddCarTypeComponent,
    UpdateCarTypeComponent,
    AddCarComponent,
    UpdateCarListComponent,
    OrderStatusPipe,
    AddOrderComponent,
    UpdateOrderComponent,
    ManageBookingComponent,
    WorkerPageComponent,
    UserManagePipe,
    SearchResultComponent,
    FilterCarPipe,
    GetCarComponent,
    WorkerpipePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDateRangeModule,
    ReactiveFormsModule,
    DateRangePickerModule,
    StorageServiceModule,
    Ng2SearchPipeModule
  ],

  providers: [BackEndService,CalculatorDaysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
