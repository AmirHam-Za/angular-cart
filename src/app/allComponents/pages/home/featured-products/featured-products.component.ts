import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddToCartButtonComponent } from '../../../addtocart/addtocart.component';
import { CartService } from '../../../../services/cart/cart.service';
import { ProductService } from '../../../../services/product/product.service';


@Component({
    selector: 'app-featured-products',
    standalone: true,
    templateUrl: './featured-products.component.html',
    styleUrl: './featured-products.component.css',
    imports: [
      RouterLink,
      RouterLinkActive,
      AddToCartButtonComponent,
      CommonModule
    ]
})
export class FeaturedProductsComponent {
  cartService = inject(CartService)
  productsList: any[] = []
  // categoryList: any[] = []
  isLoading: boolean = false;
  constructor(
    private productSrv: ProductService,

  ) {  }

  ngOnInit(): void {
    this.getFeaturedProducts()
  }

  getFeaturedProducts(): void {
    
    this.isLoading = true;
    setTimeout(() => {
      this.productSrv.featuredProducts().subscribe(
        (res: any) => {
          this.productsList = res.products;
          console.log('getFeaturedProducts->', this.productsList);
          this.isLoading = false;
        },
        (error: any) => {
          console.error('Error fetching products:', error);
          this.isLoading = false;
        }
      );
    }, 0);
  }
}
