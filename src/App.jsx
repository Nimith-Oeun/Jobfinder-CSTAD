import React, { useEffect, useState } from "react";
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
import { HiSearch, HiBriefcase, HiTrendingUp, HiStar, HiSparkles } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";



function App() {
  const dispatch = useDispatch();
  const JobsRespone = useSelector(selectGetJob);
  const status = useSelector((state) => state.job.status);
  const Jobs = JobsRespone?.results;
  const Loading = [1, 2, 3, 4, 5, 6];
  console.log("status", status);
  // console.log("Jobs", Jobs);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
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
      <main className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-indigo-50/20 to-purple-50/30 pointer-events-none"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 xl:mt-[200px] max-sm:mt-16 sm:mt-[100px] mb-[100px]">
          {/* Job Categories Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                {/* Section Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 text-sm font-medium text-blue-700 mb-6" data-aos="fade-up">
                  <HiBriefcase className="w-4 h-4" />
                  Explore Opportunities
                </div>
                
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="100">
                  Browse Job{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                    Categories
                  </span>
                </h2>
                
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                  Explore diverse career opportunities across multiple industries. 
                  Find your perfect match with leading companies and start your journey today.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">
                {status === 'loading' && Loading.slice(0, 3).map((index) => (
                  <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                    <LoadingCategorie />
                  </div>
                ))}
                {status === 'success' && Jobs?.slice(0, 3).map((itemJ, index) => (
                  <div key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                    <HomeCategorie
                      title={itemJ.title}
                      thumbnail={itemJ.thumbnail}
                      discrption={itemJ.description}
                      item={itemJ}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <HomeGuide />
        </section>
        
        {/* Popular Jobs Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              {/* Section Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 text-sm font-medium text-purple-700 mb-6" data-aos="fade-up">
                <HiStar className="w-4 h-4" />
                Top Picks
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="100">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
                  Popular
                </span>{" "}
                Jobs
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                Discover the most sought-after positions from top employers. 
                Join thousands of professionals who found their dream careers with us.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-12" data-aos="fade-up" data-aos-delay="300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">New Jobs Daily</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">24h</div>
                  <div className="text-sm text-gray-600">Average Response</div>
                </div>
              </div>
            </div>
            
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8 mt-16">
              {status === 'loading' && Loading.slice(0, 6).map((index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <LoadingJob />
                </div>
              ))}
              {status === 'success' && Jobs?.slice(0, 6).map((itemJ, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                  <HomeJobs
                    title={itemJ.title}
                    company={itemJ.company_name}
                    job_type={itemJ.job_type}
                    description={itemJ.description}
                    salary={itemJ.salary}
                    location={itemJ.location}
                    id={itemJ.id}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Job Search Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <HomeJobSearch />
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20">
          <Feartur />
        </section>
        
        </div>
      </main>
    </>
  );
}

export default App;
