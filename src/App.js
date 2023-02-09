import React, { createContext, useState } from 'react';

import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/footer';
import NavbarSecondary from './components/NavbarSecondary';

// import Boxes from './test/Boxes';
// import ContainerRowCol from './test/ContainerRowCol';
// import Login from './components/login';
// import Registerclient from './components/registerclient';
// import HeaderTemp from './test/headerTemp';
// import TestSecondNavbar from './test/testSecondNavbar';
// import Flexbox from './test/flexbox';
// import RegisterYourHousehold from './components/registerYourHousehold';
import HomePage from './pages/homePage';
import NINOCheckPage from './pages/nINOCheckPage';
import AccountPage from './pages/accountPage';
import LoginPage from './pages/loginPage';
import PrimaryApplicantPage from './pages/primaryApplicantPage';
import JointApplicantPage from './pages/jointApplicantPage';
import HouseholdMemberPage from './pages/householdMemberPage';
import HomeLeft from './components/homeLeft';
import PageNotFound from './pages/PageNotFound';
import UpdateContact from './components/updateContact';

export const AppContext = createContext();

function App() {

  const [viewState] = useState()

  return (

    <AppContext.Provider value={viewState}>
      <React.Fragment>
        <Suspense fallback={null}>
          <BrowserRouter>
            <Routes>
              <Route path="home" element={<HomePage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="nino" element={<NINOCheckPage />} />
              <Route path="account" element={<AccountPage />} />
              <Route path="primary" element={<PrimaryApplicantPage />} />
              <Route path="joint" element={<JointApplicantPage />} />
              <Route path="member" element={<HouseholdMemberPage />} />
              <Route path="updatecontact" element={<UpdateContact/>} />
              <Route path="jointdetail" element={<HouseholdMemberPage />} />
              <Route path="updatejointdetail" element={<HouseholdMemberPage />} />
              <Route path="memberlist" element={<HouseholdMemberPage />} />
              <Route path="updatememberdetail" element={<HouseholdMemberPage />} />
              <Route path="updatelogin" element={<HouseholdMemberPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<PageNotFound />} /> 
            </Routes>
          </BrowserRouter>
        </Suspense>
        {/* <Navbar></Navbar> */}
        {/* <NavbarSecondary></NavbarSecondary> */}
        {/* <HomeLeft></HomeLeft> */}
        {/* <LoginPage></LoginPage> */}
        {/* <NINOCheckPage></NINOCheckPage> */}
        {/* <PrimaryApplicantPage></PrimaryApplicantPage> */}
        {/* <JointApplicantPage></JointApplicantPage>  */}
        {/* <HouseholdMemberPage></HouseholdMemberPage> */}
        {/* <AccountPage></AccountPage>   */}
        {/* <Footer></Footer> */}

      </React.Fragment>
    </AppContext.Provider>
  );
}

export default App;
