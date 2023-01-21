import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import NavbarSecondary from './components/NavbarSecondary';

import Boxes from './test/Boxes';
import ContainerRowCol from './test/ContainerRowCol';
import Login from './components/login';
import NINOCheck from './components/registerPageNICheck';
import Registerclient from './components/registerclient';
import HeaderTemp from './test/headerTemp';

function App() {
  return (
    <React.Fragment>
      {/* <HeaderTemp></HeaderTemp> */}
      <Navbar></Navbar>
      <NavbarSecondary></NavbarSecondary>
      <Registerclient></Registerclient>
      {/* <NINOCheck></NINOCheck> */}
      {/* <Login></Login> */}
      {/* <ContainerRowCol></ContainerRowCol> */}
      {/* <Boxes></Boxes> */}
      <Footer></Footer>

    </React.Fragment>
  );
}

export default App;
