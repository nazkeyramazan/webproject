import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {CategoryService} from '../category.service';
import {Category} from '../categories';
import {Product} from '../products';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
 
  products: Product[] ;
  categories: Category[];
 
  constructor(
    // private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}
  ngOnInit() {
    this.getCategoryProduct();
    }

  getCategoryProduct() :void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getCategoryBookList(id)
      .subscribe(products => this.products = products);
  }
}


  

 
