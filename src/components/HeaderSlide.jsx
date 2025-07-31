import React,{useState, useEffect} from "react";
import Header1 from "../assets/Header1.png";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeaderSlide() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false
    });
  }, []);

  const handleClick = () => {
    setActiveItem("Jobs");
    navigate("/Jobs", { state: { activeItem: "Jobs" } });
  };

  return (
    <div className="relative w-full pt-40 bg-gradient-to-br from-[#00214A] via-[#002952] to-[#001B3F] max-md:pt-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-400 rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 self-end sm:w-[90%] m-auto max-sm:w-full max-sm:p-10">
        <div className="flex items-center sm:h-[320px] 2xl:h-[580px] relative">
          {/* Content Section */}
          <div className="grow sm:pl-10 z-20" data-aos="fade-right">
            <div className="flex flex-col justify-center w-full text-xl font-medium text-white space-y-6">
              {/* Main Heading */}
              <div className="relative">
                <div className="md:text-4xl lg:text-6xl font-bold max-md:max-w-full max-sm:text-5xl leading-tight" data-aos="fade-up" data-aos-delay="200">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                    Find the 
                  </span>
                  <br />
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent animate-pulse font-extrabold">
                      Perfect Jobs
                    </span>
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-pulse"></div>
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                    That Fit Your Life
                  </span>
                </div>
                
                {/* Decorative elements around text */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-blue-400/30 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 -right-6 w-6 h-6 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-bounce"></div>
              </div>

              {/* Description */}
              <div className="relative 2xl:mt-16 mt-8" data-aos="fade-up" data-aos-delay="400">
                <p className="text-gray-300 sm:text-[14px] 2xl:text-[20px] leading-relaxed max-w-2xl">
                  <span className="text-blue-200 font-semibold">Discover amazing career opportunities</span> with leading companies across the globe. 
                  <br />
                  <span className="text-cyan-200">Connect with top employers</span> and take the next step in your professional journey.
                </p>
                <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full opacity-50"></div>
              </div>

              {/* CTA Button */}
              <div className="relative 2xl:mt-16 mt-8" data-aos="fade-up" data-aos-delay="600">
                <button
                  onClick={handleClick}
                  className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-sky-500 via-blue-600 to-sky-500 rounded-2xl min-h-[56px] w-[200px] max-md:mt-10 font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-sky-500/25 transition-all duration-500 hover:scale-110 transform-gpu"
                >
                  {/* Button background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Button content */}
                  <div className="relative z-10 flex items-center justify-center space-x-2">
                    <span className="group-hover:scale-110 transition-transform duration-300">Find Jobs</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </button>
                
                {/* Button decorative elements */}
                <div className="absolute -bottom-2 left-4 w-4 h-4 bg-orange-400/30 rounded-full animate-ping"></div>
                <div className="absolute -top-2 right-4 w-3 h-3 bg-cyan-400/50 rounded-full animate-bounce"></div>
              </div>

              {/* Stats or features */}
              <div className="flex space-x-8 mt-8" data-aos="fade-up" data-aos-delay="800">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">1000+</div>
                  <div className="text-sm text-gray-400">Active Jobs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">500+</div>
                  <div className="text-sm text-gray-400">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">50k+</div>
                  <div className="text-sm text-gray-400">Job Seekers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative max-sm:hidden sm:pr-16 z-10" data-aos="fade-left" data-aos-delay="300">
            {/* Image container with enhanced effects */}
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl scale-110 animate-pulse"></div>
              
              {/* Main image */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                <img
                  src={Header1}
                  alt="Job Search Illustration"
                  className="object-contain w-full max-xl:ml-[100px] sm:h-[280px] 2xl:h-[450px] 2xl:ml-[100px] max-md:max-w-full hover:scale-110 transition-all duration-700 ease-out transform rotate-12 hover:rotate-6 drop-shadow-2xl"
                />
                
                {/* Floating decorative elements around image */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-6 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom wave with beautiful effects */}
      <div className="relative overflow-hidden">
        {/* Multiple wave layers for depth */}
        <div className="relative">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-yellow-400/10 to-transparent blur-xl"></div>
          
          {/* Main wave */}
          <div className="relative">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8579e2beb3277c7d937b7ddf8f402eadbbcff52e372eb0d0c418b529e9ea976?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948"
              alt="Decorative wave"
              className="object-contain w-full aspect-[11.24] max-md:max-w-full relative z-10 drop-shadow-2xl"
            />
            
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/60 via-yellow-400/70 to-orange-500/60 mix-blend-overlay animate-pulse"></div>
            
            {/* Secondary gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-300/30 to-orange-600/40 mix-blend-multiply"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer transform skew-x-12"></div>
          </div>
          
          {/* Floating particles above wave */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div
                key={`wave-particle-${i}`}
                className="absolute rounded-full bg-gradient-to-r from-orange-300/40 to-yellow-300/40 animate-float-wave"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 60}%`,
                  width: `${4 + Math.random() * 8}px`,
                  height: `${4 + Math.random() * 8}px`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${4 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          
          {/* Light rays effect */}
          <div className="absolute bottom-0 left-1/4 w-1 h-20 bg-gradient-to-t from-yellow-400/60 to-transparent blur-sm animate-pulse"></div>
          <div className="absolute bottom-0 left-1/2 w-1 h-16 bg-gradient-to-t from-orange-400/50 to-transparent blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-0 right-1/3 w-1 h-24 bg-gradient-to-t from-yellow-500/40 to-transparent blur-sm animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Reflection effect */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/10 to-transparent mix-blend-overlay"></div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        
        @keyframes float-wave {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.3; }
          25% { transform: translateY(-15px) translateX(5px) scale(1.1); opacity: 0.6; }
          50% { transform: translateY(-8px) translateX(-3px) scale(0.9); opacity: 0.8; }
          75% { transform: translateY(-12px) translateX(7px) scale(1.05); opacity: 0.4; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(12deg); }
          100% { transform: translateX(200%) skewX(12deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-wave {
          animation: float-wave 5s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
