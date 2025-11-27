import { Routes } from '@angular/router';
import { App } from './app';
import { Elementos } from './component/elementos/elementos';



export const routes: Routes = [
    {path: '', component: App, children:[
        {path: '', redirectTo: 'elementos', pathMatch: 'full'},
        {path: 'elementos', component: Elementos}
    ]}
];
