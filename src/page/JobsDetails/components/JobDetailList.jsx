import React from 'react';

function JobDetails() {
  const jobInfo = [
    { label: "Company-Name", value: "Udaya Tecnology" },
    { label: "Salary", value: "200$ - 300$" },
    { label: "Job-Type", value: "Full Time" },
    { label: "Job-Level", value: "Internship" },
    { label: "Gender", value: "Male/Female" },
    { label: "Age", value: "18+" },
    { label: "Location", value: "Phnom Penh" },
    { label: "Required Skills", value: "Graphic Design" }
  ];

  return (
    <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start mt-6 w-full max-md:mt-10 max-md:max-w-full">
        <h1 className="text-4xl font-bold text-black">UX&UI Designer</h1>
        <div className="self-stretch mt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xl font-medium text-black max-md:mt-10">
                <div className="max-md:mr-2.5">
                  Salary : 200$ - 300$
                </div>
                <div className="mt-3 max-md:mr-2.5">
                  Job-Type : Full Time
                </div>
                <div className="mt-3">Job-Level : Internship</div>
                <div className="mt-3 max-md:mr-2.5">
                  Gender : Mele/Femel
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start text-xl font-medium text-black max-md:mt-10">
                <div>Age : 18+</div>
                <div className="mt-3">Location : Phnum Penh</div>
                <div className="self-stretch mt-1.5">
                  Required Skills : Graphic Design
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;