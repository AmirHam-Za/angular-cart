import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-addtocart',
  standalone: true,
  imports: [
    CommonModule,

  ],
  templateUrl: './addtocart.component.html',
  styleUrl: './addtocart.component.css'
})
export class AddToCartButtonComponent {
  @Input() product: any;
  quantity: number = 0;

  constructor(private cartService: CartService) { }

  addToCart() {
    this.cartService.addCart(this.product);
    console.log('Cart clicked');
  }
}
