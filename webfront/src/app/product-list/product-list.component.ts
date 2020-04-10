import { Component, OnInit } from '@angular/core';

import { products } from '../products';
import { ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products=products;

  constructor(private productService: ProductService) {}


  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    // tslint:disable-next-line:no-shadowed-variable
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  
  share(product) {
     const url: string = window.location.href + '/' + product.id;
      window.alert(`The product ${ product.name } has been shared!`);
      window.open(`https://api.whatsapp.com/send?phone=77075196961&text=Look+at+this+product+${ product.name }+here+${ product.link }`);
    }

   

  }

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/