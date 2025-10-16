import { Routes } from '@angular/router';
import { PeliculaComponents } from './components/pelicula-components/pelicula-components';

export const routes: Routes = [
    {path: '', component: PeliculaComponents, pathMatch: 'full'}
];
