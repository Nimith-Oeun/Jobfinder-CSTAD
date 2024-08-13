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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Register',
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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
