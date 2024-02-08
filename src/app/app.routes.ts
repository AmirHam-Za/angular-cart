    import { Routes } from '@angular/router';

    import { LandingComponent } from './pages/website/landing/landing.component';
    import { WebProductsComponent } from './pages/website/web-products/web-products.component';
    import { CustomerCartComponent } from './pages/website/customer-cart/customer-cart.component';
    import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
    import { CategoriesComponent } from './pages/website/categories/categories.component';

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
