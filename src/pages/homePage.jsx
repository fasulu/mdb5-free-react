import React from 'react';
import HomeLeft from '../components/homeLeft';

import Navbar from '../components/Navbar';
import NavbarSecondary from '../components/NavbarSecondary';

import {
    MDBContainer, MDBRow, MDBCol
} from 'mdb-react-ui-kit';
import Footer from '../components/footer';
import PrimaryApplicantPage from './primaryApplicantPage';
import HomeRight from '../components/homeRight';
import HomeBottom from '../components/homeBottom';

export default function HomePage() {

    const primaryApplicant = "PrimaryApplicant"

    return (
        <React.Fragment>
            <Navbar></Navbar>
            <NavbarSecondary></NavbarSecondary>
            <MDBRow className='my-3 mt-5 justify-content-center' bgcolor='#f7f2f287'>
                <MDBCol className='col-lg-6 col-md-8 col-sm-6'>
                    <HomeLeft />
                </MDBCol>
                <MDBCol className='col-lg-4 col-md-4 col-sm-0'>
                    <HomeRight />
                </MDBCol>
            </MDBRow>
            <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                <MDBCol className=''>
                    <HomeBottom />
                </MDBCol>
            </MDBRow>
            <Footer></Footer>
        </React.Fragment>
    );
}