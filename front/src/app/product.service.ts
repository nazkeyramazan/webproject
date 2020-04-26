import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { products } from './products';
import {HttpClient} from "@angular/common/http";
import{LoginResponse} from './categories';
import{Vacancy,Product} from './products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  // getProduct(id: number): Observable<any> {
  //   return of(products.find(product => product.id === id));
  // }
  // getProducts(): Observable<any> {
  //   // 
  //   return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/books/`);
  // }
  // getProductsByCategoryId(id: number): Observable<any> {
  //   return of(products.filter(product => product.category_id === id));
  // }

  getCategoryBookList(id): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/${id}/books/`);
  }
  getBookList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/books/`);
  }

  getBookDetail(id): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.BASE_URL}/api/books/${id}/`);
  }
  
  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    })
  }

}


// }