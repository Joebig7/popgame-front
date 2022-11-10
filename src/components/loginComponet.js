import { Form } from "react-router-dom";

function LoginComponent() {
  return (
    <div className="relative right-6 basis-3/4 place-self-center">
      <form className="flex flex-col space-y-10">
        <h1 className="text-3xl font-bold">欢迎登录Popgame</h1>
        <input
          className="h-12 w-96 rounded-md border-4 text-lg"
          type="text"
          placeholder="请输入用户名或邮箱"
        />
        <input
          className="h-12 w-96 rounded-md border-4 text-lg"
          type="password"
          placeholder="请输入密码"
        />

        <Form action="/forget">
          <button className="font-black text-blue-700">忘记密码？</button>
        </Form>
        <button className="h-12 w-96 rounded-md bg-blue-500">登录</button>
      </form>
    </div>
  );
}

export default LoginComponent;
