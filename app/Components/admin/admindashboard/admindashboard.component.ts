import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../Service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent implements OnInit{

  posts:any = [];

  constructor(private loginService:LoginService, private router:Router){}


  ngOnInit(): void {
    this.loginService.viewAllPosts().subscribe(
      (res:any)=>{
        this.posts = res;
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
