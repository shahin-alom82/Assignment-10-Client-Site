import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import Root from "../../Root/Root";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Details from "../../Details/Details";
import PraivateRoute from "../../../PrivateRoute";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import AddProduct from "../../AddProduct/AddProduct";
import PraivateRoute2 from "../../PraivateRoute2/PraivateRoute2";
import CardItem from "../../CardItem/CardItem";
import Update from "../../Update/Update";
import PraivateRoute3 from "../../PraivateRoute3/PraivateRoute3";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/technology.json')
            },
            {
                path: "/cards/:id",
                element: <PraivateRoute><Details></Details></PraivateRoute>,
                loader: () => fetch("/technology.json")
            },
            {
              path : "/login",
              element : <Login></Login>,
            },
            {
              path : "/register",
              element : <Register></Register>,
            },
            
            {
              path : "/product",
              element : <PraivateRoute2><AddProduct></AddProduct></PraivateRoute2>,
            },
            {
              path : "/addcard",
              element : <PraivateRoute3><CardItem></CardItem></PraivateRoute3>,
              loader: () => fetch("https://assignment-10-server-al090gc0h-shahin1.vercel.app/product")
            },
            {
              path : "/addcard/:id",
              element : <Update></Update>,
              loader: ({params}) => fetch(`https://assignment-10-server-al090gc0h-shahin1.vercel.app/product/${params.id}`)
            },
     
        ]
    },
]);
export default router