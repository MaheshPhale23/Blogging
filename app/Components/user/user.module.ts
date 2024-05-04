import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule } from '@angular/forms';
import { UsermainComponent } from './usermain/usermain.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ViewmypostComponent } from './viewmypost/viewmypost.component';
import { ViewallpostsComponent } from './viewallposts/viewallposts.component';


@NgModule({
  declarations: [
    UsermainComponent,
    UserdashboardComponent,
    ViewmypostComponent,
    ViewallpostsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
