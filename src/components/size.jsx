import React from 'react';

import {
    MDBCard, MDBCardBody,
    MDBTypography,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

export default function Size() {

    const headStyle = { fontSize: '25px', textStyle: 'bolder' };
    const textStyle = { fontSize: '16px' };
    const pTagStyle = {margin:0, padding:0};
    return (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto'  >
                <MDBCardBody>
                    <MDBTypography className='border border-0 border-bottom border-secondary text-left'
                        style={headStyle}>
                        <strong>The size of properties</strong>
                    </MDBTypography>
                    <div>
                        <p className='mt-3 mb-2' style={textStyle}>The following housing need band awards are applied for overcrowding:</p>

                        <p>&nbsp;</p>

                        <img style={{ height: 'auto', width: 'auto' }}
                            src="https://www.birminghamchoice.co.uk/Data/Pub/PublicWebsite/ImageLibrary/Housing%20Need%20Bands%20A%20B%20C.png" width="189" height="45" alt="Scheme logo"
                            className='img-fluid hover-shadow' />

                        <p className='mt-3 mb-2'>For example:<br></br> Mr and Mrs (B) have 1 son (X) aged 21, 1 daughter (Y) aged 11.<br></br>They live in a 1-bedroom property.</p>

                        <p>&nbsp;</p>
                        <MDBRow>
                            <MDBCol >
                                <img style={{ height: 'auto', width: 'auto' }}
                                    src="https://www.birminghamchoice.co.uk/Data/Pub/PublicWebsite/ImageLibrary/Bedroom%20size%20calculation.png"
                                    className='img-fluid hover-shadow'
                                />
                            </MDBCol>
                        </MDBRow>

                        <p className='mt-3 mb-2' style={textStyle}>The eligible number of bedrooms = 3 bedroom properties.<br></br>As they are 2 bedrooms short, a band B is awarded for overcrowding.</p>

                        <p className='mt-3 mb-2' style={textStyle}>The number of bedrooms that applicants need will be dependent upon the size of the applicant’s household.</p>

                        <p className='mt-3 mb-2' style={textStyle}>For the purposes of allocating a home the Council will use the bedroom standard.</p>

                        <p style={pTagStyle}>  <u>The bedroom standard states that a separate bedroom shall be required for following persons:</u></p>

                        <p style={pTagStyle}>a. Two persons living together with another as husband and wife (whether that other person is of the same sex or the opposite sex)</p>
                        <p style={pTagStyle}> b. A person aged 21 years or more</p>
                        <p style={pTagStyle}> c. Two persons of the same sex aged 10 years to 20 years</p>
                        <p style={pTagStyle}> d. Two persons (whether of the same sex or not) aged less than 10 years</p>
                        <p style={pTagStyle}> e. Two persons of the same sex where one person is aged between 10 years and 20 years and the other is aged less than 10 years</p>
                        <p style={pTagStyle}> f. &nbsp;Any person aged under 21 years in any case where he or she cannot be paired with another occupier of the dwelling so as to fall within (c), (d) or (e) above.</p>

                        <p className='mt-3 mb-2' style={textStyle}>There may be exceptions to this.</p>

                        <p className='mt-3 mb-2' style={textStyle}>Examples are:</p>

                        <p style={pTagStyle}>• Applicants require larger accommodation on health grounds following an assessment by the Council</p>
                        <p style={pTagStyle}>• Applicants have been approved as a foster carer/adopter and require larger accommodation than would normally be required</p>
                        <p style={pTagStyle}>• Applicants who need the support of a carer who will be required to sleep in the property and cannot reasonably be expected to share a bedroom with other members of the household.</p>
                        
                        <p style={pTagStyle}> Applicants with an already “active” application will be able to bid and be considered for an allocation whilst the application is reassessed.</p>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    );
}