import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType: string ="default";
  loginSeller: string="";
  constructor(private router: Router) { }
  ngOnInit() {
    this.router.events.subscribe((data: any) => {

      if (data.url) {
       
        if (localStorage.getItem("signInSellar") && data.url.includes('seller')) {
          let sellerStore=localStorage.getItem("signInSellar");
          let SellerData = sellerStore && JSON.parse(sellerStore)[0];
          this.loginSeller=SellerData.email;
          this.menuType ="seller";
        }
        else {
          this.menuType = "default"
        }
      }
    })
  }
  logout(){
    localStorage.removeItem("signInSellar");
    this.router.navigate([''])
  }
  
}
