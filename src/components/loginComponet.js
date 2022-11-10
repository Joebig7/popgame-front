import { Form } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

function LoginComponent() {
  return (
    <div className="relative right-6 basis-3/4 place-self-center">
      <form className="flex flex-col">
        <h1 className="mb-12 text-3xl font-bold">欢迎登录Popgame</h1>

        <div className="flex flex-row ">
          <AiOutlineUser className="pointer-events-none absolute right-3 top-[88px] order-2 fill-grey-300 text-2xl" />
          <input
            className="mb-12 h-12 w-full rounded-md"
            type="text"
            placeholder="请输入用户名或邮箱"
          />
        </div>

        <div className="flex flex-row ">
          <RiLockPasswordLine className="pointer-events-none absolute right-3 top-[186px] order-2 fill-grey-300 text-2xl" />
          <input
            className="mb-2 h-12 w-full rounded-md"
            type="password"
            placeholder="请输入密码"
          />
        </div>

        <Form action="/forget">
          <button className="mb-10 font-black text-blue-700">忘记密码？</button>
        </Form>
        <button className="h-12  w-[28rem] rounded-md bg-blue-600 text-lg font-black text-white">
          登录
        </button>
      </form>
    </div>
  );
}

export default LoginComponent;
