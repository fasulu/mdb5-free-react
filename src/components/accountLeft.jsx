import React, { useState } from 'react';

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

    return (
        <React.Fragment>
            {
                <MDBContainer >
                    <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                        <p style={{ color: 'black', fontSize: '20px', borderBottom: '2px solid #d7cdcd' }} ><strong>My Account</strong></p>
                    </MDBRow>
                    <MDBRow >
                        <MDBCol>
                            <p style={{ color: '#4f83c3', fontSize: '20px', borderBottom: '4px solid #4f83c3a3' }} ><strong>My Activity</strong></p>

                            <p> Your Login Reference:</p>
                            <p> Please make a note of this login reference and your memorable date as you will need them to login again the next time you visit this site </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow >
                        <MDBCol>
                            <p style={{ color: '#4f83c3', fontSize: '20px', borderBottom: '4px solid #4f83c3a3' }} ><strong>My Application</strong></p>
                            <MDBCard>
                                <MDBTypography className='card-header' style={{ fontSize: '15px', backgroundColor: '#dcdcdc', color:'black' }} ><strong>Social housing</strong></MDBTypography>

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