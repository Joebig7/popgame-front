import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

function LoginUserName(props) {
  const [emailValue, setEmailValue] = useState({
    email: "",
  });

  return (
    <div className="flex  w-full flex-row">
      <AiOutlineUser className="pointer-events-none absolute right-4 top-2 order-2 fill-grey-300 text-2xl" />
      <input
        className="input w-full rounded-lg border ring ring-gray-300"
        value={emailValue.email}
        type="text"
        placeholder="请输入用户名或邮箱"
      />
    </div>
  );
}

export default LoginUserName;
