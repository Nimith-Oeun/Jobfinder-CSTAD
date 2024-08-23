import React from 'react';

function JobDetails({ item }) {
  
  return (
    <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start mt-6 w-full max-md:mt-10 max-md:max-w-full max-sm:mt-2">
        <h1 className="text-4xl font-bold text-black">{item?.title}</h1>
        <div className="self-stretch mt-8 max-sm:mt-2 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-sm:gap-0">
            <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xl font-medium text-black max-md:mt-10 max-sm:mt-2">
                <div className="max-md:mr-2.5">
                  Salary : {item?.salary}
                </div>
                <div className="mt-3 max-md:mr-2.5">
                  Job-Type : {item?.job_type}
                </div>
                <div className='mt-3'>Age : 18+</div>
                <div className="mt-3 max-md:mr-2.5">
                  Gender : Mele/Femel
                </div>
                <div className="self-stretch mt-3">
                  Company : {item?.company_name}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start text-xl font-medium text-black max-md:mt-10">
                <div className="mt-3">Location : {item?.location}</div>
                <div className='mt-3'>Post : {item?.created_at}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;