import { createBrowserRouter } from "react-router";
import App from "../App";
import PlanetDetail from "../components/PlanetDetail";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
    {
        path: "/planet/:id",
        Component: PlanetDetail,
    },
])

export default router;

