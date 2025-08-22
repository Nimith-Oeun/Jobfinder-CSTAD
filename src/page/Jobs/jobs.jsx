import React, { useEffect,useState } from "react";
import JobsHeader from "./Meterial/JobsHeader";
import FilterSelection from "./Meterial/FilterSelection";
import JobListing from "./Meterial/JobListing";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { selectGetJob, fetchGetJob } from "../../redux/feature/Job/JobSlice";
import { LoadingJobsList } from "../../components/LoadingPage";


export default function Jobs() {
  const [iLoading , setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const dispatch = useDispatch();
  const JobsRespone = useSelector(selectGetJob);
  let JobsRaw = JobsRespone?.responeData;
  if (!Array.isArray(JobsRaw)) {
    JobsRaw = JobsRaw ? [JobsRaw] : [];
  }
  const Jobs = JobsRaw.map(job => ({
    id: job.id || job.jobCategoryUuid,
    title: job.title,
    company_name: job.company || job.company_name,
    job_type: job.jobType || job.job_type,
    salary: job.salary,
    thumbnail: job.thumbnail,
    location: job.location,
    skills: Array.isArray(job.skills) ? job.skills : [],
    created_at: job.created_at || job.timestamp,
    ...job
  }));
  const status = useSelector((state) => state.job.status);
  const [filters, setFilters] = useState({ skill: '', category: '', type: '' });
  const Loading = [1,2,3,4,5,6];
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

  // Sort jobs based on selection
  const sortedJobs = filteredJobs?.sort((a, b) => {
    switch (sortBy) {
      case 'salary':
        return parseFloat(b.salary?.replace(/[^0-9.-]+/g, '') || 0) - parseFloat(a.salary?.replace(/[^0-9.-]+/g, '') || 0);
      case 'company':
        return a.company_name.localeCompare(b.company_name);
      case 'latest':
      default:
        return new Date(b.created_at || 0) - new Date(a.created_at || 0);
    }
  });

  useEffect(() => {
    dispatch(fetchGetJob());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/20">
      {/* Header Section */}
      <header className="pt-[82px] relative overflow-hidden">
        <Helmet>
          <title>Jobs / HR . Jobs</title>
        </Helmet>
        
        {/* Enhanced Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <JobsHeader />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Enhanced Page Stats */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-gray-700">
                  <span className="font-bold text-green-600 text-lg">{sortedJobs?.length || 0}</span>
                  <span className="ml-1 text-gray-600">Jobs Found</span>
                </span>
              </div>
              <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
                <span className="text-gray-700">
                  <span className="font-bold text-blue-600 text-lg">{Jobs?.length || 0}</span>
                  <span className="ml-1 text-gray-600">Total Available</span>
                </span>
              </div>
              <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full shadow-lg"></div>
                <span className="text-gray-700">
                  <span className="font-bold text-orange-600 text-lg">{Object.values(filters).filter(f => f !== '').length}</span>
                  <span className="ml-1 text-gray-600">Active Filters</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Enhanced Filter Sidebar */}
          <aside className="lg:col-span-4 xl:col-span-3 space-y-6">
            <div className="sticky top-24 space-y-6">
              <FilterSelection 
                setSearch={setSearch}
                setFilters={setFilters}
                job={Jobs}
              />
              
              {/* Enhanced Quick Stats Card */}
              <div className="bg-gradient-to-br from-white/90 to-blue-50/70 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6 flex items-center">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  Job Insights
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                    <span className="text-sm font-medium text-gray-700">Active Filters</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-full shadow-md">
                      {Object.values(filters).filter(f => f !== '').length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                    <span className="text-sm font-medium text-gray-700">Search Results</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-full shadow-md">
                      {sortedJobs?.length || 0}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                    <span className="text-sm font-medium text-gray-700">Success Rate</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-md">
                      94%
                    </span>
                  </div>
                </div>
              </div>

              {/* Popular Categories Card */}
              <div className="bg-gradient-to-br from-white/90 to-orange-50/70 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  Trending Categories
                </h3>
                <div className="space-y-2">
                  {['Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'Data Analyst'].map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-white/50 rounded-lg transition-all duration-200 cursor-pointer">
                      <span className="text-sm text-gray-700">{category}</span>
                      <span className="text-xs text-orange-600 font-medium">{Math.floor(Math.random() * 50) + 10}+</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Enhanced Job Listings */}
          <section className="lg:col-span-8 xl:col-span-9">
            {/* Enhanced Results Header */}
            <div className="mb-8 bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {search || Object.values(filters).some(f => f !== '') ? 'Filtered Results' : 'All Job Opportunities'}
                  </h2>
                  <p className="text-gray-600 mt-2 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M8 6v10a2 2 0 002 2h4a2 2 0 002-2V6" />
                    </svg>
                    {sortedJobs?.length === 1 
                      ? '1 position available' 
                      : `${sortedJobs?.length || 0} positions available`
                    }
                  </p>
                </div>
                
                {/* Enhanced Sort Options */}
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-700">Sort by:</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm border-2 border-gray-200 rounded-xl px-4 py-2 bg-white/90 backdrop-blur-sm focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <option value="latest">Latest</option>
                    <option value="salary">Salary</option>
                    <option value="company">Company</option>
                    <option value="relevance">Relevance</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Job Cards Container */}
            <div className="space-y-6">
              {/* Loading State */}
              {iLoading && (
                <div className="space-y-6">
                  {Loading.slice(0,3).map((_, index) => (
                    <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl">
                      <LoadingJobsList/>
                    </div>
                  ))}
                </div>
              )}

              {/* Enhanced Job Listings */}
              {!iLoading && sortedJobs?.length > 0 ? (
                <div className="space-y-6">
                  {sortedJobs.map((itemJ, index) => (
                    <div 
                      key={index}
                      className="group relative overflow-hidden bg-white/90 backdrop-blur-md rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                    >
                      {/* Enhanced gradient overlay on hover */}
                      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div> */}
                      
                      {/* Animated border effect */}
                      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500 pointer-events-none"></div> */}
                      
                      {/* <div className="relative z-10"> */}
                        <JobListing 
                          title={itemJ.title}
                          company={itemJ.company_name}
                          job_type={itemJ.job_type}
                          salary={itemJ.salary}
                          thumbnail={itemJ.thumbnail}
                          location={itemJ.location}
                          itemJ={itemJ}
                        />
                      {/* </div> */}
                    </div>
                  ))}
                </div>
              ) : !iLoading && (
                /* Enhanced No Results State */
                <div className="text-center py-20 bg-white/80 backdrop-blur-md rounded-2xl border border-white/30 shadow-xl">
                  <div className="max-w-md mx-auto">
                    <div className="relative mb-6">
                      <svg className="w-24 h-24 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-2xl opacity-30"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">No jobs found</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Don't worry! Try adjusting your filters or search terms to discover more amazing opportunities waiting for you.
                    </p>
                    <button 
                      onClick={() => {
                        setFilters({ skill: '', category: '', type: '' });
                        setSearch('');
                      }}
                      className="group relative overflow-hidden inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <svg className="w-5 h-5 mr-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span className="relative z-10">Clear all filters</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
