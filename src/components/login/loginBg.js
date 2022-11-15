import { useContext } from "react";
import { ThemeContext } from "../common/context-manager";

function LoginBg() {
  const {globalTheme} = useContext(ThemeContext);
  return (
    <>
      {
        <div
          className={`${
            globalTheme === "dark"
              ? "bg-[url('/public/images/login-bg-cover-dark.jpg')]"
              : "bg-[url('/public/images/login-bg-cover.jpg')]"
          } h-screen basis-5/12 bg-auto bg-center shadow-inner`}
        ></div>
      }
    </>
  );
}

export default LoginBg;
