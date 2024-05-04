import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../Service/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewallposts',
  templateUrl: './viewallposts.component.html',
  styleUrl: './viewallposts.component.css'
})
export class ViewallpostsComponent implements OnInit {

  posts:any = [];

  constructor(private loginService:LoginService, private route:ActivatedRoute){}


  ngOnInit(): void {

    this.loginService.getActivePosts().subscribe(
      (res:any)=>{
        this.posts = res;
      }
    )

  }



}
