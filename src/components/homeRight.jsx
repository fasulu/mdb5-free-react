import React, { useState } from 'react';

import {
    MDBIcon,
    MDBBtn,
    MDBContainer, MDBCard, MDBCardBody,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

export default function HomeRight() {

    const styleBtn = { fontSize: '13px', color: '#4f83c3', textTransform: 'none' };

    const styleBorder = { color: '#4f83c3', borderTop: '1px solid #d7cdcd', borderBottom: '1px solid #d7cdcd' };

    const iconRight = "fa-solid fa-caret-right";

    const image1 = 'https://omghcontent.affino.com/AcuCustom/Sitename/DAM/095/TOWER-BLOCKS-MIN.jpg'
    const image2 = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/5F75/production/_97473442_homes228.jpg.webp'
    const image3 = 'https://www.pbctoday.co.uk/news/wp-content/uploads/2020/04/dreamstime_xxl_25437718-1.jpg'

    return (
        <React.Fragment>
            {
                <MDBContainer className='mt-5'  >
                    <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                    <img src={image1} className='img-fluid rounded shadow-4' alt='...' />
                    </MDBRow>

                    <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                    <img src={image2} className='img-fluid rounded shadow-4' alt='...' />
                    </MDBRow>

                    <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                    <img src={image3} className='img-fluid rounded shadow-4' alt='...' />
                    </MDBRow>

                </MDBContainer>
            }

        </React.Fragment>
    )
};