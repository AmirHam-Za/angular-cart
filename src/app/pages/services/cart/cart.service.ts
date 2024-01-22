import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items:any[] =[]

  constructor() { }

  addCart(product: any){
    // this.items.push(product)
    this.items.push({...product, quantity: 1})
  }
  getItems(){
    return this.items
  }
  // delete(item: any){
  //   this.items = this.items.filter((i) => i.id !== item.id)
  // }
  delete(item: any) {
    this.items = this.items.filter((i) => i.productId !== item.productId);
  }
  incrementQuantity(id:number){
    let item = this.items.find((i) => i.productId === id)
      if(item){
      item.quantity++
    }
  }
  decrementQuantity(id:number){
    let item = this.items.find((i) => i.productId === id)
      if(item){
      item.quantity--
    }
  }
  getTotal(){
    return this.items.reduce((acc, item) => {
      return acc + item.productPrice * item.quantity
    }, 0)
    }
  }

  


