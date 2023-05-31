import React from 'react';

import {
    MDBCard, MDBCardBody,
    MDBTypography,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

export default function AnyChange() {

    const headStyle = { fontSize: 'clamp(17px, 2.5vw, 22px)', borderBottom: '2px solid #d7cdcd' };
    const textStyle = { fontSize: '16px' };
    const pTagStyle = {margin:0, padding:0};
    return (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto'  >
                <MDBCardBody>
                    <MDBTypography component={'div'} className='border border-0 border-bottom border-secondary text-left'
                        style={headStyle}>
                        <strong>Change of Circumstances</strong>
                    </MDBTypography>
                    <div>
                        <p className='mt-3 mb-2' style={textStyle}>If you are already registered and your application is active but you need to tell us about a change in circumstances, you need to log in to your online account and update your application form with the changes. This will ensure that your application is up to date and that you can bid for suitable properties which meet your needs and have been awarded the right level of priority.</p>
                        <p className='mt-3 mb-2' style={textStyle}>It is the responsibility of the applicant to notify the Council immediately of any change in their circumstances by logging in to your account and “editing your social housing application”.</p>

                        <p className='mt-3 mb-2' style={textStyle}>This will include, for example:</p>

                        <p style={pTagStyle}>• Applicants require larger accommodation on health grounds following an assessment by the Council</p>
                        <p style={pTagStyle}>• Applicants have been approved as a foster carer/adopter and require larger accommodation than would normally be required</p>
                        <p style={pTagStyle}>• Applicants who need the support of a carer who will be required to sleep in the property and cannot reasonably be expected to share a bedroom with other members of the household.</p>
                        <p style={pTagStyle}>• Applicants who need the support of a carer who will be required to sleep in the property and cannot reasonably be expected to share a bedroom with other members of the household.</p>
                        
                        <p>&nbsp;</p>              
                        <p style={pTagStyle}> Applicants with an already “active” application will be able to bid and be considered for an allocation whilst the application is reassessed.</p>

                    </div>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    );
}