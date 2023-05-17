import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import {
    MDBTypography,
    MDBContainer, MDBCard, MDBCardBody,
    MDBRow, MDBCol
} from 'mdb-react-ui-kit';

export default function HomeLeft() {

    const navigate = useNavigate();

    const styleBtn = { fontSize: '13px', color: '#4f83c3', textTransform: 'none' };

    const styleBorder = { color: '#4f83c3', borderTop: '1px solid #d7cdcd', borderBottom: '1px solid #d7cdcd' };

    const iconRight = "fa-solid fa-caret-right";

    return (
        <React.Fragment>
            {
                <MDBContainer >
                    <MDBCard>
                        <MDBTypography component={'div'} className='card-header' style={{ color: 'black', fontSize: '25px', borderBottom: '3px solid #d7cdcd' }} ><strong>Welcome to Bham Choice</strong></MDBTypography>
                        <MDBCardBody>
                            <MDBRow className='my-3 justify-content-center border border-rounded border-warning' bgcolor='#f7f2f287'>
                                <p style={{color:'black'}}> <em>This website is for education purpose only,</em> <span style={{color:'red', fontSize: '20px'}}><strong>DO NOT</strong></span> <em>fill the forms with youself or anyone else personal information.</em> </p>
                                <p style={{color:'black'}}> <em>Try this website with random information,</em> <span style={{color:'red', fontSize: '20px'}}><strong>Make sure to logout</strong></span>. </p>
                            </MDBRow>
                            <MDBRow >
                            </MDBRow>
                            <MDBRow >
                                <p> Social housing is a valuable but limited resource and demand for it is greater than the number of homes available.  Therefore, to allocate housing tenancies in a fair and transparent way, the Council manages a housing allocation scheme, as it must do by law.</p>
                            </MDBRow>
                            <MDBRow >
                                <p> Social housing includes housing owned by the Council and by registered providers (formally known as housing associations). We allocate to some registered providers through nomination agreements.</p>
                            </MDBRow>
                            <MDBRow >
                                <p> <strong>*** New Housing Allocation Scheme Implemented 18th January 2023! ***</strong></p>
                            </MDBRow>
                            <MDBRow >
                                <p> Bham City Council implemented a new Housing Allocations Policy on 18th January 2023.</p>
                            </MDBRow>
                            <MDBRow >
                                <p> The new policy aims to ensure the housing register is made up only of people with an identified housing need and we want to make sure it is fairer so that those most in need of social housing are prioritised.</p>
                            </MDBRow>
                            <MDBRow >
                                <p> While it is important that we adapt and change our policy to better meet the needs of those living in overcrowded, insecure, or inadequate housing, reducing and preventing homelessness remains of highest importance. The new policy will help to ensure those with the highest need are given the appropriate priority to reflect this.</p>
                            </MDBRow>
                            <MDBRow >
                                <p> The new policy includes changes to the qualification criteria, so that only those with an identified need for housing can join the register, as well as changes in local connection criteria and changes to circumstances in which applications may be given reduced priority due to non-bidding or refusal of a number of suitable properties.</p>
                            </MDBRow>
                            <MDBRow >
                                <p> You dont need to contact us as we will let you know how you are affected when the policy goes live. Individual letters will be sent to everyone on the current register to notify them of their new banding.</p>
                            </MDBRow>
                            <MDBRow >
                                <p> For further information on which applicants will be mostly affected by the new policy please click this link: Allocations Summary</p>
                            </MDBRow>
                            <MDBRow >
                                <p> <strong> Housing advice and information</strong></p>
                            </MDBRow>
                            <MDBRow >
                                <p> For advice and information of your housing options please visit Bham City Council's main website for Housing Advice and Information and advice.  Alternatively, please see our Bham Housing Advice pack.  </p>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>

                    {/* <MDBRow >
                        <MDBCol>
                            <MDBCard>
                                <MDBTypography component={'div'} className='card-header' style={{ fontSize: '13px', backgroundColor: '#dcdcdc' }} ><strong>Advertising dates</strong></MDBTypography>
                                <MDBCardBody>
                                    <p>Social housing</p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard>
                                <MDBTypography component={'div'} className='card-header' style={{ fontSize: '13px', backgroundColor: '#dcdcdc' }} ><strong>Latest News</strong></MDBTypography>
                                <MDBCardBody>
                                    <a href="https://www.birminghamchoice.co.uk/LatestNews/Page#Article_43_Bookmark">Birmingham Choice - new functions</a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard>
                                <MDBTypography component={'div'} className='card-header' style={{ fontSize: '13px', backgroundColor: '#dcdcdc' }} ><strong>Register</strong></MDBTypography>
                                <MDBCardBody>
                                    <p>Apply to join the housing register</p>
                                    <a onClick={gotoRegisterPage}>Click here to register</a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow> */}
                </MDBContainer>
            }
        </React.Fragment>
    )
};
