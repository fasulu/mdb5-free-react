import React, { useState } from 'react';

import {
    MDBContainer, MDBRow, MDBCol
} from 'mdb-react-ui-kit';

import ApplicationProgress from '../components/applicationProgress'
import HouseholdMember from '../components/householdMember';

export default function HouseholdMemberPage() {

    const householdMember ="HouseholdMember"

    const showInConsole = (e) => {

    }
    return (
        <React.Fragment>
            <MDBContainer  >
                <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                    <MDBCol className='col-lg-8 col-md-8 col-sm-6'>
                        <HouseholdMember></HouseholdMember>
                    </MDBCol>

                    <MDBCol className='col-lg-4 col-md-4 col-sm-0'>
                    <ApplicationProgress iconStatus={householdMember} ></ApplicationProgress>
                    </MDBCol>
                </MDBRow>
            </MDBContainer >

        </React.Fragment>
    );
}