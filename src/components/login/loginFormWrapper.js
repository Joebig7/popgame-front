import LoginForm from "./loginForm";

function LoginFormWrapper() {
  return (
    <div className="relative  flex h-5/6  w-full flex-col  place-items-center gap-20">
      <div className="h-1/12 invisible relative top-56 flex  w-full  flex-row  place-content-center text-4xl font-extrabold text-base-content 3xl:visible">
        <span className="w-1/3">欢迎来到PopGame社区</span>
      </div>
      <LoginForm />
    </div>
  );
}

export default LoginFormWrapper;
