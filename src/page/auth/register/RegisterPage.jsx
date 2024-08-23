import React from "react";
import RegisterForm from "./RegisterForm";
import LoginPanel from '../../../assets/LoginPanel.png'
export default function RegisterPage() {
  return (
    <main className="flex overflow-hidden flex-col justify-center items-center bg-white max-md:px-5 h-screen">
      <section className="overflow-hidden rounded-2xl border-t border-gray-100 w-1/2 max-xl:w-[70%] shadow-lg">
        <div className="flex max-md:flex-col">
          <div className="flex bg-[#00214A] flex-col w-[56%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src={LoginPanel} alt="" className="object-contain w-full aspect-[1]" />
          </div>
          <RegisterForm />
        </div>
      </section>
    </main>
  );
}