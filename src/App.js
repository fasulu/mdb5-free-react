import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import NavbarSecondary from './components/NavbarSecondary';

import Boxes from './test/Boxes';
import ContainerRowCol from './test/ContainerRowCol';
import Login from './components/login';
// import NINOCheck from './components/registerPageNICheck';
import Registerclient from './components/registerclient';
import HeaderTemp from './test/headerTemp';
import TestSecondNavbar from './test/testSecondNavbar';
import Flexbox from './test/flexbox';
import RegisterYourHousehold from './components/registerYourHousehold';
import NINOCheckPage from './pages/nINOCheckPage';
import PrimaryApplicant from './pages/primaryApplicant';
import JointApplicant from './pages/jointApplicant';
import HouseholdMember from './pages/householdMember';
import AccountPage from './pages/accountPage';
// import AccountRight from './components/accountRight';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <NavbarSecondary></NavbarSecondary>
      <Login></Login>
      <NINOCheckPage></NINOCheckPage>
      <PrimaryApplicant></PrimaryApplicant>
      <JointApplicant></JointApplicant>     
      <HouseholdMember></HouseholdMember>
      {/* <AccountRight></AccountRight> */}
      <AccountPage></AccountPage>  
      <Footer></Footer>

    </React.Fragment>
  );
}

export default App;
