import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductService } from '../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  products$:Observable<any>
  constructor(private productSrv:ProductService,
    private titleService: Title
    )
  {
    this.products$ = this.productSrv.getCategory().pipe(
      map((item:any)=>
     {
        // console.log(item.data)
        // return item.data

        console.log('category-list--->', item)
        return item
      })
    )
  }
  ngOnInit(): void {
    this.titleService.setTitle('Categories');
  }
  getAllCategory(){

  }
}
