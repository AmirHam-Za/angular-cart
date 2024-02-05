import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
// Initialization for ES Users
// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
// Initialization for ES Users
import {
  Dropdown,
  Ripple,
  initTE,
} from "tw-elements";
import { WebheaderComponent } from '../webheader/webheader.component';

initTE({ Dropdown, Ripple });
// initTE({ Datepicker, Input }, { allowReinits: true });

// initTE({ Dropdown, Ripple }, { allowReinits: true });

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, WebheaderComponent, RouterOutlet ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
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
