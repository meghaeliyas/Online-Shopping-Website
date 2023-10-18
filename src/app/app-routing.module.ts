import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { GuardserviceService } from './services/guardservice.service';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: '',component:ProductsComponent},
  {path: 'search/:searchItem', component:ProductsComponent},
  {path: 'Result/:category', component:ProductsComponent},
  {path: 'Home',component:ProductsComponent},
  {path:'Detail/:id',component:ProductDetailsComponent},
  {path: 'Login', component:LogInComponent},
  {path: 'SignUp', component:SignUpComponent},
  {path: 'Mycart', component:CartComponent, canActivate:[GuardserviceService]},
  {path: 'AddItem', component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
