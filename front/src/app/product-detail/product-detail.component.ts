import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products,Product } from '../products';
import { CartService } from '../cart.service';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})


export class ProductDetailComponent {
  products = products;
  product;
  constructor(
      private route: ActivatedRoute,
      private productService: ProductService,
      private cartService: CartService,
      private router: Router
    ) { }
    ngOnInit() {
        this.getProduct();
    
    }
    getProduct() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.productService.getBookDetail(id).subscribe(product => this.product = product);
    }
    addToCart(product) {
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }
    
  

// share(product:Product):void {
//      window.alert(`The ${product.name} has been shared!`);

//   }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
