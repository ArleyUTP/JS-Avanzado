import { createBrowserRouter } from "react-router";
import App from "../App";
import inicio from "../components/inicio";
import elementos from "../components/elementos";
import pagina404 from "../components/pagina404";

const router = createBrowserRouter(
    [
        {Component: App,
            children:[
                {
                    Component: inicio,
                    path: "/"
                },
                {
                    Component: elementos,
                    path: "/elementos"
                },{
                    path: "*",
                    Component: pagina404
                }
            ]
        }
    ]
)

export default router;