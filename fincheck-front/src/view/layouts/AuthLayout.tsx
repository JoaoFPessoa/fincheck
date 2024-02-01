import loginIllustation from "../../assets/LoginIllustration.png";
import logo from "../../assets/logo.svg";
import grayLogo from "../../assets/Logo-gray.svg";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className="h-full w-full  flex justify-center items-center flex-col gap-16 lg:w-1/2">
        <img src={grayLogo} className="h-6" alt="" />
        <div className="max-w-[504px] w-full px-8">
          <Outlet />
        </div>
      </div>
      <div className=" h-full w-1/2 justify-center p-8 items-center relative hidden lg:flex">
        <img
          src={loginIllustation}
          alt="illustration"
          className=" h-full max-h-[960px] w-full max-w-[656px] select-none rounded-[32px]"
        />
        <div className="max-w-[656px] bottom-8 bg-white p-10 absolute rounded-b-[32px]">
          <img src={logo} className="pt-4 pb-4" />
          <p className="text-gray-700 font-medium text-xl">
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
