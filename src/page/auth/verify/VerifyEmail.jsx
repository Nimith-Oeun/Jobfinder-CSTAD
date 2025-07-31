import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchVerifyEmail, selectVerifyEmail } from "../../../redux/feature/user/UserSlice";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { HiCheckCircle, HiMail, HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  otp_code: Yup.string().required("OTP code is required"),
});

const initialValues = {otp_code: "",}

export default function VerifyEmail() {
    const navigate = useNavigate();
    const userResponVerify = useSelector(selectVerifyEmail)
    const dispatch = useDispatch();
    const location = useLocation();
    const email = location?.state;
    const status = useSelector((state) => state.user.status);
    // console.log("local", location);
    // console.log("email", email);
    console.log("respon",userResponVerify.message)

   useEffect(()=>{
    if (userResponVerify?.message==="Email verified successfully.") {
        navigate("/login")
        console.log("call")
    }
   },[userResponVerify?.message])

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <Helmet>
        <title>Verify Email / HR . Jobs</title>
      </Helmet>
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 space-y-8 backdrop-blur-lg border border-white/20">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <HiMail className="w-10 h-10 text-white" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Verify Your Email
            </h1>
            <p className="text-gray-600 leading-relaxed">
              We've sent a verification code to
            </p>
            <p className="text-blue-600 font-semibold break-all">
              {email || "your email address"}
            </p>
          </div>
        </div>

        {/* Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            dispatch(fetchVerifyEmail({otp_code: values.otp_code, email: email}));
          }}
        >
          {({ errors, touched }) => (
            <Form className="space-y-6">
              {/* OTP Input */}
              <div className="space-y-2">
                <label htmlFor="otp_code" className="block text-sm font-semibold text-gray-700">
                  Verification Code
                </label>
                <Field
                  type="text"
                  name="otp_code"
                  id="otp_code"
                  placeholder="Enter 6-digit code"
                  className={`w-full px-4 py-3 text-center text-2xl font-mono border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.otp_code && touched.otp_code 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-300 bg-gray-50 focus:bg-white hover:bg-white'
                  }`}
                  maxLength="6"
                />
                <ErrorMessage
                  component="div"
                  name="otp_code"
                  className="text-red-500 text-sm flex items-center gap-1"
                />
              </div>

              {/* Success Message */}
              {userResponVerify?.message === "Email verified successfully." && (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                  <HiCheckCircle className="w-5 h-5" />
                  <span className="font-medium">Email verified successfully! Redirecting...</span>
                </div>
              )}

              {/* Error Message */}
              {userResponVerify?.message && userResponVerify?.message !== "Email verified successfully." && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  {userResponVerify.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === "loading" ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Verifying...
                  </div>
                ) : (
                  "Verify Email"
                )}
              </button>

              {/* Footer Links */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Didn't receive the code?{" "}
                    <Link 
                      to="/resend-otp" 
                      className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-300"
                    >
                      Resend OTP
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
          )}
        </Formik>
      </div>
    </main>
  );
}
