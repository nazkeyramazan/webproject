import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductListComponent} from './product-list/product-list.component';
import {CategoryComponent} from './category/category.component';
import {CartComponent} from './cart/cart.component';
import{NavComponent} from './nav/nav.component';
import {ShippingComponent} from './shipping/shipping.component';
import{AboutusComponent} from './aboutus/aboutus.component';
import {SignInComponent} from './sign-in/sign-in.component';
import{SignUpComponent} from './sign-up/sign-up.component';
import{MainpageComponent} from './mainpage/mainpage.component'
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'category/:category.id', component: CategoryComponent},
  { path: 'category/:id/products', component: CategoryComponent},
  // { path: 'category', component: CategoryComponent},
  {path : 'mainpage', component:MainpageComponent},
  { path: 'nav' , component: NavComponent},
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'aboutus', component: AboutusComponent },

  {path: 'sign-in', component:SignInComponent},
  {path: 'sign-up', component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }