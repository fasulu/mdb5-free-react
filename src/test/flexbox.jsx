import React from 'react';

import {
    MDBBtn,
    MDBContainer,
    MDBDropdown,
    MDBNavbarNav, MDBNavbarItem, MDBNavbarLink,
    MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem

} from 'mdb-react-ui-kit';

export default function Flexbox() {
    return (

        <MDBContainer className='d-flex justify-content-between'>
            <div className="p-2">
                <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                    <MDBNavbarItem className='active'>
                        <MDBNavbarLink aria-current='page' href='#'>
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

            </div>

            <div className="p-2">
                <MDBBtn outline color="warning" className='me-2 btn btn-primary' type='button'>
                    Main button
                </MDBBtn>
                <MDBBtn outline color="dark" className='me-2 btn btn-primary' type='button'>
                    Smaller button
                </MDBBtn>
            </div>
        </MDBContainer>


    );
}