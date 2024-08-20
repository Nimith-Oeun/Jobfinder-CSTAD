import React from "react";
import RegisterForm from "./RegisterForm";
export default function RegisterPage() {
  return (
    <main className="flex overflow-hidden flex-col justify-center items-center bg-white max-md:px-5 h-screen">
      <section className="overflow-hidden rounded-2xl border-t border-gray-100 w-1/2 max-xl:w-[70%] shadow-lg">
        <div className="flex max-md:flex-col">
          <div className="flex bg-[#00214A] flex-col w-[56%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e22eab1697d2eab27db6e0ab485cc03a7801e1c8b3ec5cddcfde0458d4613f72?placeholderIfAbsent=true&apiKey=61e0f926b16d41ccaa361aad4310ee3b" alt="" className="object-contain w-full aspect-[1]" />
          </div>
          <RegisterForm />
        </div>
      </section>
    </main>
  );
}