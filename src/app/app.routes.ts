import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Cart } from './pages/cart/cart';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { ProductsGrid } from './pages/produtcs/products-grid/products-grid';

export const routes: Routes = [
    
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    // caso a url não existir, ir para uma página de erro, ou para a home
    // { 
    //     path: '**', component: PageNotFoundComponent 
    // },
    
    {
        path: '',
        component: MainLayout,

        children: [
            { path: 'home', component: Home },
            { path: 'cardapio', component: ProductsGrid },
            { path: 'carrinho', component: Cart },
            { path: 'login', component: Login },
        ]
    } 
    
];
