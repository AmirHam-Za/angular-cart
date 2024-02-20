import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BannerComponent } from '../banner/banner.component';
import { Title } from '@angular/platform-browser';
import { LoaderComponent } from '../../../loader/loader.component';
import { AddToCartButtonComponent } from '../../../addtocart/addtocart.component';
import { CartService } from '../../../../services/cart/cart.service';
import { ProductService } from '../../../../services/product/product.service';


@Component({
  selector: 'app-categorylist',
  standalone: true,
  imports: [

    CommonModule,
    RouterLink,
    LoaderComponent,
    RouterLinkActive,
    AddToCartButtonComponent,
    BannerComponent
  ],
  templateUrl: './categorylist.component.html',
  styleUrl: './categorylist.component.css'
})
export class CategorylistComponent {
  cartService = inject(CartService)
  productsList: any[] = []
  categoryList: any[] = []
  isLoading: boolean = false;

  selectedCategory: string | null = null;
  // productService: any;
  constructor(
    private productSrv: ProductService,
    private router: Router,
    private titleService: Title
  ) { }
  ngOnInit(): void {
   this.titleService.setTitle('Home');
    this.getAllCategory()
  }


async getAllCategory(): Promise<void> {
  try {
    this.isLoading = true;
    const res: any = await this.productSrv.getCategory().toPromise();
    this.categoryList = res;
    console.log('getAllCategory **==> ', this.categoryList);
  } catch (error) {
    console.error('Error fetching categories:', error);
  } finally {
    this.isLoading = false;
  }
}

navigateToCategory(category: string): void {
  this.selectedCategory = category;
  this.router.navigate(['products/category', category]).then(() => {
    console.log('Navigation complete');
  }).catch(error => {
    console.error('Navigation error:', error);
  });
}
}
