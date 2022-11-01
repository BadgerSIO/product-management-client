import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Router/Routes";
function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
