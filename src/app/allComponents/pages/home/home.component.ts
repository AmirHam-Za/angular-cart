import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BannerComponent } from "./banner/banner.component";
import { CategorylistComponent } from "./categorylist/categorylist.component";
import { FeaturedProductsComponent } from "./featured-products/featured-products.component";
import { LoaderComponent } from '../../loader/loader.component';
import { CustomerCartComponent } from '../customer-cart/customer-cart.component';
import { CartService } from '../../../services/cart/cart.service';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        CommonModule,
        LoaderComponent,
        BannerComponent,
        CategorylistComponent,
        FeaturedProductsComponent,
        CustomerCartComponent
    ]
})
export class HomeComponent {
  cartService = inject(CartService)
  productsList: any[] = []
  categoryList: any[] = []
  isLoading: boolean = false;

  selectedCategory: string | null = null;
  // productService: any;
  
  constructor(
    private titleService: Title
  ) { }
  
  ngOnInit(): void {
   this.titleService.setTitle('Home');
  }
  
}

































