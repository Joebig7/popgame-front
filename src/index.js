import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./routes/index";
import Login from "./routes/login";
import Register from "./routes/register";
import Forget from "./routes/forget";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [{}],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "forget",
    element: <Forget />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
