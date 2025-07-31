import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { HiUser, HiBriefcase, HiCheckCircle, HiArrowRight, HiSearch, HiDocument } from "react-icons/hi";

export default function HomeGuide() {
  const [isMobile, setIsMobile] = useState(false);
  
  const steps = [
    {
      id: 1,
      icon: HiUser,
      title: "Create Your Profile",
      description: "Sign up and build your professional profile with your skills, experience, and career preferences.",
      color: "from-blue-500 to-blue-600",
      delay: "0"
    },
    {
      id: 2,
      icon: HiSearch,
      title: "Discover Opportunities",
      description: "Browse thousands of job listings or let our AI match you with positions that fit your profile.",
      color: "from-purple-500 to-purple-600",
      delay: "200"
    },
    {
      id: 3,
      icon: HiDocument,
      title: "Apply with Ease",
      description: "Submit applications with one click using your saved profile and track your application status.",
      color: "from-green-500 to-green-600",
      delay: "400"
    },
    {
      id: 4,
      icon: HiCheckCircle,
      title: "Get Hired",
      description: "Connect directly with employers, schedule interviews, and land your dream job faster.",
      color: "from-orange-500 to-orange-600",
      delay: "600"
    }
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

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <HiBriefcase className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started with your job search in just a few simple steps. Our platform makes it easy to find and apply for your dream job.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Side - Illustration */}
          <div className="relative" data-aos="fade-right" data-aos-delay="200">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full translate-x-20 translate-y-20"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 mx-auto">
                  <HiBriefcase className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                  Your Journey Starts Here
                </h3>
                <p className="text-gray-600 text-center leading-relaxed mb-6">
                  Join thousands of professionals who found their perfect career match through our platform.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">10K+</div>
                    <div className="text-sm text-gray-500">Jobs Posted</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">5K+</div>
                    <div className="text-sm text-gray-500">Companies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-sm text-gray-500">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Process Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  className="group"
                  data-aos="fade-left"
                  data-aos-delay={step.delay}
                >
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
                    {/* Step Number */}
                    <div className="absolute -left-3 top-6">
                      <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                        {step.id}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-6">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Arrow connector (except for last item) */}
                    {index < steps.length - 1 && (
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 hidden lg:block">
                        <div className="w-6 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                          <HiArrowRight className="w-3 h-3 text-white rotate-90" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="800">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of job seekers who have found their perfect career match. Create your profile today and get started!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/Sign-Up"
                className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                Create Account
              </a>
              <a
                href="/Jobs"
                className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Browse Jobs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
