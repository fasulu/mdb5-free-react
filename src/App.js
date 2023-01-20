import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import NavbarBottom from './components/NavbarBottom';

import Boxes from './test/Boxes';
import ContainerRowCol from './test/ContainerRowCol';
import Login from './components/login';
import NINOCheck from './components/registerPageNICheck';
import Registerclient from './components/registerclient';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <NavbarBottom></NavbarBottom>
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
