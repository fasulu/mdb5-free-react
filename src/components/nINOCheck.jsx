import React, { useState } from 'react';
import {
    MDBIcon,
    MDBCard, MDBCardBody,
    MDBContainer, MDBRow, MDBCol,
    MDBTypography,
    MDBBtn
} from 'mdb-react-ui-kit';

import { ValidNINO } from '../validations/Validator';
import ApplicationProgress from './applicationProgress'

export default function NINOCheck() {

    const inputStyle = { width: '250px' };

    const [ninoPrimary, setNINOPrimary] = useState("");
    const [ninoJoint, setNINOJoint] = useState("");

    const [ninoPrimaryErr, setNINOPrimaryErr] = useState(false);
    const [ninoJointErr, setNINOJointErr] = useState(false);

    const showInConsole = (e) => {

        e.preventDefault();

        setNINOPrimaryErr(ValidNINO(ninoPrimary));
        setNINOJointErr(ValidNINO(ninoJoint));

        console.log(`Primary NINO is ${ninoPrimary} error is ${ninoPrimaryErr}, joint NINO is ${ninoJoint} error is ${ninoJointErr}`)
    }
    return (
        <React.Fragment>
                <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                    {/* <MDBCol className='col-md-6 col-sm-6'> */}
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
                                <p style={{ fontSize: '16px' }}><strong>Joint applicant national insurance number</strong></p>
                                <div className='mb-4' >
                                    <input className='form-control' type='text'
                                        style={inputStyle}
                                        placeholder='example AB123456C'
                                        minLength={9}
                                        maxLength={9}
                                        value={ninoJoint}
                                        onChange={(e) => { setNINOJoint(e.target.value) }}></input>
                                </div>
                                <form className='d-flex input-group w-auto mt-5'>
                                    <MDBBtn className='mx-2'
                                        style={{ fontSize: '18px', width: 'auto', textTransform: 'none' }}
                                        color='primary' onClick={showInConsole}>
                                        Next Page <MDBIcon fas icon='caret-right' />
                                    </MDBBtn>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    {/* </MDBCol> */}
                    {/* <MDBCol className='col-md-6 col-sm-6'>
                        <ApplicationProgress iconStatus={"NinoCheckPage"} ></ApplicationProgress>
                    </MDBCol> */}
                </MDBRow>
        </React.Fragment>
    );
}