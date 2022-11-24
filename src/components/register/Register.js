import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { POPIDEA_URL } from "../common/url-manage";
import { ILLEGAL_CHAR } from "../common/string-manage";
import ErrorModal from "../common/ErrorModal";
import SuccessModal from "../common/SuccessModal";
import * as stringUtils from "../../util/string";

export default function RegisterContent() {
  const { register, handleSubmit } = useForm();

  const [open, setOpen] = useState(false);
  const [errorInfo, setUseErrorInfo] = useState({
    title: "",
    description: "",
  });

  const [successOpen, setSuccessOpen] = useState(false);
  const [successInfo, setSuccessInfo] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate();

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="font-blod  text-center text-4xl font-extrabold text-blue-700">
            PopGame
          </h1>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            注册你的账户
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              action="#"
              method="post"
              onSubmit={handleSubmit((data) =>
                onSubmit(
                  data,
                  setOpen,
                  setUseErrorInfo,
                  navigate,
                  setSuccessOpen,
                  setSuccessInfo
                )
              )}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  你的邮箱
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="example@xxx.com"
                    {...register("email")}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  用户名
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="用户名不能包含特殊字符，比如\,~..."
                    {...register("username")}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  密码
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="密码长度不能少于6位"
                    {...register("password")}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  确认密码
                </label>
                <div className="mt-1">
                  <input
                    id="repassword"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    {...register("repassword")}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  已经注册过?
                  <Link
                    to="/login"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    请登录
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  注 册
                </button>
              </div>
            </form>
          </div>
        </div>

        <ErrorModal
          open={open}
          setOpen={setOpen}
          title={errorInfo.title}
          description={errorInfo.description}
        />

        <SuccessModal
          open={successOpen}
          setOpen={setSuccessOpen}
          title={successInfo.title}
          description={successInfo.description}
        />
      </div>
    </>
  );
}

function onSubmit(
  data,
  setOpen,
  setUseErrorInfo,
  navigate,
  setSuccessOpen,
  setSuccessInfo
) {
  let email = data.email;
  let username = data.username;
  let password = data.password;
  let repassword = data.repassword;
  console.log(data);
  if (
    stringUtils.isNull(email) ||
    stringUtils.isNull(username) ||
    stringUtils.isNull(password) ||
    stringUtils.isNull(repassword)
  ) {
    setOpen(true);
    setUseErrorInfo({
      title: "必填属性不能为空",
      description: "请检查您是否有必填项没有填充",
    });
  }

  const regex = new RegExp(ILLEGAL_CHAR, "g");
  if (regex.test(username)) {
    setOpen(true);
    setUseErrorInfo({
      title: "用户名不能包含特殊字符",
      description: "请检查您输入的用户名是否符合规则",
    });
    return;
  }

  if (password.length < 6) {
    setOpen(true);
    setUseErrorInfo({
      title: "密码长度不正确",
      description: "请检查您输入的密码长度是否大于6位",
    });

    return;
  }

  if (password !== repassword) {
    console.log("xx");
    setOpen(true);
    setUseErrorInfo({
      title: "两次密码输入不一致",
      description: "请检查您输入的密码是否一致",
    });
    return;
  }

  axios
    .post(POPIDEA_URL + "/v1/users/auth", {
      username: username,
      password: password,
      email: email,
    })
    .then(function (response) {
      if (response.status === 200 && response.data.code === 2001) {
        setSuccessOpen(true);
        setSuccessInfo({
          title: "注册成功",
          description: "恭喜您成功注册为PopGame的会员!",
        });
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else if (response.status === 200 && response.data.code === 5005) {
        setOpen(true);
        setUseErrorInfo({
          title: "用户注册失败",
          description: "注册失败，用户名已存在",
        });
      } else if (response.status === 200 && response.data.code === 5004) {
        setOpen(true);
        setUseErrorInfo({
          title: "用户注册失败",
          description: "注册失败，该邮箱已经注册过",
        });
      } else {
        setOpen(true);
        setUseErrorInfo({
          title: "用户注册失败",
          description: "注册失败，您可以尝试重新注册",
        });
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
}
