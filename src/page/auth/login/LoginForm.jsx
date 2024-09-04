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
import { HiInformationCircle } from "react-icons/hi";
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
  console.log("status", status);
 
useEffect(() => {
  if(accessToken){
    dispatch(fetchGetUser(accessToken));
    navigate("/");
    console.log("call")
  }
}, [accessToken]);



  return (
    <>
      <section className="w-[44%] max-md:w-full m-auto ">
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
          {({ isSubmitting }) => {
            return (
              <Form className="p-5">
                <h1 className="text-3xl text-blue-800 font-bold text-center">
                  Login
                </h1>
                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-blue-800 font-semibold"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="w-full p-2 border border-blue-800 rounded-md"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500"
                  />
                </div>
                {/* Password */}
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-blue-800 font-semibold"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="w-full p-2 border border-blue-800 rounded-md"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500"
                  />
                </div>
                {
                  loginRespone?.message && (
                    <Alert color="red" icon={HiInformationCircle} className="my-2">
                      {loginRespone.message}
                    </Alert>
                  )
                }
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className=" w-1/3 bg-[#08A6FF] text-white p-2 rounded-md mt-5 hover:bg-[#046BAC] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    {status === "loading" ? "Loading..." : "Login"}
                  </button>
                </div>
                <div className="flex justify-between w-full mt-10">     
                  <Link to={"/Sign-Up"}>
                    not a member?
                    <span className="underline text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500">
                      register
                    </span>
                  </Link>
                  <a
                    href="/forgot-password"
                    className=" underline text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500"
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