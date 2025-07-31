import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateUser, selectCreateUser } from "../../../redux/feature/user/UserSlice";
import { HiInformationCircle, HiEye, HiEyeOff, HiMail, HiLockClosed, HiUser } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Register() {
  const dispatch = useDispatch();
  const userResponse = useSelector(selectCreateUser);
  const status = useSelector((state) => state.user.status);
  console.log("status", status);
  const [email, setEmail] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
 

  useEffect(() => {
    if (userResponse?.message==="User created. Check your email for the OTP code.") {
      navigate("/VerifyEmail", { state: email });
      console.log("email", email);
    }
  }, [userResponse?.message]);

  const handleGetEmail = (e, setFieldValue) => {
    setEmail(e.target.value);
    setFieldValue("email", e.target.value);
  };
  console.log("email", email);

  return (
    <>
      <article className="w-full max-md:w-full m-auto animate-fade-in">
        <Helmet>
          <title>Register / HR . Jobs</title>
        </Helmet>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(value, { resetForm }) => {
            console.log(value);
            dispatch(fetchCreateUser(value));
            resetForm();
          }}
        >
          {({ isSubmitting, setFieldValue, errors, touched }) => {
            return (
              <Form className="p-8 space-y-6 max-[380px]:p-4">
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent max-[380px]:text-2xl">
                    Create Account
                  </h1>
                  <p className="text-gray-600 mt-2 text-lg max-[380px]:text-base">
                    Join our community today
                  </p>
                </div>

                {/* Username Field */}
                <div className="space-y-2">
                  <label htmlFor="username" className="block text-sm font-semibold text-gray-700">
                    Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <Field
                      type="text"
                      id="username"
                      name="username"
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.username && touched.username 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-300 bg-gray-50 focus:bg-white hover:bg-white'
                      }`}
                      placeholder="Enter your username"
                    />
                  </div>
                  <ErrorMessage
                    component="div"
                    name="username"
                    className="text-red-500 text-sm flex items-center gap-1"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiMail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.email && touched.email 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-300 bg-gray-50 focus:bg-white hover:bg-white'
                      }`}
                      onChange={(e) => handleGetEmail(e, setFieldValue)}
                      placeholder="Enter your email"
                    />
                  </div>
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="text-red-500 text-sm flex items-center gap-1"
                  />
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiLockClosed className="h-5 w-5 text-gray-400" />
                    </div>
                    <Field
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className={`w-full pl-10 pr-12 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.password && touched.password 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-300 bg-gray-50 focus:bg-white hover:bg-white'
                      }`}
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <HiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <HiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="text-red-500 text-sm flex items-center gap-1"
                  />
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiLockClosed className="h-5 w-5 text-gray-400" />
                    </div>
                    <Field
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      className={`w-full pl-10 pr-12 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.confirmPassword && touched.confirmPassword 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-300 bg-gray-50 focus:bg-white hover:bg-white'
                      }`}
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <HiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <HiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                  <ErrorMessage
                    component="div"
                    name="confirmPassword"
                    className="text-red-500 text-sm flex items-center gap-1"
                  />
                </div>

                {/* Alert Message */}
                {userResponse?.status == "409" && (
                  <div className="animate-shake">
                    <Alert color="failure" icon={HiInformationCircle} className="border-l-4 border-red-500">
                      <span className="font-medium">Registration Failed!</span> {userResponse?.errors[0].error}.
                    </Alert>
                  </div>
                )}

                {/* Submit Button */}
                <div className="space-y-6">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {status === "loading" ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Creating Account...
                      </div>
                    ) : (
                      "Create Account"
                    )}
                  </button>

                  {/* Login Link */}
                  <div className="text-center pt-4 border-t border-gray-200">
                    <Link 
                      to={"/Login"}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      Already have an account?{" "}
                      <span className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">
                        Sign in
                      </span>
                    </Link>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </article>
    </>
  );
}
