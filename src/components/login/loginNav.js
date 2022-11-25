import Logo from "../common/logo";
import DarkTheme from "../common/darktheme";
import { Link } from "react-router-dom";

function LoginNav() {
  return (
    <div className="h-1/12 flex flex-row  place-content-between ">
      <Logo className="link relative left-14 top-2 text-6xl font-black normal-case tracking-wide text-blue-700 no-underline drop-shadow-2xl"/>
      <div className="flex h-full w-96 flex-row justify-between">
        <DarkTheme />
        <span className="relative right-14 top-4 font-sans text-lg font-normal leading-10 tracking-wide">
          还没有账号?{" "}
          <Link className="link-primary link font-black" to="/register">
            请注册
          </Link>
        </span>
      </div>
    </div>
  );
}

export default LoginNav;
