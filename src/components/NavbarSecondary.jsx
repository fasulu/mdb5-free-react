import React from 'react';
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

export default function NavbarSecondary() {

    const btn = "Properties and recent lets search"
    return (
        <MDBNavbar expand='lg' >
            <MDBContainer fluid style={{ backgroundColor: '#8fbadc' }} >

                <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                    <MDBNavbarItem>
                        <MDBNavbarLink style={{color:'black', fontWeight:'bold'}} active aria-current='page' href='#'>
                            Home
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBDropdown>
                            <MDBDropdownToggle style={{color:'black', fontWeight:'bold'}} tag='a' className='nav-link' role='button'>
                                About
                            </MDBDropdownToggle>
                            <MDBDropdownMenu style={{ overflow: 'scroll', height: '22em', background:'#8fbadc' }}>
                                <MDBDropdownItem style={{ height: '28px' }} link>About</MDBDropdownItem>
                                <MDBDropdownItem style={{ height: '28px' }} link>Register</MDBDropdownItem>
                                <MDBDropdownItem style={{ height: '28px' }} link>Apply for a Mobility Assessment</MDBDropdownItem>
                                <MDBDropdownItem style={{ height: '28px' }} link>What happens next</MDBDropdownItem>
                                <MDBDropdownItem style={{ height: '28px' }} link>Prioritising applications</MDBDropdownItem>
                                <MDBDropdownItem style={{ height: '28px' }} link>The size of properties</MDBDropdownItem>
                                <MDBDropdownItem style={{ height: '28px' }} link>Bidding</MDBDropdownItem>
                                <MDBDropdownItem style={{ height: '28px' }} link>Change of Circumstances</MDBDropdownItem>
                                <MDBDropdownItem style={{ height: '28px' }} link>Shotlisting property adverts</MDBDropdownItem>
                                <MDBDropdownItem style={{ height: '28px' }} link>Feedback</MDBDropdownItem>
                                <MDBDropdownItem style={{ height: '28px' }} link>Empty Property Repair Standards</MDBDropdownItem>
                                <MDBDropdownItem style={{ height: '28px' }} link>Frequently asked questions</MDBDropdownItem>
                                <MDBDropdownItem style={{ height: '28px' }} link>Request a review</MDBDropdownItem>
                                <MDBDropdownItem style={{ height: '28px' }} link>Guide to registerig for housing</MDBDropdownItem>
                                <MDBDropdownItem style={{ height: '28px' }} link>Key facts</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarItem>
                </MDBNavbarNav>

                <form className='d-flex w-auto'>
                    <MDBBtn style={{ fontSize: '14px', width: 'auto', textTransform: 'none' }} color='primary me-1'>
                        <MDBIcon fas icon='search' className='me-2' />
                        Properties and recent lets search</MDBBtn>

                    <MDBBtn style={{ fontSize: '14px', width: 'auto', textTransform: 'none' }} color='primary' >
                        <MDBIcon fas icon='check' className='me-2' />My to do list</MDBBtn>
                </form>
            </MDBContainer>
        </MDBNavbar>
    );
}