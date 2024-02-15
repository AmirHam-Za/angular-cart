import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductService } from '../../../services/product/product.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../../services/cart/cart.service';
import { CustomerCartComponent } from '../customer-cart/customer-cart.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../loader/loader.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CustomerCartComponent,
    LoaderComponent,
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cartService = inject(CartService)
  productsList: any[] = []
  categoryList: any[] = []
  isLoading: boolean = false;

  // item: number = 0;
  // itemCount: number = 0;
  // product: any;
  // showDefault: boolean = true;

  selectedCategory: string | null = null;
  // productService: any;
  constructor(
    private productSrv: ProductService,
    private router: Router,
    private titleService: Title
  ) { }
  ngOnInit(): void {
   
    this.titleService.setTitle('Home');
    this.getFeaturedProducts()
    this.getAllCategory()
    // this.getCategory();
    this.getCategoryProducts();
  }
  getCategoryProducts() {
    throw new Error('Method not implemented.');
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

  
 

  addToCart(product: any) {
    this.cartService.addCart(product)
    console.log('========>cart clicked')
  }

  // getCategory(): void {
  //   this.isLoading = true;
  //   this.productService.getCategory().subscribe(
  //     (res: string[]) => {
  //       this.categoryList = res;
  //       console.log('getCategory==>', this.categoryList);
  //       this.isLoading = false;
  //     },
  //     (error: any) => {
  //       console.error('Error fetching categories:', error);
  //       this.isLoading = false;
  //     }
  //   );
  // }



  getAllCategory(): void {
    this.isLoading = true;
// fetch all category
    this.productSrv.getCategory().subscribe(
      (res: any) => {
        this.categoryList = res;
        console.log('getAllCategory==>', this.categoryList);
        this.isLoading = false;

        for (let i = 0; i < this.categoryList.length; i++) {
          const category = this.categoryList[i];
          console.log('getAllCategory>>>',`${i}: ${category}`);
        }
      },
      (error: any) => {
        console.error('Error fetching categories:', error);
        this.isLoading = false;
      }

      
    );
  }
  getCategorySlug(clickedCategory: string): void {
    // make category clickable
  this.selectedCategory = clickedCategory;
  console.log('Clicked category:', this.selectedCategory);
   
  // this route should be same as the route defined in app.route.ts
  const sss = this.router.navigate(['products/category', this.selectedCategory]);
  console.log('<<<<<>>>>>>>',sss);
}

}

































