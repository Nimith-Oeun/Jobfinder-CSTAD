import React from "react";
import Login from "./LoginForm";
import LoginPanel from '../../../assets/LoginPanel.png'
function LoginPage() {
  return (
    <main className="flex overflow-hidden flex-col justify-center items-center bg-white max-md:px-5 max-md:py-24 h-screen">
      <section className="overflow-hidden rounded-2xl border-t border-gray-100 w-1/2 max-lg:w-[70%] shadow-lg">
        <div className="flex max-md:flex-col">
          <div className="flex bg-[#00214A] flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src={LoginPanel} alt="" className="object-conten w-full aspect-[1]" />
          </div>
          <Login />
        </div>
        
      </section>
    </main>
  );
}

export default LoginPage;