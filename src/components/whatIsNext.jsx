import React from 'react';
import { useLocation } from 'react-router-dom';

import {
    MDBCard, MDBCardBody,
    MDBTypography
} from 'mdb-react-ui-kit';

export default function WhatIsNext() {

    const location = useLocation()

    const headStyle = { fontSize: '25px' };
    const textStyle = { fontSize: '16px' };

    // console.log(currentPage)

    return (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto' style={{ backgroundColor: '#f7f2f287' }} >
                <MDBCardBody>
                    <MDBTypography component={'div'} className='border border-0 border-bottom border-secondary text-left'
                        style={headStyle}>
                        <strong>What happens next</strong>
                    </MDBTypography>
                    <div id="Whatisnext">
                        <div style={textStyle}>
                            <p>Once you have submitted your application this will be assessed by an officer from the&nbsp;application team.</p>

                            <p>You will not need to provide any documents, unless we ask you to. This is because we aim to verify application information by checking a range of council records.</p>

                            <p>If we do need any further information we will email you and let you know.</p>

                            <p>Depending upon your circumstances, additional information which may be requested includes:</p>

                            <ul>
                                <li>Local connection to Birmingham, for example employment or training.</li>
                                <li>Service in His Majesty's Armed Forces.</li>
                                <li>Child arrangement orders.</li>
                                <li>Proof of income (e.g. &nbsp;last 3 months pay slips and P60)</li>
                                <li>Property valuations and mortgage statements.</li>
                                <li>A statement or letter from a mortgage company.</li>
                                <li>If you own your home outright provide an office copy from the Land Registry Title.</li>
                                <li>Professional confirmation (e.g. doctor or consultant letter) of a diagnosed medical condition or disability being made substantially worse by their current housing.</li>
                            </ul>

                            <p>Once your application has been assessed against the new scheme's criteria, we will email you and let you know the decision.&nbsp;</p>

                            <p>If you are offered a property, the landlord will ask you to provide identification and&nbsp;verify your circumstances.</p>

                            <p>The documents you will be asked to provide vary, but it is likely to include the following:&nbsp;</p>

                            <ul>
                                <li>Proof of identity for the main and joint applicant and all household members (e.g. passports, birth certificates)</li>
                                <li>Proof of National Insurance number (e.g. tax letters, wage slips, P45/60)</li>
                                <li>Proof of current address for&nbsp;the&nbsp;main and&nbsp;joint applicant and all household members&nbsp;(e.g. recent utility bill)</li>
                                <li>Proof of pregnancy (if applicable)</li>
                                <li>Evidence of your right to reside in the UK if you are not a British Citizen (e.g. passport &amp; other relevant Home Office documentation)&nbsp;</li>
                                <li>Proof of your settled status if you are an EEA national</li>
                                <li>Proof of all income (e.g. pay slips, private/work pension details, benefit entitlement letters)</li>
                                <li>Proof of money in your current account and savings (e.g. up to date bank/building society passbooks/statements/letters, premium bonds, national savings and share certificates).</li>
                            </ul>
                        </div>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    );
}