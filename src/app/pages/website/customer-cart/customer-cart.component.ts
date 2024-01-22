import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { WebProductsComponent } from '../web-products/web-products.component';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-customer-cart',
  standalone: true,
  imports: [CommonModule, WebProductsComponent],
  templateUrl: './customer-cart.component.html',
  styleUrl: './customer-cart.component.css'
})
export class CustomerCartComponent {
 cartService = inject(CartService)

 deleteCart(item:any){
  this.cartService.delete(item)
 }
}
