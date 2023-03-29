import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  success: string ="";
constructor(private service:ServiceService){}
  addSellerProduct(data:any)
  {
   
    this.service.addSellerProduct(data).subscribe((result)=>{
      console.log(result);
      this.success="product added successfully";
    })
    setTimeout(() => {
      this.success=""
    }, 3000);

  }
}
