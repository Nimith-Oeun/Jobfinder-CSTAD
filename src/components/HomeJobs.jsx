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
      <div className="flex shadow-md overflow-hidden flex-col px-3 pt-10 pb-6 my-auto bg-white rounded-md border border-[#cfe7f5] border-solid 2xl:w-[410px] lg:w-full max-w-[410px] m-auto min-w  hover:border-none hover:mt-[-10px] hover:shadow-xl">
        <div className="flex 2xl:gap-[56px] lg:gap-[7px] text-center ">
          <div className="flex flex-col grow">
            <div className="self-start xl:text-lg 2xl:text-xl font-medium text-sky-950">
              {title}
            </div>
            <div className="mt-4 line-clamp-2 2xl:text-base xl:text-[14px] text-start text-black w-auto lg:w-[300px] xl:w-[200px] sm:w-[300px]">
              {description}
            </div>
          </div>
          <div className="self-start text-base text-black 2xl:text-base xl:text-[14px]">
            {job_type}
          </div>
        </div>
        <div className="flex 2xl:gap-[60px] lg:gap-[35px] sm:gap-[80px] items-start mt-7">
          <div className="flex flex-col text-base text-center text-black grow">
            <div className="self-start 2xl:text-base xl:text-[14px] line-clamp-1">
              {salary}
            </div>

            <div className="flex text-start mt-11 2xl:text-base xl:text-[14px] w-[175px]">
              <HiLocationMarker />
              {location}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-base text-end text-black 2xl:text-base xl:text-[14px] line-clamp-1">
              {company}
            </div>
            <button
              onClick={handleClickApply}
              className="overflow-hidden gap-2.5 self-end px-3 py-2 mt-5 text-xl font-medium text-sky-500 bg-blue-50 rounded-md border border-sky-500 border-solid"
            >
              Apply
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
