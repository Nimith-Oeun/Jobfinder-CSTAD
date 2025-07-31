import React from "react";
import { useNavigate } from "react-router-dom";

export default function JobListing({ title, company, job_type, salary, thumbnail, location, itemJ }) {
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/Jobs/Jobs-Details/${item.id}`, { state: item });
    console.log("itemFromJoblist", item);
  };
 
  return (
    <div className="group relative w-full mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl overflow-hidden mb-6 border border-white/20 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-out" data-aos="fade-up" data-aos-duration="500">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
      </div>

      <div className="relative md:flex">
        {/* Image section */}
        <div className="md:shrink-0 bg-gradient-to-br from-gray-50 to-gray-100 w-full md:w-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50"></div>
          <img
            className="relative z-10 h-48 w-full object-contain md:h-full md:w-48 max-md:object-contain max-md:w-full p-4 group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
            src={thumbnail}
            alt="Job Thumbnail"
          />
          {/* Company logo glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        </div>

        {/* Content section */}
        <div className="flex-1 border-t border-white/20 md:border-t-0 md:border-l border-white/20">
          <div className="p-6 space-y-4">
            {/* Job title */}
            <div className="relative">
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
                {title}
              </h3>
              <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
            </div>

            {/* Company and job type */}
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <a
                  href="#"
                  className="block text-gray-200 hover:text-cyan-300 hover:underline transition-colors duration-200 font-medium"
                >
                  🏢 {company}
                </a>
                <p className="text-green-400 font-semibold flex items-center">
                  💰 {salary}
                </p>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium shadow-lg">
                  {job_type}
                </span>
              </div>
            </div>

            {/* Location and button */}
            <div className="flex justify-between items-end pt-2">
              <p className="text-gray-300 flex items-center">
                <span className="mr-2 text-red-400">📍</span> 
                <span className="font-medium">{location}</span>
              </p>
              
              <button
                onClick={() => { handleClick(itemJ) }}
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 py-2.5 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group/btn"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>View Details</span>
                  <span className="transform group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                </span>
                
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-400/20 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-tr-full"></div>
    </div>
  );
}
