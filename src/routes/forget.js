import ForgetContent from "../components/forgetPwd/forgetContent";
import Logo from "../components/common/logo";

function Forget() {
  return (
    <div className="flex flex-col gap-8">
      <Logo className="font-blod text-center  text-4xl font-extrabold text-blue-700" />

      <ForgetContent />
    </div>
  );
}

export default Forget;
