import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector  } from "react-redux";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { useEffect } from "react";
import { fetchLogin, selectUserLogin } from "../../redux/feature/user/UserSlice";
import { Helmet } from "react-helmet";

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
  console.log("status", status);
  console.log("loginRespone", loginRespone);

  // useEffect(() => {
  //   if (loginRespone.user) {
  //     navigate("/");
  
  //   }
  // }, [loginRespone, navigate]);

    
  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <Helmet>
          <title>Login</title>
        </Helmet>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(value, { setSubmitting, resetForm }) => {
            // setSubmitting(false);
            // handleLogin(value);
            dispatch(fetchLogin(value));
            // console.log(value);
            resetForm();
          }}
        >
          {({ isSubmitting }) => {
            return (
              <Form className="w-1/2 bg-gray-100 p-[20px] rounded-md">
                <h1 className="text-2xl text-blue-800 font-semibold text-center">
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
                  loginRespone.detail && (
                    <Alert color="red" icon={HiInformationCircle} className="my-2">
                      {loginRespone.detail}
                    </Alert>
                  )
                }
                <div className="flex justify-between  mt-2">
                  <a href="/register" className="">
                    Don&apos;t have account?{" "}
                    <span className="underline text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500">
                      register
                    </span>
                  </a>
                  <a
                    href="/forgot-password"
                    className=" underline text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500"
                  >
                    Forgot password?
                  </a>
                </div>
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className=" w-1/3 bg-blue-800 text-white p-2 rounded-md mt-5 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    {isSubmitting ? "Loading..." : "Login"}
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </section>
    </>
  );
}