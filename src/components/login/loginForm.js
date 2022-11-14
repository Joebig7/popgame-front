import LoginUserName from "./loginUserName";
import LoginPassword from "./loginPassword";
import LoginToPwdForgetLink from "./loginToPwdForgetLink";
import LoginButton from "./loginButton";

function LoginForm() {
  return (
    <div>
      <LoginUserName />
      <LoginPassword />
      <LoginToPwdForgetLink />
      <LoginButton />
    </div>
  );
}
export default LoginForm;
