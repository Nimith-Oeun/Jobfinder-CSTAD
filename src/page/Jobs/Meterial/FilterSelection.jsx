import React, { useState, useEffect } from "react";

export default function FilterSelection({
  setSearch,
  job,
  setFilters,
}) {
  const [skill, setSkill] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [filteredData, setFilteredData] = useState(job);

  const filterData = () => {
    let filtered = job;

    if (skill) {
      filtered = filtered.filter(item => item.skills.some(s => s.name === skill));
    }

    if (category) {
      filtered = filtered.filter(item => item.title === category);
    }

    if (type) {
      filtered = filtered.filter(item => item.job_type === type);
    }

    setFilteredData(filtered);
  };

  const handleSkillChange = (e) => {
    const selectedSkill = e.target.value;
    setSkill(selectedSkill);
    setFilters((prev) => ({ ...prev, skill: selectedSkill }));
    filterData();
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setFilters((prev) => ({ ...prev, category: selectedCategory }));
    filterData();
  };

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setType(selectedType);
    setFilters((prev) => ({ ...prev, type: selectedType }));
    filterData();
  };

  const clearFilters = () => {
    setSkill("");
    setCategory("");
    setType("");
    setFilters({ skill: "", category: "", type: "" });
  };

  return (
    <div className="bg-gradient-to-br from-white to-blue-50/30 p-6 rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
          Find Your Perfect Job
        </h2>
        <p className="text-gray-600 text-sm">Filter and search through thousands of opportunities</p>
      </div>

      {/* Search Section */}
      <form className="mb-8">
        <label
          htmlFor="default-search"
          className="mb-3 text-sm font-semibold text-gray-700 block"
        >
          Search Jobs
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none z-10">
            <svg
              className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            className="block w-full pl-12 pr-4 py-4 text-sm text-gray-900 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 shadow-lg hover:shadow-xl placeholder-gray-400"
            placeholder="Search by job title, company, or keywords..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </form>

      {/* Filters Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Filter Options</h3>
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors duration-200"
          >
            Clear All Filters
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Category Filter */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Category
            </label>
            <div className="relative group">
              <select
                value={category}
                onChange={handleCategoryChange}
                className="w-full appearance-none bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                <option value="" className="text-gray-500">Select Category</option>
                {job?.map((item) => (
                  <option key={item.id} value={item.title} className="text-gray-900">
                    {item.title}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          {/* Skill Filter */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Required Skills
            </label>
            <div className="relative group">
              <select
                value={skill}
                onChange={handleSkillChange}
                className="w-full appearance-none bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 hover:border-green-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                <option value="" className="text-gray-500">Select Skill</option>
                {job?.flatMap(item => item.skills).map((skill, index) => (
                  <option key={index} value={skill.name} className="text-gray-900">
                    {skill.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          {/* Job Type Filter */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Employment Type
            </label>
            <div className="relative group">
              <select
                value={type}
                onChange={handleTypeChange}
                className="w-full appearance-none bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 hover:border-orange-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                <option value="" className="text-gray-500">Select Type</option>
                {job?.slice(0,1).map((item) => (
                  <option key={item.id} value={item.job_type} className="text-gray-900">
                    {item.job_type}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {(category || skill || type) && (
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Active Filters:</h4>
            <div className="flex flex-wrap gap-2">
              {category && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                  Category: {category}
                  <button
                    onClick={() => {
                      setCategory("");
                      setFilters((prev) => ({ ...prev, category: "" }));
                    }}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              )}
              {skill && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                  Skill: {skill}
                  <button
                    onClick={() => {
                      setSkill("");
                      setFilters((prev) => ({ ...prev, skill: "" }));
                    }}
                    className="ml-2 text-green-600 hover:text-green-800"
                  >
                    ×
                  </button>
                </span>
              )}
              {type && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">
                  Type: {type}
                  <button
                    onClick={() => {
                      setType("");
                      setFilters((prev) => ({ ...prev, type: "" }));
                    }}
                    className="ml-2 text-orange-600 hover:text-orange-800"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}