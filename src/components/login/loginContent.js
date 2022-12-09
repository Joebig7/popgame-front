import LoginNav from "./loginNav";
import LoginFormWrapper from "./loginFormWrapper";

function LoginContent() {
  return (
    <div className="dark:bg-grey-900 h-screen w-full basis-full xl:basis-7/12">
      <LoginNav />
      <LoginFormWrapper />
    </div>
  );
}

export default LoginContent;
