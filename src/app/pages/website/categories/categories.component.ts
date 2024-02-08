import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductService } from '../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { LoaderComponent } from '../../services/loader/loader.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent  {

  // categoryList$:Observable<any>
  categoryList:any [] = []
  isLoading: boolean = false;
  constructor
  (
    private productSrv:ProductService,
    private titleService: Title
  )
  {
    // fetching category list using observable
    // this.categoryList$ = this.productSrv.getCategory().pipe(
    //   map((item:any)=>{
    //     // console.log( 'categoryList$---->>>>>', item)
    //     return item
    //   })
    //   )
    }
  ngOnInit(): void {
    this.titleService.setTitle('Categories');
    this.getAllCategory()
  }

  // fetching category list using service
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
}
