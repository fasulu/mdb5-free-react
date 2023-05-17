import React from 'react';

import {
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBTypography
} from 'mdb-react-ui-kit';

export default function Priority() {

    const headStyle = { fontSize: '18px', backgroundColor: '#d1ecf1' };
    const headStyle1 = { fontSize: '25px' };
    const textStyle = { fontSize: '16px' };

    return (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto' style={{ backgroundColor: '#f7f2f287' }} >
                <MDBCardBody>
                <MDBTypography component={'div'} className='border border-0 border-bottom border-secondary text-left'
                        style={headStyle1}>
                        <strong>Priority</strong>
                    </MDBTypography>
                    <MDBTypography component={'div'} className='border border rounded  p-1 text-left'
                        style={headStyle}>
                        Prioritising Applications
                    </MDBTypography>
                    <div>
                        <p className='mt-3 mb-2' style={textStyle}>New application forms&nbsp;submitted will be assessed in date order of receipt; from the earliest received first.</p>
                        <p className='mt-3 mb-2' style={textStyle}>All housing applications will be assessed and if accepted, placed in one of four bands.</p>
                        <p>&nbsp;</p>
                        <MDBTypography component={'div'} className='border border rounded  p-1 text-left'
                            style={headStyle}>
                            Band A: Reasonable Preference plus additional preference (very urgent need)
                        </MDBTypography>
                        <p className='mt-3 mb-2' style={textStyle}>People who have a reasonable preference and are granted additional preference (very urgent need to move).&nbsp; All applications in this band will be reviewed after six months.</p>
                        <p>&nbsp;</p> 
                        <MDBTypography component={'div'} className='border border rounded  p-1 text-left'
                            style={headStyle}>
                            Band B: Reasonable Preference categories - Urgent Housing Need
                        </MDBTypography>
                        <p className='mt-3 mb-2' style={textStyle}>People who need to move and fall within one of the reasonable preference categories.  All applications in this band will be reviewed after annually.</p>
                        <p>&nbsp;</p>
                        <MDBTypography component={'div'} className='border border rounded  p-1 text-left'
                            style={headStyle}>
                            Band C: Reasonable Preference categories - Urgent Housing Need
                        </MDBTypography>
                        <p className='mt-3 mb-2' style={textStyle}>Households one bedroom overcrowded and certain homeless households (those with a reasonable preference but who do not qualify for a Band B award).  All applications in this band will be reviewed annually.</p>
                        <p>&nbsp;</p>
                        <MDBTypography component={'div'} className='border border rounded  p-1 text-left'
                            style={headStyle}>
                            Band D: Number of refusals on reasonable offers of accommodation has been reached
                        </MDBTypography>
                        <p className='mt-3 mb-2' style={textStyle}>Want to move – no reasonable preference but qualify for other specified reasons.</p>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    );
}