import React, { useEffect } from "react";
import ImageGallery from "./ImageGallery";
import JobDescription from "./JobDescription";
import AOS from "aos";
import "aos/dist/aos.css";
import work from "../../assets/Work.png";

function JobSearch() {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bdae1cfb6247aa11e83d2828139091bdf142b5f760c31316aa022b613da893f?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948",
      alt: "Job search illustration 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7185cb71d5a118640a3d2519c8ecb658e6623fe606fd28d0aebe6eff21265a06?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948",
      alt: "Job search illustration 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c95807bf94e96af61d21d756b44f463cbf506e6a3ef56c730ad9723edec13911?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948",
      alt: "Job search illustration 3",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="flex max-md:flex-col w-[90%] m-auto">
      <section className="w-full m-auto">
      <JobDescription />
      </section>
      
      <article className="grid grid-cols-2 grid-rows-2 justify-center items-center max-sm:grid-cols-1 max-sm:gap-5 gap-5 grow max-sm:mt-10">
        <section className="row-span-2 flex justify-center ">
          <img src={work} alt="Job Pictur" className="w-3/4 rounded-md" />
        </section>
        <section className=" ">
            <ImageGallery
              src={images[0].src}
              alt={images[0].alt}
            />
        </section>
        <section className="">
          <ImageGallery src={images[1].src} alt={images[1].alt}  />
        </section>

      </article>

    </main>
  );
}

export default JobSearch;
