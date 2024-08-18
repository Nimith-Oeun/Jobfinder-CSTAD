import React from "react";
import ImageGallery from "./ImageGallery";
import JobDescription from "./JobDescription";

function JobSearch() {
  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bdae1cfb6247aa11e83d2828139091bdf142b5f760c31316aa022b613da893f?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948", alt: "Job search illustration 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7185cb71d5a118640a3d2519c8ecb658e6623fe606fd28d0aebe6eff21265a06?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948", alt: "Job search illustration 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c95807bf94e96af61d21d756b44f463cbf506e6a3ef56c730ad9723edec13911?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948", alt: "Job search illustration 3" }
  ];

  return (
    <main className="flex gap-5 max-md:flex-col">
        <JobDescription />
        <section className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
        <ImageGallery src={images[2].src} alt={images[2].alt} className="shrink-0 self-stretch my-auto max-w-full aspect-[0.63] w-[400px] max-md:mt-10 lg:pl-[130px]" />
      </section>
      <section className="flex flex-col w-[20%] max-md:ml-0 max-md:w-full lg:mr-[70px] 2xl:ml-[70px]">
        <div className="flex flex-col grow max-md:mt-10">
          <ImageGallery src={images[0].src} alt={images[0].alt} className="mb-12 max-md:mb-10" />
          <ImageGallery src={images[1].src} alt={images[1].alt} />
        </div>
      </section>
    </main>
  );
}

export default JobSearch;