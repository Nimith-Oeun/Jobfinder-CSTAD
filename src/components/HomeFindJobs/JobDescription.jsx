import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function JobDescription() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("");
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

  const handleButtonClick = () => {
    setActiveItem("Contact Us");
    navigate("/contact-us", { state: { activeItem: "Contact Us" } });
  };

  return (
    <section className="flex flex-col">
      <div
            {...(!isMobile && {
              "data-aos": "fade-up",
              "data-aos-easing": "ease-in-sine",
              "data-aos-duration": "1000",
              "data-aos-cout": "infinite",
              "data-aos-delay": "500",
            })}
        className="flex flex-col pl-9 self-stretch my-auto w-full text-xl font-medium text-black max-md:mt-10 max-md:max-w-full max-sm:p-0"
      >
        <h1 className="text-4xl font-bold max-sm:text-3xl max-sm:text-center">Find Your Perfect Jobs</h1>
        <p className="mt-8 w-3/4 max-sm:w-full max-sm:text-center max-sm:mt-3 max-sm:text-base max-sm:font-normal ">
          Testing crowdsource vesting period iPad launch party partnership
          venture angel investor
        </p>
        <div className="max-sm:m-auto">
          <button
            onClick={handleButtonClick}
            className="overflow-hidden gap-2.5 self-start px-3 py-2 mt-8 text-white bg-[#08A6FF] hover:bg-[#046BAC] rounded-md">
            Check Use
          </button>
        </div>
      </div>
    </section>
  );
}

export default JobDescription;
