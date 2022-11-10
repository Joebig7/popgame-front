import { Form } from "react-router-dom";

function LoginNavComponent() {
  return (
    <div className="basis-1/4 place-self-end">
      <Form
        className="font-main relative right-14 top-4 text-lg font-normal leading-10 tracking-wide"
        action="/register"
      >
        还没有账号? <button className="font-black text-blue-500">请注册</button>
      </Form>
    </div>
  );
}

export default LoginNavComponent;
