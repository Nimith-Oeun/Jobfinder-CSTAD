import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateUser, selectCreateUser } from "../../../redux/feature/user/UserSlice";
import { HiInformationCircle } from "react-icons/hi";
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
      <article className="w-[44%] max-md:w-full m-auto">
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
          {/* all this properties destructuring from object isSubmitting */}
          {({ isSubmitting, setFieldValue }) => {
            return (
              <Form className="p-5">
                <h1 className="text-3xl text-blue-800 font-bold text-center">
                  Register
                </h1>
                {/* username */}
                <div className="mt-1">
                  <label htmlFor="username" placeholder="John" required>
                    Username
                  </label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <ErrorMessage
                    component="div"
                    name="username"
                    className="text-red-600"
                  />
                </div>
                {/* email */}
                <div className="mt-1">
                  <label htmlFor="email" required>
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => handleGetEmail(e, setFieldValue)}
                    required
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="text-red-600"
                  />
                </div>
                {/* password */}
                <div className="mt-1">
                  <label htmlFor="password" required>
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="text-red-600"
                  />
                </div>
                {/* confirm password */}
                <div className="mt-1">
                  <label htmlFor="confirmPassword" required>
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <ErrorMessage
                    component="div"
                    name="confirmPassword"
                    className="text-red-600"
                  />
                </div>

                <div className="mt-1">
                  {userResponse?.status == "409" && (
                    <Alert color="failure" icon={HiInformationCircle}>
                      <span className="font-medium">Info alert!</span> {userResponse?.errors[0].error}.
                    </Alert>
                  )}
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className=" mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {status === "loading" ? "Loading..." : "Register"}
                  </button>
                </div>
                <div className="mt-5">
                  <Link to={"/Login"}>
                    Are you a member?
                    <span className="underline text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500">
                      Login
                    </span>
                  </Link>
                </div>
              </Form>
            );
          }}
        </Formik>
      </article>
    </>
  );
}
