import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import NavBar2 from '../components/NavBar2';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = () => {
  const location = useLocation();
  const isSignUpPage = location.pathname === '/sign-up';
  const isSignInPage = location.pathname === '/sign-in';

  return (
    <>
      <ScrollToTop />
      {!isSignUpPage && !isSignInPage && <Banner />}
      {!isSignUpPage && !isSignInPage && <NavBar2 />}
      <Outlet />
      {!isSignUpPage && !isSignInPage && <Footer />}
    </>
  );
};

export default MainLayout;
