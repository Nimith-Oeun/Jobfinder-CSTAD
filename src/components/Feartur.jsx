import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Feartur() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Adjust the breakpoint as needed
    };

    handleResize(); // Check the screen size on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="p-5 text-center"
      {...(!isMobile && {
        "data-aos": "fade-up",
        "data-aos-easing": "ease-in-out",
        "data-aos-duration": "1000",
      })}
    >
      <div className="text-4xl font-bold text-center" data-aos="zoom-in" data-aos-delay="200">
        Featured On
      </div>
      <div className="text-base font-medium mt-6 flex items-center justify-center" data-aos="fade-up" data-aos-delay="400">
        <p className="w-3/5 max-sm:w-full max-sm:text-base max-sm:font-normal leading-relaxed">
          HR Jobs is proud to be recognized by leading media outlets. Our dedicated team follows 
          six core values: <span className="font-semibold text-sky-600">Teamwork</span>, <span className="font-semibold text-sky-600">High Ambition</span>, 
          <span className="font-semibold text-sky-600"> Strong Confidence</span>, <span className="font-semibold text-sky-600">Be the Only ONE</span>, 
          <span className="font-semibold text-sky-600"> Working Hard</span>, and <span className="font-semibold text-sky-600">PDCA Quality Cycle</span> to 
          ensure we deliver exceptional results to our customers and partners.
        </p>
      </div>
    </div>
  );
}
