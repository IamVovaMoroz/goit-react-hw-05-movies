// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Header from 'components/Header/Header'
// import { Suspense } from "react";
// import './Layout.css';


// function Layout() {
//   return (
//     <>
//     {/* <Toaster></Toaster> */}
//       <Header />
//       <main>
//       <Suspense fallback={<div><span className="loader"></span></div>}>
//       <Outlet />
//       </Suspense>
//       </main>
//     </>
//   )
// }

// export default Layout
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from 'components/Header/Header';
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
    </>
  );
}

export default Layout;