import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  isSidepanelVisible: boolean = false
  productObj: any = 
    {
      "productId": 0,
      "productSku": "",
      "productName": "",
      "productPrice": 0,
      "productShortName": "",
      "productDescription": "",
      "createdDate": new Date(),
      "deliveryTimeSpan": "",
      "categoryId": 0,
      "productImageUrl": ""
    }
    categoryList:any [] = []
    productsList:any [] = []

  constructor(private productSrv: ProductService){

  }

  ngOnInit(): void {
    this.getProducts()
    this.getAllCategory()
  }
  getProducts(){
    this.productSrv.getProducts().subscribe((res:any)=>{
      // this.productsList = res.data
      // console.log('getProducts-->', this.productsList)

      this.productsList = res.products
      console.log('getProducts-->', this.productsList)
    })
  }
  getAllCategory(){
    this.productSrv.getCategory().subscribe((res:any)=>{
      // this.categoryList = res.data
      this.categoryList = res
      console.log('======>', this.categoryList)
    })
  }
  onSave(){
    this.productSrv.saveProduct(this.productObj).subscribe((res:any)=>{
      if(res.result){
        alert('created Successfully')
        this.getProducts()
        
      }else{
        alert(res.message)
      }
    })
  }
  onUpdate(){
    this.productSrv.updateProduct(this.productObj).subscribe((res:any)=>{
      if(res.result){
        alert('Updated Successfully')
        this.getProducts()
        
      }else{
        alert(res.message)
      }
    })
  }

  onDelete(item: any){
    const isDelete = confirm('Are you sure to delete?')
    if (isDelete){
      // this.productSrv.deleteProduct(item.productId).subscribe((res:any)=>{
      this.productSrv.deleteProduct(item.id).subscribe((res:any)=>{
        if(res.result){
          alert('Deleted Successfully')
          this.getProducts()
          
        }else{
          alert(res.message)
        }
      })
    }
  }

  onEdit(item: any){
    this.productObj = item;
 this.openSidepanel()
  }




  openSidepanel(){
    this.isSidepanelVisible = true
  }
  closeSidepanel(){
    this.isSidepanelVisible = false
  }
}
