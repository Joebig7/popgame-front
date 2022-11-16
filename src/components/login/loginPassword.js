import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";

function LoginPassword() {
  const [passValue, setPassValue] = useState({
    password: "",
    showPassword: false,
  });

  function toggleShow() {
    setPassValue({
      showPassword: passValue.showPassword === false ? true : false,
    });
  }

  return (
    <div className="flex w-full flex-row">
      <AiFillEye
        hidden={passValue.showPassword}
        onClick={toggleShow}
        className="absolute right-4 top-[122px]  order-2 fill-grey-300 text-2xl"
      />
      <AiFillEyeInvisible
        hidden={!passValue.showPassword}
        onClick={toggleShow}
        className="absolute right-4 top-[122px] order-2  fill-grey-300 text-2xl"
      />
      <input
        className="input-bordered input  w-full"
        type={passValue.showPassword ? "text" : "password"}
        placeholder="请输入密码"
      />
    </div>
  );
}
export default LoginPassword;
