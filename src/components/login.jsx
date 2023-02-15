import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { dates, months } from '../resources/datePicker';

import {
    MDBIcon,
    MDBCard, MDBCardBody,
    MDBContainer, MDBRow, MDBCol,
    MDBTypography,
    MDBInputGroup, MDBBtn
} from 'mdb-react-ui-kit';

export default function Login() {

    const navigate = useNavigate();

    const datesData = dates;
    const monthsData = months;
    const ageMax = new Date().getFullYear();        // year picker up to current year
    const ageMin = new Date().getFullYear() - 120;  // year picker 120 year back from current year

    const inputStyle = { fontSize: '14px', width: '270px' };
    const datePickerStyle = { maxWidth: '70px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const monthPickerStyle = { maxWidth: '130px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const yearPickerStyle = { width: '80px', float: 'left', border: '5' };

    const [memorableDate, setMemorableDate] = useState("15/01/2000");
    const [memDate, setMemDate] = useState("");
    const [memMonth, setMemMonth] = useState("");
    const [memYear, setMemYear] = useState("");
    const [password, setPassword] = useState("A!asdfgh");


    const [showGetLoginDetails, setShowGetLoginDetails] = useState(false)
    const [showGetLoginInfo, setShowGetLoginInfo] = useState(true)

    const getLoginDetails = (
        <>
            <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='w-100 mx-auto' >
                <MDBCardBody>
                <MDBTypography style={{fontSize: '18px'}}><strong>Login</strong></MDBTypography>

                    {/**********  Password */}
                    <MDBRow>
                        <MDBCol className='size=md p-2'>
                            <div className='p-2'>
                                <p style={{ fontSize: '17px' }}>Enter your new password</p>
                                <input style={inputStyle} className='form-control' type='password' placeholder='Password...'
                                    minLength={6} maxLength={10} value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                            </div>
                        </MDBCol>
                    </MDBRow>

                    {/**********  Memorable date */}
                    <MDBRow>
                        <MDBCol className='size=md p-2'>
                            <div className='p-2'>
                                <p style={{ fontSize: '16px' }}><strong>Enter your new memorable date*</strong></p>
                                <div className='btn-group'>
                                    <select style={datePickerStyle}
                                        className="form-select rounded"
                                        onChange={(e) => { setMemDate(e.target.value) }} >
                                        {datesData.map((option) => (
                                            <option key={option.dKey} value={option.dKey}>{option.dValue}</option>
                                        ))}
                                    </select>

                                    <select style={monthPickerStyle}
                                        className="form-select rounded"
                                        onChange={(e) => { setMemMonth(e.target.value) }} >
                                        {monthsData.map((option) => (
                                            <option key={option.mKey} value={option.mKey}>{option.mValue}</option>
                                        ))}
                                    </select>

                                    <input className='form-control rounded'
                                        style={yearPickerStyle}
                                        type='number'
                                        min={ageMin}
                                        max={ageMax}
                                        placeholder='year'
                                        onChange={(e) => { setMemYear(e.target.value) }} >
                                    </input>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                    <form className='d-flex w-auto p-2'>
                            <MDBBtn style={{ fontSize: '18px', width: 'auto', textTransform: 'none' }}
                                color='success me-2'
                                onClick={save}>
                                Save
                            </MDBBtn>

                            <MDBBtn style={{ fontSize: '18px', width: 'auto', textTransform: 'none' }}
                                color='warning'
                                onClick={cancelEntry}>
                                Cancel
                            </MDBBtn>
                        </form>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </>
    );

    const getLoginRefInfo = (
        <>
            <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='w-100 mx-auto' >

                <MDBCardBody>
                    <MDBTypography style={{fontSize: '18px'}}><strong>Login</strong></MDBTypography>

                    <MDBTypography style={{fontSize: '17px'}}>Your login reference*</MDBTypography>

                    <MDBInputGroup className='mb-3' >
                        <input className='form-control' type='text' placeholder='login reference' />
                    </MDBInputGroup>
                    <a href="#" className="stretched-link">I have forgotten my login reference</a>

                    <form className='d-flex input-group w-auto mt-5'>
                        <MDBBtn style={{ fontSize: '18px', width: 'auto', textTransform: 'none' }}
                            color='primary' value={showGetLoginDetails}
                            onClick={(e) => { setShowGetLoginDetails(true);setShowGetLoginInfo(false) }}>
                            Continue<MDBIcon fas icon='caret-right' className='mx-2' />
                        </MDBBtn>
                    </form>
                </MDBCardBody>
            </MDBCard>
        </>
    );

    const getPasswordToLogin = () => {

        // navigate('/account');
        // TO DO  :-GET REFERENCE NUMBER AND CHECK IN DATABASE, IF TRUE SHOW GET PASSWORD AND MEMORABLE DETAILS

    }

    function save(e) {

        e.preventDefault();

        setMemorableDate(memMonth + "/" + memDate + "/" + memYear);

        console.log(`Validation result is  pwd ${password}, 
        memorable date ${memorableDate}`)

        console.log('in show in console', memorableDate, password
        )
    }

    function cancelEntry(e) {
        window.location.reload();
    }

    return (
        <React.Fragment>
            {
                showGetLoginInfo  && getLoginRefInfo
            }
            {
                showGetLoginDetails && getLoginDetails
            }
        </React.Fragment >
    );
}