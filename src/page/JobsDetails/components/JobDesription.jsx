import React from 'react';

function JobDescription({ item }) {
  const itemReq = item?.job_requirements;
  const requirements = itemReq?.map((req) => req.requirement);
  return (
    <section className="mt-20 max-sm:mt-5 max-md:mt-10 max-md:max-w-full flex max-md:flex-wrap gap-5">
      <article className='w-[600px] lg:w-[400px]'>
        <div className='w-full'>
          <h2 className="text-2xl font-semibold text-black">Job Description</h2>
          <p className="mt-3 max-sm:mt-2 text-base  text-black max-md:mt-10 max-md:max-w-full">
            {item?.description || "No Description"}
          </p>
        </div>
        <div className='mt-10 max-sm:mt-2'>
          <h2 className="text-2xl font-semibold text-black">Job Requirement</h2>
          <ul className='list-disc '>
            {requirements?.map((req, index) => (
              <li key={index} className=" max-sm:mt-2 mt-3 text-base text-black max-md:mt-10 max-md:max-w-full">
                {req}
              </li>
            ))}
          </ul>
        </div>
      </article>
      <article className='w-[600px] lg:w-[350px]'>
        <h2 className="text-2xl font-semibold text-black">Job Benefits</h2>
        <p className="mt-3 max-sm:mt-2 text-base  text-black max-md:mt-10 max-md:max-w-full">
          {item?.benefits || "No Description"}
        </p>
      </article>

    </section>
  );
}

export default JobDescription;