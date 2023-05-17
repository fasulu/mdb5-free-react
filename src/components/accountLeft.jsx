import React, { useState, useEffect } from 'react';
import { decryptDetails } from '../utility/hashDetails';


import {
    MDBIcon, MDBBtn, MDBTypography,
    MDBContainer, MDBCard, MDBCardBody,
    MDBRow, MDBCol
} from 'mdb-react-ui-kit';

const AccountLeft = (props) => {

    const styleBtn = { fontSize: '13px', color: '#4f83c3', textTransform: 'none' };

    const styleBorder = { color: '#4f83c3', borderTop: '1px solid #d7cdcd', borderBottom: '1px solid #d7cdcd' };

    const iconRight = "fa-solid fa-caret-right";

    const iconStatus = props.iconStatus;

    const [loginReference, setLoginReference] = useState()

    useEffect(() => {

        try {

            const loginRef = decryptDetails();

            console.log(`${loginRef.loginRef}`)
            setLoginReference((loginRef.loginRef).toUpperCase())

        } catch (error) {
            console.log(error)
        }

    }, [])

    return (
        <React.Fragment>
            {
                <MDBContainer className='ps-5 pt-3' >
                    <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                        <p style={{ color: 'black', fontSize: '20px', borderBottom: '2px solid #d7cdcd' }} ><strong>My Account</strong></p>
                    </MDBRow>
                    <MDBRow >
                        <MDBCol>
                            <p style={{ color: '#4f83c3', fontSize: '20px', borderBottom: '4px solid #4f83c3a3' }} ><strong>My Activity</strong></p>

                            <p> Your Login Reference: <strong>{loginReference}</strong></p>
                            <p> Please make a note of this login reference and your memorable date as you will need them to login again the next time you visit this site </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow >
                        <MDBCol>
                            <p style={{ color: '#4f83c3', fontSize: '20px', borderBottom: '4px solid #4f83c3a3' }} ><strong>My Application</strong></p>
                            <MDBCard>
                                <MDBTypography component={'div'} className='card-header' style={{ fontSize: '15px', backgroundColor: '#dcdcdc', color: 'black' }} ><strong>Social housing</strong></MDBTypography>

                                <MDBRow>
                                    <p>Applicaiton reference: </p>
                                    <p>State Reason: </p>
                                    <p>Start Date: </p>
                                    <p>Preferred Area: </p>
                                </MDBRow>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            }
        </React.Fragment>
    )
};

export default AccountLeft;