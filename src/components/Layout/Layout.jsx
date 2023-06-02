
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Suspense } from 'react';
import "../Spinner/spinner.css"


function Layout() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
      <Suspense fallback={<div><span className="loader"></span></div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer /> 
    </>
  );
}

export default Layout;