import AddCategory from "../pages/AddCategory/AddCategory";
import AddProducts from "../pages/AddProducts/AddProducts";
import Categories from "../pages/Categories/Categories";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import ProductList from "../pages/ProductList/ProductList";
import Register from "../pages/Register/Register";
import UpdateCategory from "../pages/UpdateCategory/UpdateCategory";
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
        element: <Categories></Categories>,
      },
      {
        path: "/addproducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/updateCategory/:id",
        loader: ({ params, request }) => {
          const url = new URL(request.url);
          const email = url.searchParams.get("email");

          return fetch(
            `https://product-management-server-omega.vercel.app/updateCategory/${params.id}?email=${email}`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("pmToken")}`,
              },
            }
          );
        },
        element: <UpdateCategory></UpdateCategory>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
