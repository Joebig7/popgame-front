import LoginComponent from "../components/loginComponet";
import LoginNavComponent from "../components/loginNavComponent";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

function Login() {
  const [isDark, setIsDark] = useState("light");

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  function changeTheme(e) {
    if (isDark === "light") {
      setIsDark("dark");
    } else {
      setIsDark("light");
    }
  }

  return (
    <div className="flex flex-row">
      <div className="h-screen w-full basis-1/3 bg-[url('/public/images/login-bg-cover.jpg')] bg-auto bg-center drop-shadow-xl"></div>
      <div className="flex h-screen w-full basis-2/3 flex-col">
        <LoginNavComponent />
        <LoginComponent />
        <button
          onClick={changeTheme}
          data-set-theme={isDark}
          data-act-class="ACTIVECLASS"
        >
          test
        </button>
      </div>
    </div>
  );
}

export default Login;
