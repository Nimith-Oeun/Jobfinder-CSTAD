import React from "react";
import { HiLocationMarker, HiPhone , HiMail , HiClock } from "react-icons/hi";

function ContactInfo() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 lg:p-12 space-y-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600 text-lg">
            Ready to start your career journey? Get in touch with us today.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          {/* Location */}
          <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <HiLocationMarker className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Location</h3>
                <address className="text-gray-600 leading-relaxed not-italic">
                  #12, Street 2001, Phum Paprak Khang Tboung,<br />
                  Sangkat Kakab, Khan Porsenchey,<br />
                  Phnom Penh, Cambodia
                </address>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <HiPhone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Phone Number</h3>
                <a href="tel:+85512555666" className="text-gray-600 hover:text-green-600 transition-colors text-lg font-medium">
                  +855 12 555 666
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <HiMail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Email Address</h3>
                <a
                  href="mailto:info@HR.works"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-lg font-medium underline decoration-transparent hover:decoration-purple-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@HR.works
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <HiClock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Business Hours</h3>
                <div className="space-y-1">
                  <p className="text-gray-600 font-medium">Monday — Friday</p>
                  <p className="text-orange-600 font-semibold">8:00am - 6:00pm</p>
                  <p className="text-gray-500 text-sm">Weekend: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/50">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800">Find Us Here</h3>
            <p className="text-gray-600 text-sm mt-1">Visit our office for in-person consultations</p>
          </div>
          <div className="relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.631478133429!2d104.89920651169284!3d11.578254588576018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e0!3m2!1sen!2skh!4v1724040290244!5m2!1sen!2skh"
              className="w-full h-64 lg:h-80"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
