import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/Store'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Register from './page/auth/Register'
import VerifyEmail from './page/auth/VerifyEmail'
import Login from './page/auth/Login.jsx'
import ResendOTP from './page/auth/ResendOTP.jsx'
import Jobs from './page/Jobs/jobs.jsx'
import Contact from './page/Contact/Contact.jsx'
import Layout from './layout/Layout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/Jobs',
        element: <Jobs />,
      },
      {
        path: '/Contact-Us',
        element: <Contact />,
      }
    ]
  },
  {
    path: '/Sign-Up',
    element: <Register />,
  },
  {
    path: '/VerifyEmail',
    element: <VerifyEmail />,
  },
  {
    path: '/Login',
    element: <Login/>
  },
  {
    path:'/Resend-OTP',
    element: <ResendOTP/>
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
