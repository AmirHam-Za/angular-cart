
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { CustomerCartComponent } from './website/customer-cart/customer-cart.component';
import { LandingComponent } from './website/landing/landing.component';
import { CartService } from './services/cart/cart.service';


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






