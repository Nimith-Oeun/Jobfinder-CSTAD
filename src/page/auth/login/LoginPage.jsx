import React from "react";
import Login from "./LoginForm";
import LoginPanel from "../../../assets/LoginPanel.png";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <main className="flex overflow-hidden flex-col justify-center items-center bg-white max-md:px-5 max-md:py-24 h-screen">
      <section className="overflow-hidden rounded-2xl border-t border-gray-100 w-1/2 max-lg:w-[70%] shadow-lg">
        <div className="flex max-md:flex-col ">
          <div className=" bg-[#00214A] flex-col w-[56%] max-md:ml-0 max-md:w-full relative">
            <Link to="/">
              <img src={Logo} alt="" className="w-[80px] object-contain pt-2 absolute ml-5 mt-5 max-sm:w-[50px] max-sm:ml-2 max-sm:mt-2 max-xl:mt-2 max-xl:ml-2 max-xl:w-[50px]" />
            </Link>
            <div className="max-xl:pt-16 max-[380px]:flex max-[380px]:justify-center max-[380px]:items-center max-[380px]:pt-10">
            <img
              loading="lazy"
              src={LoginPanel}
              alt=""
              className="object-conten w-full aspect-[1] max-[380px]:w-[50%] "
            />
            </div>
          </div>
          <Login />
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
