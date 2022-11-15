import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

function LoginUserName(props) {
  const [emailValue, setEmailValue] = useState({
    email: "",
  });

  return (
    <div className="flex  w-full flex-row">
      <AiOutlineUser className="pointer-events-none relative right-9 top-3 order-2 fill-grey-300 text-2xl" />
      <input
        className="input-bordered input  w-full"
        value={emailValue.email}
        type="text"
        placeholder="请输入用户名或邮箱"
      />
    </div>
  );
}

export default LoginUserName;
