import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/product/product.service';

import {
  Dropdown,
  Ripple,
  initTE,
} from "tw-elements";
import { WebheaderComponent } from '../webheader/webheader.component';
import { NavComponent } from "../../../nav/nav.component";

initTE({ Dropdown, Ripple });
// initTE({ Datepicker, Input }, { allowReinits: true });
@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
    imports: [CommonModule, RouterLink, WebheaderComponent, RouterOutlet, NavComponent]
})
export class LandingComponent {
  productsList:any [] = []
  categoryList:any [] = []
  
 constructor(private productSrv: ProductService, private router:Router){}

  ngOnInit(): void {
    this.getAllProducts()
    this.getAllCategory()
  }
  nevigateToProducts(id:number){
    this.router.navigate(['/products', id])
  }
  getAllProducts(){
    this.productSrv.getProducts().subscribe((res:any)=>{
      this.productsList = res.data
      console.log(this.productsList)
    })
    
  }
  getAllCategory(){
    this.productSrv.getCategory().subscribe((res:any)=>{
      this.categoryList = res
      console.log('getAllCategory>>>>>',this.categoryList)
    })
    
  }

  getProductsOfCategory(){
    this.productSrv.getCategory().subscribe((res:any)=>{
      this.categoryList = res
      console.log('>>>>>',this.categoryList)
    })
    
  }
}
