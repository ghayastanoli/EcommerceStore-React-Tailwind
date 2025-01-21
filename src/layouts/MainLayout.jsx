import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import NavBar2 from '../components/NavBar2';

const MainLayout = () => {
  const location = useLocation();
  const isSignUpPage = location.pathname === '/sign-up';

  return (
    <>
      {!isSignUpPage && <Banner />}
      {!isSignUpPage && <NavBar2 />}
      <Outlet />
      {!isSignUpPage && <Footer />}
    </>
  );
};

export default MainLayout;