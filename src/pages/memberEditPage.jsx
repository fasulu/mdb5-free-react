import React, { useState } from 'react';

import {
    MDBRow, MDBCol, MDBTypography,
    MDBCard, MDBCardBody, MDBRipple
} from 'mdb-react-ui-kit';

import { validNINO } from '../validations/Validator';
import AccountRight from '../components/accountRight';
import Navbar from '../components/Navbar';
import NavbarSecondary from '../components/NavbarSecondary';
import Footer from '../components/footer';
import MemberEdit from '../components/memberEdit';

export default function MemberEditPage() {

    const inputStyle = { fontSize: '14px', width: '250px', color: 'black' };

    const boxStyle = {
        backgroundColor: '#a3a5a9',
        cursor: 'pointer',
    };

    const [ninoPrimary, setNINOPrimary] = useState("");
    const [ninoJoint, setNINOJoint] = useState("");

    const [ninoPrimaryErr, setNINOPrimaryErr] = useState(false);
    const [ninoJointErr, setNINOJointErr] = useState(false);

    const showInConsole = (e) => {

        e.preventDefault();

        setNINOPrimaryErr(validNINO(ninoPrimary));
        setNINOJointErr(validNINO(ninoJoint));

        console.log(`Primary NINO is ${ninoPrimary} error is ${ninoPrimaryErr}, joint NINO is ${ninoJoint} error is ${ninoJointErr}`)
    }
    return (
        <React.Fragment>
            <Navbar />
            <NavbarSecondary />
            <MDBRow className='my-3 justify-content-center' alignment='center' bgcolor='#f7f2f287'>
                <MDBTypography className='card-header' style={{ fontSize: '16px' }} ><strong>Edit Member</strong></MDBTypography>
                <MDBCol md='6'>
                    <MemberEdit></MemberEdit>
                </MDBCol>
                <MDBCol className='col-lg-4 col-md-4 col-sm-4'>
                    <AccountRight></AccountRight>
                </MDBCol>
            </MDBRow>
            <Footer />
        </React.Fragment>
    );
}