    import { Routes } from '@angular/router';
    import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { LandingComponent } from './website/landing/landing.component';
import { WebProductsComponent } from './website/web-products/web-products.component';
import { CustomerCartComponent } from './website/customer-cart/customer-cart.component';
import { CategoriesComponent } from './website/categories/categories.component';


    export const routes: Routes = [
        {
            path:'',
            redirectTo:'shop',
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
            ] 
        },
        { 
            path: '**',
            component: PageNotFoundComponentComponent
        }

    ];
