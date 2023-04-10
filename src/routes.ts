import Auth from "./pages/Auth";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "./utils/consts";


export const publicRoutes = [
    {
        Component: Auth,
        path: LOGIN_ROUTE
    },
    {
        Component: Auth,
        path: REGISTER_ROUTE
    }
]