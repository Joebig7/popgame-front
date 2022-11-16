import LoginUserName from "./loginUserName";
import LoginPassword from "./loginPassword";
import LoginToPwdForgetLink from "./loginToPwdForgetLink";
import LoginButton from "./loginButton";

function LoginForm() {
  return (
    <div className="relative flex top-56 h-3/4 w-1/3 flex-col">
      <form className="h-full w-full flex flex-col gap-16">
        <LoginUserName />
        <LoginPassword />
        <LoginToPwdForgetLink />
        <LoginButton />
      </form>
    </div>
  );
}
export default LoginForm;
