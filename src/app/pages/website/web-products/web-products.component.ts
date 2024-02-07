import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { CustomerCartComponent } from '../customer-cart/customer-cart.component';
import { CartService } from '../../services/cart/cart.service';
import { SharedService } from '../../services/shared/shared.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-web-products',
  standalone: true,
  imports: [CommonModule, RouterLink, CustomerCartComponent],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.css'
})


export class WebProductsComponent implements OnInit { //use OnInit for sharedService only
  cartService = inject(CartService)
  productsList:any [] = []
  categoryList:any [] = []
  // cartService: any;


  item: number = 0;
  itemCount: number = 0;
  

  product: any; // Assume you have a product model
 constructor(private productSrv: ProductService,
   private router:Router, 
   private sharedService: SharedService,
   private titleService: Title
   ){}
  ngOnInit(): void {
    this.getAllProducts()
    this.getAllCategory() 
    this.titleService.setTitle('Shop');

    // // Subscribe to cartItems$ to get real-time updates
    // this.cartService.cartItems$.subscribe(cartItems => {
    //   // Implement logic to update the product's cart information based on cartItems
    //   // For example, you can filter cartItems for the current product
    //   // and update a property in the product model indicating the quantity in the cart
    //   const productInCart = cartItems.find(item => item.id === this.product.id);
    //   this.product.quantityInCart = productInCart ? productInCart.quantity : 0;
    // });
    // // console.log('#################',this.getAllCategory()) 

   


    // sharedService
    this.sharedService.currentItems.subscribe(items => this.item = items);
    this.sharedService.currentTotal.subscribe(items => this.itemCount = items);
    console.log('bbbbbbbbbbb>>>',this.item)
  }

  nevigateToProducts(id:number){
    this.router.navigate(['/products', id])
  }
  getAllProducts(){
    this.productSrv.getProducts().subscribe((res:any)=>{
      // this.productsList = res.data
      
      this.productsList = res.products
      console.log('-->', this.productsList)
      console.log('getProducts-->', this.productsList)
    })
    
  }
    getAllCategory(){
    this.productSrv.getCategory().subscribe((res:any)=>{
      this.categoryList = res
      console.log('getAllCategory==>',this.categoryList)
    })
    
  }
  
  // products: any = this.getAllProducts()
  
  addToCart(product: any){
    this.cartService.addCart(product)
    console.log('========>cart clicked')
  }
  // addToCart() {
  //   this.cartService.addCart(this.product);
  // }

  // In WebProductsComponent

  incrementQuantity(productId: number) {
  this.cartService.incrementQuantity(productId);
}

decrementQuantity(productId: number) {
  this.cartService.decrementQuantity(productId);
}

deleteFromCart(product: any) {
  this.cartService.delete(product);
}
}





