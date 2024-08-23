import * as React from "react";
import { Link } from "react-router-dom";

export default function HomeCategorie({ title,discrption,thumbnail }) {
return (
    <div className="flex shadow-md overflow-hidden flex-col sm:pt-8 2xl:pt-14  pb-8 my-auto border rounded-md border-[#cfe7f5] border-solid min-w-[240px]  w-[343px] md:w-[300px] m-auto ">
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
        <span className="flex relative flex-col self-end mt-3.5 max-w-full text-xl font-medium text-sky-500 aspect-[5.304] w-[122px] hover:border-b-2 rounded-b border-[#08A6FF]">
          <Link to="Jobs">
            View Details
          </Link>
        </span>
      </div>
    </div>
);
}