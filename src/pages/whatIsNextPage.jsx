import React, {useContext} from 'react';
import { AppContext } from '../App';

import {
    MDBContainer, MDBRow, MDBCol
} from 'mdb-react-ui-kit';

import Navbar from '../components/Navbar';
import NavbarSecondary from '../components/NavbarSecondary';
import Footer from '../components/footer';
import WhatIsNext from '../components/whatIsNext';
import AboutRight from '../components/aboutRight';

export default function WhatIsNextPage() {

    return (
        <React.Fragment>
            <Navbar/>
            <NavbarSecondary/>
                <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                    <MDBCol className='col-lg-8 col-md-8 col-sm-6'>
                        <WhatIsNext/>
                    </MDBCol>
                    <MDBCol className='col-lg-4 col-md-4 col-sm-0'>
                    <AboutRight/>
                    </MDBCol>
                </MDBRow>
                <Footer/>
        </React.Fragment>
    );
}