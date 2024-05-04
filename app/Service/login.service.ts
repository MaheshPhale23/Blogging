import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient, private router:Router) { }

  setToken(token:string){
    localStorage.setItem('token',token);
  }

  getToken():any{
    return localStorage.getItem('token')
  }

  login(data:any){
    return this.http.post('http://localhost:8001/generate-token',data);
  }

  addUser(data:any){
    return this.http.post('http://localhost:8001/user/',data);
  }

  isLoggedIn(){
    let tokenstr = this.getToken();
    if (tokenstr == undefined || tokenstr == '' || tokenstr == null) {
      return false;
    } else {
      return true;
    }
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }

  getCurrentUser(){
    return this.http.get('http://localhost:8001/current-user');
  }

  public setUser(user:any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      // this.logout();
      return null;
    }
  }

  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  public getAllUsers(){
    return this.http.get('http://localhost:8001/user/');
  }

  public createPost(userId:any,data:any){
    return this.http.post(`http://localhost:8001/posts/user/${userId}/creatPost`,data);
  }

  public viewAllPosts(){
    return this.http.get('http://localhost:8001/posts/posts');
  }

  public getPostsByUser(userId:any){
    return this.http.get(`http://localhost:8001/posts/user/${userId}/posts`);
  }

  public deletePost(postId:any){
    return this.http.delete(`http://localhost:8001/posts/${postId}`);
  }

  public updatePost(post:any, postId:any) {
    return this.http.put(`http://localhost:8001/posts/updatePost/${postId}`, post);
  }

  public getPostById(postId:any){
    return this.http.get(`http://localhost:8001/posts/post/${postId}`);
  }

  public getActivePosts(){
    return this.http.get('http://localhost:8001/posts/active');
  }

  public getActivePostsByUserId(userId:any){
    return this.http.get(`http://localhost:8001/posts/user/${userId}/active`);
  }
}
