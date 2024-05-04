import { Component } from '@angular/core';
import { LoginService } from '../../../Service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {

  constructor(private loginService:LoginService, private router:Router){}

  user = this.loginService.getUser();

  postData = {
    postName:'',
    createdAt:'',
    active:true
  }

  userId:any = this.user.userId;

  onSubmitPost(){
    if(this.postData.postName.trim() == '' ||
    this.postData.postName == null){
      alert("PostName Cannot be Blank")
      return;
    }

    if(this.postData.createdAt.trim() == '' ||
    this.postData.createdAt == null){
      alert("createdAt Cannot be Blank")
      return;
    }


    this.loginService.createPost(this.userId, this.postData).subscribe(
      (res:any)=>{
        alert("Post succefully created");
        this.postData ={
          postName:'',
          createdAt:'',
          active:true
        }
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }

  public logout(){
    this.loginService.logout();
    this.loginService.loginStatusSubject.next(false);
  }

}
