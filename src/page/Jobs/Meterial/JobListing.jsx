import React from "react";
import { useNavigate } from "react-router-dom";

export default function JobListing({ title, company, job_type, salary, thumbnail, location, itemJ }) {
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/Jobs-Details`, { state: item });
    console.log("itemFromJoblist", item);
  };
 
  return (
    <>
    <div className="w-full mx-auto bg-[#00214A] rounded-xl overflow-hidden mb-[30px] shadow-md">
      <div className="md:flex ">
        <div className="md:shrink-0 bg-white w-ful ">
          <img
            className="h-48 w-full object-contain md:h-full md:w-48 max-md:object-contain max-md:w-full shadow-hight "
            src={thumbnail}
            alt="PanelJob"
          />
        </div>
        <div className=" w-full border-t-[1px] border-white">
          <div className="p-3">
            <div className="uppercase tracking-wide text-xl text-white font-semibold">
              {title}
            </div>
            <div className="flex justify-between">
              <a
                href="#"
                className="block mt-1 leading-tight font-medium text-white hover:underline"
              >
                {company}
              </a>
              <p className="mt-2 text-white">{job_type}</p>
            </div>
            <p className="mt-2 text-white">{salary}</p>

            <div className="flex justify-between ">
              <p className="mt-2 text-white">{location}</p>
              <button
              onClick={()=>{handleClick(itemJ)}} 
              className="bg-[#08A6FF] p-1 rounded-md hover: hover:border-none hover:scale-[1.05] text-white">
                  View Detail
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
