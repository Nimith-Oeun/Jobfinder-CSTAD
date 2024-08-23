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
      <div className="overflow-hidden pt-40 bg-[#00214A] max-md:pt-24">
        <div className="z-10 self-end w-full max-w-[90%] ml-[200px] ">
          <div className="flex gap-10 max-md:flex-col sm:h-[320px] 2xl:h-[600px]">
            <div className="inline-block w-[52%] ">
              <div className="flex flex-col justify-center w-full text-xl font-medium text-white ">
                <div className="text-6xl font-semibold max-md:max-w-full 2xl:text-6xl sm:text-4xl">
                  Find the <span className="text-orange-400">Jobs</span> <br/>That Fit
                  <br />
                  Your Left
                </div>
                <div className="2xl:mt-16 md: mt-5 text-white  sm:text-[13px] 2xl:text-[20px]">
                  The Job Finder website was developed to help job seekers easily
                  browse the best jobs, learn about employers, and get advice on
                
                </div>
                <button
                onClick={handleClick}
                className="overflow-hidden gap-2.5 self-stretch px-3 py-4 2xl:mt-16 md: mt-5 max-w-full bg-sky-500 rounded-md min-h-[56px] w-[167px] max-md:mt-10 hover:bg-[#046BAC]">
                  Find Jobs
                </button>
              </div>
            </div>
            <div className="ml-[200px] 2xl:w-[60%] sm:w-[1000px] ">
              <img
                src={Header}
                className="object-contain grow w-full sm:w-[1000px] sm:h-[350px] 2xl:h-[680px] max-md:max-w-full"
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
