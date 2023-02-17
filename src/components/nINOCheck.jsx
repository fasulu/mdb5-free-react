import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import {
    MDBIcon,
    MDBCard, MDBCardBody,
    MDBRow, MDBTypography,
    MDBBtn
} from 'mdb-react-ui-kit';

import { validNINO } from '../validations/Validator';

export default function NINOCheck() {

    const ninoCheckUrl = "http://localhost:9001/client/clientnino/"

    const navigate = useNavigate();

    const inputStyle = { width: '250px' };
    const [ninoPrimary, setNINOPrimary] = useState("");

    useEffect(() => {

    }, [])

    const Continue_ = async (e) => {

        e.preventDefault();
        try {

            const validateNino = (validNINO(ninoPrimary));  // validate nino
            console.log(`Primary NINO is ${ninoPrimary} and validator return ${validateNino}`)

            console.log(`${ninoCheckUrl + ninoPrimary} In fetch data`)
            const ninoData = await axios.get(ninoCheckUrl + ninoPrimary, {})
            console.log(ninoData.data.message)
            const result = ninoData.data.message

            // check nino exist and valid nino number entered
            if ((result === "NINO not registerd") && validateNino) {

                navigate('/primary', { state: { nino: ninoPrimary } });

            } else if ((result === "NINO registerd") && validateNino) {

                alert(`National Insurance number already registered. \nPlease login to view your status`);
                navigate('/login');
                
            } else {

                alert(`Please verify your National Insurance Number and try again. \n${ninoPrimary.toUpperCase()}`);
            }

        } catch (error) {
            alert("Unable to proceed on your request")
            console.log(`Unable to proceed on your request:- ${error}`)
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
                                onChange={(e) => { { let newEdit = { ...ninoPrimary }; newEdit = e.target.value; setNINOPrimary(newEdit) } }}></input>
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