import React, { useState } from 'react';

import {
    MDBContainer, MDBRow, MDBCol
} from 'mdb-react-ui-kit';

import { validNINO } from '../validations/Validator';
import ApplicationProgress from '../components/applicationProgress'
import JointApplicant from '../components/jointApplicant';
import Navbar from '../components/Navbar';
import NavbarSecondary from '../components/NavbarSecondary';
import Footer from '../components/footer';

export default function JointApplicantPage() {

    const jointApplicant ="JointApplicant";

    const showInConsole = (e) => {

    }
    return (
        <React.Fragment>
            <Navbar/>
            <NavbarSecondary/>
                <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                    <MDBCol className='col-lg-8 col-md-8 col-sm-6'>
                        <JointApplicant></JointApplicant>
                    </MDBCol>

                    <MDBCol className='col-lg-4 col-md-4 col-sm-0'>
                    <ApplicationProgress iconStatus={jointApplicant} ></ApplicationProgress>
                    </MDBCol>
                </MDBRow>
                <Footer/>
        </React.Fragment>
    );
}