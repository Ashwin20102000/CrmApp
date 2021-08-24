import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { CrmService } from './crm.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';
import { CustomerComponent } from './customer/customer.component';
import {MatButtonModule} from '@angular/material/button'
import {MatListModule} from '@angular/material/list'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagerMessageComponent } from './manager-message/manager-message.component';
import { CustomerMessageComponent } from './customer-message/customer-message.component';
const routConfig:Routes = [
  {
    path:'',redirectTo:'/customer',pathMatch:'full'
  },
  {
    path:'customer',component:CustomerComponent
  },
  {
    path:'manager',component:ManagerComponent
  },
  {
    path:'managermessage',component:ManagerMessageComponent
  },
  {
    path:'customermessage',component:CustomerMessageComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ManagerComponent,
    ManagerMessageComponent,
    CustomerMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routConfig,{useHash:true}),
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [CrmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
