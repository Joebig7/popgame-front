import { Form } from "react-router-dom";
import { AiOutlineUser, AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";

function LoginComponent() {
  const [emailValue, setEmailValue] = useState({
    email: "",
  });
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
    <div className="relative basis-3/4 place-self-center">
      <form className="flex flex-col">
        <h1 className="mb-16 font-sans text-4xl font-bold">欢迎登录Popgame</h1>

        <div className="flex flex-row ">
          <AiOutlineUser className="pointer-events-none absolute right-3 top-[114px] order-2 fill-grey-300 text-2xl" />
          <input
            className="mb-8 h-12 w-full rounded-lg"
            value={emailValue.email}
            type="text"
            placeholder="请输入用户名或邮箱"
          />
        </div>

        <div className="flex flex-row ">
          <AiFillEye
            hidden={passValue.showPassword}
            onClick={toggleShow}
            className="absolute right-3 top-[196px] order-2 fill-grey-300 text-2xl"
          />
          <AiFillEyeInvisible
            hidden={!passValue.showPassword}
            onClick={toggleShow}
            className="absolute right-3 top-[196px] order-2  fill-grey-300 text-2xl"
          />
          <input
            className="mb-6 h-12 w-full rounded-lg"
            type={passValue.showPassword ? "text" : "password"}
            placeholder="请输入密码"
          />
        </div>

        <Form action="/forget">
          <button className="mb-14 font-black text-blue-700">忘记密码？</button>
        </Form>
        <button className="h-11  w-[28rem] rounded-md bg-blue-600 text-lg font-black text-white">
          登录
        </button>
      </form>
    </div>
  );
}

export default LoginComponent;
