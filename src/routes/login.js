
import LoginBg from "../components/login/loginBg";
import LoginContent from "../components/login/loginContent";

// import LoginComponent from "../components/loginComponet";
// import LoginNavComponent from "../components/loginNavComponent";

function Login() {
 
  return (
    <div className="flex flex-row">
      <LoginBg />
      <LoginContent />

    </div>
  );
}

// function Login() {
//   return (
//     <div className="flex flex-row">
//       <div className="h-screen w-full basis-1/3 bg-[url('/public/images/login-bg-cover.jpg')] bg-auto bg-center drop-shadow-xl"></div>
//       <div className="flex h-screen w-full basis-2/3 flex-col">
//         <LoginNavComponent />
//         <LoginComponent />
//       </div>
//     </div>
//   );
// }

export default Login;
