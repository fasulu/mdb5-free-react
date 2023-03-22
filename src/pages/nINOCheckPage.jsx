import React, { useState } from 'react';
import {
    MDBIcon,
    MDBCard, MDBCardBody,
    MDBContainer, MDBRow, MDBCol,
    MDBTypography,
    MDBBtn
} from 'mdb-react-ui-kit';

import { validNINO } from '../validations/Validator';
import ApplicationProgress from '../components/applicationProgress'
import NINOCheck from '../components/nINOCheck';
import Navbar from '../components/Navbar';
import NavbarSecondary from '../components/NavbarSecondary';
import Footer from '../components/footer';

export default function NINOCheckPage() {

    // const inputStyle = { width: '250px' };

    // const [ninoPrimary, setNINOPrimary] = useState("");
    // const [ninoJoint, setNINOJoint] = useState("");

    // const [ninoPrimaryErr, setNINOPrimaryErr] = useState(false);
    // const [ninoJointErr, setNINOJointErr] = useState(false);

    const showInConsole = (e) => {

        e.preventDefault();

        setNINOPrimaryErr(validNINO(ninoPrimary));
        setNINOJointErr(validNINO(ninoJoint));

        console.log(`Primary NINO is ${ninoPrimary} error is ${ninoPrimaryErr}, joint NINO is ${ninoJoint} error is ${ninoJointErr}`)
    }
    return (
        <React.Fragment>
            <Navbar ></Navbar> 
            <NavbarSecondary />
            <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                <MDBCol className='col-lg-6 col-md-6 col-sm-6'>
                    <NINOCheck></NINOCheck>
                </MDBCol>
                <MDBCol className='col-lg-4 col-md-5 col-sm-5'>
                    <ApplicationProgress iconStatus={"NinoCheckPage"} ></ApplicationProgress>
                </MDBCol>
            </MDBRow>
            <Footer />
        </React.Fragment>
    );
}