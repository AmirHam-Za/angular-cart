import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject} from '@angular/core';
import { WebProductsComponent } from '../web-products/web-products.component';
import { CartService } from '../../services/cart/cart.service';
import { SharedService } from '../../services/shared/shared.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-customer-cart',
  standalone: true,
  imports: [CommonModule, WebProductsComponent,HttpClientModule],
  templateUrl: './customer-cart.component.html',
  styleUrl: './customer-cart.component.css'
})
export class CustomerCartComponent implements OnInit {

  
  // http: any;
  cartItems: any[] = []; // Assume this is your existing cartItems data

submitForm() {
throw new Error('Method not implemented.');
}
 cartService = inject(CartService)
 item: number = 0;
 itemTotal: number = 0;
 product: any; // Assume you have a product model

 totalPrice : number
 totalItems : number
//  cartItems : any
 @Input() productNames: string[] = [];
// *****************************
// sharedService
 constructor(
  private sharedService: SharedService,
  private cartSrv: CartService,
  private http: HttpClient
  ) { 

     // Retrieve the total from localStorage during initialization
     const storedTotal = localStorage.getItem('cartTotal');
     if (storedTotal) {
       // Parse the stored total back to a number
       this.totalPrice = parseFloat(storedTotal);
     } else {
       this.totalPrice = 0;
     }
     console.log('getTotalPrice>>>>>>',this.totalPrice)


      // Retrieve the total items from localStorage during initialization
  const storedTotalItems = localStorage.getItem('cartTotalItems');
  if (storedTotalItems) {
    // Parse the stored total items back to a number
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
 

//  sendCartData() {
//    // const transformedData = this.transformCartData();
//   fetch('https://dummyjson.com/carts/add',  {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       userId: 1,
//       products: this.cartItems
//     })
    
//   })
//   .then(res => res.json())
//   .then(console.log);
// }
 
// ORRRRRR

// sendCartData() {
//   const transformedData = {
//     userId: 1,
//     products: this.cartItems
//   };

//   this.http.post('https://dummyjson.com/carts/add', transformedData)
//     .subscribe(
//       (response: any) => {
//         console.log('Cart data sent to the server:', response);
//         this.cartItems = [];  // Optionally, clear the cartItems array after successful submission
//         // this.itemTotal = 0;  
//         // this.totalPrice = 0;  
//         // this.totalItems = 0;  

//         // item: number = 0;
//         // itemTotal: number = 0;
//         // product: any; // Assume you have a product model
       
//         // totalPrice : number
//         // totalItems : number
        
//         // if(this.cartItems !==null){
//         // alert('Cart data sent to the server: successfully')
//         // }else{
//         //   alert('Your Cart Is Empty')
//         // }
//       },
//       (error: any) => {
//         console.error('Error sending cart data:', error);
//       }
//     );
// }

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
