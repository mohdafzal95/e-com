import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../context";
import {
  HomePage,
  NotFound,
  MyOrders,
  DetailProduct,
  CartShoppingPage,
} from "../";
import { NavBar, Footer, CheckoutSideMenu } from "../../components";
import Payment from "../Payment";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/cart-shopping", element: <CartShoppingPage /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/*", element: <NotFound /> },
    { path: "/product/:id", element: <DetailProduct /> },
    { path: "/payment", element: <Payment /> },
  ]);

  return routes;
};

export const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        {/* <NavBar /> */}
        <AppRoutes />

        {/* <Footer /> */}
        {/* <CheckoutSideMenu /> */}
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};
