import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VerifyEmail from "./page/auth/verify/VerifyEmail.jsx";
import LoginPage from "./page/auth/login/LoginPage.jsx";
import ResendOTP from "./page/auth/ResentOTP/ResendOTP.jsx";
import Jobs from "./page/Jobs/jobs.jsx";
import Contact from "./page/Contact/Contact.jsx";
import Layout from "./layout/Layout.jsx";
import JobDetails from "./page/JobsDetails/JobDetails.jsx";
import RegisterPage from "./page/auth/register/RegisterPage.jsx";
import UpdateProfile from "./page/popup/updateProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/Jobs",
        element: <Jobs />,
      },
      {
        path: "/Contact-Us",
        element: <Contact />,
      },
      {
        path: "/Jobs-Details",
        element: <JobDetails />,
      },
    ],
  },
  {
    path: "/Sign-Up",
    element: <RegisterPage />,
  },
  {
    path: "/VerifyEmail",
    element: <VerifyEmail />,
  },
  {
    path: "/Login",
    element: <LoginPage />,
  },
  {
    path: "/Resend-OTP",
    element: <ResendOTP />,
  },
  {
    path: "/Update-Profile",
    element: <UpdateProfile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
