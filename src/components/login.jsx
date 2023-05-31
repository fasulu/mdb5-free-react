import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from "react-router-dom";
import { dates, months } from '../resources/datePicker';
import { UserContext } from "../userContext/UserContext"
import { validDate, validEmail } from '../validations/Validator';

import { encryptDetails, decryptDetails } from '../utility/hashDetails';
import { ConvertToDate, ConvertToTimeStamp } from '../utility/dateConvertion';
import { refreshPage } from '../utility/refreshPage';

import PopUp from './popUp';
import SaveErrDetail from '../utility/saveErrDetail.jsx';

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
    const msgForgottenLoginRefUrl = "http://localhost:9001/message/newmsg/";

    const errorDetailUrl = "http://localhost:9001/client/err/";

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

    // const todayDate = () => { let date_ = new Date(); date_ = date_.toLocaleString('en-GB', { timeZone: 'UTC' }) }
    const todayDate = new Date().toISOString().slice(0, 19);

    const date_ = ConvertToTimeStamp(new Date().toISOString().slice(0, 10));
    const subject_ = "Login Reference sent to you email/post"
    const From_ = "Housing Department"
    const message_ = "As per your request we have sent you login reference to your email and by post. This is an auto-generated message, do not reply or request any detail."

    const [showGetLoginRefInfo, setShowGetLoginRefInfo] = useState(true)
    const [showGetLoginInfo, setShowGetLoginInfo] = useState(false)
    const [showForgottenLoginRef, setShowForgottenLoginRef] = useState(false)
    const [showForgottenPwd, setShowForgottenPwd] = useState(false)

    const [showInfoModal, setShowInfoModal] = useState(false);
    const [modalInfo, setModalInfo] = useState("");

    useEffect(() => {

        fetchDetail();

    }, [])

    async function fetchDetail() {
        try {

            if (window.localStorage.getItem('cref')) {
                window.localStorage.removeItem('cref');
            }
            const input = document.querySelector("input");
            input.focus();

        } catch (error) {

            let result = error.message;
            const errDetails = {
                error_Location: 'Log101',
                error_Date: todayDate,
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            // const response = await axios.post(errorDetailUrl, errDetails);
            const response = SaveErrDetail(errDetails)
            console.log(response)
            
            setModalInfo("Log101: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const cancelEntry = (e) => {
        refreshPage()
    }

    const ForgotPassword = (
        <React.Fragment>
            <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='w-100 mx-auto' >

                <MDBCardBody>
                    <MDBRow>
                        <MDBCol className='size=md'>
                            <MDBTypography component={'div'} style={{ fontSize: '18px' }}><strong>Recover your password</strong></MDBTypography>

                            {/* *********** Email  */}
                            <MDBTypography component={'div'} className='mt-2 ' style={{ fontSize: '17px' }}>Please enter your email address * </MDBTypography>

                            <input style={inputStyle} className='form-control'
                                type='text'
                                placeholder='email address'
                                autoFocus={true}
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
                            <MDBTypography component={'div'} style={{ fontSize: '18px' }}><strong>Recover your login reference</strong></MDBTypography>

                            {/* *********** Email  */}
                            <MDBTypography component={'div'} className='mt-2 ' style={{ fontSize: '17px' }}>Please enter your email address * </MDBTypography>

                            <input style={inputStyle} className='form-control'
                                type='text'
                                placeholder='email address'
                                autoFocus={true}
                                onChange={(e) => { let newEdit = { ...email }; newEdit = e.target.value; setEmail(newEdit) }} >
                            </input>

                            {/* *********** Date of Birth  */}
                            <MDBTypography component={'div'} className='mt-3' style={{ fontSize: '17px' }}>Please enter your date of birth *</MDBTypography>

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
                        <a href='' className="mt-3">* Can't remember your memorable date or email address? Please call housing department</a>

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
                    <MDBTypography component={'div'} style={{ fontSize: '18px' }}><strong>Client Reference:- {loginReference.toUpperCase()}</strong></MDBTypography>

                    {/**********  Password */}
                    <MDBRow>
                        <MDBCol className='size=md p-2'>
                            <div className=''>
                                <p style={{ fontSize: '17px' }}>Enter your new password</p>
                                <input style={inputStyle} className='form-control'
                                    type='password'
                                    placeholder='Password...'
                                    autoFocus={true}
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
                        <MDBTypography component={'div'} style={{ fontSize: '18px' }}><strong>Login</strong></MDBTypography>

                        <MDBTypography component={'div'} style={{ fontSize: '17px' }}>Your login reference*</MDBTypography>

                        <input style={inputStyle} className='form-control'
                            type='text'
                            placeholder='login reference'
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

                const refDetail = {
                    client_reference: loginReference
                }

                const response = await axios.post(clientRefUrl, refDetail)
                const tempData = response.data;

                if (tempData.Status_Reply === "Success") {
                    setShowGetLoginRefInfo(false);
                    setShowGetLoginInfo(true);

                } else {
                    setModalInfo("Invalid login reference")
                    setShowInfoModal(true);

                }
            } else {
                setModalInfo("Please enter a valid login reference");
                setShowInfoModal(true);
            }
        } catch (error) {
            let result = error.message;
            const errDetails = {
                clientId: 'Unknown',
                error_Location: 'Log102',
                error_Date: todayDate,
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = await axios.post(errorDetailUrl, errDetails);

            setModalInfo("Log102: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const handleLogin = async (e) => {

        e.preventDefault();
        try {
            const dateValid = validDate(memYear + "-" + memMonth + "-" + memDate)

            if (dateValid) {
                if ((password.length >= 6) || (password.length <= 8)) {

                    const primaryLoginInfo = {
                        client_reference: loginReference,
                        client_password: password,
                        client_memorable_date: ConvertToTimeStamp(memYear + "-" + memMonth + "-" + memDate)
                    }

                    if ((password) && (dateValid)) {
                        const response = await axios.post(clientLoginUrl, primaryLoginInfo)

                        if (response.data.Status_Reply === 'Success') {

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
                            setModalInfo('Password and date does not match');
                            setShowInfoModal(true);

                        }
                    } else {
                        setModalInfo('Password and date does not match');
                        setShowInfoModal(true);

                    }

                } else {
                    setModalInfo('Password not in correct format');
                    setShowInfoModal(true);

                }
            } else {
                setModalInfo('Invalid date')
                setShowInfoModal(true);
            }
        } catch (error) {
            let result = error.message;
            const errDetails = {
                clientId: 'Unknown',
                error_Location: 'Log103',
                error_Date: todayDate,
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = await axios.post(errorDetailUrl, errDetails);

            setModalInfo("Log103: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);

        }
    }

    const handleForgottenLoginRef = async (e) => {

        e.preventDefault();

        const birth_ = dobYear + "-" + dobMonth + "-" + dobDate;

        try {
            const emailValid = validEmail(email);
            const birthValid = validDate(birth_);

            if (birthValid) {
                if (emailValid) {
                    timeStampedDOB = ConvertToTimeStamp(birth_);
                    setDateofbirth(timeStampedDOB);

                    sendLoginRefByEmail();
                } else {

                    if (!birthValid) setModalInfo('Invalid Date of birth'); setShowInfoModal(true);
                    if (!emailValid) setModalInfo('Invalid Email address'); setShowInfoModal(true);

                    setEmail(null); setDOBDate(null); setDOBMonth(null); setDOBYear(null);
                    setShowGetLoginRefInfo(true);
                    setShowGetLoginInfo(false);
                    setShowForgottenLoginRef(false);
                }
            } else {

                if (!birthValid) setModalInfo('Invalid Date of birth'); setShowInfoModal(true);
                if (!emailValid) setModalInfo('Invalid Email address'); setShowInfoModal(true);

                setEmail(null); setDOBDate(null); setDOBMonth(null); setDOBYear(null);
                setShowGetLoginRefInfo(true);
                setShowGetLoginInfo(false);
                setShowForgottenLoginRef(false);
            }
        } catch (error) {
            let result = error.message;
            const errDetails = {
                clientId: 'Unknown',
                error_Location: 'Log104',
                error_Date: todayDate,
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = await axios.post(errorDetailUrl, errDetails);

            setModalInfo("Log104: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }

    }

    const sendLoginRefByEmail = async () => {

        const primaryApplicantInfo = {
            client_dateofbirth: timeStampedDOB,
            client_email: email
        }
        try {

            const response = await axios.post(clientForgottenRefUrl, primaryApplicantInfo)
            if (response.data.Status_Reply == "Success") {

                setId_(response.data.ClientId)

                const messageInfo = {
                    clientId: response.data.ClientId,
                    messageDate: date_,
                    messageSubject: subject_,
                    messageFrom: From_,
                    message: message_,
                    messageStatus: false
                }

                const result = sendMessage(messageInfo);

                setModalInfo('Login reference sent by email and post')
                setShowInfoModal(true);
                setTimeout(() => {
                    navigate('/nino');
                }, 10000);

            } else {
                setModalInfo('Invalid information')
                setShowInfoModal(true);
            }

        } catch (error) {
            let result = error.message;
            const errDetails = {
                clientId: 'Unknown',
                error_Location: 'Log105',
                error_Date: todayDate,
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = await axios.post(errorDetailUrl, errDetails);

            setModalInfo("Log105: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
            setShowGetLoginRefInfo(true);
            setShowGetLoginInfo(false);
            setShowForgottenLoginRef(false);
        }
    }

    const sendMessage = async (messageInfo) => {

        try {

            const response = await axios.post(msgForgottenLoginRefUrl, messageInfo)
            if (response) {
                return response.data.Status_Reply;
            } else {
                return response.data.Status_Reply;
            }

        } catch (error) {

            let result = error.message;
            const errDetails = {
                clientId: 'Unknown',
                error_Location: 'Log106',
                error_Date: todayDate,
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = await axios.post(errorDetailUrl, errDetails);

            setModalInfo("Log106: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const handleForgottenPwd = async (e) => {
        e.preventDefault();

        const memoDate = memYear + "-" + memMonth + "-" + memDate;

        try {
            const emailValid = validEmail(email);
            const memoValid = validDate(memoDate);

            if (emailValid) {
                if (memoValid) {
                    timeStampedMemo = ConvertToTimeStamp(memoDate);
                    setMemorableDate(timeStampedMemo)

                    sendPwdByEmail();

                } else {
                    if (!memoValid) setModalInfo('Invalid memorable date'); setShowInfoModal(true);
                }
            } else {
                if (!emailValid) setModalInfo('Invalid email address'); setShowInfoModal(true);

            }

        } catch (error) {

            let result = error.message;
            const errDetails = {
                clientId: 'Unknown',
                error_Location: 'Log107',
                error_Date: todayDate,
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = await axios.post(errorDetailUrl, errDetails);

            setModalInfo("Log107: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const sendPwdByEmail = async () => {

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

                const resultEmail = await SendMail(pwdDetails);
                setModalInfo("New password being sent by email and post");
                setShowInfoModal(true);

            } else {
                setModalInfo("Invalid information");
                setShowInfoModal(true);
            }

        } catch (error) {

            let result = error.message;
            const errDetails = {
                clientId: 'Unknown',
                error_Location: 'Log108',
                error_Date: todayDate,
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = await axios.post(errorDetailUrl, errDetails);

            setModalInfo("Log108: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
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
            {
                showInfoModal && <PopUp modalInfo={modalInfo} setShowInfoModal={setShowInfoModal}></PopUp>
            }

        </React.Fragment >
    );
}