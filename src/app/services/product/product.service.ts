import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com';
  
  constructor(
    private http: HttpClient
  ) { }

  
  getCategory() {
    return this.http.get(this.apiUrl + `${'/products/categories'}`)
  }
  getProducts() {
    return this.http.get(this.apiUrl + `${'/products'}`)
  }
  featuredProducts() {
    return this.http.get(this.apiUrl + `${'/products?limit=12'}`)
  }

  getCategoryProducts(category: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/category/${category}`);
  }

}
