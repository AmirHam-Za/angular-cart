import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { CustomerCartComponent } from '../customer-cart/customer-cart.component';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-web-products',
  standalone: true,
  imports: [CommonModule, RouterLink, CustomerCartComponent],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.css'
})
export class WebProductsComponent {
  cartService = inject(CartService)
  productsList:any [] = []
  categoryList:any [] = []
  // cartService: any;
  
 constructor(private productSrv: ProductService, private router:Router){}
  ngOnInit(): void {
    this.getAllProducts()
    this.getAllCategory() 
    // console.log('#################',this.getAllCategory()) 
  }
  nevigateToProducts(id:number){
    this.router.navigate(['/products', id])
  }
  getAllProducts(){
    this.productSrv.getProducts().subscribe((res:any)=>{
      this.productsList = res.data
      console.log('==>', this.productsList)
    })
    
  }
    getAllCategory(){
    this.productSrv.getCategory().subscribe((res:any)=>{
      this.categoryList = res.data
      console.log('==>',this.productsList)
    })
    
  }
  
  // products: any = this.getAllProducts()
  
  addToCart(product: any){
    this.cartService.addCart(product)
    console.log('cart clicked')
  }
}
