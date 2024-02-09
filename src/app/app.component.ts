
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CartService } from './services/cart/cart.service';
import { CustomerCartComponent } from './pages/customer-cart/customer-cart.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NavComponent } from './components/nav/nav.component';


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






