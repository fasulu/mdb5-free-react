import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import {
    MDBTypography, MDBIcon,
    MDBContainer, MDBCard, MDBCardBody,
    MDBRow, MDBCol
} from 'mdb-react-ui-kit';

export default function HomeBottom() {

    const navigate = useNavigate();

    const styleBtn = { fontSize: '15px', color: '#4f83c3', textTransform: 'none' };

    const styleBorder = { color: '#4f83c3', borderTop: '1px solid #d7cdcd', borderBottom: '1px solid #d7cdcd' };

    const iconRight = "fa-solid fa-caret-right";

    const gotoRegisterPage = () => {
        navigate('/home');
    }

    return (
        <React.Fragment>
            <MDBContainer >
                <MDBRow >
                    <MDBCol>
                        <MDBCard>
                            <MDBTypography className='card-header' style={{ fontSize: '15px', backgroundColor: '#dcdcdc' }} >
                                <strong><MDBIcon style={{ marginRight: '10px' }} fas icon="calendar-alt" />Advertising dates</strong>
                            </MDBTypography>

                            <MDBCardBody>
                                <p>Social housing</p>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBTypography className='card-header' style={{ fontSize: '15px', backgroundColor: '#dcdcdc' }} >
                                <strong><MDBIcon style={{ marginRight: '10px' }} fas icon="comments" />Latest News  </strong>
                            </MDBTypography>
                            <MDBCardBody>
                                <a href="https://www.birminghamchoice.co.uk/LatestNews/Page#Article_43_Bookmark">Birmingham Choice - Latest news</a>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBTypography className='card-header' style={{ fontSize: '15px', backgroundColor: '#dcdcdc' }} >
                                <strong><MDBIcon style={{ marginRight: '10px' }} fas icon="address-card" />Register  </strong>
                            </MDBTypography>
                            <MDBCardBody>
                                <a onClick={gotoRegisterPage}>Click here to register</a>
                                <MDBIcon style={{ marginLeft: '50px', fontSize: '50px', backgroundColor: '#dcdcdc' }} fas icon="laptop-medical" />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </React.Fragment>
    )
};
