
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Todo } from './model';
import { FormsModule } from '@angular/forms';
import { CrudComponent } from './crud/crud.component';
import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CustomerCartComponent } from './pages/website/customer-cart/customer-cart.component';
import { CartService } from './pages/services/cart/cart.service';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    FormsModule, 
    CrudComponent, 
    NavComponent, 
    LandingComponent, 
    CustomerCartComponent, 
    RouterLinkActive,
    RouterLink,
    PageNotFoundComponentComponent
    
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  {
  cartService = inject(CartService)
}






