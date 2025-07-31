import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { fetchResendOTP, selectResendOTP } from '../../../redux/feature/user/UserSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { HiInformationCircle, HiMail, HiArrowLeft, HiRefresh } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string().email(" Invalid Email").required("Email is Required!!"),
})

const initialValues = { email: "", }

export default function ResendOTP() {
  const userResendOTP = useSelector(selectResendOTP);
  const status = useSelector(state => state.user.status);
  console.log("userResendOTP", userResendOTP);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState();


  useEffect(() => {
    if (userResendOTP?.message === 'New OTP sent to your email.') {
      navigate("/VerifyEmail", { state: email });
    }
  }, [userResendOTP?.message, navigate])

  const handleGetEmail = (e, setFieldValue) => {
    setEmail(e.target.value);
    setFieldValue("email", e.target.value);
  };
  console.log("email", email);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <Helmet>
        <title>Resend OTP / HR . Jobs</title>
      </Helmet>
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 space-y-8 backdrop-blur-lg border border-white/20">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
            <HiRefresh className="w-10 h-10 text-white" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Resend OTP
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Enter your email address to receive a new verification code
            </p>
          </div>
        </div>

        {/* Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            dispatch(fetchResendOTP(values));
            resetForm();
          }}
        >
          {({ isSubmitting, setFieldValue, errors, touched }) => {
            return (
              <Form className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiMail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Field
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      onChange={(e) => handleGetEmail(e, setFieldValue)}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        errors.email && touched.email 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-300 bg-gray-50 focus:bg-white hover:bg-white'
                      }`}
                    />
                  </div>
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="text-red-500 text-sm flex items-center gap-1"
                  />
                </div>

                {/* Error Alert */}
                {userResendOTP?.message === 'User with this email does not exist.' && (
                  <div className="animate-shake">
                    <Alert color="failure" icon={HiInformationCircle} className="border-l-4 border-red-500">
                      <span className="font-medium">Error!</span> {userResendOTP?.message}
                    </Alert>
                  </div>
                )}

                {/* Success Alert */}
                {userResendOTP?.message === 'New OTP sent to your email.' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
                    <div className="flex items-center gap-2">
                      <HiMail className="w-5 h-5" />
                      <span className="font-medium">OTP sent successfully! Redirecting...</span>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === 'loading' ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending OTP...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <HiRefresh className="w-5 h-5" />
                      Resend OTP
                    </div>
                  )}
                </button>

                {/* Footer Links */}
                <div className="space-y-4 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Remember your login details?{" "}
                      <Link 
                        to="/Login" 
                        className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-300"
                      >
                        Sign In
                      </Link>
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <Link 
                      to="/Sign-Up" 
                      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      <HiArrowLeft className="w-4 h-4" />
                      Back to Registration
                    </Link>
                  </div>
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    </main>
  )
}
