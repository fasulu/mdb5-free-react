import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../userContext/UserContext"


import {
    MDBIcon,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

const AccountRight = () => {

    const { clientId, setClientId } = useContext(UserContext);

    const location = useLocation();
    const navigate = useNavigate();

    const primaryApplicantIDCheckUrl = "http://localhost:9001/joint/clientid/"

    // let primaryApplicant = location.state.nino;
    // var primaryApplicantID = location.state.clientid;
    // var primaryApplicantName = location.state.clientfname + " " + location.state.clientsname;
    // let primaryApplicantSName = location.state.clientsname;
    // var jointApplicant = location.state.jointName;
    // setClientName(primaryApplicantName);
    // setJointName(jointApplicant);

    console.log(clientId);

    const styleBtn = { fontSize: '13px', color: '#4f83c3', textTransform: 'none' };

    const styleBorder = { color: '#4f83c3', borderTop: '1px solid #d7cdcd', borderBottom: '1px solid #d7cdcd' };

    const iconRight = "fa-solid fa-caret-right";

    const gotoUpdateContactPage = () => {
        navigate('/updatecontact');
    }

    const gotoUpdateLoginPage = () => {
        navigate('/updatelogin');
    }

    const gotoJointApplicant = async () => {
        // navigate('/jointapplicantedit');

        try {

            console.log(`${primaryApplicantIDCheckUrl + clientId} In fetch data`)

            const clientIdExist = await axios.get(primaryApplicantIDCheckUrl + clientId, {})

            // const clientId = clientIdExist.data.clientId

            console.log(`${clientIdExist.data.message}, ${clientId}`)

            if (clientIdExist.data.clientId) {

                navigate('/jointapplicantedit',
                    {
                        state:
                        {
                            // primaryID: clientId
                        }
                    });
            } else {
                navigate('/jointapplicant',
                    {
                        state:
                        {
                            // primaryID: clientId
                        }
                    });

            }
        } catch (error) {

        }
    }

    const gotoAccount = () => {
        navigate('/account', {});

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
                            <p style={{ color: 'black' }} ><strong>{clientId}</strong></p>
                            <p style={{ color: 'black' }} ><strong>Client Name </strong></p>
                        </div >
                    </MDBRow>
                    <MDBRow >
                        <MDBCol>
                            <MDBBtn className='btn btn-lg' style={styleBtn} color='tertiary'
                                onClick={gotoAccount}> My Account </MDBBtn>
                        </MDBCol>
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
                                onClick={gotoMembersList} > My Members </MDBBtn>
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