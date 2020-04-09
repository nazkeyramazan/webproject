import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { categories } from './categories';


import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
 
  constructor() { }

  getCategory(id: number): Observable<any> {
    return of(categories.find(category => category.id === id));
  }

  getCategories(): Observable<any> {
    return of(categories);
  }
}