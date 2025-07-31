import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HiSearch, HiBriefcase, HiTrendingUp, HiLightningBolt, HiArrowRight, HiStar } from "react-icons/hi";

function JobDescription() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const highlights = [
    {
      icon: HiSearch,
      title: "Smart Job Matching",
      description: "AI-powered recommendations"
    },
    {
      icon: HiLightningBolt,
      title: "One-Click Apply",
      description: "Instant application process"
    },
    {
      icon: HiTrendingUp,
      title: "Career Growth",
      description: "Track your progress"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Jobs" },
    { number: "10K+", label: "Companies" },
    { number: "95%", label: "Success Rate" }
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = () => {
    setActiveItem("Contact Us");
    navigate("/contact-us", { state: { activeItem: "Contact Us" } });
  };

  const handleExploreJobs = () => {
    navigate("/jobs");
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-70"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8" data-aos="fade-right">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 text-sm font-medium text-blue-700">
              <HiStar className="w-4 h-4" />
              #1 Job Platform in Cambodia
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Find Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-gradient">
                  Perfect
                </span>{" "}
                <br />
                Dream Job
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover thousands of opportunities with top companies. Our AI-powered platform connects talented professionals with their ideal career paths.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleExploreJobs}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <HiSearch className="w-5 h-5" />
                Explore Jobs
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={handleButtonClick}
                className="inline-flex items-center justify-center gap-3 bg-white text-gray-700 font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <HiBriefcase className="w-5 h-5" />
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={200 * index}>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6" data-aos="fade-left" data-aos-delay="200">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Why Choose Our Platform?
              </h3>
              
              <div className="space-y-6">
                {highlights.map((highlight, index) => {
                  const IconComponent = highlight.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 group"
                      data-aos="fade-up"
                      data-aos-delay={300 + index * 100}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {highlight.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional CTA */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-center">
                <h4 className="text-white font-semibold mb-2">Ready to get started?</h4>
                <p className="text-blue-100 text-sm mb-4">
                  Join thousands of professionals who found their dream job
                </p>
                <button
                  onClick={handleExploreJobs}
                  className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobDescription;
