import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from "react-router-dom";
import { dates, months } from '../resources/datePicker';
import { UserContext } from "../userContext/UserContext"
import { validDate, validEmail } from '../validations/Validator';

import { encryptDetails, decryptDetails } from '../utility/hashDetails';
import { ConvertToDate, ConvertToTimeStamp } from '../utility/dateConvertion';
import { refreshPage } from '../utility/refreshPage';

import { SendMail } from '../utility/sendMail';

import {
    MDBIcon,
    MDBCard, MDBCardBody,
    MDBRow, MDBCol,
    MDBTypography, MDBBtn
} from 'mdb-react-ui-kit';

export default function Login() {

    const navigate = useNavigate();

    const { clientId, setClientId } = useContext(UserContext);

    const clientRefUrl = "http://localhost:9001/client/clientreflogin/";
    const clientLoginUrl = "http://localhost:9001/client/clientlogin/";
    const clientForgottenRefUrl = "http://localhost:9001/client/forgotref/";
    const clientForgottenPwdUrl = "http://localhost:9001/client/forgotpwd/";

    const datesData = dates;
    const monthsData = months;
    const ageMax = new Date().getFullYear();        // year picker up to current year
    const ageMin = new Date().getFullYear() - 120;  // year picker 120 year back from current year

    const inputStyle = { fontSize: '17px', width: '270px', marginLeft: '10px' };
    const datePickerStyle = { maxWidth: '70px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const monthPickerStyle = { maxWidth: '130px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const yearPickerStyle = { width: '80px', float: 'left', border: '5' };
    const btnSytle = { fontSize: '16px', width: 'auto', textTransform: 'none', marginLeft: '10px' };

    const [loginReference, setLoginReference] = useState("");
    // const [loginReference, setLoginReference] = useState("bs61864");

    const [ref_, setRef_] = useState("")
    const [id_, setId_] = useState("")
    const [pwd, setPwd] = useState("");

    const [memo, setMemo] = useState("");
    const [password, setPassword] = useState("");
    const [memorableDate, setMemorableDate] = useState("");
    const [memDate, setMemDate] = useState("");
    const [memMonth, setMemMonth] = useState("");
    const [memYear, setMemYear] = useState("");

    const [email, setEmail] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");
    const [dobDate, setDOBDate] = useState("");
    const [dobMonth, setDOBMonth] = useState("");
    const [dobYear, setDOBYear] = useState("");


    var timeStampedDOB = ""
    var timeStampedMemo = ""

    const [showGetLoginRefInfo, setShowGetLoginRefInfo] = useState(true)
    const [showGetLoginInfo, setShowGetLoginInfo] = useState(false)
    const [showForgottenLoginRef, setShowForgottenLoginRef] = useState(false)
    const [showForgottenPwd, setShowForgottenPwd] = useState(false)

    useEffect(() => {
        if (window.localStorage.getItem('cref')) {
            window.localStorage.removeItem('cref');
        }

    }, [])

    const cancelEntry = (e) => {
        refreshPage()
    }

    const ForgotPassword = (
        <React.Fragment>
            <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='w-100 mx-auto' >

                <MDBCardBody>
                    <MDBRow>
                        <MDBCol className='size=md'>
                            <MDBTypography style={{ fontSize: '18px' }}><strong>Recover your password</strong></MDBTypography>

                            {/* *********** Email  */}
                            <MDBTypography className='mt-2 ' style={{ fontSize: '17px' }}>Please enter your email address * </MDBTypography>

                            <input style={inputStyle} className='form-control' type='text' placeholder='email address'
                                onChange={(e) => { let newEdit = { ...email }; newEdit = e.target.value; setEmail(newEdit) }} >
                            </input>

                        </MDBCol>

                        {/**********  Memorable date */}
                        <MDBRow>
                            <MDBCol className='size=md p-2 mt-2'>
                                <div className=''>
                                    <p style={{ fontSize: '16px' }}>Enter your new memorable date*</p>
                                    <div className='btn-group mx-2'>
                                        <select style={datePickerStyle}
                                            className="form-select rounded"
                                            onChange={(e) => { let newEdit = { ...setMemDate }; newEdit = e.target.value; setMemDate(newEdit) }} >
                                            {datesData.map((option) => (
                                                <option key={option.dKey} value={option.dKey}>{option.dValue}</option>
                                            ))}
                                        </select>

                                        <select style={monthPickerStyle}
                                            className="form-select rounded"
                                            onChange={(e) => { let newEdit = { ...setMemMonth }; newEdit = e.target.value; setMemMonth(newEdit) }} >
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
                                            onChange={(e) => { let newEdit = { ...setMemYear }; newEdit = e.target.value; setMemYear(newEdit) }} >
                                        </input>
                                    </div>
                                </div>
                                <p style={{ cursor: 'pointer', color: '#6592de' }} className=""
                                    onClick={(e) => { setShowForgottenLoginRef(true); setShowGetLoginRefInfo(false); setShowGetLoginInfo(false); }} >* Forgotten memorable date? Please call housing department</p>

                            </MDBCol>
                        </MDBRow>

                    </MDBRow>
                    <MDBRow className='d-flex input-group w-auto mt-3'>
                        <MDBBtn style={btnSytle}
                            color='primary'
                            onClick={(e) => { handleForgottenPwd(e) }}>
                            Continue<MDBIcon fas icon='caret-right' className='mx-2' />
                        </MDBBtn>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    )

    const ForgotLoginRef = (
        <React.Fragment>
            <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='w-100 mx-auto' >

                <MDBCardBody>
                    <MDBRow>
                        <MDBCol className='size=md'>
                            <MDBTypography style={{ fontSize: '18px' }}><strong>Recover your login reference</strong></MDBTypography>

                            {/* *********** Email  */}
                            <MDBTypography className='mt-2 ' style={{ fontSize: '17px' }}>Please enter your email address * </MDBTypography>

                            <input style={inputStyle} className='form-control' type='text' placeholder='email address'
                                onChange={(e) => { let newEdit = { ...email }; newEdit = e.target.value; setEmail(newEdit) }} >
                            </input>

                            {/* *********** Date of Birth  */}
                            <MDBTypography className='mt-3' style={{ fontSize: '17px' }}>Please enter your date of birth</MDBTypography>

                            <div className='mx-2'>
                                <div className='btn-group'>
                                    <select style={datePickerStyle}
                                        className="form-select rounded"
                                        aria-label="Default select example"
                                        onChange={(e) => { let newEdit = { ...dobDate }; newEdit = e.target.value; setDOBDate(newEdit) }}>
                                        {datesData.map((option) => (
                                            <option key={option.dKey} value={option.dKey}>{option.dValue}</option>
                                        ))}
                                    </select>
                                    <select style={monthPickerStyle}
                                        className="form-select rounded"
                                        onChange={(e) => { let newEdit = { ...dobMonth }; newEdit = e.target.value; setDOBMonth(newEdit) }}>
                                        {monthsData.map((option) => (
                                            <option key={option.mKey} value={option.mKey}>{option.mValue}</option>
                                        ))}
                                    </select>
                                    <input className='form-control rounded'
                                        style={yearPickerStyle}
                                        type='number'
                                        border={5}
                                        min={ageMin}
                                        max={ageMax}
                                        placeholder='year'
                                        onChange={(e) => { let newEdit = { ...dobYear }; newEdit = e.target.value; setDOBYear(newEdit) }}>
                                    </input>

                                </div>
                            </div>
                        </MDBCol>
                        <a href='' className="mt-3">* Don't know your email address? Please call housing department</a>

                    </MDBRow>
                    <MDBRow className='d-flex input-group w-auto mt-3'>
                        <MDBBtn style={btnSytle}
                            color='primary'
                            onClick={(e) => { handleForgottenLoginRef(e) }}>
                            Continue<MDBIcon fas icon='caret-right' className='mx-2' />
                        </MDBBtn>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    )

    const GetLoginDetails = (
        <React.Fragment>
            <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='w-100 mx-auto' >
                <MDBCardBody>
                    <MDBTypography style={{ fontSize: '18px' }}><strong>Client Reference:- {loginReference.toUpperCase()}</strong></MDBTypography>

                    {/**********  Password */}
                    <MDBRow>
                        <MDBCol className='size=md p-2'>
                            <div className=''>
                                <p style={{ fontSize: '17px' }}>Enter your new password</p>
                                <input style={inputStyle} className='form-control' type='password' placeholder='Password...'
                                    minLength={6} maxLength={10} value={password}
                                    onChange={(e) => { let newEdit = { ...password }; newEdit = e.target.value; setPassword(newEdit) }}></input>
                            </div>
                            <p style={{ cursor: 'pointer', color: '#6592de' }} className=""
                                onClick={(e) => { setShowForgottenPwd(true); setShowForgottenLoginRef(false); setShowGetLoginRefInfo(false); setShowGetLoginInfo(false); }} >I have forgotten my password</p>

                        </MDBCol>
                    </MDBRow>

                    {/**********  Memorable date */}
                    <MDBRow>
                        <MDBCol className='size=md p-2'>
                            <div className=''>
                                <p style={{ fontSize: '16px' }}>Enter your new memorable date*</p>
                                <div className='btn-group mx-2'>
                                    <select style={datePickerStyle}
                                        className="form-select rounded"
                                        onChange={(e) => { let newEdit = { ...setMemDate }; newEdit = e.target.value; setMemDate(newEdit) }} >
                                        {datesData.map((option) => (
                                            <option key={option.dKey} value={option.dKey}>{option.dValue}</option>
                                        ))}
                                    </select>

                                    <select style={monthPickerStyle}
                                        className="form-select rounded"
                                        onChange={(e) => { let newEdit = { ...setMemMonth }; newEdit = e.target.value; setMemMonth(newEdit) }} >
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
                                        onChange={(e) => { let newEdit = { ...setMemYear }; newEdit = e.target.value; setMemYear(newEdit) }} >
                                    </input>
                                </div>
                            </div>
                            <p style={{ cursor: 'pointer', color: '#6592de' }} className=""
                                onClick={(e) => { setShowForgottenLoginRef(true); setShowGetLoginRefInfo(false); setShowGetLoginInfo(false); }} >* Forgotten memorable date? Please call housing department</p>

                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='d-flex w-auto p-2'>
                        <MDBBtn style={btnSytle}
                            onClick={(e) => { handleLogin(e) }}>
                            Continue
                        </MDBBtn>

                        <MDBBtn style={btnSytle}
                            color='secondary'
                            onClick={cancelEntry}>
                            Previous Page
                        </MDBBtn>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    );

    const GetLoginRefInfo = (
        <React.Fragment>
            <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='w-100 mx-auto' >

                <MDBCardBody>
                    <MDBRow>
                        <MDBTypography style={{ fontSize: '18px' }}><strong>Login</strong></MDBTypography>

                        <MDBTypography style={{ fontSize: '17px' }}>Your login reference*</MDBTypography>

                        <input style={inputStyle} className='form-control' type='text' placeholder='login reference'
                            onChange={(e) => { let newEdit = { ...loginReference }; newEdit = e.target.value; setLoginReference(newEdit); }} >
                        </input>

                        <p style={{ cursor: 'pointer', color: '#6592de' }} className=""
                            onClick={(e) => { setShowForgottenLoginRef(true); setShowGetLoginRefInfo(false); setShowGetLoginInfo(false); }} >I have forgotten my login reference</p>

                    </MDBRow>
                    <MDBRow className='d-flex input-group w-auto mt-5'>
                        <MDBBtn style={btnSytle}
                            color='primary'
                            onClick={(e) => { handleReference(e) }}>
                            Continue<MDBIcon fas icon='caret-right' className='mx-2' />
                        </MDBBtn>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    );

    const handleReference = async (e) => {

        e.preventDefault()

        try {
            if (loginReference.length == 7) {

                console.log(clientRefUrl + loginReference)

                const refDetail = {
                    client_reference: loginReference
                }

                const response = await axios.post(clientRefUrl, refDetail)
                const tempData = response.data;
                console.log(tempData.Status_Reply);

                if (tempData.Status_Reply == "Success") {
                    setShowGetLoginRefInfo(false);
                    setShowGetLoginInfo(true);

                } else {
                    refreshPage('Invalid login reference');
                }
            } else {
                refreshPage('Please enter a valid client reference');
            }
        } catch (error) {
            let result = error.request;
            console.log(result);
            refreshPage('Please enter a valid client reference');
        }
    }

    const handleLogin = async (e) => {

        e.preventDefault();
        const dateValid = validDate(memYear + "-" + memMonth + "-" + memDate)

        if (dateValid) {
            if ((password.length >= 6) || (password.length <= 8)) {
                try {
                    const primaryLoginInfo = {
                        client_reference: loginReference,
                        client_password: password,
                        client_memorable_date: ConvertToTimeStamp(memYear + "-" + memMonth + "-" + memDate)
                    }
                    console.table(primaryLoginInfo)
                    console.log(clientRefUrl, primaryLoginInfo)

                    if ((password) && (dateValid)) {
                        const response = await axios.post(clientLoginUrl, primaryLoginInfo)

                        if (response.data.Status_Reply === 'Success') {
                            console.log(response.data.Status_Reply)

                            let newFNameEdit = response.data.ClientFName;
                            let newSNameEdit = response.data.ClientSName;
                            const name = newFNameEdit + " " + newSNameEdit;

                            encryptDetails(response.data.ClientId, response.data.ClientRef);

                            navigate('/account', {
                                state:
                                {
                                    clientName: name
                                }
                            });
                        } else {
                            alert("Password and date does not match")
                        }
                    } else {
                        refreshPage('Password and date does not match')
                    }
                } catch (error) {
                    refreshPage('Please verity your details')
                }
            } else {
                console.log('Password not in correct format');
                refreshPage('Password not in correct format')
            }
        } else {
            refreshPage('Invalid date')
        }
    }

    const handleForgottenLoginRef = (e) => {

        e.preventDefault();

        console.log('I am in handleForgottenLoginRef');

        const birth_ = dobYear + "-" + dobMonth + "-" + dobDate;

        // const email = validClient.client_email == clientEmail ? true : false;
        // const dob = validClient.client_dateofbirth == clientDOB ? true : false;

        const emailValid = validEmail(email);
        const birthValid = validDate(birth_);

        console.log(`birthValid ${birthValid}`); console.log(`emailValid ${emailValid}`)

        if (birthValid) {
            if (emailValid) {
                timeStampedDOB = ConvertToTimeStamp(birth_);
                console.log(birth_, timeStampedDOB)
                setDateofbirth(timeStampedDOB);

                sendLoginRefByEmail();
            } else {
                !birthValid && alert(`Invalid Date of birth`);
                !emailValid && alert(`Invalid Email address\n${email}`);
                setEmail(null); setDOBDate(null); setDOBMonth(null); setDOBYear(null);
                setShowGetLoginRefInfo(true);
                setShowGetLoginInfo(false);
                setShowForgottenLoginRef(false);
            }
        } else {
            !birthValid && alert(`Invalid Date of birth`);
            !emailValid && alert(`Invalid Email address\n${email}`);
            setEmail(null); setDOBDate(null); setDOBMonth(null); setDOBYear(null);
            setShowGetLoginRefInfo(true);
            setShowGetLoginInfo(false);
            setShowForgottenLoginRef(false);
        }
    }

    const sendLoginRefByEmail = async () => {

        console.log('I am in sendLoginRefByEmail', timeStampedDOB, email);

        const primaryApplicantInfo = {
            client_dateofbirth: timeStampedDOB,
            client_email: email
        }
        try {

            const response = await axios.post(clientForgottenRefUrl, primaryApplicantInfo)
            if (response.data.Status_Reply == "Success") {

                refreshPage(`${response.data.Status_Reply}\nLogin reference sent by email`)

            } else {
                refreshPage(`Invalid information`)
            }

        } catch (error) {
            // let result = error.request
            // console.log(result)
            refreshPage('Please verify your details');
            // setShowGetLoginRefInfo(true);
            // setShowGetLoginInfo(false);
            // setShowForgottenLoginRef(false);
        }
    }

    const handleForgottenPwd = async (e) => {
        e.preventDefault();

        console.log('I am in handleForgottenPwd');

        const memoDate = memYear + "-" + memMonth + "-" + memDate;

        console.log(`email ${email}`);
        console.log(`memoValid ${memoDate}`)

        const emailValid = validEmail(email);
        const memoValid = validDate(memoDate);

        console.log(`emailValid ${emailValid}`); console.log(`memoValid ${memoValid}`)

        if (emailValid) {
            if (memoValid) {
                timeStampedMemo = ConvertToTimeStamp(memoDate);
                console.log(memoDate, timeStampedMemo)
                setMemorableDate(timeStampedMemo)

                sendPwdByEmail();

            } else {
                // !emailValid && alert(`Invalid email address`);
                !memoValid && alert(`Invalid memorable date`);
                refreshPage(`Invalid memorable date`);
                // setEmail(null);
                // setMemDate(null);setMemMonth(null);setMemYear(null);
                // setShowForgottenPwd(true)
                // setShowGetLoginRefInfo(false);
                // setShowGetLoginInfo(false);
                // setShowForgottenLoginRef(false);
            }
        } else {
            !emailValid && alert(`Invalid email address`);
            // !memoValid && alert(`Invalid memorable date`);
            refreshPage(`Invalid email address`);
            // setEmail(null);
            // setMemDate(null);setMemMonth(null);setMemYear(null);
            // setShowForgottenPwd(true)
            // setShowGetLoginRefInfo(false);
            // setShowGetLoginInfo(false);
            // setShowForgottenLoginRef(false);
        }
    }

    const sendPwdByEmail = async () => {

        console.log('I am in sendPwdByEmail', timeStampedMemo, email);

        const primaryApplicantInfo = {
            client_memorable_date: timeStampedMemo,
            client_email: email
        }
        try {

            const response = await axios.post(clientForgottenPwdUrl, primaryApplicantInfo)
            if (response.data.Status_Reply == "Success") {

                const name = response.data.ClientName
                const newPwd = response.data.NewPwd

                const pwdDetails = {
                    pwd: newPwd,
                    email: email,
                    fname: name
                }

                console.table(pwdDetails);

                const resultEmail = await SendMail(pwdDetails);
                console.log(resultEmail)
                refreshPage(`New password being sent by email`)

                console.log(`${response.data.NewPwd} is the new password`)

            } else {
                refreshPage('Invalid information')
            }

        } catch (error) {
            // let result = error.request
            // console.log(result)
            // alert(`Error:- Please verify your details`);
            refreshPage(`Error:- Please verify your details`);
            // setShowGetLoginRefInfo(true);
            // setShowGetLoginInfo(false);
            // setShowForgottenLoginRef(false);
        }
    }

    return (
        <React.Fragment>
            {
                showGetLoginRefInfo && GetLoginRefInfo
            }
            {
                showGetLoginInfo && GetLoginDetails
            }
            {
                showForgottenLoginRef && ForgotLoginRef
            }
            {
                showForgottenPwd && ForgotPassword
            }
        </React.Fragment >
    );
}