import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeroesComponent } from './heroes/heroes.component';
// import { DashboardComponent }   from './dashboard/dashboard.component';
// import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductListComponent} from './product-list/product-list.component';
import {CategoryComponent} from './category/category.component';
import {CartComponent} from './cart/cart.component';
import {ShippingComponent} from './shipping/shipping.component';
import{AboutusComponent} from './aboutus/aboutus.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'category/:id', component: CategoryComponent},
  { path: 'category', component: CategoryComponent},
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'aboutus', component: AboutusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }