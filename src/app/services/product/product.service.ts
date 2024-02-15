import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
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
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY)
  }
  getProducts() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT)
  }
  featuredProducts() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_FEATURED_PRODUCT)
  }

  addCart(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.ADD_CART, obj)
  }

  saveCart(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.ADD_CART, obj)
  }
  // getCategoryProducts(obj: any) {
  //   return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_CATEGORY_PRODUCT, obj)
  // }

  // getCategoryProducts(slug: string): Observable<Product[]> {
  //   return this.http.get<Product[]>(`${this.apiUrl}${slug}`);
  // }

  // getCategoryProducts(category: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/products/category/${category}`);
  // }


  getCategoryProducts(category: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/category/${category}`);
  }
  
}
