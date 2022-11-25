import Logo from "../common/logo";  
export default function ForgetPwd() {
  return (
    <div className="bg-white">
      <Logo className="text-center font-blod  text-4xl font-extrabold text-blue-700" />
      <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:flex lg:items-center lg:py-32 lg:px-8">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            忘记密码？
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            别担心，我们会发送一封邮件到你的邮箱，请确认您的邮箱是否正确并点击发送来完成这项操作，发送成功后邮箱中会有一个让你重置密码的链接请点击它。
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
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
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-5 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                发送
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
