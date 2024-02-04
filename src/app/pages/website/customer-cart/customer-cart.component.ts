import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject} from '@angular/core';
import { WebProductsComponent } from '../web-products/web-products.component';
import { CartService } from '../../services/cart/cart.service';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-customer-cart',
  standalone: true,
  imports: [CommonModule, WebProductsComponent],
  templateUrl: './customer-cart.component.html',
  styleUrl: './customer-cart.component.css'
})
export class CustomerCartComponent implements OnInit {
 cartService = inject(CartService)
 item: number = 0;
 itemTotal: number = 0;

 product: any; // Assume you have a product model

 @Input() productNames: string[] = [];
// *****************************
// sharedService
 constructor(
  private sharedService: SharedService,
  private cartSrv: CartService
  ) { }
  // ngOnInit() {
  //   this.updateItemCount()
  //   this.updateItemTotal()
  // }
  async ngOnInit() {
    await this.initializeCartData();
  }
  
  private async initializeCartData(): Promise<void> {
    await this.updateItemTotal();
    // await this.updateItemCount();
  
  
  
  
  
  
  }
  
  
  
  
  updateItemTotal() {
    this.itemTotal = this.cartSrv.getTotal();
    // If you want to share the item count with other components
    this.sharedService.updateItems(this.itemTotal);
  }
  // updateItemCount() {
  //   this.item = this.cartSrv.getTotalItems();
  //   // If you want to share the item count with other components
  //   this.sharedService.updateItems(this.item);

    
  // }
  // *********************************************
//  getAllItems() {
//   // Logic to get all items
//   const items = 0; // your items calculation
//   this.sharedService.updateTotal(items);
//   console.log('FUCKKKKKK',items)
// }

// getTotal() {
//   // Logic to get total
//   const total = 0; // your total calculation
//   this.sharedService.updateTotal(total);
// }
// ****************************
 deleteCart(item:any){
  this.cartService.delete(item)
 }
 
}
