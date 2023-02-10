import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import {
    MDBIcon, MDBBtn,
    MDBCard, MDBCardBody, MDBContainer
} from 'mdb-react-ui-kit';

const ApplicationProgress = (props) => {

    const navigate = useNavigate();

    const gotoAccountPage = () => {
        navigate('/account');
    }

    const styleBtn = { fontSize: '15px', borderTop: '1px solid #d7cdcd', borderBottom: '1px solid #d7cdcd', textTransform: 'none' };
    const styleBorder = { color: '#4f83c3', borderTop: '1px solid #d7cdcd', borderBottom: '1px solid #d7cdcd' };

    const styleSelected = { marginRight: '5px', color: '#4f83c3' };
    const styleUnSelected = { marginRight: '5px', color: '#4f4f4f' };
    const styleSelectedIconColor = { color: '#4f83c3' };
    const styleUnSelectedIconColor = { color: '#4f4f4f' };

    const iconRight = "fa-solid fa-caret-right";
    const iconDown = "fa-solid fa-caret-down";

    const iconStatus = props.iconStatus;

    return (
        <React.Fragment>
            <MDBContainer className='pe-5 pt-3' >

                {
                    iconStatus === "NinoCheckPage" &&

                    <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='w-100 mx-auto'>
                        <MDBCardBody>
                            <ul className="list-group list-group-flush" >
                                <li className="list-group-item list-group-item-primary" ><strong>Application progress</strong></li>
                                <li className="list-group-item" style={styleSelectedIconColor}><MDBIcon style={styleSelected} fas icon={iconRight} /> National insurance number check</li>
                                <li className="list-group-item" style={styleUnSelectedIconColor}><MDBIcon style={styleUnSelected} fas icon={iconDown} />  Household Registration</li>
                                <li className="list-group-item" style={styleUnSelectedIconColor}><MDBIcon style={styleUnSelected} fas icon={iconDown} />  Joint Applicant</li>
                                <li className="list-group-item" style={styleUnSelectedIconColor}><MDBIcon style={styleUnSelected} fas icon={iconDown} />  Household Members</li>
                                <MDBBtn className='btn btn-md ' style={styleBtn} color='tertiary' onClick={gotoAccountPage} ><strong> My Account </strong></MDBBtn>
                            </ul>
                        </MDBCardBody>
                    </MDBCard>
                }
                {
                    iconStatus === "PrimaryApplicant" &&

                    <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='w-100 mx-auto'>
                        <MDBCardBody>
                            <ul className="list-group list-group-flush" >
                                <li className="list-group-item list-group-item-primary" ><strong>Application progress</strong></li>
                                <li className="list-group-item" style={styleUnSelectedIconColor}><MDBIcon style={styleUnSelected} fas icon={iconDown} /> National insurance number check</li>
                                <li className="list-group-item" style={styleSelectedIconColor}><MDBIcon style={styleSelected} fas icon={iconRight} />  Household Registration</li>
                                <li className="list-group-item" style={styleUnSelectedIconColor}><MDBIcon style={styleUnSelected} fas icon={iconDown} />  Joint Applicant</li>
                                <li className="list-group-item" style={styleUnSelectedIconColor}><MDBIcon style={styleUnSelected} fas icon={iconDown} />  Household Members</li>
                                <MDBBtn className='btn btn-md ' style={styleBtn} color='tertiary' onClick={gotoAccountPage} ><strong> My Account </strong></MDBBtn>
                            </ul>
                        </MDBCardBody>
                    </MDBCard>
                }
                {
                    iconStatus === "JointApplicant" &&

                    <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='w-100 mx-auto'>
                        <MDBCardBody>
                            <ul className="list-group list-group-flush" >
                                <li className="list-group-item list-group-item-primary" ><strong>Application progress</strong></li>
                                <li className="list-group-item" style={styleUnSelectedIconColor}><MDBIcon style={styleUnSelected} fas icon={iconDown} /> National insurance number check</li>
                                <li className="list-group-item" style={styleUnSelectedIconColor}><MDBIcon style={styleUnSelected} fas icon={iconDown} />  Household Registration</li>
                                <li className="list-group-item" style={styleSelectedIconColor}><MDBIcon style={styleSelected} fas icon={iconRight} />  Joint Applicant</li>
                                <li className="list-group-item" style={styleUnSelectedIconColor}><MDBIcon style={styleUnSelected} fas icon={iconDown} />  Household Members</li>
                                <MDBBtn className='btn btn-md ' style={styleBtn} color='tertiary' onClick={gotoAccountPage} ><strong> My Account </strong></MDBBtn>
                            </ul>
                        </MDBCardBody>
                    </MDBCard>
                }
                {
                    iconStatus === "HouseholdMember" &&

                    <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='w-100 mx-auto'>
                        <MDBCardBody>
                            <ul className="list-group list-group-flush" >
                                <li className="list-group-item list-group-item-primary" ><strong>Application progress</strong></li>
                                <li className="list-group-item" style={styleUnSelectedIconColor}><MDBIcon style={styleUnSelected} fas icon={iconDown} /> National insurance number check</li>
                                <li className="list-group-item" style={styleUnSelectedIconColor}><MDBIcon style={styleUnSelected} fas icon={iconDown} />  Household Registration</li>
                                <li className="list-group-item" style={styleUnSelectedIconColor}><MDBIcon style={styleUnSelected} fas icon={iconDown} />  Joint Applicant</li>
                                <li className="list-group-item" style={styleSelectedIconColor}><MDBIcon style={styleSelected} fas icon={iconRight} />  Household Members</li>
                                <MDBBtn className='btn btn-md ' style={styleBtn} color='tertiary' onClick={gotoAccountPage} ><strong> My Account </strong></MDBBtn>
                            </ul>
                        </MDBCardBody>
                    </MDBCard>
                }

            </MDBContainer>
        </React.Fragment>
    )
};

export default ApplicationProgress;