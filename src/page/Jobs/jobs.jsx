import React, { useEffect,useState } from "react";
import JobsHeader from "./Meterial/JobsHeader";
import FilterSelection from "./Meterial/FilterSelection";
import JobListing from "./Meterial/JobListing";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { selectGetJob, fetchGetJob } from "../../redux/feature/Job/JobSlice";

export default function Jobs() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const JobsRespone = useSelector(selectGetJob);
  const Jobs = JobsRespone?.results;
  const status = useSelector((state) => state.job.status);
  const [filters, setFilters] = useState({ skill: '', category: '', type: '' });
  // console.log("JobsRespone", JobsRespone);
  console.log("status", status);
  console.log("Jobs", Jobs);

  const filteredJobs = Jobs?.filter((job) => {
    return (
      (filters.skill === '' || job.skills.some(skill => skill.name === filters.skill)) &&
      (filters.category === '' || job.title === filters.category) &&
      (filters.type === '' || job.job_type === filters.type) &&
      (search === '' || job.title.toLowerCase().includes(search.toLowerCase()))
    );
  });

  useEffect(() => {
    dispatch(fetchGetJob());
  }, []);

  return (
    <>
      <header className="pt-[82px]">
        <Helmet>
          <title>Jobs / HR . Jobs</title>
        </Helmet>
        <JobsHeader />
      </header>
      <main className="grid sm:grid-cols-1 lg:grid-cols-3  w-[90%] my-[100px] mx-auto gap-10  ">
        <section className="px-[5px] w-[100%] max-lg:col-span-2">
          <FilterSelection 
            setSearch={setSearch}
            setFilters={setFilters}
            job={Jobs}
          />
        </section>
        <section className="w-[100%] col-span-2 rounded-xl">
          <div className="flex overflow-hidden flex-col justify-center w-full rounded-lg max-md:max-w-full ">
            
          {filteredJobs?.map((itemJ, index) => {
              return (
                <JobListing 
                  key={index}
                  title={itemJ.title}
                  company={itemJ.company_name}
                  job_type={itemJ.job_type}
                  salary={itemJ.salary}
                  thumbnail={itemJ.thumbnail}
                  location={itemJ.location}
                  itemJ={itemJ}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
