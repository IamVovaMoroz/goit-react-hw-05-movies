import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'components/Header/Header'
import { Suspense } from "react";
import './Layout.css';


function Layout() {
  return (
    <>
    {/* <Toaster></Toaster> */}
      <Header />
      <main>
      <Suspense fallback={<div><span class="loader"></span></div>}>
      <Outlet />
      </Suspense>
      </main>
    </>
  )
}

export default Layout
