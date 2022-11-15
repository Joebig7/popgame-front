import LoginNav from "./loginNav";
import LoginFormWrapper from "./loginFormWrapper";

function LoginContent() {
  return (
    <div className="basis-7/12 w-full h-screen">
      <LoginNav />
      <LoginFormWrapper />
    </div>
  );
}

export default LoginContent;
