import React from 'react';

import {
    MDBCard, MDBCardBody,
    MDBTypography,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

export default function KeyFacts() {

    const headStyle = { fontSize: '25px', textStyle: 'bolder' };
    const textStyle = { fontSize: '16px' };
    const pTagStyle = { fontSize: '16px', margin: 0, padding: 0 };
    return (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto'  >
                <MDBCardBody>
                    <MDBTypography component={'div'} className='border border-0 border-bottom border-secondary text-left'
                        style={headStyle}>
                        <strong>Key Facts</strong>
                    </MDBTypography>
                    <div>
                        <p className='mt-3 mb-2' style={textStyle}><strong>Facts about Council Housing in Birmingham</strong></p>

                        <img className='mt-3 mb-3 img-fluid hover-shadow' width="189" height="45" alt="Key facts"
                            style={{ height: 'auto', width: 'auto' }}
                            src="https://www.birminghamchoice.co.uk/Data/Pub/PublicWebsite/ImageLibrary/Property%20size%20stats%20-%20Jan%202023.png" />

                        <ul >
                            <li>The city council has approximately 59,000 properties, and this is decreasing each year – in 1981 the council had over 123,000 properties.</li>
                            <li>There are currently over 20000 households on the housing register.</li>
                            <li>The council let only 3279 properties to customers in between 1 January and 31 December 2022, and this is decreasing each year.</li>
                            <li>Even if no new applicants applied, it would take many years to clear the current housing register.</li>
                            <li>8% of our properties are designated for older people – aged 55 and over (sheltered properties).</li>
                            <li>The Council has over 4,400 households living in Temporary Accommodation (TA).</li>
                        </ul>

                        <div style={{ borderRadius: '5px', backgroundColor: '#d1ecf1', padding: "15px" }}>
                            <p style={{ fontSize: '18px', textStyle: 'bolder' }}><strong>LARGER ACCOMMODATION IS VERY SCARCE</strong></p>
                            <p style={pTagStyle}>• There were only 61 properties with 4 bedrooms let between 1 January and 31 December 2022.</p>
                            <p style={pTagStyle}>• In the last 12 months the council and partners only let 3 properties that had 5 bedrooms but have 698 households on the housing register for this sized property.</p>
                            <p style={pTagStyle}>• The Councils TOTAL stock of 6 bedroom or larger properties anywhere in the city is 13. This equates 0.02% of stock.</p>
                        </div>

                        <ul className='mt-3'>
                            <li style={textStyle}>Between 1 January and 31 December 2022, the council let 0 properties that had 6 bedrooms or larger but have 117 households on the housing register for this sized property.</li>
                        </ul>

                        <div style={{ borderRadius: '5px', backgroundColor: '#d1ecf1', padding: "15px" }}>
                            <p style={{ fontSize: '18px', textStyle: 'bolder' }}><strong>BE REALISTIC ABOUT YOUR CHANCES OF SECURING A COUNCIL PROPERTY</strong></p>
                            <p style={pTagStyle}>• Large families – even in Band A will wait several years to secure a council house.</p>
                            <p style={pTagStyle}>• All council properties are in great demand however houses are in greater demand than flats and in some areas the average applicant will wait over 20 years  to secure a property.</p>
                        </div>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    );
}