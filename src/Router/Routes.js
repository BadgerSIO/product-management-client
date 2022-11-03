import AddCategory from "../pages/AddCategory/AddCategory";
import AddProducts from "../pages/AddProducts/AddProducts";
import Categories from "../pages/Categories/Categories";
import Login from "../pages/Login/Login";
import ProductList from "../pages/ProductList/ProductList";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layouts/Main");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Main></Main>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <ProductList></ProductList>,
      },
      {
        path: "/addcategory",
        element: <AddCategory></AddCategory>,
      },
      {
        path: "/categories",
        loader: () => fetch(`http://localhost:5000/categories`),
        element: <Categories></Categories>,
      },
      {
        path: "/addproducts",
        element: <AddProducts></AddProducts>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "*",
    element: (
      <div>
        <h1>Page not found</h1>
      </div>
    ),
  },
]);
