import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule } from '@angular/forms';
import { AdminmainComponent } from './adminmain/adminmain.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';


@NgModule({
  declarations: [
    AdminmainComponent,
    AdmindashboardComponent,
    UpdateadminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
