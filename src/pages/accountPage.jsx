import React, { useState } from 'react';
import {
    MDBIcon,
    MDBCard, MDBCardBody,
    MDBContainer, MDBRow, MDBCol,
    MDBTypography,
    MDBBtn
} from 'mdb-react-ui-kit';

import { ValidNINO } from '../validations/Validator';
import ApplicationProgress from '../components/applicationProgress'
import AccountRight from '../components/accountRight';
import AccountLeft from '../components/accountLeft';

export default function AccountPage() {

    const inputStyle = { width: '250px' };

    const [ninoPrimary, setNINOPrimary] = useState("");
    const [ninoJoint, setNINOJoint] = useState("");

    const [ninoPrimaryErr, setNINOPrimaryErr] = useState(false);
    const [ninoJointErr, setNINOJointErr] = useState(false);

    const showInConsole = (e) => {

        e.preventDefault();

        setNINOPrimaryErr(ValidNINO(ninoPrimary));
        setNINOJointErr(ValidNINO(ninoJoint));

        console.log(`Primary NINO is ${ninoPrimary} error is ${ninoPrimaryErr}, joint NINO is ${ninoJoint} error is ${ninoJointErr}`)
    }
    return (
        <React.Fragment>
            <MDBContainer  >
                <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                    <MDBCol className='col-lg-8 col-md-8 col-sm-6'>
                        <AccountLeft></AccountLeft>
                    </MDBCol>
                    <MDBCol className='col-lg-4 col-md-4 col-sm-0'>
                        <AccountRight></AccountRight>
                    </MDBCol>
                </MDBRow>
            </MDBContainer >

        </React.Fragment>
    );
}