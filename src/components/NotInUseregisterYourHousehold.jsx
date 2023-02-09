import React, { useState } from 'react';
import NINOCheck from '../pages/nINOCheckPage';
import PrimaryApplicant from '../pages/primaryApplicant'
import {
    MDBIcon,
    MDBCard, MDBCardBody,
    MDBContainer, MDBRow, MDBCol,
    MDBTypography,
    MDBInputGroup, MDBBtn
} from 'mdb-react-ui-kit';

import ApplicationProgress from './applicationProgress';

export default function RegisterYourHousehold() {

    const iconRight="fa-solid fa-caret-right";
    const iconUp="fa-solid fa-caret-up";
    const iconDown="fa-solid fa-caret-down";

    const [ninoPage, setNINOPage]=useState(false)

    const [nino, setNINO] = useState();
    const [] = useState();
    const [] = useState();
    const [] = useState();

    return (
        <React.Fragment>
            <MDBContainer  >
                <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                    {/* <MDBCol className='mt-5' size='md'> */}
                    <MDBCol className='col-lg-7 col-md-6 col-sm-6'>
                        <NINOCheck />
                    </MDBCol>
                    {/* <MDBCol className='mt-5' size='md'> */}
                    <MDBCol className='col-lg-5 col-md-6 col-sm-6'>
                        <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='w-100 mx-auto'>
                            <ApplicationProgress iconStatus={ninoCheck}></ApplicationProgress>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer >
        </React.Fragment>
    )
};