import axios from "axios";
import { POPIDEA_URL } from "../common/url-manage";
import { useForm } from "react-hook-form";
import { AiOutlineUser, AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginErrorModal from "./loginErrorModal";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [passValue, setPassValue] = useState({
    password: "",
    showPassword: false,
  });

  const [open, setOpen] = useState(false);

  function toggleShow() {
    setPassValue({
      showPassword: passValue.showPassword === false ? true : false,
    });
  }

  const onSubmit = (data) => {
    axios({
      method: "get",
      url:
        POPIDEA_URL +
        "/v1/users/auth?username=" +
        data.name +
        "&password=" +
        data.password,
      responseType: "json",
    })
      .then(function (response) {
        if (response.status === 200 && response.data.code === 200) {
          localStorage.setItem("token", "Bearer " + response.data.data);
          navigate("/");
        } else {
          setOpen(true);
        }
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  return (
    <div className="relative flex h-3/4 w-1/3 flex-col 3xl:top-56">
      <LoginErrorModal open={open} setOpen={setOpen} />
      <form
        method="post"
        className="flex h-full w-full flex-col gap-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-row">
          <AiOutlineUser className="pointer-events-none absolute right-4 top-2 order-2 fill-grey-300 text-2xl" />
          <input
            className="input-bordered input  w-full"
            // value={emailValue.email}
            type="text"
            {...register("name", { required: true })}
            placeholder="请输入用户名或邮箱"
          />
        </div>

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
            {...register("password", { required: true })}
            placeholder="请输入密码"
          />
        </div>

        <span className="relative top-[-35px] flex flex-row font-black text-blue-800 hover:underline">
          {" "}
          <Link to="/forget">忘记密码？ </Link>
        </span>

        <button
          className="relative top-[-30px] h-11 w-full rounded-md bg-blue-500 text-lg font-black text-white"
          type="submit"
        >
          登录
        </button>
        {(errors.name?.type === "required" ||
          errors.password?.type === "required") && (
          <p
            className="relative bottom-24 right-0 text-xl font-extrabold text-red-500"
            role="alert"
          >
            用户名和密码为必填项!
          </p>
        )}
      </form>
    </div>
  );
}
export default LoginForm;
