import LoginToRegisterLink from "./loginToRegisterLink";
import Logo from "../common/logo";
import DarkTheme from "../common/darktheme"

function LoginNav() {
  return (
    <div className="flex flex-row place-content-between">
      <DarkTheme className="relative left-[100px]"/>
      <Logo />
      <LoginToRegisterLink/>
    </div>
  );
}

export default LoginNav;
