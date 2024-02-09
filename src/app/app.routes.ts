    import { Routes } from '@angular/router';
    import { LandingComponent } from './pages/landing/landing.component';
    import { WebProductsComponent } from './pages/web-products/web-products.component';
    import { CustomerCartComponent } from './pages/customer-cart/customer-cart.component';
    import { CategoriesComponent } from './pages/categories/categories.component';
    import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';



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
