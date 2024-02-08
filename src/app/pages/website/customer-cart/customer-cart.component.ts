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
  router: any;

submitForm() {
throw new Error('Method not implemented.');
}
 cartService = inject(CartService)
 item: number = 0;
 itemTotal: number = 0;
 product: any; 

 totalPrice : number
 @Input() productNames: string[] = [];

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
  }

  async ngOnInit() {
    await this.initializeCartData();
    this.titleService.setTitle('Cart');
  }
  
  private async initializeCartData(): Promise<void> {
    await this.updateItemTotal();
  }

  
  updateItemTotal() {
    this.itemTotal = this.cartSrv.getTotal();
    
  }
 
 deleteCart(item:any){
  this.cartService.delete(item)
 }

sendCartData() {
  const transformedData = {
    userId: 1,
    products: this.cartService.getItems()
  };

  this.http.post('https://dummyjson.com/carts/add', transformedData)
    .subscribe(
      (response: any) => {
        console.log('Cart data sent to the server:', response);
        this.cartService.clearCartItems(); 
        alert('Cart data sent to the server');

        localStorage.removeItem('cartItems');
      },
      (error: any) => {
        console.error('Error sending cart data:', error);
      }
    );
}
}




