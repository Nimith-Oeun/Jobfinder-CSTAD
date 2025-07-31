import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiStar, HiTrendingUp, HiLightningBolt, HiHeart, HiCog, HiShieldCheck } from "react-icons/hi";

export default function Feartur() {
  const [isMobile, setIsMobile] = useState(false);
  
  const coreValues = [
    {
      icon: HiStar,
      title: "Teamwork",
      description: "Collaborative excellence in every project",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: HiTrendingUp,
      title: "High Ambition",
      description: "Setting and achieving extraordinary goals",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: HiLightningBolt,
      title: "Strong Confidence",
      description: "Bold decisions with unwavering conviction",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: HiHeart,
      title: "Be the Only ONE",
      description: "Unique solutions for unique challenges",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: HiShieldCheck,
      title: "Working Hard",
      description: "Dedication and perseverance in all we do",
      color: "from-green-500 to-green-600"
    },
    {
      icon: HiCog,
      title: "PDCA Quality Cycle",
      description: "Continuous improvement and excellence",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const mediaLogos = [
    { name: "TechCrunch", logo: "🚀" },
    { name: "Forbes", logo: "💼" },
    { name: "Bloomberg", logo: "📈" },
    { name: "Reuters", logo: "📰" },
    { name: "CNN Business", logo: "📺" },
    { name: "Wall Street Journal", logo: "📊" }
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
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <HiStar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">On</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            HR Jobs is proud to be recognized by leading media outlets worldwide. Our innovative approach to connecting talent with opportunities has garnered attention from industry leaders.
          </p>
        </div>

        {/* Media Recognition */}
        <div className="mb-20" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Trusted by Leading Media
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {mediaLogos.map((media, index) => (
                <div
                  key={media.name}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  data-aos="zoom-in"
                  data-aos-delay={100 * index}
                >
                  <div className="text-3xl mb-2">{media.logo}</div>
                  <div className="text-sm font-medium text-gray-700 text-center">{media.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="400">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Values</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Six fundamental principles that drive our success and shape our commitment to excellence in everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className="group"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${value.color} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {value.title}
                      </h4>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="600">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-6">
              Our Impact in Numbers
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">500K+</div>
                <div className="text-blue-100">Job Seekers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">10K+</div>
                <div className="text-blue-100">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">4.9★</div>
                <div className="text-blue-100">User Rating</div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed">
                These values aren't just words on a wall—they're the foundation of our success and the driving force behind every interaction with our customers and partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
