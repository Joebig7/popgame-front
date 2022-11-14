import { Link } from "react-router-dom";

function LoginToRegisterLink() {
  return (
    <>
      <span className="relative right-14 top-4 font-sans text-lg font-normal leading-10 tracking-wide">
        还没有账号?{" "}
        <Link className="link-primary link font-black" to="/register">
          请注册
        </Link>
      </span>
    </>
  );
}

export default LoginToRegisterLink;
