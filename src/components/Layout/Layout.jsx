// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Header from 'components/Header/Header';
// import Footer from 'components/Footer/Footer';
// import { Suspense } from 'react';
// import '../Spinner/spinner.css';
// import styled from 'styled-components';

// const SiteContainer = styled.div`
//   margin: 0 auto;
//   padding: 20px;
//   max-width: 1600px;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
// `;

// const MainContent = styled.main`
//   flex-grow: 1;
// `;

// function Layout() {
//   return (
//     <>
//       <ToastContainer />
//       <Header />
//       <SiteContainer>
//         <MainContent>
//           <Suspense fallback={<div><span className="loader"></span></div>}>
//             <Outlet />
//           </Suspense>
//         </MainContent>
       
//       </SiteContainer>
//       <Footer />
//     </>
//   );
// }

// export default Layout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Suspense } from 'react';
import "../Spinner/spinner.css"
import styled from 'styled-components';

const SiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

function Layout() {
  return (
    <>
      <ToastContainer />
      <Header />
      <SiteContainer>
        <MainContent>
          <Suspense fallback={<div><span className="loader"></span></div>}>
            <Outlet />
          </Suspense>
        </MainContent>
        <Footer />
      </SiteContainer>
    </>
  );
}

export default Layout;