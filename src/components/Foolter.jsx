import React from "react";
import { HiLocationMarker, HiPhone, HiMail, HiClock } from "react-icons/hi";

export default function Foolter() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#00214A] via-[#002A5C] to-[#001B3F] px-8 pt-20 pb-8 lg:px-20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Company Info Section */}
          <div className="space-y-8">
            {/* Logo and Description */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4e229d418b5083f662e929a6cc8349cabed90fd29f2faef45d08df9d2375342?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948"
                  alt="HR Jobs Logo"
                  className="w-24 h-24 rounded-full object-contain shadow-xl ring-4 ring-white/10"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">HR Jobs</h3>
                  <p className="text-blue-200 text-sm">Professional IT Recruitment</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                HR Jobs is Cambodia's #1 Job Matching Service Specialized in IT. 
                Connecting top talent with leading companies across Southeast Asia.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/3a7d3cef8f4857f5233586b4a32dd9c34878d0dc3e33785f3ff2753ce33bd4e9",
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/f1658febb09446088bac500e6b1a34876d5864a7d2e8b699bd883f85eceea82d",
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/36b1f6395063281694cd149a3428d2a2c90a6bfe74151966dcd8fb6b0379aca3",
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/2fbb59301c3df712ffa97b4cd14ddd1c4bde2d500c29cc1f67079d6c5b145d83",
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/d82e6f1cfdc99928627e67a43425fde0af9c163268a626fea62aebeae1c60a77"
                ].map((src, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group relative p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <img
                      src={src}
                      alt={`Social media ${index + 1}`}
                      className="w-8 h-8 rounded-full object-contain group-hover:brightness-110 transition-all duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-10">
            {/* Contact Details Section */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 relative">
                Get In Touch
                <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              </h3>
              
              <div className="grid gap-6">
                {/* Location Card */}
                <div className="group p-6 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <HiLocationMarker className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-lg">Our Location</h4>
                      <p className="text-gray-300 leading-relaxed">
                        #12, Street 2001, Phum Paprak Khang Tboung,<br />
                        Sangkat Kakab, Khan Porsenchey,<br />
                        Phnom Penh, Cambodia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Communication Methods */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Phone Card */}
                  <div className="group p-6 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <HiPhone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Call Us</h4>
                        <a href="tel:+85512555666" className="text-gray-300 hover:text-green-300 transition-colors font-medium">
                          +855 12 555 666
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="group p-6 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <HiMail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Email Us</h4>
                        <a
                          href="mailto:info@HR.works"
                          className="text-gray-300 hover:text-purple-300 transition-colors font-medium underline decoration-transparent hover:decoration-purple-300"
                        >
                          info@HR.works
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Section */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6 relative">
                Business Hours
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
              </h4>
              
              <div className="group p-6 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <HiClock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-2">Office Hours</h5>
                    <div className="space-y-1">
                      <p className="text-gray-300 font-medium">Monday — Friday</p>
                      <p className="text-orange-300 font-semibold">8:00am - 6:00pm</p>
                      <p className="text-gray-400 text-sm">Weekend: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <a href="#" className="text-white hover:text-blue-300 font-medium transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 HR (Cambodia) Co., Ltd. All Rights Reserved by{" "}
                <span className="text-white font-medium">Nimith Oeun</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
