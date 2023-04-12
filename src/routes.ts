import Auth from "./pages/Auth";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import { CATEGORIES_ROUTE, LOGIN_ROUTE, ORDERS_ROUTE, PRODUCTS_ROUTE, REGISTER_ROUTE } from "./utils/consts";


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
        Component: Orders,
        path: ORDERS_ROUTE
    },
    {
        Component: Products,
        path: PRODUCTS_ROUTE
    },
    {
        Component: Categories,
        path: CATEGORIES_ROUTE
    }
]
