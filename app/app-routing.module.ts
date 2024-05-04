import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},

  {
    path:'admin',
    loadChildren:()=>import('./Components/admin/admin.module').then((mod)=>mod.AdminModule)
  },
  {
    path:'user',
    loadChildren:()=>import('./Components/user/user.module').then((mod)=>mod.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
