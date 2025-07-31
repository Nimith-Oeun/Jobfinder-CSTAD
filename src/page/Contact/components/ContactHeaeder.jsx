import * as React from "react";

export default function ContactHeader() {
  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center px-16 py-20 min-h-[300px] bg-gradient-to-br from-[#00214A] via-[#002952] to-[#001B3F] max-md:px-5">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-cyan-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Background image overlay */}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/38b6d6b5087736780f7ea090831ef0e2879c4787704e145fcbe7162eed14ac39?placeholderIfAbsent=true&apiKey=754549c7c59e4aceaf8a7f21808f0948"
        alt="Contact background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
      />
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto">
        <div className="relative">
          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight max-md:text-4xl">
            Get In Touch
          </h1>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
        </div>
        
        <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed max-md:text-lg">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        {/* Floating decorative elements */}
        <div className="absolute -top-8 -left-8 w-16 h-16 border-2 border-blue-400/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 -right-12 w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute -bottom-6 left-1/4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
      </div>

      {/* Bottom wave effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 fill-white">
          <path d="M0,50 C300,100 900,0 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </div>
  );
}