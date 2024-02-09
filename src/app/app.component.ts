
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CartService } from './services/cart/cart.service';
import { NavComponent } from './allComponents/nav/nav.component';
import { LandingComponent } from './allComponents/pages/landing/landing.component';
import { CustomerCartComponent } from './allComponents/pages/customer-cart/customer-cart.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports:
    [
      CommonModule,
      RouterOutlet,
      FormsModule,
      NavComponent,
      LandingComponent,
      CustomerCartComponent,
      RouterLinkActive,
      RouterLink,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  cartService = inject(CartService)
}






