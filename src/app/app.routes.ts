import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Products } from './layout/products/products';
import { Cart } from './layout/cart/cart';
import { Login } from './layout/login/login';
import { Home } from './layout/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Layout,

        children: [
            { path: 'home', component: Home },
            { path: 'cardapio', component: Products },
            { path: 'carrinho', component: Cart },
            { path: 'login', component: Login },
        ]
    }, 

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
