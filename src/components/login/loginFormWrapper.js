import LoginForm from "./loginForm";

function LoginFormWrapper() {
  return (
    <div className="relative top-20 flex h-5/6  w-full flex-col flex-wrap place-items-center gap-4">
      <div className="h-1/12 invisible relative flex  w-full  flex-row  place-content-center text-4xl font-extrabold text-base-content 3xl:visible">
        <span className="w-1/3">欢迎来到PopGame社区</span>
      </div>
      <LoginForm />
    </div>
  );
}

export default LoginFormWrapper;
