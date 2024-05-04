import { Component } from '@angular/core';
import { LoginService } from '../../Service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private loginService:LoginService, private router:Router){}

  userdata = {
    username: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  onRegister(){
    if(this.userdata.username.trim() == '' ||
    this.userdata.username == null){
      alert("Username Cannot be Blank")
      return;
    }
    if(this.userdata.password.trim() == '' ||
    this.userdata.password == null){
      alert("Passowrd Cannot be Blank")
      return;
    }
    if(this.userdata.firstName.trim() == '' ||
    this.userdata.firstName == null){
      alert("firstName Cannot be Blank")
      return;
    }
    if(this.userdata.lastName.trim() == '' ||
    this.userdata.lastName == null){
      alert("lastName Cannot be Blank")
      return;
    }

    this.loginService.addUser(this.userdata).subscribe(
      (res:any)=>{
        alert("User registered succefully");

        this.userdata = {
          username: '',
          password: '',
          firstName: '',
          lastName: ''
        }
      },
      (err)=>{
        console.log(err);
        alert('Username Already Exists.....');
      }
    )
  }
}
