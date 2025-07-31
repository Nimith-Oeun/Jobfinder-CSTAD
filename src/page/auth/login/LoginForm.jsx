import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchLogin, selectUserLogin } from "../../../redux/feature/user/UserSlice";
import { Helmet } from "react-helmet";
import { getAccessToken } from "../../../lib/securLocalStorage";
import { fetchGetUser } from "../../../redux/feature/user/UserSlice";
import { HiInformationCircle, HiEye, HiEyeOff, HiMail, HiLockClosed } from "react-icons/hi";
import { Alert } from "flowbite-react";

const validationSchema = Yup.object({
  
  email: Yup.string().email(" Invalid Email").required("Email is Required!!"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters") //.matches(passwordRegex , "Password must be at least 8 charector, an upercase, an number, an lowercase, an spacial charecter ") if use passwordRegex we must replace on mine.
    .required("Password is Required!!"),
});

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginRespone = useSelector(selectUserLogin);
  const status = useSelector(state => state.user.status);
  const [accessToken, setAccessToken] = useState(null);
  const [isToken , setIsToken] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  console.log("status", status);
 
useEffect(() => {
  if(accessToken){
    dispatch(fetchGetUser(accessToken));
    navigate("/");
  }
}, [accessToken,isToken,dispatch,navigate]);



  return (
    <>
      <section className="w-full max-w-md mx-auto animate-fade-in">
        <Helmet>
          <title>Login / HR . Jobs</title>
        </Helmet>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(value, { setSubmitting, resetForm }) => {
            dispatch(fetchLogin(value)).then(()=>{
              setAccessToken(getAccessToken());
              setIsToken(true);
              setSubmitting(true);
              resetForm();
            });
           
          }}
        >
          {({ isSubmitting, errors, touched }) => {
            return (
              <Form className="space-y-5">
                <div className="text-center mb-6">
                  <h1 className="text-3xl font-bold text-blue-600 mb-1">
                    Welcome Back
                  </h1>
                  <p className="text-gray-500 text-sm">
                    Sign in to your account
                  </p>
                </div>

                {/* Email Field */}
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiMail className="h-4 w-4 text-gray-400" />
                    </div>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={`w-full pl-9 pr-4 py-2.5 border rounded-lg text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.email && touched.email 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-gray-300 bg-white hover:border-gray-400'
                      }`}
                      placeholder="Enter your email"
                    />
                  </div>
                  {errors.email && touched.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiLockClosed className="h-4 w-4 text-gray-400" />
                    </div>
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      className={`w-full pl-9 pr-10 py-2.5 border rounded-lg text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.password && touched.password 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-gray-300 bg-white hover:border-gray-400'
                      }`}
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-50 rounded-r-lg transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <HiEyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <HiEye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                  {errors.password && touched.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Alert Message */}
                {loginRespone?.message && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="flex items-center">
                      <HiInformationCircle className="h-4 w-4 text-red-400 mr-2" />
                      <p className="text-red-800 text-xs">
                        {loginRespone.message}
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || status === "loading"}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2.5 px-4 rounded-lg text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {status === "loading" ? (
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Signing In...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </button>

                {/* Links */}
                <div className="space-y-3 text-center text-sm">
                  <div className="text-gray-600">
                    Don't have an account?{" "}
                    <Link 
                      to={"/Sign-Up"}
                      className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
                    >
                      Sign up
                    </Link>
                  </div>
                  <a
                    href="/forgot-password"
                    className="block font-medium text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
              </Form>
            );
          }}
        </Formik>
      </section>
    </>
  );
}