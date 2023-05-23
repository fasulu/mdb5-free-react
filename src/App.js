import React, { useMemo, useState } from 'react';

import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserContext } from './userContext/UserContext';

import SearchOptions from './components/clientPropertySearch'
// import Boxes from './test/Boxes';

import HomePage from './pages/homePage';
import NINOCheckPage from './pages/nINOCheckPage';
import AccountPage from './pages/accountPage';
import LoginPage from './pages/loginPage';
import PrimaryApplicantPage from './pages/primaryApplicantPage';
import JointApplicantPage from './pages/jointApplicantPage';
import HouseholdMemberPage from './pages/householdMemberPage';
import PageNotFound from './pages/PageNotFound';
import UpdateContactPage from './pages/updateContactPage';
import UpdateLoginPage from './pages/updateLoginPage';
import MemberListPage from './pages/memberListPage';
import JointApplicantEditPage from './pages/jointApplicantEditPage';
import MemberEditPage from './pages/memberEditPage';
import AccessibilityPage from './pages/accessibilityPage';
import HelpPage from './pages/helpPage';
import WhatIsNextPage from './pages/whatIsNextPage';
import PriorityPage from './pages/priorityPage';
import SizePage from './pages/sizePage';
import AnyChangePage from './pages/anyChangePage';
import ShortListPage from './pages/shortListingPage';
import RepairPage from './pages/repairPage';
import GuidePage from './pages/guidePage';
import KeyFactsPage from './pages/keyFactsPage';
import PropertySearchPage from './pages/propertySearchPage';

function App() {

  const [clientId, setClientId] = useState(null);

  const valueID = useMemo(() => ({clientId, setClientId}), [clientId, setClientId]);  

  return (

    <React.Fragment>
      <Suspense fallback={null}>
        <BrowserRouter>
          <UserContext.Provider value={valueID}>
            <Routes>
              <Route path="home" element={<HomePage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="nino" element={<NINOCheckPage />} />
              <Route path="account" element={<AccountPage />} />
              <Route path="primary" element={<PrimaryApplicantPage />} />
              {/* <Route path="joint" element={<JointApplicantPage />} /> */}
              {/* <Route path="member" element={<HouseholdMemberPage />} /> */}
              {/* <Route path="updatecontact" element={<UpdateContactPage />} /> */}
              {/* <Route path="jointdetail" element={<JointApplicantPage />} /> */}
              {/* <Route path="jointapplicantedit" element={<JointApplicantEditPage />} /> */}
              {/* <Route path="updatejointdetail" element={<HouseholdMemberPage />} /> */}
              {/* <Route path="memberlist" element={<MemberListPage />} /> */}
              {/* <Route path="memberedit" element={<MemberEditPage />} /> */}
              {/* <Route path="updatememberdetail" element={<HouseholdMemberPage />} /> */}
              {/* <Route path="updatelogin" element={<UpdateLoginPage />} /> */}
              <Route path="accessibility" element={<AccessibilityPage />} />
              <Route path="help" element={<HelpPage />} />
              <Route path="whatisnext" element={<WhatIsNextPage />} />
              <Route path="priority" element={<PriorityPage />} />
              <Route path="size" element={<SizePage />} />
              <Route path="anychange" element={<AnyChangePage />} />
              <Route path="shortlisting" element={<ShortListPage />} />
              <Route path="repair" element={<RepairPage />} />
              <Route path="guide" element={<GuidePage />} />
              <Route path="keyfacts" element={<KeyFactsPage />} />
              
              <Route path="search" element={<SearchOptions />} />

              <Route path="propertysearch" element={<PropertySearchPage/> } />

              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </UserContext.Provider>
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
  );
}

export default App;
