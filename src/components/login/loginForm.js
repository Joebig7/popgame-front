import axios from "axios";
import { POPIDEA_URL } from "../common/url-manage";
import { useForm } from "react-hook-form";
import { AiOutlineUser, AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorModal from "../common/ErrorModal";

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
    <div className="relative flex h-1/4 w-full flex-col md:h-1/2 3xl:top-56">
      <ErrorModal
        open={open}
        setOpen={setOpen}
        title="用户名或密码错误"
        description="请确认您输入的用户名和密码是否完全正确！"
      />

      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            登 录 到 您 的 账 户
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow dark:bg-grey-900 sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              method="post"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="请输入用户名或邮箱"
                    {...register("name", { required: true })}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-grey-600 dark:bg-grey-900 dark:focus:ring-grey-400 sm:text-sm dark:text-grey-200"
                  />
                  <AiOutlineUser className="pointer-events-none relative bottom-8 right-2  float-right fill-grey-300 text-2xl" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700  dark:text-white"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type={passValue.showPassword ? "text" : "password"}
                    {...register("password", { required: true })}
                    placeholder="请输入密码"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-grey-600 dark:bg-grey-900 dark:focus:ring-grey-400 sm:text-sm dark:text-grey-200"
                  />
                </div>
                <AiFillEye
                  hidden={passValue.showPassword}
                  onClick={toggleShow}
                  className="relative bottom-8 right-2 float-right fill-grey-300 text-2xl"
                />
                <AiFillEyeInvisible
                  hidden={!passValue.showPassword}
                  onClick={toggleShow}
                  className="relative bottom-8 right-2 float-right fill-grey-300 text-2xl"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                  {" "}
                  <Link to="/forget">忘记密码？ </Link>
                </span>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  登 录
                </button>
              </div>
              {(errors.name?.type === "required" ||
                errors.password?.type === "required") && (
                <p
                  className="relative bottom-6   font-extrabold text-red-500"
                  role="alert"
                >
                  用户名和密码为必填项!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
