import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject} from '@angular/core';
import { WebProductsComponent } from '../web-products/web-products.component';
import { CartService } from '../../services/cart/cart.service';
import { SharedService } from '../../services/shared/shared.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-customer-cart',
  standalone: true,
  imports: [CommonModule, WebProductsComponent,HttpClientModule],
  templateUrl: './customer-cart.component.html',
  styleUrl: './customer-cart.component.css'
})
export class CustomerCartComponent implements OnInit {
  // http: any;
  cartItems: any[] = []; 

submitForm() {
throw new Error('Method not implemented.');
}
 cartService = inject(CartService)
 item: number = 0;
 itemTotal: number = 0;
 product: any; 

 totalPrice : number
 totalItems : number
//  cartItems : any
 @Input() productNames: string[] = [];
// *****************************
// sharedService
 constructor(
  private sharedService: SharedService,
  private cartSrv: CartService,
  private http: HttpClient,
  private titleService: Title
  ) { 

     const storedTotal = localStorage.getItem('cartTotal');
     if (storedTotal) {
       this.totalPrice = parseFloat(storedTotal);
     } else {
       this.totalPrice = 0;
     }
     console.log('getTotalPrice>>>>>>',this.totalPrice)


  const storedTotalItems = localStorage.getItem('cartTotalItems');
  if (storedTotalItems) {
    this.totalItems = parseFloat(storedTotalItems);
  } else {
    this.totalItems = 0;
  }
  console.log('getTotalItems>>>>>>',this.totalItems)

  // Retrieve the total items from localStorage during initialization
  const storedCartItems = localStorage.getItem('cartItems');
  if (storedCartItems) {
    // Parse the stored total items back to an array
    this.cartItems = JSON.parse(storedCartItems);
  } else {
    this.cartItems = [];
  }
  console.log('getAllCartItems>>>>>>', this.cartItems);
  


  }
 
  // ngOnInit() {
  //   this.updateItemCount()
  //   this.updateItemTotal()
  // }
  async ngOnInit() {
    await this.initializeCartData();
    this.titleService.setTitle('Cart');
  }
  
  private async initializeCartData(): Promise<void> {
    await this.updateItemTotal();
    // await this.updateItemCount();
  }
 
// show data from storage
  getTotalPrice() {
    return this.totalPrice;
  }
  getTotalItems() {
    return this.totalItems;
  }
  getAllCartItems(): string {
    return JSON.stringify(this.cartItems);
  }
  
  
  updateItemTotal() {
    this.itemTotal = this.cartSrv.getTotal();
    // If you want to share the item count with other components
    this.sharedService.updateItems(this.itemTotal);
  }
 
// ****************************
 deleteCart(item:any){
  this.cartService.delete(item)
 }

sendCartData() {
  const transformedData = {
    userId: 1,
    // products: this.cartItems
    products: this.cartService.getItems()
  };

  this.http.post('https://dummyjson.com/carts/add', transformedData)
    .subscribe(
      (response: any) => {
        console.log('Cart data sent to the server:', response);
        // this.cartItems = [];  // Optionally, clear the cartItems array after successful submission
        this.cartService.clearCartItems(); // Clear cartItems in cartService
        alert('Cart data sent to the server');

        localStorage.removeItem('cartItems');
      },
      (error: any) => {
        console.error('Error sending cart data:', error);
      }
    );
}

}
