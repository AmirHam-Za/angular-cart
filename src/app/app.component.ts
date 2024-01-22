
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Todo } from './model';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';
import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CustomerCartComponent } from './pages/website/customer-cart/customer-cart.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    FormsModule, 
    HomeComponent, 
    CrudComponent, 
    NavComponent, 
    LandingComponent, 
    CustomerCartComponent, 
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  {

}






