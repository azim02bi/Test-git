import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductList } from '../dataType';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: any | ProductList;
  responsiveOptions: any;
  productList:any| ProductList[]
  constructor(private service: ServiceService, private route:Router) {

  }
  ngOnInit() {
    this.getallData()
    this.service.spetialProduct().subscribe((result) => {
      this.data = result;
    })
  }
  getallData()
  {
    this.service.getSellerProductList().subscribe((result)=>{
      console.log(result)
      this.productList=result;
    })
  }

  detailPage(id: any) {
    this.route.navigate([`product-detail/${id}`])
  }
}
