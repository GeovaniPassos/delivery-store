import { Routes } from '@angular/router';
import { HomeLayout } from './component/home-layout/home-layout';
import { Catalog } from './component/catalog/catalog';

export const routes: Routes = [

    {
        path: '',
        component: HomeLayout,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeLayout },
            { path: 'cardapio', component: Catalog },
        ]
    }, 

    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
