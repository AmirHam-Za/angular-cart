    import { Routes } from '@angular/router';
import { LandingComponent } from './allComponents/pages/landing/landing.component';
import { WebProductsComponent } from './allComponents/pages/web-products/web-products.component';
import { CustomerCartComponent } from './allComponents/pages/customer-cart/customer-cart.component';
import { CategoriesComponent } from './allComponents/pages/categories/categories.component';
import { PageNotFoundComponentComponent } from './allComponents/page-not-found-component/page-not-found-component.component';




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
