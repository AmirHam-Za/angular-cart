import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { CustomerCartComponent } from '../customer-cart/customer-cart.component';
import { CartService } from '../../services/cart/cart.service';
import { SharedService } from '../../services/shared/shared.service';
import { Title } from '@angular/platform-browser';
import { LoaderComponent } from '../../services/loader/loader.component';

@Component({
    selector: 'app-web-products',
    standalone: true,
    templateUrl: './web-products.component.html',
    styleUrl: './web-products.component.css',
    imports: [CommonModule, RouterLink, CustomerCartComponent, LoaderComponent]
})


export class WebProductsComponent implements OnInit { 
  cartService = inject(CartService)
  productsList:any [] = []
  categoryList:any [] = []
  // cartService: any;
  isLoading: boolean = false;

  item: number = 0;
  itemCount: number = 0;
  product: any; 

 constructor(private productSrv: ProductService,
   private router:Router, 
   private sharedService: SharedService,
   private titleService: Title
   ){}
  ngOnInit(): void {
    this.getAllProducts()
    this.getAllCategory() 
    this.titleService.setTitle('Shop');

    // setTimeout(() => {
    //   this.isLoading = false; // Set to false when loading is complete
    // }, 5000); // Adjust the delay time as needed
  
    // sharedService
    this.sharedService.currentItems.subscribe(items => this.item = items);
    this.sharedService.currentTotal.subscribe(items => this.itemCount = items);
    console.log('bbbbbbbbbbb>>>',this.item)
    
  }

  nevigateToProducts(id:number){
    this.router.navigate(['/products', id])
  }
  // getAllProducts(){
  //   this.productSrv.getProducts().subscribe((res:any)=>{
  //     // this.productsList = res.data
      
  //     this.productsList = res.products
  //     console.log('-->', this.productsList)
  //     console.log('getProducts-->', this.productsList)
  //   })
    
  // }
  getAllProducts(): void {
    
    this.isLoading = true; 
    setTimeout(() => {
    this.productSrv.getProducts().subscribe(
      (res: any) => {
        this.productsList = res.products;
        console.log('getProducts-->', this.productsList);
        this.isLoading = false; 
      },
      (error: any) => {
        console.error('Error fetching products:', error);
        this.isLoading = false; 
      }
    );
  },0); 
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





