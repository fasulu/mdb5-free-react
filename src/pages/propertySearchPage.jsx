import React from 'react';

import Navbar from '../components/Navbar';
import NavbarSecondary from '../components/NavbarSecondary';

import {
    MDBRow, MDBCol
} from 'mdb-react-ui-kit';

import Footer from '../components/footer';
import PropertySearch from '../components/propertySearch';
import AboutRight from '../components/aboutRight';

export default function PropertySearchPage() {

    return (
        <React.Fragment>
            <Navbar></Navbar>
            <NavbarSecondary></NavbarSecondary>
            <MDBRow className='my-3 mt-5 justify-content-center' bgcolor='#f7f2f287'>
                <MDBCol className='col-lg-9 col-md-9 col-sm-8'>
                    <PropertySearch/>
                </MDBCol>
                <MDBCol className='col-lg-3 col-md-3 col-sm-0'>
                    <AboutRight />
                </MDBCol>
            </MDBRow>
            <Footer></Footer>
        </React.Fragment>
    );
}