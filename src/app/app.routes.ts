import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductComponent } from './pages/admin/product/product.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { WebProductsComponent } from './pages/website/web-products/web-products.component';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'shop',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        // path:'shop',
        // component:LandingComponent

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
            }
        ] 
    },
    {
        path:'crud',
        component:CrudComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    // {
    //     path:'products/:id',
    //     component:CategoryProductsComponent
    // },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'product',
                component:ProductComponent
            },
            {
                path:'category',
                component:CategoriesComponent
            },
        ]

    },
   

    // { 
    //     path: '**', 
    //     component: PageNotFoundComponent 
    // },
];
