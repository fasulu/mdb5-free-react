import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { dates, months } from '../resources/datePicker';
import { validPwd, validEmail, emailMatch, pwdMatch, memDateMatch } from '../validations/Validator.jsx';


import {
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBRow, MDBCol,
    MDBTypography,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function UpdateLogin() {

    const navigator = useNavigate();

    const datesData = dates;
    const monthsData = months;

    const ageMax = new Date().getFullYear();        // year picker up to current year
    const ageMin = new Date().getFullYear() - 120;  // year picker 120 year back from current year

    const inputStyle = { fontSize: '14px', width: 'auto' };
    const datePickerStyle = { maxWidth: '70px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const monthPickerStyle = { maxWidth: '130px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const yearPickerStyle = { width: '80px', float: 'left', border: '5' };
    const btnSytle = { fontSize: '16px', width: 'auto', textTransform: 'none', marginRight: '10px' };
    const labelStyle = { maxHeight: 'auto', fontSize: '16px', width: 'auto', color: '#3b71ca' };

    const [fName, setFName] = useState("Rishi");
    const [mName, setMName] = useState("Sunak");
    const [sName, setSName] = useState("Singh");
    const [nINO, setNINO] = useState("ZW123456P");

    const [memorableDate, setMemorableDate] = useState("15/01/2000");
    const [memDate, setMemDate] = useState("");
    const [memMonth, setMemMonth] = useState("");
    const [memYear, setMemYear] = useState("");
    const [reEntermemorableDate, setReenterMemorableDate] = useState("");
    const [reEnterMemDate, setReenterMemDate] = useState("");
    const [reEnterMemMonth, setReenterMemMonth] = useState("");
    const [reEnterMemYear, setReenterMemYear] = useState("");
    const [password, setPassword] = useState("A!asdfgh");
    const [reEnterPwd, setReEnterPwd] = useState("A!asdfgh");


    const [passwordErr, setPasswordErr] = useState(false);
    const [pwdMatchsErr, setPwdMatchesErr] = useState(false)
    const [emailMatchsErr, setEmailMatchesErr] = useState(false)
    const [memMatchsErr, setMemMatchesErr] = useState(false)

    useEffect(() => {

    }, [])

    const save = (e) => {

        e.preventDefault();

        setMemorableDate(memMonth + "/" + memDate + "/" + memYear);
        setReenterMemorableDate(reEnterMemMonth + "/" + reEnterMemDate + "/" + reEnterMemYear);

        setPasswordErr(validPwd(password));
        setEmailErr(validEmail(email));
        setPostcodeErr(validPostcode(postcode));

        setEmailMatchesErr(emailMatch(email, reEnterEmail))
        setPwdMatchesErr(pwdMatch(password, reEnterPwd))
        setMemMatchesErr(memDateMatch(memorableDate, reEntermemorableDate))

        console.log(`Validation result is fname/sname ${nameErr} pwd ${passwordErr}, 
        email ${emailErr}, postcode ${postcodeErr}, email matches ${emailMatchsErr}, 
        home telephone ${telephone}, work telephone ${workPhone}, mobile ${mobile},
        memorable date ${memMatchsErr}, pwd match ${pwdMatchsErr}`)

        console.log('in show in console', nINO, email, reEnterEmail,
            memorableDate, reEntermemorableDate, password, reEnterPwd
        )

        if ((!pwdMatchsErr) || (!memMatchsErr) || (!emailMatchsErr) || (!emailErr)) {

            !emailErr && alert('Email error');
            !emailMatchsErr && alert('Email match error');
            !pwdMatchsErr && alert('Password error');
            !memMatchsErr && alert('Memorable date error');
        }
    }

    const cancelEntry = (e) => {
        // window.location.reload();
        navigator('/account');
    }

    return (
        <React.Fragment>
            <MDBContainer className='ps-5 pt-3' alignment='center'  >
                <MDBCard className='w-100 mx-auto' style={{ backgroundColor: '#f7f2f287' }} >
                    <MDBTypography className='card-header'
                        style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} >
                        <strong>Edit Login Details</strong>
                    </MDBTypography>
                    <MDBCardBody>

                        <MDBRow>
                            {/**********  Password */}
                            <MDBCol className='size=md'>
                                <div className='p-2'>
                                    <MDBTypography className='card-header'
                                        style={labelStyle} >
                                        <strong>Enter your new password</strong>
                                    </MDBTypography>
                                    <input style={inputStyle} className='form-control' type='password' placeholder='Password...'
                                        minLength={6} maxLength={10} value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                                    <MDBTypography className='card-header'
                                        style={labelStyle} >
                                        <strong>Enter your new password again</strong>
                                    </MDBTypography>
                                    <input style={inputStyle} className='form-control' type='password' placeholder='Reenter password...'
                                        minLength={6} maxLength={10} value={reEnterPwd} onChange={(e) => { setReEnterPwd(e.target.value) }}></input>
                                </div>
                            </MDBCol>

                            {/**********  Memorable date */}
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

                                <div className='p-2'>
                                    <p style={{ fontSize: '16px' }}><strong>Enter your new memorable date again*</strong></p>
                                    <div className='btn-group mt-2'>
                                        <select style={datePickerStyle}
                                            className="form-select rounded"
                                            onChange={(e) => { setReenterMemDate(e.target.value) }} >
                                            {datesData.map((option) => (
                                                <option key={option.dKey} value={option.dKey}>{option.dValue}</option>
                                            ))}
                                        </select>

                                        <select style={monthPickerStyle}
                                            className="form-select rounded"
                                            onChange={(e) => { setReenterMemMonth(e.target.value) }} >
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
                                            onChange={(e) => { setReenterMemYear(e.target.value) }} >
                                        </input>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <form className='d-flex w-auto p-2'>
                            <MDBBtn style={btnSytle}
                                onClick={save}>
                                Save
                            </MDBBtn>

                            <MDBBtn style={btnSytle}
                                color='secondary'
                                onClick={cancelEntry}>
                                Cancel
                            </MDBBtn>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer >
        </React.Fragment >
    );
}