import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../Service/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewmypost',
  templateUrl: './viewmypost.component.html',
  styleUrl: './viewmypost.component.css'
})
export class ViewmypostComponent implements OnInit{

  user = this.loginService.getUser();
  posts:any = [];
  postId = 0;

  userId = this.user.userId;

  constructor(private loginService:LoginService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.loginService.getActivePostsByUserId(this.userId).subscribe(
      (res:any)=>{
        this.posts = res;
      }
    )
  }

  onDelete(postId:any){
    this.loginService.deletePost(postId).subscribe(
      (res:any)=>{
        this.posts = this.posts.filter((posts1: { postId: any; }) => posts1.postId !== postId);
      alert("Post Deleted Successfully");
      }
    )
  }

}
