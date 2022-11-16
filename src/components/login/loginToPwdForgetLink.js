import { Link } from "react-router-dom";

function LoginToPwdForgetLink() {
  return (
    <button className="relative top-[-35px] flex flex-row font-black text-blue-800 hover:underline">
      {" "}
      <Link to="/forget">忘记密码？ </Link>
    </button>
  );
}

export default LoginToPwdForgetLink;
