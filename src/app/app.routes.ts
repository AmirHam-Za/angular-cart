    import { Routes } from '@angular/router';
    import { LandingComponent } from './allComponents/pages/landing/landing.component';
    import { WebProductsComponent } from './allComponents/pages/web-products/web-products.component';
    import { CustomerCartComponent } from './allComponents/pages/customer-cart/customer-cart.component';
    import { CategoriesComponent } from './allComponents/pages/categories/categories.component';
    import { HomeComponent } from './allComponents/pages/home/home.component';
import { CategoryProductsComponent } from './allComponents/category-products/category-products.component';

    export const routes: Routes = [
        {
            path:'',
            redirectTo:'home',
            pathMatch:'full'
        },

    
        {
            path:'',
            component:LandingComponent,
            children: [
                {
                    path:'shop',
                    component:WebProductsComponent,
                },
                {
                    path:'cart',
                    component:CustomerCartComponent
                },
                {
                    path:'categories',
                    component:CategoriesComponent,
                },
                {
                    path:'home',
                    component:HomeComponent,
                },
               
                { 
                    // this should be same as the route defined in getCategorySlug() in homeComponent
                    path: 'products/category/:category', 
                    component: CategoryProductsComponent 
                },

            ] 
        },
        
    ];
