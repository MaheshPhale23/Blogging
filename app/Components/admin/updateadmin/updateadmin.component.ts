import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../Service/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateadmin',
  templateUrl: './updateadmin.component.html',
  styleUrl: './updateadmin.component.css'
})
export class UpdateadminComponent implements OnInit{

  postdata:any = []
  postId = 0;

  constructor(private loginService:LoginService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.postId = parseInt(this.route.snapshot.params['postId'], 10);
    this.loginService.getPostById(this.postId).subscribe(
      (data:any)=>{
        this.postdata = data;
      }
    )
  }

  onUpdate(){
    this.loginService.updatePost(this.postdata, this.postId).subscribe(
      (res:any)=>{
        alert("Post Updated Successfully")
      }
    )
  }
}
