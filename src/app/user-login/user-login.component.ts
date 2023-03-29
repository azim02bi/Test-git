import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  islogin = false
  constructor(private service: ServiceService, private route:Router) {

  }
  userRegister(data: any) {
    this.service.userRegistration(data).subscribe((result) => {
      console.log(result);
      if(result)
      {
       this.islogin=true
      }
    })
    console.log(data)
  }
  signUp()
  {
    this.islogin=false
  }
  gotologin()
  {
    this.islogin=true
  }
}
