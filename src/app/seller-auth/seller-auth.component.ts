import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { signUpSeller } from '../SellerSignup';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  isLogin = false;
  iserror: string= "";
  constructor(private service: ServiceService, private route: Router) { }
  ngOnInit() {
    this.service.reloadSellar();
  }
  signupSellar(data: signUpSeller) {
    debugger;

    this.service.signUpSeller(data)

  }

  signInSellar(data: any) {
    console.warn(data);
    this.service.signInSellar(data);
    this.service.isLoginError.subscribe((error)=>{
      if(error)
      {
        this.iserror="email and password is incorrect";
      }
    })

  }
  openLogin() {
    this.isLogin = true
  }
  openSignUp()
  {
    this.isLogin = false
  }
}
