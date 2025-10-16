import { Routes } from '@angular/router';
import { Inicio } from './comp/inicio/inicio';
import { Ciudades } from './comp/ciudades/ciudades';
import { Pagina404 } from './comp/pagina404/pagina404';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component:Inicio},
    {path: 'ciudades', component:Ciudades},
    {path: 'pagina404', component:Pagina404},
    {path: '**', redirectTo: 'pagina404', pathMatch: 'full'}
];
