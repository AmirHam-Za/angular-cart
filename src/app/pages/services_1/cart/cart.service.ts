import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = JSON.parse(localStorage.getItem('cartItems') || '[]')
  private totaltems: any[] = JSON.parse(localStorage.getItem('cartItems') || '[]')

  addCart(product: any) {
    const existingItem = this.items.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }
  getItems() {
    return this.items
  }
  delete(item: any) {
    this.items = this.items.filter((i) => i.id !== item.id);

    localStorage.setItem('cartItems', JSON.stringify(this.items))
  }



  incrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id)
    if (item) {
      item.quantity++
      localStorage.setItem('cartItems', JSON.stringify(this.items))
    }
  }

  decrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item && item.quantity! >= 2) {
      item.quantity--;
      localStorage.setItem('cartItems', JSON.stringify(this.items));
    }
  }

  getTotal() {
    const total = this.items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    localStorage.setItem('cartTotal', JSON.stringify(total));

    return total;
  }

  getTotalItems(): number {
    const totalItems = this.items.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);

    localStorage.setItem('cartTotalItems', JSON.stringify(totalItems));

    return totalItems;
  }

  clearCartItems() {
    this.items = [];
    localStorage.removeItem('cartItems');
  }

  // In CartService
  isProductInCart(product: any): boolean {
    return this.items.some(item => item.id === product.id);
  }

  getQuantityInCart(product: any): number {
    const cartItem = this.items.find(item => item.id === product.id);
    return cartItem ? cartItem.quantity : 0;
  }
}




















