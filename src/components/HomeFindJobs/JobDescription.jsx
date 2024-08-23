import React, { useEffect , useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function JobDescription() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("");
  useEffect(() => {
    AOS.init();
  }, []);

  const handleButtonClick = () => {
    setActiveItem("Contact Us");
    navigate("/contact-us",{ state: { activeItem: "Contact Us" } });
  };  
  
  return (
    <section className="flex flex-col ml-16 w-[37%] max-md:ml-0 max-md:w-full">
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-cout="infinite"
        data-aos-delay="500"
        className="flex flex-col pl-9 self-stretch my-auto w-full text-xl font-medium text-black max-md:mt-10 max-md:max-w-full"
      >
        <h1 className="text-4xl font-bold">Find Your Perfect Jobs</h1>
        <p className="mt-8 max-md:max-w-full">
          Testing crowdsource vesting period iPad launch party partnership
          venture angel investor
        </p>
        {/* <Link to="/Contact-Us"> */}
          <button 
            onClick={handleButtonClick}
            className="overflow-hidden gap-2.5 self-start px-3 py-2 mt-8 text-white bg-[#08A6FF] hover:bg-[#046BAC] rounded-md">
            Check Use
          </button>
        {/* </Link> */}

      </div>
    </section>
  );
}

export default JobDescription;
