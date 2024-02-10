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

  item: number = 0;
  itemCount: number = 0;
  product: any;
  showDefault: boolean = true;
  constructor(
    private productSrv: ProductService,
    private router: Router,
    private titleService: Title
  ) { }
  ngOnInit(): void {
   
    this.titleService.setTitle('Home');
    this.getFeaturedProducts()
    this.getAllCategory()
  }
 

  getFeaturedProducts(): void {

    this.isLoading = true;
    setTimeout(() => {
      this.productSrv.featuredProducts().subscribe(
        (res: any) => {
          this.productsList = res.products;
          console.log('getProducts****************-->', this.productsList);
          this.isLoading = false;
        },
        (error: any) => {
          console.error('Error fetching products:', error);
          this.isLoading = false;
        }
      );
    }, 0);
  }

  getAllCategory(): void {
    this.isLoading = true;

    this.productSrv.getCategory().subscribe(
      (res: any) => {
        this.categoryList = res;
        console.log('getAllCategory==>', this.categoryList);
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error fetching categories:', error);
        this.isLoading = false;
      }
    );
  }

  addToCart(product: any) {
    this.cartService.addCart(product)
    console.log('========>cart clicked')
  }
}
