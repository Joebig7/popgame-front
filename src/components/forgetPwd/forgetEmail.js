import { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorModal from "../common/ErrorModal";
import SuccessModal from "../common/SuccessModal";
import axios from "axios";
import { POPIDEA_URL } from "../common/url-manage";

export default function ForgetEmail() {
  const [sendEmail, setSendEmail] = useState(false);

  const [confirmEmail, setConfirmEmail] = useState("");

  const { register, handleSubmit } = useForm();

  const [open, setOpen] = useState(false);
  const [errorInfo, setUseErrorInfo] = useState({
    title: "",
    description: "",
    path: "",
  });

  const [successOpen, setSuccessOpen] = useState(false);
  const [successInfo, setSuccessInfo] = useState({
    title: "",
    description: "",
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:flex lg:items-center lg:py-32 lg:px-8">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            忘记密码？
          </h2>
          <p className="text-md mt-3 max-w-3xl text-gray-400">
            别担心，我们会发送一封邮件到你的邮箱，请确认您的邮箱是否正确并点击发送来完成这项操作，发送成功后将获取到的验证码在页面中进行验证即可重置您的密码
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form
            className="sm:flex"
            onSubmit={handleSubmit((data) =>
              onSubmit(
                data,
                setOpen,
                setUseErrorInfo,
                setSuccessOpen,
                setSuccessInfo,
                setSendEmail,
                setConfirmEmail
              )
            )}
          >
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:max-w-xs"
              placeholder="请输入您的邮箱号"
              {...register("email")}
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-5 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-300"
                disabled={sendEmail}
              >
                {sendEmail === true ? "已发送" : "发送"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        className={`${
          sendEmail === true ? "visible" : "invisible"
        } mb-10 flex min-h-full flex-col  justify-center sm:px-6 lg:px-8`}
      >
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              onSubmit={handleSubmit((data) =>
                resetPwd(
                  data,
                  setOpen,
                  setUseErrorInfo,
                  setSuccessOpen,
                  setSuccessInfo,
                  confirmEmail
                )
              )}
            >
              <div>
                <label
                  htmlFor="verify_code"
                  className="block text-sm font-medium text-gray-700"
                >
                  验证码
                </label>
                <div className="mt-1">
                  <input
                    id="verify_code"
                    name="verify_code"
                    type="text"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    {...register("verify_code")}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  新密码
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    {...register("password")}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="repassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  重复密码
                </label>
                <div className="mt-1">
                  <input
                    id="repassword"
                    name="repassword"
                    type="password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  提 交
                </button>
              </div>
            </form>
          </div>
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
        path={successInfo.path}
      />
    </div>
  );
}

function onSubmit(
  data,
  setOpen,
  setUseErrorInfo,
  setSuccessOpen,
  setSuccessInfo,
  setSendEmail,
  setConfirmEmail
) {
  let email = data.email;

  axios
    .post(POPIDEA_URL + "/v1/users/auth/reset/email", {
      email: email,
    })
    .then(function (response) {
      if (response.status === 200 && response.data.code === 200) {
        console.log("start send");
        setSendEmail(true);
        setSuccessOpen(true);
        setSuccessInfo({
          title: "发送成功",
          description: "邮件发送成功，请前往您的邮箱进行确认",
          path: ".",
        });
        setConfirmEmail(email);
      } else if (response.status === 200 && response.data.code === 5002) {
        setOpen(true);
        setUseErrorInfo({
          title: "发送失败",
          description: "该邮箱还未注册过",
        });
      } else {
        setOpen(true);
        setUseErrorInfo({
          title: "发送失败",
          description: "发生了一些错误请再次尝试",
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

function resetPwd(
  data,
  setOpen,
  setUseErrorInfo,
  setSuccessOpen,
  setSuccessInfo,
  confirmEmail
) {
  let pwd = data.password;
  let code = data.verify_code;

  axios
    .post(POPIDEA_URL + "/v1/users/auth/reset/pwd", {
      email: confirmEmail,
      password: pwd,
      verify_code: code,
    })
    .then(function (response) {
      if (response.status === 200 && response.data.code === 200) {
        setSuccessOpen(true);
        setSuccessInfo({
          title: "密码重置成功",
          description: "恭喜您密码重置成功，请重新登录",
          path: "/login",
        });
      } else if (response.status === 200 && response.data.code === 5013) {
        setOpen(true);
        setUseErrorInfo({
          title: "密码重置失败",
          description: "密码重置发生了某些错误，请再次尝试",
        });
      } else if (response.status === 200 && response.data.code === 5014) {
        setOpen(true);
        setUseErrorInfo({
          title: "密码重置失败",
          description: "验证码错误，请仔细确认您邮箱中收到验证码",
        });
      } else {
        setOpen(true);
        setUseErrorInfo({
          title: "密码重置失败",
          description: "发生了一些错误请再次尝试",
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
