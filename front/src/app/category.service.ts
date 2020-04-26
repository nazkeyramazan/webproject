import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {  Category } from './categories';
import {Product} from './products';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  BASE_URL = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  // getCategory(id: number): Observable<any> {
  //   return of(categories.find(category => category.id === id));
  // }

  // getCategories(): Observable<any> {
  //   return of(categories);
  // }

  getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`);
  }

  getCategoryDetail(id): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/api/categories/${id}/`);
  }

  getCategoryBookList(id): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/${id}/books/`);
  }
 
}