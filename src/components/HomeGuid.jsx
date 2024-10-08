import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect ,useState } from "react";

export default function HomeGuide() {
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
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 max-md:flex-col w-[90%] m-auto">
      <div className="flex flex-col  lg:w-4/5  max-md:ml-0 max-md:w-full max-sm:items-center">
        <div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col max-w-full">
            <div className="self-start text-4xl font-bold text-start max-sm:m-auto">
              How It Works
            </div>
            <div className="lg:mt-3 2xl:mt-5 2xl:font-medium max-sm:text-center">
              Testing crowdsopurce vesting penriod ipad launch parthy
              partnership ventur angel investor
            </div>
          </div>
          <img
             {...(!isMobile && {
              "data-aos": "fade-right",
              "data-aos-easing": "ease-in-sine",
              "data-aos-duration": "1000",
              "data-aos-cout": "infinite",
              "animation-iteration-count": "infinite",
            })}
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/38cc767d284785e022972cbd3b8d4c9551a653dcc7ffcd99ebf0f50c923d9ed7?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/38cc767d284785e022972cbd3b8d4c9551a653dcc7ffcd99ebf0f50c923d9ed7?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38cc767d284785e022972cbd3b8d4c9551a653dcc7ffcd99ebf0f50c923d9ed7?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/38cc767d284785e022972cbd3b8d4c9551a653dcc7ffcd99ebf0f50c923d9ed7?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/38cc767d284785e022972cbd3b8d4c9551a653dcc7ffcd99ebf0f50c923d9ed7?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38cc767d284785e022972cbd3b8d4c9551a653dcc7ffcd99ebf0f50c923d9ed7?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/38cc767d284785e022972cbd3b8d4c9551a653dcc7ffcd99ebf0f50c923d9ed7?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/38cc767d284785e022972cbd3b8d4c9551a653dcc7ffcd99ebf0f50c923d9ed7?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948"
            className="object-contain mt-6 w-full aspect-[1.43] max-md:max-w-full"
          />
        </div>
      </div>
      <div className="flex flex-col px-5">
        <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full ">
          <div
            className="flex w-full shadow-md overflow-hidden flex-col justify-center px-9 py-4 border border-[#cfe7f5] border-solid max-md:px-5 max-md:max-w-full rounded-md"
            {...(!isMobile && {
              "data-aos": "fade-left",
              "data-aos-easing": "ease-in-sine",
              "data-aos-duration": "1000",
              "data-aos-cout": "infinite",
              "data-aos-delay": "1000",
            })}
          >
            <div className="flex flex-col justify-center w-full">
              <div className="text-2xl font-semibold">Create Account</div>
              <div className="lg:mt-2 2xl:mt-5 2xl:font-medium">
                Testing crowdsopurce vesting penriod ipad launch parthy
                partnership ventur angel investor
              </div>
            </div>
          </div>
          <div
             {...(!isMobile && {
              "data-aos": "fade-left",
              "data-aos-easing": "ease-in-sine",
              "data-aos-duration": "1000",
              "data-aos-cout": "infinite",
              "data-aos-delay": "1500",
            })}
            className="flex shadow-md overflow-hidden flex-col justify-center px-9 py-4 mt-10 border border-[#cfe7f5] border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full rounded-md"
          >
            <div className="flex flex-col justify-center w-full">
              <div className="text-2xl font-semibold">Apply For Your Jobs</div>
              <div className="lg:mt-2 2xl:mt-5 2xl:font-medium">
                Testing crowdsopurce vesting penriod ipad launch parthy
                partnership ventur angel investor
              </div>
            </div>
          </div>
          <div
           {...(!isMobile && {
            "data-aos": "fade-left",
            "data-aos-easing": "ease-in-sine",
            "data-aos-duration": "1000",
            "data-aos-cout": "infinite",
            "data-aos-delay": "2000",
          })}
            className="flex shadow-md overflow-hidden flex-col justify-center px-9 py-4 mt-10 border border-[#cfe7f5] border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full rounded-md"
          >
            <div className="flex flex-col justify-center w-full">
              <div className="text-2xl font-semibold">Hire Now</div>
              <div className="lg:mt-2 2xl:mt-5 2xl:font-medium">
                Testing crowdsopurce vesting penriod ipad launch parthy
                partnership ventur angel investor
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
