import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  MDBIcons,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function Navbar(props) {

  const navigate = useNavigate();

  const [showBasic, setShowBasic] = useState(false);
  const [loggedIn, setLoggedIn] = useState(props.loginStatus);

  const gotoRegisterPage = () => {
    navigate('/nino');
  }

  const gotoAccountPage = () => {
    navigate('/account');
  }

  const gotoLoginPage = () => {
    window.localStorage.removeItem('cref')
    navigate('/login');
  }

  const element1 = (
    <form className='d-flex mr-auto mb-2 mb-lg-0'>

      <MDBBtn style={{ margin: '10px', width: '135px', textTransform: 'none' }}
        className='form-control' color='primary' onClick={gotoAccountPage}>
        <MDBIcon style={{ marginRight: '5px' }} fas icon='pencil-alt' />
        My account</MDBBtn>

      <MDBBtn style={{ margin: '10px', width: '135px', textTransform: 'none' }} className='form-control' color='primary'>
        <MDBIcon style={{ marginRight: '5px' }} fas icon='user-alt' />
        Messages</MDBBtn>
{/* 
      <MDBBtn style={{ margin: '10px', width: '135px', textTransform: 'none' }} className='form-control' color='primary'>
        <MDBIcon style={{ marginRight: '5px' }} fas icon='pencil-alt' />
        Logout</MDBBtn>
 */}
    </form>
  );

  const element2 = (
    <>
      <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 '>
        <MDBNavbarItem>
          <MDBNavbarLink style={{ fontSize: '18px' }} active aria-current='page' href='#'>
            <strong></strong>
          </MDBNavbarLink>
        </MDBNavbarItem>
        <MDBNavbarItem>
          <MDBNavbarLink id='' style={{ fontSize: '18px' }} active aria-current='page' href='/accessibility'>
            <strong>Accessibility</strong>
          </MDBNavbarLink>
        </MDBNavbarItem>
        <MDBNavbarItem>
          <MDBNavbarLink id='' style={{ fontSize: '18px' }} active aria-current='page' href='/help'>
            <strong>Help</strong>
          </MDBNavbarLink>
        </MDBNavbarItem>
      </MDBNavbarNav>
      <form className='d-flex mr-auto mb-2 mb-lg-0'>
        <MDBBtn id="RegisterBtn" style={{ margin: '10px', width: '135px', textTransform: 'none' }}
          className='form-control' color='primary' onClick={gotoRegisterPage}>
          <MDBIcon style={{ marginRight: '5px' }} fas icon='pencil-alt' />
          Register</MDBBtn>

        <MDBBtn id="LogInOutBtn" style={{ margin: '10px', width: '135px', textTransform: 'none' }}
          className='form-control' color='primary' onClick={gotoLoginPage}>
          <MDBIcon style={{ marginRight: '5px' }} fas icon='user-alt' />
          Login</MDBBtn>

      </form>
    </>

  )

  return (
    <MDBNavbar expand='lg' light bgColor='white'>
      <MDBContainer fluid >
        <MDBNavbarBrand href='/home'>
          <img
            // src="https://www.birminghamchoice.co.uk/Data/pub/PublicWebsite/SiteLogos/BCCLogo_Mobile.jpg" width="189" height="45" alt="Scheme logo"
            // src="https://drive.google.com/uc?export=view&id=1Qtctbw5JRzHJUYu_bdJ-wCL7C-sj50dD" width="189" height="45" alt="Logo"
            // className='img-fluid rounded hover-shadow'
            src="https://birminghamwatch.org/wp-content/uploads/2019/03/Birmingham-City-Council-new-logo-300x169.png" width="189" height="45" alt="Logo"
            className='img-fluid rounded hover-shadow'
          />
        </MDBNavbarBrand>
        <div className='d-flex input-group w-auto'>
          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>

            {
              loggedIn ? element1 : element2
            }
            
          </MDBCollapse>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
}