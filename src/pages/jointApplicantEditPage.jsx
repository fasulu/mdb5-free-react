import React, { useState, useContext } from 'react';
import { UserContext } from "../userContext/UserContext"

import {
    MDBIcon,
    MDBCard, MDBCardBody,
    MDBContainer, MDBRow, MDBCol,
    MDBTypography,
    MDBBtn
} from 'mdb-react-ui-kit';

import { validNINO } from '../validations/Validator';
// import AccountRight from '../components/XaccountRight';
import Navbar from '../components/Navbar';
import NavbarSecondary from '../components/NavbarSecondary';
import Footer from '../components/footer';
import JointApplicantEdit from '../components/jointApplicantEdit';

export default function JointApplicantEditPage() {

    const { clientId, setClientId } = useContext(UserContext);

    // const [ninoPrimary, setNINOPrimary] = useState("");
    // const [ninoJoint, setNINOJoint] = useState("");

    // const [ninoPrimaryErr, setNINOPrimaryErr] = useState(false);
    // const [ninoJointErr, setNINOJointErr] = useState(false);

    const showInConsole = (e) => {

        e.preventDefault();

        // setNINOPrimaryErr(ValidNINO(ninoPrimary));
        // setNINOJointErr(validNINO(ninoJoint));

        console.log(`Primary NINO is ${clientId} error is ${ninoPrimaryErr}, joint NINO is ${ninoJoint} error is ${ninoJointErr}`)
    }
    return (
        <React.Fragment>
            <Navbar/>
            <NavbarSecondary/>
                <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                {/* <MDBTypography component={'div'} className='card-header' style={{ fontSize: '18px' }} ><strong>Joint Applicant</strong></MDBTypography> */}
                    <MDBCol className='col-lg-8 col-md-8 col-sm-8'>
                        <JointApplicantEdit/>
                    </MDBCol>
                    <MDBCol className='col-lg-4 col-md-4 col-sm-4'>
                        {/* <AccountRight></AccountRight> */}
                    </MDBCol>
                </MDBRow>
            <Footer/>

        </React.Fragment>
    );
}