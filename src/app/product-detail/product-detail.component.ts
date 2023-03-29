import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductList } from '../dataType';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  id: any;
  product:any
  constructor(private service: ServiceService, private router: ActivatedRoute) { }
  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    console.log(id)
    if (id != null) {
      this.service.getSigleProductDetail(id).subscribe((data) => {
this.product=data
      })
    }
  }
}
