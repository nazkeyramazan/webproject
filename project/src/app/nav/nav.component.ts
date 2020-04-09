import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {categories} from '../categories';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  categories: any;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

}
