import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Feartur() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    AOS.init();
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
        "data-aos": "fade-left",
        "data-aos-easing": "ease-in-out",
        "data-aos-duration": "1000",
        "data-aos-cout": "infinite",
      })}
    >
      <div className="text-4xl font-bold text-center">Fearture On</div>
      <div className="text-base font-medium mt-6 flex items-center justify-center ">
        <p className="w-3/5 max-sm:w-full max-sm:text-base max-sm:font-normal">
          HR Jobs is delighted to be covered by various Media. Our team adheres to
          six original core values (Teamwork, High Ambition, Strong Confident, Be
          the only ONE, Working Hard, and PDCA Quality Cycle) to ensure we deliver
          what we promise to ourselves and our customers.
        </p>
      </div>
    </div>
  );
}
