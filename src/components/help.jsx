import React from 'react';

import {
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBTypography
} from 'mdb-react-ui-kit';

export default function Help() {

    const headStyle = { fontSize: '18px', backgroundColor: '#d1ecf1' };
    const textStyle = { fontSize: '16px' };

    return (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto' style={{ backgroundColor: '#f7f2f287' }} >
                <MDBCardBody>
                    <MDBTypography component={'div'} className='border border rounded p-1 text-center'
                        style={headStyle}>
                        How to complete an application form
                    </MDBTypography>
                    <div>
                        <p className='mt-3 mb-2' style={textStyle}>Once you are registered on the system and have a login you will be able to complete an application form (for example a housing register application form).</p>
                        <p className='mt-3 mb-2' style={textStyle}>To complete the application you will first need to be logged in. If you are not already logged in you can do so by clicking on the <strong>Login</strong> button on the top right of the screen and entering your login reference followed by the memorable date you set when you originally registered and then press <strong>Continue</strong>.</p>
                        <p className='mt-3 mb-2' style={textStyle}>Now enter the password you set when you registered (if required) and press <strong>Continue</strong>.</p>
                        <p className='mt-3 mb-2' style={textStyle}>You will now be logged into your <strong>My Account</strong> screen. Click on the <strong>Apply for Social Housing link</strong></p>
                        <p className='mt-3 mb-2' style={textStyle}>Complete the social housing form and on the final page, press <strong>Submit</strong> button</p>
                        <p className='mt-3 mb-2' style={textStyle}>Your application has now been submitted and when it has been approved, you will be able to bid on properties you are eligible for. To view the status of your application, click on <strong>My account</strong> in the top right of the screen and your application status will be displayed.</p>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    );
}