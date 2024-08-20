import React from 'react';
import JobDetails from './JobDetailList';
import JobDescription from './JobDesription';
import ApplyButton from './ApplyButton';
import Logo from '../../../assets/PanelJob.png';

export default function Detail() {
  return (
    <article className="flex overflow-hidden flex-col py-9 bg-white rounded-2xl border border-solid border-stone-200 max-w-[80%] m-auto shadow-md">
      <div className="flex flex-col items-start px-8 w-full max-md:px-5 max-md:max-w-full">
        <div className="self-stretch max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
              <img 
                src={Logo} 
                alt="Company Logo" 
                className="object-contain flex shrink-0 mx-auto max-w-full rounded-2xl bg-white h-[273px] w-[294px] max-md:mt-9"
              />
            </div>
            <JobDetails />
          </div>
        </div>
        <JobDescription />
      </div>
      <ApplyButton />
    </article>
  );
}
