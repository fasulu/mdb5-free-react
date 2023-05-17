import React from 'react';

import {
    MDBCard, MDBCardBody,
    MDBTypography
} from 'mdb-react-ui-kit';

export default function Repair() {

    const headStyle = { fontSize: '25px', textStyle: 'bolder' };
    const headStyle1 = { fontSize: '18px', backgroundColor: '#d1ecf1' };
    const headStyle2 = { fontSize: '16px', fontWeight: 'bold', color: '#970339', backgroundColor: '#ffc1c7' };

    const textStyle = { fontSize: '16px' };
    const pTagStyle = { margin: 0, padding: 0 };
    return (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto'  >
                <MDBCardBody>
                    <MDBTypography component={'div'} className='border border-0 border-bottom border-secondary text-left'
                        style={headStyle}>
                        <strong>Guide to registering for housing</strong>
                    </MDBTypography>
                    <div >
                        <p style={textStyle}>In order to start the application for housing process you must first complete an online application form. &nbsp;This is will involve registering on the Birmingham Choice site.&nbsp; Once registered, you will log into your account for any actions required on your housing application.&nbsp; These will include;</p>
                        <ul>
                            <li> <p style={textStyle}>Applying for housing</p></li>
                            <li> <p style={textStyle}>Making changes to your housing application, household or contact information</p></li>
                            <li> <p style={textStyle}>Uploading documents required to support your application</p></li>
                            <li> <p style={textStyle}>Bidding for properties</p></li>
                        </ul>
                        <p>&nbsp;</p>
                        <p style={textStyle}>If you require information on applying for housing, please follow this follow this link to the user guide - <a href="/help"><strong><u>Guide to Registration</u></strong></a></p>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    );
}