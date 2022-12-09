import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HOME from "./home";
import Login from "./login";
import Register from "./register";
import Forget from "./forget";
import { useState } from "react";
import { ThemeContext } from "../components/common/context-manager";
import ForgetContent from "../components/forgetPwd/forgetContent";
import ErrorPage from "../routes/errorPage"

function App() {
  function toggleTheme(theme) {
    setGlobalTheme(theme);
  }

  const [globalTheme, setGlobalTheme] = useState(localStorage.getItem("theme"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HOME />,
      errorElement: <ErrorPage />,
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
      children: [
        {
          path: "forgetContent",
          element: <ForgetContent />,
          children: [
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <ThemeContext.Provider value={{ globalTheme, toggleTheme }}>
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
