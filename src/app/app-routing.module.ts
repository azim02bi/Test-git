import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: SellerAuthComponent, path: 'seller-auth' },
  { component: SellerHomeComponent, path: 'seller-Home', canActivate: [AuthGuard] },
  { component: SellerAddProductComponent, path: 'seller-add-product', canActivate: [AuthGuard] },
  { component: ProductDetailComponent, path: 'product-detail/:id' },
  {component:UserLoginComponent, path: 'userLogin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
