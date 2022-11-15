import LoginUserName from "./loginUserName";
import LoginPassword from "./loginPassword";
import LoginToPwdForgetLink from "./loginToPwdForgetLink";
import LoginButton from "./loginButton";

function LoginForm(props) {
  return (
    <div className="relative bottom-4 flex h-3/4 w-5/12 flex-col bg-blue-500">
      <form className="w-full h-full">
        <LoginUserName />
        <LoginPassword />
        <LoginToPwdForgetLink />
        <LoginButton />
      </form>
    </div>
  );
}
export default LoginForm;
