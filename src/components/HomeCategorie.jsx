import * as React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import { useState } from "react";

export default function HomeCategorie({ title,discrption,thumbnail,item }) {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("");
  const handleButtonClick = () => {
    setActiveItem("Jobs");
    navigate("/Jobs",{ state: { activeItem: "Jobs" } });
  };
  const handleClickCard = (itemH) => {
    navigate("Jobs-Details",{ state:itemH });
    console.log("itemH", itemH);
  }
return (
    <div
    onClick={() => handleClickCard(item)} 
    className="flex shadow-md overflow-hidden flex-col sm:pt-8 2xl:pt-14  pb-8 my-auto border rounded-md border-[#cfe7f5] border-solid min-w-[240px] cursor-pointer  w-[343px] md:w-[300px] m-auto hover:mt-[-10px] hover:shadow-xl ">
      <img
        loading="lazy"
        src={thumbnail}
        className="object-contain self-center w-32 max-w-full rounded-full aspect-[1.04] border "
      />
      <div className="flex flex-col px-2.5 pt-1 pb-2.5 mt-10 min-h-[134px]">
        <div className="text-2xl font-semibold text-center text-black max-xl:text-xl">
          {title}
        </div>
        <div className="mt-3.5 text-base text-center text-black line-clamp-2">
          {discrption}
        </div>
        <button
        onClick={(e)=>{
          e.stopPropagation();
          handleButtonClick();
        }} 
        className="flex relative flex-col self-end mt-3.5 max-w-full text-xl font-medium text-sky-500 aspect-[5.304] w-[122px] hover:border-b-2 rounded-b border-[#08A6FF]">
            View More
        </button>
      </div>
    </div>
);
}