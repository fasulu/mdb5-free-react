import React from 'react';

import {
    MDBCard, MDBCardBody,
    MDBTypography
} from 'mdb-react-ui-kit';

export default function ShortListing() {

    const headStyle = { fontSize: '25px', textStyle: 'bolder' };
    const headStyle1 = { fontSize: '18px', backgroundColor: '#d1ecf1' };
    const headStyle2 = { fontSize: '16px', fontWeight:'bold', color:'#970339', backgroundColor: '#ffc1c7' };

    const textStyle = { fontSize: '16px' };
    const pTagStyle = { margin: 0, padding: 0 };
    return (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto'  >
                <MDBCardBody>
                    <MDBTypography component={'div'} className='border border-0 border-bottom border-secondary text-left'
                        style={headStyle}>
                        <strong>Shortlisting and offers</strong>
                    </MDBTypography>

                    <div>
                        <MDBTypography component={'div'} className='border border rounded  p-1 text-left'
                            style={headStyle1}>
                            Shortlisting property adverts
                        </MDBTypography>
                        <p className='mt-3 mb-2' style={textStyle}>After bidding cycles close, a shortlist of applicants who have bid for each property will be completed.</p>
                        <p className='mt-3 mb-2' style={textStyle}>In normal circumstances, the shortlist will identify the order of applicants based on who is in the highest band with the earliest award and/or registration date. Adverts will specify any additional criteria; applicants who do not meet these will not be short-listed.</p>
                        <p className='mt-3 mb-2' style={textStyle}>The top bidder (in bid position 1) will be notified of a provisional offer and invited to attend the viewing of the property.</p>
                        <p className='mt-3 mb-2' style={textStyle}>Whilst the offer is under consideration, no further bids/offers will be made and applicants will not be shortlisted for other available properties. If an applicant is top for more than one property they have bid for, we will endeavour to contact them by telephone to confirm their preference. We do however retain the right to make an offer on any of the properties the applicant has expressed an interest in, even when we have been unable to contact the tenant.</p>
                    </div>
                    <p>&nbsp;</p>
                    <div>
                        <MDBTypography component={'div'} className='border border rounded  p-1 text-left'
                            style={headStyle1}>
                            Documentation
                        </MDBTypography>
                        <p className='mt-3 mb-2'>When you view the property, you will need to bring the following documents with you:</p>

                        <ul>
                            <li>Proof of National Insurance number, for example benefit books/letters, tax letters, wage slips, P45/60, National Insurance number card</li>
                            <li>Proof of identity, for example birth or marriage certificate, driving licence, medical card, passport, recent gas or electricity bill</li>
                            <li>Proof of all your dependents, for example child benefit book, bank statement showing child benefit payments, birth certificate</li>
                            <li>Proof of all your non-dependents, for example wage slips, letter from employer, benefit book</li>
                            <li>Proof of your income and your partner’s income from earnings, for example two monthly, five weekly or three fortnightly wage slips, letter from employer</li>
                            <li>Proof of income from benefits, for example benefits book/letter, bank statements showing payments</li>
                            <li>Proof of all other income, for example private/work pension details, maintenance</li>
                            <li>Proof of money in your current account and savings, for example up to date bank/building society passbooks/statements/letters, premium bonds, national savings and share certificates.</li>
                        </ul>

                        <p className='mt-3 mb-2'>These must be the original documents, photocopies will not be accepted. </p>
                    </div>
                    <p>&nbsp;</p>
                        <MDBTypography component={'div'} className='border border rounded  p-1 text-left'
                            style={headStyle2}>
                            Without this information the appointment will be cancelled and you may lose this offer of accommodation.
                        </MDBTypography>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    );
}