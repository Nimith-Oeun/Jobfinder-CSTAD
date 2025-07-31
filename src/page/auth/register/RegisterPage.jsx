import React from "react";
import RegisterForm from "./RegisterForm";
import LoginPanel from '../../../assets/LoginPanel.png'
import Logo from '../../../assets/logo.png'
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <section className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden backdrop-blur-lg border border-white/20">
        <div className="flex max-lg:flex-col min-h-[700px]">
          {/* Left Panel - Illustration */}
          <div className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 flex-1 flex flex-col justify-center items-center p-8 max-lg:p-6">
            {/* Logo */}
            <Link to="/" className="absolute top-6 left-6 z-10 transition-transform duration-300 hover:scale-110">
              <img 
                src={Logo} 
                alt="Logo" 
                className="w-16 h-16 object-contain filter brightness-0 invert max-sm:w-12 max-sm:h-12" 
              />
            </Link>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
              <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-300 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-10 w-16 h-16 bg-blue-300 rounded-full blur-lg"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center text-white space-y-6 max-w-md">
              <div className="transform transition-all duration-700 hover:scale-105">
                <img
                  loading="lazy"
                  src={LoginPanel}
                  alt="Register Illustration"
                  className="w-full max-w-sm mx-auto drop-shadow-2xl"
                />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl font-bold leading-tight max-lg:text-2xl">
                  Start Your Career Journey
                </h2>
                <p className="text-purple-100 text-lg leading-relaxed max-lg:text-base">
                  Join thousands of professionals who found their perfect job through our platform.
                </p>
              </div>
              
              {/* Feature Points */}
              <div className="grid grid-cols-1 gap-3 mt-8 text-sm">
                <div className="flex items-center gap-3 text-purple-100">
                  <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                  <span>Create your professional profile</span>
                </div>
                <div className="flex items-center gap-3 text-purple-100">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span>Get matched with relevant opportunities</span>
                </div>
                <div className="flex items-center gap-3 text-purple-100">
                  <div className="w-2 h-2 bg-indigo-300 rounded-full"></div>
                  <span>Apply with one click</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Panel - Register Form */}
          <div className="flex-1 flex items-center justify-center p-8 max-lg:p-6">
            <RegisterForm />
          </div>
        </div>
      </section>
    </main>
  );
}