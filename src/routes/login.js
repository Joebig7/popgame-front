import LoginBg from "../components/login/loginBg";
import LoginContent from "../components/login/loginContent";
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
function Login() {
  return (
    <div className="flex flex-row">
      <LoginBg />
      <LoginContent />
    </div>
  );
}

export default Login;
