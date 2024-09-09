import React,{useState} from "react";
import Header from "../assets/Header.png";
import { useNavigate } from "react-router-dom";

export default function HeaderSlide() {
const navigate = useNavigate();
const [activeItem, setActiveItem] = useState("");
const handleClick = () => {
  setActiveItem("Jobs");
  navigate("/Jobs",{ state: { activeItem: "Jobs" } });
}
  return (
      <div className="w-full pt-40 bg-[#00214A] max-md:pt-24">
        <div className=" self-end sm:w-[90%] m-auto max-sm:w-full max-sm:p-10  ">
          <div className="flex items-center sm:h-[320px] 2xl:h-[580px]">
            <div className="grow sm:pl-10  ">
              <div className="flex flex-col justify-center w-full text-xl font-medium text-white">
                <div className="md:text-4xl lg:text-6xl  font-semibold max-md:max-w-full max-sm:text-5xl">
                  Find the <span className="text-orange-400">Jobs</span> <br/> That Fit
                  <br />
                  Your Left
                </div>
                <div className="2xl:mt-16 md: mt-5 text-white  sm:text-[13px] 2xl:text-[20px] line-clamp-2">
                  The Job Finder website was developed to help job seekers easily <br />
                  browse the best jobs, learn about employers, and get advice on
                
                </div>
                <button
                onClick={handleClick}
                className="overflow-hidden gap-2.5 self-stretch px-3 py-4 2xl:mt-16 md: mt-5 max-w-full bg-sky-500 rounded-md min-h-[56px] w-[167px] max-md:mt-10 hover:bg-[#046BAC]">
                  Find Jobs
                </button>
              </div>
            </div>
            <div className="max-sm:hidden sm:pr-16 ">
              <img
                src={Header}
                className="object-contain w-full max-xl:ml-[100px]  sm:h-[350px] 2xl:h-[585px] max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8579e2beb3277c7d937b7ddf8f402eadbbcff52e372eb0d0c418b529e9ea976?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948"
          className="object-contain w-full aspect-[11.24] fill-orange-400 max-md:max-w-full"
        />
      </div>
   
  );
}
