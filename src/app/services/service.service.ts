import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signUpSeller, LoginSeller } from '../SellerSignup';
import { BehaviorSubject } from 'rxjs'
import { Router } from '@angular/router';
import { ProductList } from '../dataType';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  isSellerLogin = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient, private route: Router) { }

  signUpSeller(data: signUpSeller) {
    debugger;
    this.http.post('http://localhost:3000/signUpSeller', data, { observe: "response" }).subscribe((result) => {
      console.warn(result);
      if (result) {

        localStorage.setItem('seller', JSON.stringify(result.body))
        this.route.navigate(['/seller-Home'])
      }
    })
  }
  reloadSellar() {
    if (localStorage.getItem('seller')) {

      this.isSellerLogin.next(true);
      this.route.navigate(['/seller-Home'])
    }
    if (localStorage.getItem('signInSellar')) {
      this.isSellerLogin.next(true);
      this.route.navigate(['/seller-Home'])
    }
  }

  signInSellar(data: LoginSeller) {
    debugger;
    this.http.get(`http://localhost:3000/signUpSeller?email=${data.email}&password=${data.password}`, { observe: 'response' }).subscribe((result: any) => {
      console.log(result.body);
      if (result && result.body && result.body.length === 1) {
        this.isLoginError.emit(false)
        localStorage.setItem('signInSellar', JSON.stringify(result.body))
        console.log('login');
        this.isSellerLogin.next(true);
        this.route.navigate(['/seller-Home'])
      }
      else {
        console.warn('login failed')
        this.isLoginError.emit(false)
      }
    })
  }

  addSellerProduct(data: any) {
    return this.http.post('http://localhost:3000/AddSellarProducts', data)
  }
  getSellerProductList() {
    return this.http.get<ProductList[]>('http://localhost:3000/AddSellarProducts')
  }

  delete(id: number) {
    return this.http.delete('http://localhost:3000/AddSellarProducts/' + id)
  }

  getUpdateProduct(id: number) {
    return this.http.get<ProductList>('http://localhost:3000/AddSellarProducts/' + id)
  }
  updateProduct(data: any, id: number) {
    debugger;
    return this.http.put<ProductList>(`http://localhost:3000/AddSellarProducts/${id}`, data)
  }

  spetialProduct() {
    return this.http.get<ProductList>('http://localhost:3000/AddSellarProducts?_limit=5')
  }

  getSigleProductDetail(id: string) {
    return this.http.get<ProductList>(`http://localhost:3000/AddSellarProducts/${id}`);
  }
  // user registration
  userRegistration(data: any) {
    return this.http.post('http://localhost:3000/userRegistration', data)
  }
}
