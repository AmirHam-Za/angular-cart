import { Component } from '@angular/core';
import { WebheaderComponent } from '../webheader/webheader.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [WebheaderComponent, CommonModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {
  activeCategoryId: number = 0;
  products: any [] =[]
  // cartService: any;

  constructor(private activatedRoute: ActivatedRoute, private prodSrv:ProductService){
    this.activatedRoute.params.subscribe((res:any)=>{
      // debugger;
      this.activeCategoryId = res.id
      // console.log('HELLOOOOOOO',this.activeCategoryId)
      this.loadProducts()
    })
  }

  loadProducts (){
    this.prodSrv.getProductsByCategory(this.activeCategoryId).subscribe((res:any)=>{
      this.products = res.data
      console.log('uuuuuuuuu', this.products)
    })
  }

  addToCart(product: any){
    // this.cartService.addToCart(product)
    console.log('cart clicked')
  }
}
