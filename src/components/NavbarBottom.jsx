import React from 'react';
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

export default function NavbarBottom() {

    const btn = "Properties and recent lets search"
    return (
        <MDBNavbar expand='sm' >
            <MDBContainer fluid style={{ backgroundColor: '#8fbadc' }} >

                <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                    <MDBNavbarItem>
                        <MDBNavbarLink bg-dark active aria-current='page' href='#'>
                            Home
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBDropdown>
                            <MDBDropdownToggle bg-dark tag='a' className='nav-link' role='button'>
                                About
                            </MDBDropdownToggle>
                            <MDBDropdownMenu color='primary'>
                                <MDBDropdownItem link>About</MDBDropdownItem>
                                <MDBDropdownItem link>Register</MDBDropdownItem>
                                <MDBDropdownItem link>Apply for a Mobility Assessment</MDBDropdownItem>
                                <MDBDropdownItem link>What happens next</MDBDropdownItem>
                                <MDBDropdownItem link>Prioritising applications</MDBDropdownItem>
                                <MDBDropdownItem link>The size of properties</MDBDropdownItem>
                                <MDBDropdownItem link>Bidding</MDBDropdownItem>
                                <MDBDropdownItem link>Change of Circumstances</MDBDropdownItem>
                                <MDBDropdownItem link>Shotlisting property adverts</MDBDropdownItem>
                                <MDBDropdownItem link>Feedback</MDBDropdownItem>
                                <MDBDropdownItem link>Empty Property Repair Standards</MDBDropdownItem>
                                <MDBDropdownItem link>Frequently asked questions</MDBDropdownItem>
                                <MDBDropdownItem link>Request a review</MDBDropdownItem>
                                <MDBDropdownItem link>Guide to registerig for housing</MDBDropdownItem>
                                <MDBDropdownItem link>Key facts</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarItem>
                </MDBNavbarNav>

                <form className='d-flex input-group w-auto mr-1'>
                    <MDBBtn style={{ fontSize: '10px', minWidth: '260px' }} color='primary me-1'>
                        <MDBIcon fas icon='search' className='me-2' />
                        Properties and recent lets search</MDBBtn>
                </form>

                <form className='d-flex input-group w-auto'>
                    <MDBBtn style={{ fontSize: '10px', minWidth: '150px' }} color='primary' >
                        <MDBIcon fas icon='check' className='me-2' />My to do list</MDBBtn>
                </form>
            </MDBContainer>
        </MDBNavbar>
    );
}