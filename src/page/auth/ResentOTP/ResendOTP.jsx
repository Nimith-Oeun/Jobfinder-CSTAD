import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { fetchResendOTP, selectResendOTP } from '../../../redux/feature/user/UserSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { Helmet } from "react-helmet";

const validationSchema = Yup.object().shape({
  email: Yup.string().email(" Invalid Email").required("Email is Required!!"),
})

const initialValues = { email: "", }

export default function ResendOTP() {
  const userResendOTP = useSelector(selectResendOTP);
  const status = useSelector(state => state.user.status);
  console.log("userResendOTP", userResendOTP);
  const dispatch = useDispatch();
  const navigat = useNavigate();
  const [email, setEmail] = useState();


  useEffect(() => {
    if (userResendOTP?.message === 'New OTP sent to your email.') {
      navigat("/VerifyEmail", { state: email });
    }
  }, [userResendOTP?.message, navigat])

  const handleGetEmail = (e, setFieldValue) => {
    setEmail(e.target.value);
    setFieldValue("email", e.target.value);
  };
  console.log("email", email);

  return (
    <section className="flex justify-center items-center h-screen">
      <Helmet>
        <title>Resend-OTP</title>
      </Helmet>
      <div className="w-1/2 bg-slate-50 p-5 rounded-md">
        <h1 className="text-3xl text-blue-800 font-bold text-center">
          Resend-OTP
        </h1>
        <p className="mb-5 text-center">
          Please check you email for verification code.
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            dispatch(fetchResendOTP(values));
            resetForm();
          }}
        >
          {({ isSubmitting, setFieldValue }) => {
            return (
              <Form>
                <div className="mb-5">
                  <Field
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    onChange={(e) => handleGetEmail(e, setFieldValue)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="text-red-700 text-sm"
                  />
                </div>
                {userResendOTP?.message === 'User with this email does not exist.' && (
                  <div  className='mb-3'>
                    <Alert color="failure" icon={HiInformationCircle}>
                      <span className="font-medium">Info alert!</span> {userResendOTP?.message}.
                    </Alert>
                  </div>
                )}

                {/* button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    {status === 'loading' ? "Loading..." : "Resend OTP"}
                  </button>
                </div>
              </Form>
            )
          }}
        </Formik>

      </div>
    </section>
  )
}
