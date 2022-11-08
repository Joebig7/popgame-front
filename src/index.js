import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import Login from "./routes/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{}],
  },

  {
    path: "login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
