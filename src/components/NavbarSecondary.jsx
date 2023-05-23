import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
} from 'mdb-react-ui-kit';

export default function NavbarSecondary(props) {

    const [loggedIn, setLoggedIn] = useState(props.loginStatus);

    const element1 = (
        <React.Fragment>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                    <MDBNavbarLink style={{ color: 'black', fontWeight: 'bold' }}
                        active aria-current='page' href='/home'>
                        Home
                    </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBDropdown>
                        <MDBDropdownToggle style={{ color: 'black', fontWeight: 'bold' }} tag='a' className='nav-link' role='button'>
                            About
                        </MDBDropdownToggle>
                        <MDBDropdownMenu style={{ height: '22.8em', background: '#8fbadc' }}>
                            <MDBDropdownItem style={{ height: '28px' }} href="/accessibility" link>Accessibility</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/anychange" link>Change of Circumstances</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/repair" link>Empty Property Repair Standards</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/guide" link>Guide to registerig for housing</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/help" link>Help</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/keyfacts" link>Key facts</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/priority" link>Prioritising applications</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/nino" link>Register</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/shortlisting" link>Shotlisting property adverts</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/size" link>The size of properties</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/whatisnext" link>What happens next</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavbarItem>
            </MDBNavbarNav>
            <form className='d-flex w-auto'>
                <MDBBtn style={{ fontSize: '14px', width: '200px', textTransform: 'none' }} color='primary me-1' href="/propertysearch" link = "true"> 
                    <MDBIcon fas icon='search' className='me-2' />
                    Properties Search</MDBBtn>
            </form>
        </React.Fragment >
    )

    const element2 = (
        <React.Fragment>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                    <MDBNavbarLink style={{ color: 'black', fontWeight: 'bold' }}
                        active aria-current='page' href='/home'>
                        Home
                    </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBDropdown>
                        <MDBDropdownToggle style={{ color: 'black', fontWeight: 'bold' }} tag='a' className='nav-link' role='button'>
                            About
                        </MDBDropdownToggle>
                        <MDBDropdownMenu style={{ height: '22.8em', background: '#8fbadc' }}>
                            <MDBDropdownItem style={{ height: '28px' }} href="/accessibility" link>Accessibility</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/anychange" link>Change of Circumstances</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/repair" link>Empty Property Repair Standards</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/guide" link>Guide to registerig for housing</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/help" link>Help</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/keyfacts" link>Key facts</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/priority" link>Prioritising applications</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/nino" link>Register</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/shortlisting" link>Shotlisting property adverts</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/size" link>The size of properties</MDBDropdownItem>
                            <MDBDropdownItem style={{ height: '28px' }} href="/whatisnext" link>What happens next</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavbarItem>
            </MDBNavbarNav>
        </React.Fragment >
    )

    return (
        <MDBNavbar expand='lg' >
            <MDBContainer fluid style={{ backgroundColor: '#8fbadc' }} >
                {
                    loggedIn ? element2 : element1
                }
            </MDBContainer>
        </MDBNavbar>
    );
}