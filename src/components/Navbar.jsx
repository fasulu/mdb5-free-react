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
      <MDBContainer fluid >
        <MDBNavbarBrand href='#'>
          <img
            src="https://www.birminghamchoice.co.uk/Data/pub/PublicWebsite/SiteLogos/BCCLogo_Mobile.jpg" width="189" height="45" alt="Scheme logo"
            className='img-fluid hover-shadow'
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
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 '>
              <MDBNavbarItem>
                <MDBNavbarLink style={{ fontSize: '18px' }} active aria-current='page' href='#'>
                  <strong>Mobile View</strong>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink style={{ fontSize: '18px' }} active aria-current='page' href='#'>
                  <strong>Accessability</strong>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink style={{ fontSize: '18px' }} active aria-current='page' href='#'>
                  <strong>Help</strong>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className='d-flex w-auto'>
              <MDBBtn style={{margin:'12px', width:'135px'}} className='form-control'  color='primary'>
                <MDBIcon style={{marginRight:'5px'}} fas icon='pencil-alt'/>
                Register</MDBBtn>

              <MDBBtn style={{margin:'12px', width:'135px'}} className='form-control'  color='primary'>
                <MDBIcon style={{marginRight:'5px'}} fas icon='user-alt' />
                Login</MDBBtn>
            </form>
          </MDBCollapse>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
}