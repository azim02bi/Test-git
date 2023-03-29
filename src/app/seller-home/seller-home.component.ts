import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductList } from '../dataType';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  sellerProductList: ProductList[] = [];
  showupdate = false
  productname: any;
  price: any;
  color: any;
  description: any;
  image: any;
  id: any;
  data: undefined | ProductList;
  constructor(private service: ServiceService, private route: Router) { }

  ngOnInit() {
    debugger;
    this.getSellerProductList();
  }
  getSellerProductList() {
    this.service.getSellerProductList().subscribe((result) => {
      if (result) {

        this.sellerProductList = result;
        console.log(this.sellerProductList);
      }

    })
  }
  delete(id: number) {
    debugger;
    this.service.delete(id).subscribe((result) => {
      console.log(result);
    })
    this.ngOnInit();
  }
  openupdate(id: any) {
    debugger;
    this.showupdate = true;
    this.service.getUpdateProduct(id).subscribe((result) => {
      console.log(result);
      this.data = result;
      this.productname = result.productname;
      this.price = result.price;
      this.color = result.color;
      this.description = result.description;
      this.image = result.image;
      this.id = id;
    });
  }
  update(data: any, id: number) {
    debugger;
    this.service.updateProduct(data, id).subscribe((result) => {
      console.log(result);
      if(result)
      {
        console.log("updated")
      }
      else{
        console.log("failed to update");
      }
    })
    this.showupdate = false;
    this.getSellerProductList();

  }
  cancelUpdate() {
    this.showupdate = false;
    this.getSellerProductList();
  }

}



