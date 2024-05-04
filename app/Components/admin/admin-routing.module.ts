import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminmainComponent } from './adminmain/adminmain.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';

const routes: Routes = [
  {
    path:'',
    component:AdminmainComponent,
    children:[
      {path:'', redirectTo:'admin-dashboard', pathMatch:'full'},
      {path:'admin-dashboard', component:AdmindashboardComponent},
      {path:'update-admin/:postId', component:UpdateadminComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
