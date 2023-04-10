import Auth from "./pages/Auth";
import Order from "./pages/Order";
import Products from "./pages/Products";
import { LOGIN_ROUTE, ORDERS_ROUTE, PRODUCTS_ROUTE, REGISTER_ROUTE } from "./utils/consts";


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

export const authRoutes = [
    {
        Component: Order,
        path: ORDERS_ROUTE
    },
    {
        Component: Products,
        path: PRODUCTS_ROUTE
    }
]
