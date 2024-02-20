import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';
import { CustomerCartComponent } from '../customer-cart/customer-cart.component';
import { CartService } from '../../../services/cart/cart.service';
import { Title } from '@angular/platform-browser';
import { LoaderComponent } from '../../loader/loader.component';
import { AddToCartButtonComponent } from "../../addtocart/addtocart.component";

@Component({
    selector: 'app-web-products',
    standalone: true,
    templateUrl: './web-products.component.html',
    styleUrl: './web-products.component.css',
    imports: [
        CommonModule,
        RouterLink,
        CustomerCartComponent,
        LoaderComponent,
        RouterLinkActive,
        AddToCartButtonComponent
    ]
})
export class WebProductsComponent implements OnInit {
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
    this.getAllProducts()
    this.titleService.setTitle('Shop');

  }

  nevigateToProducts(id: number) {
    this.router.navigate(['/products', id])
  }

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
    }, 0);
  }

  addToCart(product: any) {
    this.cartService.addCart(product)
    console.log('========>cart clicked')
  }



  toggleParagraphs(showDefault: boolean) {
    this.showDefault = showDefault;
  }
}





