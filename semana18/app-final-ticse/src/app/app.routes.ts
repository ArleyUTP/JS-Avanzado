import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { NotFound } from './components/not-found/not-found';
import { Sitios } from './components/sitios/sitios';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full' },
    {path: 'inicio', component: Inicio },
    {path: 'sitios',component:Sitios},
    {path: '*', component: NotFound },
];
