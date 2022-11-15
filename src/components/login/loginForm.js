import LoginUserName from "./loginUserName";
import LoginPassword from "./loginPassword";
import LoginToPwdForgetLink from "./loginToPwdForgetLink";
import LoginButton from "./loginButton";

function LoginForm(props) {
  return (
    <div className="relative flex h-3/4 w-1/3 flex-col">
      <form className="h-full w-full">
        <LoginUserName />
        <LoginPassword />
        <LoginToPwdForgetLink />
        <LoginButton />
      </form>
    </div>
  );
}
export default LoginForm;
