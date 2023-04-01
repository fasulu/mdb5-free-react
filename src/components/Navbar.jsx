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
            // https://drive.google.com/file/d/1A87RhgLrjddXEOrSTJFvL-Zt--laTl_R/view?usp=sharing
            //https://drive.google.com/file/d/19LGGcZjnB3DLJMfZ1GwxHpm07BPqfiuV/view?usp=share_link
            // src="https://drive.google.com/uc?export=view&id=1A87RhgLrjddXEOrSTJFvL-Zt--laTl_R" width="189" height="45" alt="Logo"
            // src="https://drive.google.com/uc?export=view&id=19LGGcZjnB3DLJMfZ1GwxHpm07BPqfiuV" width="189" height="45" alt="Logo"
            // src="https://doc-0c-60-docs.googleusercontent.com/docs/securesc/ccugi9pngr52vmo8bko87pa77qk42p2h/v4quufljo81vgk89f9t29mmc33h7mlph/1680093900000/05816277852269274453/05816277852269274453/19LGGcZjnB3DLJMfZ1GwxHpm07BPqfiuV?e=view&ax=ALy03A7ODB-XuVQL5RoCm_N_dGGl393ZKoU2w0Vj97d4X4A_6abUIGmMKngRr2Yre_oeJZOjhIL-4behEfBJFeLnZuCo4HS_PP72MeSThEnRjYjsvW3xq5I4MBXLQyrziwRCAEyDZbSoaO9DhEbPatCur85Gr0fDqbfnulQTEfi7ZiwnAZ8WOdqbIfaUmw1aGtPlMvFRbLvozdWcb1-DIxe6Rt4ThqCBii8xx_5LXx0XsMspjfzJjrmCbWgjbpoo9vDBourk7Ub8MMy4jubvcnDcw2_n91gy4Smm-NBt2nSeOGFi8RsJ09gSLGdAz9b6f7DZ-8nAAFKLAg7XjcMaIUMw0id0rp1EDzcfu9Ls90muLa9tBtQjf8nZ6aAFBh_wZx4OEExIgLyD2JVSJFCe49x2zxGOCmZjU5tIaHLeFxevh8h-o8qtF8T_t34AtfKZ0m85txl1_JTIFvFlG35UTLfrkDU6uEMXkA6IfSdsivtKKZLVeBUIqBm7edFxPeRJhPtWsaysYnok9sejzLeeUYHQcygWraWvMjfeYZ9ORS5TslptWOZsiGDzYBD4uCuBC36cxdZXPl2RS1ufsbaV7Dup67ZxZscQdKJ9CVEt6E7EnfS8f-WJVMG7b4Cct5dsqASV7yj5uG2C9c9USNOdEwHhMyCLGIYDo8LXzI3hkNTUmrO-0bkLdUY3Rotoz294xsN5bebW_RnvDgPzJP_Xf3Pv_Tl2OvV0Z_zi-CEDc_A1dYDkCHdGWWqZ7IVrv3Y_0dRuBTYGbhZ638Ozj29Td_ngewX5DVRDpTDBGqO1Kp4DreiE2bVfohntod8xxmZT8kUJWBF0Zsd2H06AYBqxpE5ir-NVaRynZXDD9t2wyiR5rpQRRiLPG4H53jtG2lxOTSk&uuid=e7ba4d20-b9a1-427e-9603-677f4c14aee4&authuser=0&nonce=18kv6k6liua48&user=05816277852269274453&hash=5p0plcvm52911n2npo2s5qkpjnolnh5m" width="189" height="45" alt="Logo"
            // src="https://drive.google.com/uc?export=view&id=19LGGcZjnB3DLJMfZ1GwxHpm07BPqfiuV" width="189" height="45" alt="Logo"
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