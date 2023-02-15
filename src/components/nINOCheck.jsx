import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    MDBIcon,
    MDBCard, MDBCardBody,
    MDBRow, MDBTypography,
    MDBBtn
} from 'mdb-react-ui-kit';

import { ValidNINO } from '../validations/Validator';

export default function NINOCheck() {

    const navigate = useNavigate();

    const inputStyle = { width: '250px' };
    const [ninoPrimary, setNINOPrimary] = useState("");

    const Continue_ = (e) => {

        e.preventDefault();
        const validateNino = (ValidNINO(ninoPrimary));  // validate nino
        console.log(`Primary NINO is ${ninoPrimary} and validator return ${validateNino}`)

        if(validateNino) {

            navigate('/primary', { state: { nino: ninoPrimary } });
        }
    }
    return (
        <React.Fragment>
            <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                <MDBTypography style={{ fontSize: '17px' }}><strong>Register your household</strong></MDBTypography>

                <MDBTypography style={{ fontSize: '16px', lineHeight: '1.5px' }}>National insurance number check</MDBTypography>
                <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='' >
                    <MDBCardBody>
                        <p className='lh-2' ><strong>National Insurance Check</strong></p>
                        <p className='lh-2' >To begin, please enter the National Insurance number of the primary applicant, and if applicable, the joint applicant.</p>
                        <p className='1h-2' >A National Insurance Number is made up of two letters, six numbers and a final letter, which is always A, B, C, or D. You can find it on any official papers you may have at home. Look on any of the following; an end of year statement of tax and NICs paid (P60), payslip (recent or old), official correspondence, annual tax return, sub-contractor's tax certificate (CIS6) or employer's wage records</p>

                        <p style={{ fontSize: '16px' }}><strong>Primary applicant national insurance number *</strong></p>
                        <div className='mb-4' >
                            <input className='form-control' type='text'
                                style={inputStyle}
                                placeholder='example AB123456C'
                                minLength={9}
                                maxLength={9}
                                value={ninoPrimary}
                                onChange={(e) => { setNINOPrimary(e.target.value) }}></input>
                        </div>

                        <form className='d-flex input-group w-auto mt-5'>
                            <MDBBtn className='mx-2'
                                style={{ fontSize: '18px', width: 'auto', textTransform: 'none' }}
                                color='primary' onClick={Continue_}>
                                Continue <MDBIcon fas icon='caret-right' />
                            </MDBBtn>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBRow>
        </React.Fragment>
    );
}