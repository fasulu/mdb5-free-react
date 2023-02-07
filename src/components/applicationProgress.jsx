import React, { useState } from 'react';

import {
    MDBIcon,
    MDBCard, MDBCardBody
} from 'mdb-react-ui-kit';

const ApplicationProgress = (props) => {

    const styleSelected = {marginRight: '5px', color: '#4f83c3'};
    const styleUnSelected = {marginRight: '5px', color: '#4f4f4f'};
    const styleSelectedIconColor = {color: '#4f83c3'};
    const styleUnSelectedIconColor = {color: '#4f4f4f'};

    const iconRight = "fa-solid fa-caret-right";
    const iconDown = "fa-solid fa-caret-down";

    const iconStatus = props.iconStatus;

    return (
            <React.Fragment>
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

                            </ul>
                        </MDBCardBody>
                    </MDBCard>
                }

            </React.Fragment>
        )
};

export default ApplicationProgress;