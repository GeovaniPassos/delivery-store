import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Products } from './pages/products/products';
import { Cart } from './pages/cart/cart';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,

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
