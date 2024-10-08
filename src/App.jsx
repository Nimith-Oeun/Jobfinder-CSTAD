import React, { useEffect,useState } from "react";
import HeaderSlide from "./components/HeaderSlide";
import HomeCategorie from "./components/HomeCategorie";
import HomeGuide from "./components/HomeGuid";
import HomeJobs from "./components/HomeJobs";
import HomeJobSearch from "./components/HomeFindJobs/HomeJobSearch";
import Feartur from "./components/Feartur";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { selectGetJob, fetchGetJob } from "./redux/feature/Job/JobSlice";
import { LoadingCategorie, LoadingJob } from "./components/LoadingPage";



function App() {
  const dispatch = useDispatch();
  const JobsRespone = useSelector(selectGetJob);
  const status = useSelector((state) => state.job.status);
  const Jobs = JobsRespone?.results;
  const Loading = [1, 2, 3, 4, 5, 6];
  console.log("status", status);
  // console.log("Jobs", Jobs);

  useEffect(() => {
    dispatch(fetchGetJob());
  }, []);

  return (
    <>
      <header>
        <Helmet>
          <title>HR . Jobs</title>
        </Helmet>
        <HeaderSlide />
      </header>
      <main className="xl:mt-[200px] max-sm:mt-16 sm:mt-[100px] mb-[100px]">
        <section>
          <div className="flex flex-col items-center">
            <div className="flex flex-col justify-center self-center max-w-full text-center text-black w-[647px] items-center max-sm:gap-2">
              <div className="text-4xl font-bold max-md:max-w-full max-sm:text-3xl">
                Brows Jobs Categories
              </div>
              <div className="mt-8 text-xl font-medium max-md:max-w-full max-sm:text-base max-sm:px-3 max-sm:m-auto">
                Testing crowdsopurce vesting penriod ipad launch parthy
                partnership ventur angel investor
              </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 w-[90%] m-auto gap-5 mt-[100px] max-sm:w-full max-sm:mt-10 ">
              {status === 'loading' &&Loading.slice(0, 3).map((index) => (<LoadingCategorie key={index} />))}
                {status === 'success' &&  Jobs?.slice(0, 3).map((itemJ, index) => {
                 return (
                  <HomeCategorie
                    key={index}
                    title={itemJ.title}
                    thumbnail={itemJ.thumbnail}
                    discrption={itemJ.description}
                    item={itemJ}
                  />
                );
              })}
             
            </div>
          </div>
        </section>
        <section className="2xl:mt-[200px] sm:mt-[100px] md:mt-[200px] mb-[200px] max-sm:mt-10 max-sm:mb-16">
          <HomeGuide />
        </section>
        <section>
          <div className="flex flex-col self-center m-auto max-w-full text-center text-black w-[631px]">
            <div className="text-4xl font-bold max-md:max-w-full max-sm:text-3xl">
              Our Popular Jobs
            </div>
            <div className="mt-8 text-xl font-medium max-md:max-w-full max-sm:text-base max-sm:font-normal max-sm:px-5 max-sm:m-auto">
              Testing crowdsopurce vesting penriod ipad launch parthy
              partnership ventur angel investor
            </div>
          </div>
          <div className="grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 2xl:mt-24 lg:mt-16 w-full lg:w-[90%] m-auto max-sm:mt-10">
            {status === 'loading' && Loading.slice(0, 6).map((index) => <LoadingJob key={index} />)}
            {status === 'success' && Jobs?.slice(0, 6).map((itemJ, index) => {
              return (
                <HomeJobs
                  key={index}
                  title={itemJ.title}
                  company={itemJ.company_name}
                  job_type={itemJ.job_type}
                  description={itemJ.description}
                  salary={itemJ.salary}
                  location={itemJ.location}
                  id={itemJ.id}
                />
              );
            })}
            
          </div>
        </section>
        <section className="2xl:mt-[200px] sm:mt-[100px] md:mt-[200px] mb-[200px] max-sm:mb-[100px]">
          <HomeJobSearch />
        </section>
        <section>
          <Feartur />
        </section>
      </main>
    </>
  );
}

export default App;
