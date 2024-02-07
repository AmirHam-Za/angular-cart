import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';

import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductComponent } from './pages/admin/product/product.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { WebProductsComponent } from './pages/website/web-products/web-products.component';
import { CustomerCartComponent } from './pages/website/customer-cart/customer-cart.component';
import { AuthGuard } from './pages/services/auth/auth.guard';
import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';



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
                path:'products/:id',
                component:CategoryProductsComponent,
            },
            {
                path:'crud',
                component:CrudComponent
            },
            {
                path:'todo',
                component:TodosComponent
            },
            {
                path:'cart',
                component:CustomerCartComponent
            },
            {
                path:'categories',
                component:CategoriesComponent,
                // canActivate: [AuthGuard]
            },
        ] 
    },

    {
        path:'categoryProduct',
        component:CategoryProductsComponent
    },
    {
        path:'login',
        component:LoginComponent,
        
    },

    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'product',
                component:ProductComponent,
                //  canActivate: [AuthGuard]
            },
            // {
            //     path:'category',
            //     component:CategoriesComponent,
            //     // canActivate: [AuthGuard]
            // },
        ]

    },
   
    //     path: '**', 
    //     component: PageNotFoundComponent 
    // },

    { path: '**', component: PageNotFoundComponentComponent }

];
