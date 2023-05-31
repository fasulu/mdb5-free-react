import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import PopUp from './popUp';

import {
    MDBIcon,
    MDBCard, MDBCardBody,
    MDBRow, MDBTypography,
    MDBBtn
} from 'mdb-react-ui-kit';

import { validNINO } from '../validations/Validator';
import SaveErrDetail from '../utility/saveErrDetail.jsx';

export default function NINOCheck() {

    const ninoCheckUrl = "http://localhost:9001/client/clientnino/"

    const navigate = useNavigate();

    const headStyle = { fontSize: 'clamp(20px, 2.5vw, 25px)' };
    const subHeadStyle = { fontSize: 'clamp(17px, 2.5vw, 20px)' };

    const inputStyle = { width: '250px' };
    const [ninoPrimary, setNINOPrimary] = useState("");

    const [showInfoModal, setShowInfoModal] = useState(false);

    const [modalInfo, setModalInfo] = useState("");

    const Continue_ = async (e) => {

        e.preventDefault();
        const validateNino = (validNINO(ninoPrimary));  // validate nino

        if (!validateNino) {

            setModalInfo("Invalid National Insurance Number")
            setShowInfoModal(true);
            setTimeout(() => {
                navigate('/home');
            }, 5000);

        } else {

            try {

                const ninoData = await axios.get(ninoCheckUrl + ninoPrimary.toLowerCase(), {})
                const result = ninoData.data.message

                // check nino exist and valid nino number entered
                if ((result === "NINO not registerd") && validateNino) {

                    navigate('/primary', { state: { nino: ninoPrimary } });

                } else if ((result === "NINO registerd") && validateNino) {

                    setModalInfo('National Insurance number already registered. Please login to view your status.')
                    setShowInfoModal(true);
                    setTimeout(() => {
                        navigate('/login');
                    }, 10000);

                } else {
                    setModalInfo(`Please verify your National Insurance Number and try again. \n${ninoPrimary.toUpperCase()}`)
                    setShowInfoModal(true);
                    setTimeout(() => {
                        navigate('/nino');
                    }, 5000);
                }

            } catch (error) {

                let result = error.message;
                const errDetails = {
                    error_Location: 'NINO101',
                    error_Detail: result + "\nOops! Something went wrong, please try again later."
                }
                const response = SaveErrDetail(errDetails)
                console.log(response)

                setModalInfo("NINO101: Oops! Something went wrong, please try again later.");
                setShowInfoModal(true);

                setTimeout(() => {
                    navigate('/home');
                }, 3000);
            }
        }
    }

    return (
        <React.Fragment>
            <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                <MDBTypography component={'div'} className='border border-0 border-bottom border-secondary' style={headStyle}><strong>Register your household</strong></MDBTypography>

                <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='' >
                    <MDBCardBody>
                        <p className='lh-3' style={subHeadStyle} ><strong>National Insurance Number Check</strong></p>
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
                                color='primary' onClick={Continue_} >
                                Continue <MDBIcon fas icon='caret-right' />
                            </MDBBtn>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBRow>

            {
                showInfoModal && <PopUp modalInfo={modalInfo} setShowInfoModal={setShowInfoModal}></PopUp>
            }
        </React.Fragment>
    );
}