import { Injectable } from '@angular/core';

// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // private items:any[] =[]
  private items:any[] = JSON.parse(localStorage.getItem('cartItems') || '[]')
  private totaltems:any[] = JSON.parse(localStorage.getItem('cartItems') || '[]')


  // private cartItemsSubject = new BehaviorSubject<any[]>([]);
  // cartItems$ = this.cartItemsSubject.asObservable();
  // constructor() { }

  // addCart(product: any){
  //   // this.items.push(product)
  //   this.items.push({...product, quantity: 1})
  //   // save to local storage
  //   localStorage.setItem('cartItems', JSON.stringify(this.items))
  // }


  addCart(product: any) {
    const existingItem = this.items.find(item => item.id === product.id);
    
    
    // const currentCartItems = this.cartItemsSubject.value;
    // this.cartItemsSubject.next([...currentCartItems, { ...product, quantity: 1 }]);

    if (existingItem) {
      // If the product with the same ID already exists, increase the quantity
      existingItem.quantity += 1;
    } else {
      // If it's a new product, add it to the cart with quantity 1
      this.items.push({ ...product, quantity: 1 });
    }
  
    // Save the updated cart to local storage
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }
  getItems(){
    return this.items
  }
  // delete(item: any){
  //   this.items = this.items.filter((i) => i.id !== item.id)
  // }
  delete(item: any) {
    // this.items = this.items.filter((i) => i.productId !== item.productId);
    this.items = this.items.filter((i) => i.id !== item.id);

    localStorage.setItem('cartItems', JSON.stringify(this.items))

  }


  totalPricePerItem(product: any): number {
  const cartItem = this.items.find(item => item.id === product.id);
  // return cartItem ? cartItem.price * cartItem.quantity : 0;
  return  cartItem.price * cartItem.quantity;

  }
  incrementQuantity(id:number){
    // let item = this.items.find((i) => i.productId === id)
    let item = this.items.find((i) => i.id === id)
      if(item){
      item.quantity++
      localStorage.setItem('cartItems', JSON.stringify(this.items))
    }
  }
  decrementQuantity(id:number){
    // let item = this.items.find((i) => i.productId === id)
    let item = this.items.find((i) => i.id === id)
      if(item){
      item.quantity--
      localStorage.setItem('cartItems', JSON.stringify(this.items))
      console.log()
    }
  }
  // getTotal(){
  //   return this.items.reduce((acc, item) => {
  //     // return acc + item.productPrice * item.quantity
  //     return acc + item.price * item.quantity
  //   }, 0)
  //   }

  getTotal() {
    const total = this.items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  
    // Store the total in localStorage
    localStorage.setItem('cartTotal', JSON.stringify(total));
  
    return total;
  }
  
  // getTotalItems() : number{
  //   return this.items.reduce((acc, item) => {
  //     return acc + item.quantity * 1
  //   }, 0)
  //   }
  getTotalItems(): number {
    const totalItems = this.items.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  
    // Store the total items in localStorage
    localStorage.setItem('cartTotalItems', JSON.stringify(totalItems));
  
    return totalItems;
  }
  


// In CartService
getTotalPriceForAllItems(): number {
  return this.items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
}




    // In CartService
isProductInCart(product: any): boolean {
  return this.items.some(item => item.id === product.id);
}

getQuantityInCart(product: any): number {
  const cartItem = this.items.find(item => item.id === product.id);
  return cartItem ? cartItem.quantity : 0;
}

getTotalPriceForProduct(product: any): number {
  const cartItem = this.items.find(item => item.id === product.id);
  return cartItem ? cartItem.price * cartItem.quantity : 0;
}



  }

  















  


