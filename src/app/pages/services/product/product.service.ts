import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getCategory(){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY)
    
  }
  getProducts(){
    // return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT)
    return this.http.get('https://dummyjson.com/products')
  }
  getProductsByCategory(id:number){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCTS_BY_CATEGORY + id)
    // return this.http.get(Constant.API_END_POINT + 'GetAllProductsByCategoryId?id=' + id)
  }
  saveProduct(obj: any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT, obj)
  }
  updateProduct(obj: any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.UPDATE_PRODUCT, obj)
  }
  deleteProduct(id: any){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.DELETE_PRODUCT + id)
  }
}
