import React, { useState } from 'react';
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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function navbar() {

  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer >
        <MDBNavbarBrand href='#'>
          <img
            src="https://www.birminghamchoice.co.uk/Data/pub/PublicWebsite/SiteLogos/BCCLogo_Mobile.jpg" width="189" height="45" alt="Scheme logo"
            className='img-fluid hover-shadow'
          />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 '>
            <MDBNavbarItem style={{ backgroundColor: '#fbfbfb' }}>

            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Mobile View
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Accessability
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Help
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          
          <form className='d-flex input-group w-auto mr-1'>
            <MDBBtn style={{ fontSize: '10px', minWidth: '120px' }} color='primary me-1'>
              <MDBIcon fas icon='pencil-alt' className='me-3' />
              Register</MDBBtn>
          </form>

          <form className='d-flex input-group w-auto'>
            <MDBBtn style={{ fontSize: '10px', minWidth: '120px' }} color='primary'>
              <MDBIcon fas icon='user-alt' className='me-3' />
              Login</MDBBtn>
          </form>
        </MDBCollapse>

      </MDBContainer>
    </MDBNavbar>
  );
}