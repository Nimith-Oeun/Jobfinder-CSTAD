import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Feartur() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="w-[800px] m-auto "
      data-aos="fade-left"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
      data-aos-cout="infinite"
    >
      <div className="text-4xl font-bold text-center">Fearture On</div>
      <div className="text-base font-medium text-center mt-6 ">
        Jobify is delighted to be covered by various Media. Our team adheres to
        six original core values (Teamwork, High Ambition, Strong Confident, Be
        the only ONE, Working Hard, and PDCA Quality Cycle) to ensure we deliver
        what we promise to ourselves and our customers.
      </div>
    </div>
  );
}
