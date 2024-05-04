import { Component } from '@angular/core';
import { LoginService } from '../../Service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService:LoginService, private router:Router){}

  userdata = {
    username: '',
    password: ''
  }

  onLogin(){
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

    this.loginService.login(this.userdata).subscribe(
      (res:any)=>{
        this.loginService.setToken(res.token);

        this.loginService.getCurrentUser().subscribe(
          (user:any)=>{
            this.loginService.setUser(user);
            // redirect ...ADMIN: admin-dashboard
            if (this.loginService.getUserRole() == 'ADMIN'){
              this.router.navigate(['/admin']);
            }
            // normal user dashbaord
            else if (this.loginService.getUserRole() == 'NORMAL'){
              this.router.navigate(['/user']);
            }
            else{
              this.loginService.logout();
            }
          }
        )

      },
      (err)=>{
        console.log(err);
        alert('Invalid Credentials.....');
      }
    )
  }
}
