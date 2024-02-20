import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from "../loader/loader.component";
import { CartService } from '../../services/cart/cart.service';

@Component({
    selector: 'app-category-products',
    standalone: true,
    templateUrl: './category-products.component.html',
    styleUrl: './category-products.component.css',
    imports: [CommonModule,
        RouterLink,
        RouterLinkActive, LoaderComponent]
})

export class CategoryProductsComponent implements OnInit {
  cartService = inject(CartService)
isLoading: any;

  category: string = 'smartphones'; 
  products: any[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    
  ) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params['category'];
    });
    this.loadCategoryProducts(this.category);
  }
  
  loadCategoryProducts(category: string): void {
   this.productService.getCategoryProducts(category).subscribe(
      (response: any) => {
        this.products = response.products;
        console.log('CATEGORY-PRODUCTS', this.products);
      },
      (error) => {
        console.error('Error fetching category products:', error);
      }
    );
  }

  addToCart(product: any) {
    this.cartService.addCart(product)
    console.log('========>category cart clicked')
  }
}



  
