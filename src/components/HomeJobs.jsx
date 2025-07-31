import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { getAccessToken } from "../lib/securLocalStorage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ApplyJobs from "../page/applyJob/ApplyJobs.jsx";

export default function HomeJobs({
  title,
  company,
  job_type,
  salary,
  description,
  location,
  id,
}) {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const handleClickApply = () => {
    if (getAccessToken()) {
      console.log("Apply");
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <div className="flex shadow-md overflow-hidden flex-col px-3 pt-10 pb-6 my-auto bg-white rounded-md border border-[#cfe7f5] border-solid 2xl:w-[410px] lg:w-full max-w-[410px] m-auto min-w hover:border-sky-300 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out" 
           data-aos="fade-up" 
           data-aos-duration="600">
        <div className="flex 2xl:gap-[56px] lg:gap-[7px] text-center ">
          <div className="flex flex-col grow">
            <div className="self-start xl:text-lg 2xl:text-xl font-bold text-sky-950 max-sm:text-xl hover:text-sky-700 transition-colors duration-200">
              {title}
            </div>
            <div className="mt-4 line-clamp-2 2xl:text-base xl:text-[14px] text-start text-black w-auto lg:w-[300px] xl:w-[200px] sm:w-[300px] max-sm:w-[300px]">
              {description}
            </div>
          </div>
          <div className="self-start text-base text-black 2xl:text-base xl:text-[14px]">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
              {job_type}
            </span>
          </div>
        </div>
        <div className="flex 2xl:gap-[60px] lg:gap-[35px] sm:gap-[80px] items-start mt-7">
          <div className="flex flex-col text-base text-center text-black grow">
            <div className="self-start 2xl:text-base xl:text-[14px] line-clamp-1 font-semibold text-green-600">
              {salary}
            </div>

            <div className="flex text-start mt-11 2xl:text-base xl:text-[14px] w-[175px] items-center text-gray-600">
              <HiLocationMarker className="mr-1 text-red-500" />
              {location}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-base text-end text-black 2xl:text-base xl:text-[14px] line-clamp-1 font-medium">
              {company}
            </div>
            <button
              onClick={handleClickApply}
              className="overflow-hidden gap-2.5 self-end px-3 py-2 mt-5 text-xl font-medium text-sky-500 bg-blue-50 rounded-md border border-sky-500 border-solid hover:bg-sky-500 hover:text-white hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ApplyJobs
        openModal={openModal}
        setOpenModal={setOpenModal}
        job_id={id}
      />
    </>
  );
}
