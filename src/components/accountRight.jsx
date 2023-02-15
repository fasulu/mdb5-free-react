import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import {
    MDBIcon,
    MDBBtn,
    MDBContainer, MDBCard, MDBCardBody,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

const AccountRight = (props) => {
    
    const navigate = useNavigate();

    const styleBtn = { fontSize: '13px', color: '#4f83c3', textTransform: 'none' };

    const styleBorder = { color: '#4f83c3', borderTop: '1px solid #d7cdcd', borderBottom: '1px solid #d7cdcd' };

    const iconRight = "fa-solid fa-caret-right";

    const iconStatus = props.iconStatus;

    const gotoUpdateContactPage = () => {
        navigate('/updatecontact');
    }    

    const gotoUpdateLoginPage = () => {
        navigate('/updatelogin');
    }    

    const gotoJointApplicant = () => {
        navigate('/jointapplicantedit');
    }    
    
        const gotoMembersList = () => {
            navigate('/memberlist');
        }    
    
        const logout = () => {
            navigate('/login');
        }    
    
    return (
        <React.Fragment>
            {
                <MDBContainer className='pe-5 pt-3' >
                    <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                        <div style={{ backgroundColor: '#b0cce3' }} className="list-group-item list-group-item-primary">
                            <p style={{ color: 'black' }} ><strong>Primary Name/Surname</strong></p>
                            <p style={{ color: 'black' }} ><strong>Joint Name/Surname</strong></p>
                        </div >
                    </MDBRow>
                    <MDBRow >
                        <MDBCol>
                            <MDBBtn className='btn btn-lg' style={styleBtn} color='tertiary' > My Messages </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow >
                        <MDBCol>
                            <MDBBtn style={styleBtn} color='tertiary' > My bids </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow >
                        <MDBCol>
                            <MDBBtn style={styleBtn} color='tertiary' 
                            onClick={gotoJointApplicant} > My Partner </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow >
                        <MDBCol>
                            <MDBBtn style={styleBtn} color='tertiary'
                            onClick={gotoMembersList} > My Household Members </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow >
                        <MDBCol style={styleBorder}>
                            <MDBBtn style={styleBtn} color='tertiary'
                            onClick={logout}  > 
                            <MDBIcon style={styleBtn} fas icon={iconRight} /> Logout </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow >
                        <p><strong>My contact details</strong></p>
                        <p style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'none' }} >Address</p>
                        <p style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'none' }} >Contact details</p>
                    </MDBRow>
                    <MDBRow >
                        <MDBCol>
                            <MDBBtn style={styleBtn} color='tertiary'
                            onClick={gotoUpdateContactPage}>
                                 Update contact details 
                                 </MDBBtn>
                        </MDBCol>
                        <MDBCol>
                            <MDBBtn style={styleBtn} color='tertiary'
                            onClick={gotoUpdateLoginPage}> 
                            Update your login details 
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow style={{ backgroundColor: '#f7f2f287', textTransform: 'none' }} 
                    className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                        
                    </MDBRow>
                </MDBContainer>
            }
        </React.Fragment>
    )
};

export default AccountRight;