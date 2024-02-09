import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }
  getCategory() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY)
  }
  getProducts() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT)
  }

  addCart(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.ADD_CART, obj)
  }

  saveCart(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.ADD_CART, obj)
  }

}