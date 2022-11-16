import { useContext } from "react";
import { ThemeContext } from "../common/context-manager";

function LoginBg() {
  const { globalTheme } = useContext(ThemeContext);
  return (
    <>
      {
        <div
          className={`${
            globalTheme === "dark"
              ? "bg-[url('/public/images/login-bg-cover-dark.jpg')]"
              : "bg-[url('/public/images/login-bg-cover.jpg')]"
          } invisible flex  h-screen    flex-row flex-wrap place-content-end bg-auto bg-center shadow-inner  xl:visible xl:w-full xl:basis-5/12`}
        ></div>
      }
    </>
  );
}

export default LoginBg;
