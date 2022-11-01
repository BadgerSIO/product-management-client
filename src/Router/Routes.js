import AddCategory from "../pages/AddCategory/AddCategory";
import Categories from "../pages/Categories/Categories";
import ProductList from "../pages/ProductList/ProductList";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layouts/Main");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
    ],
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
