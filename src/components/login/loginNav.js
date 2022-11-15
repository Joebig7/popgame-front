import LoginToRegisterLink from "./loginToRegisterLink";
import Logo from "../common/logo";
import DarkTheme from "../common/darktheme";

function LoginNav() {
  return (
    <div className="flex h-1/12 flex-row  place-content-between ">
      <Logo />
      <div className="flex h-full w-96 flex-row justify-between">
        <DarkTheme />
        <LoginToRegisterLink />
      </div>
    </div>
  );
}

export default LoginNav;
