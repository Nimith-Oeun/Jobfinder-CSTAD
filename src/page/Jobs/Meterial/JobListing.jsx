import React from 'react';
import { Link } from 'react-router-dom';
import PanelJob from '../../../assets/PanelJob.png';
const JobListing = () => (
  <div className="flex overflow-hidden flex-col justify-center w-full rounded-lg max-md:max-w-full mb-[30px] shadow-md ">
    <div className="w-full mx-auto bg-[#00214A] rounded-xl overflow-hidden">
      <div className="md:flex">
        <div className="md:shrink-0 bg-white w-ful ">
          <img className="h-48 w-full object-contain md:h-full md:w-48 max-md:object-contain max-md:w-full shadow-hight " src={PanelJob} alt="PanelJob" />
        </div>
        <div className=' w-full border-t-[1px] border-white'>
          <div className="p-3">
            <div className="uppercase tracking-wide text-xl text-white font-semibold">Digital Markating</div>
            <div className='flex justify-between'>
              <a href="#" className="block mt-1 leading-tight font-medium text-white hover:underline">Udaya Technology</a>
              <p className="mt-2 text-white">Full-Time</p>
            </div>
            <p className="mt-2 text-white">200$ - 300$</p>

            <div className='flex justify-between '>
              <p className="mt-2 text-white">Phnum penh</p>
              <button className='border p-1 rounded-md border-white hover:bg-[#08A6FF] hover:border-none hover:scale-[1.05]'>
                <Link to="/JobDetails" className="text-white">View Detail</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default JobListing;