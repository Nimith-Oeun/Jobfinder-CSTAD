import React from "react";
import Login from "./LoginForm";
import LoginPanel from "../../../assets/LoginPanel.png";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <section className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Panel - Illustration */}
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex-1 flex flex-col justify-center items-center p-8 lg:p-12">
            {/* Logo */}
            <Link to="/" className="absolute top-6 left-6 z-10 transition-transform duration-300 hover:scale-110">
              <img 
                src={Logo} 
                alt="Logo" 
                className="w-12 h-12 object-contain filter brightness-0 invert" 
              />
            </Link>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
              <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-300 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-10 w-16 h-16 bg-blue-300 rounded-full blur-lg"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center text-white space-y-6 max-w-md">
              <div className="transform transition-all duration-700 hover:scale-105">
                <img
                  loading="lazy"
                  src={LoginPanel}
                  alt="Login Illustration"
                  className="w-full max-w-sm mx-auto drop-shadow-2xl"
                />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                  Find Your Dream Job
                </h2>
                <p className="text-blue-100 text-base lg:text-lg leading-relaxed">
                  Connect with top employers and discover opportunities that match your skills and aspirations.
                </p>
              </div>
              
              {/* Feature Points */}
              <div className="grid grid-cols-1 gap-3 mt-8 text-sm">
                <div className="flex items-center gap-3 text-blue-100">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span>Access to thousands of job opportunities</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span>Direct communication with recruiters</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span>Personalized job recommendations</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Panel - Login Form */}
          <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-white">
            <div className="w-full max-w-md">
              <Login />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
