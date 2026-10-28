import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import NotFound from './pages/404/NotFound';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Reset from './pages/auth/Reset';
import Admin from './pages/admin/Admin';
import Verify from './pages/auth/Verify';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginStatus, getUser, selectIsLoggedIn, selectUser } from './redux/features/auth/authSlice';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Student from './pages/student/Student';
import LoginWithOtp from './pages/auth/LoginWithOtp';
import LoginWithCode from './pages/auth/LoginWithCode';
import Forgot from './pages/auth/Forgot';
axios.defaults.withCredentials = true;

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getLoginStatus());
    if (isLoggedIn && user === null) {
      dispatch(getUser());
    }
  }, [dispatch, isLoggedIn, user]);

  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <ToastContainer />
          <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route path="/resetPassword/:resetToken" element={<Reset />} />
              <Route path="/loginWithCode/:email" element={<LoginWithCode />} />
              <Route path='/loginWithOtp/:email' element={<LoginWithOtp />} />
              <Route path='/register' element={<Register />} />
              <Route
                path="/verify/:verificationToken"
                element={<Verify />}
              />
              <Route path='/reset' element={<Reset />} />
              <Route path='/admin/*' element={<Admin />} />
              <Route path='/student/*' element={<Student />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          <Footer />
      </GoogleOAuthProvider>
    </>
  );
};

export default App;
