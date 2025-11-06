import { createBrowserRouter } from "react-router";
import { Inicio } from "../pages/Inicio";
import { Error404 } from "../pages/Error404";
import { Nosotros } from "../pages/Nosotros";
import { Sucursales } from "../pages/Sucursales";
import { Contacto } from "../pages/Contacto";
import { Login } from "../pages/Login";
import App from "../App";

export const routes = createBrowserRouter(
    [
        {path: '',Component: App, children:[
            {index: true, Component: Inicio},
            {path: 'nosotros', Component: Nosotros},
            {path: 'sucursales', Component: Sucursales},
            {path: 'contacto', Component: Contacto},
            {path: 'login', Component: Login},
            {path: '*', Component: Error404},
        ]}
    ]
)