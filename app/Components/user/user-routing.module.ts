import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsermainComponent } from './usermain/usermain.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ViewmypostComponent } from './viewmypost/viewmypost.component';
import { ViewallpostsComponent } from './viewallposts/viewallposts.component';

const routes: Routes = [

  {
    path:'',
    component:UsermainComponent,
    children:[
      {path:'', redirectTo:'user-dashboard', pathMatch:'full'},
      {path:'user-dashboard', component:UserdashboardComponent},
      {path:'mypost/:userId', component:ViewmypostComponent},
      {path:'allPosts', component:ViewallpostsComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
