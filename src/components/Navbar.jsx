import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {
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

import logoCityCouncil from "../../src/resources/images/Logo-128DPI.png";

export default function Navbar(props) {

  const navigate = useNavigate();

  const [showBasic, setShowBasic] = useState(false);
  const [loggedIn, setLoggedIn] = useState(props.loginStatus);

  const gotoRegisterPage = () => {
    navigate('/nino');
  }

  const gotoLoginPage = () => {
    window.localStorage.removeItem('cref')
    navigate('/login');
  }

  const gotoLogout = () => {
    window.localStorage.removeItem('cref')
    navigate('/login');
  }

  const element1 = (
    <form className='d-flex mr-auto mb-2 mb-lg-0'>

      <MDBBtn className='form-control' color='primary'
        style={{ margin: '10px', width: '135px', textTransform: 'none' }}
        onClick={(e) => { if (window.confirm("Logout Application?")) gotoLogout(e) }}>
        <MDBIcon style={{ marginRight: '5px' }} fas icon='user-alt' />
        Logout</MDBBtn>
      
    </form>
  );

  const element2 = (
    <React.Fragment>
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
    </React.Fragment >
  )

  return (
    <MDBNavbar expand='lg' light bgColor='white'>
      <MDBContainer fluid >
        <MDBNavbarBrand href='/home'>
          <img
            // src="https://drive.google.com/uc?export=view&id=1Qtctbw5JRzHJUYu_bdJ-wCL7C-sj50dD" width="189" height="45" alt="Logo"
            // className='img-fluid rounded hover-shadow'
            src={logoCityCouncil} width="189" height="45" alt="Logo"
            className='img-fluid rounded'
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