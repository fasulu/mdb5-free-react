import React, { useEffect, useContext, useState } from 'react';
import axios from "axios";
import { UserContext } from "../userContext/UserContext"

import { dates, months } from '../resources/datePicker';
import { validDate, validPwd, pwdMatch, memDateMatch } from '../validations/Validator.jsx';
import { ConvertToDate, ConvertToTimeStamp } from '../utility/dateConvertion';

import PopUp from './popUp';

import {
    MDBCard, MDBCardBody, MDBContainer,
    MDBRow, MDBCol,
    MDBTypography,
    MDBRipple
} from 'mdb-react-ui-kit';

import BtnEdit from './btnAccept';
import BtnCancel from './btnCancel';
import { refreshPage } from '../utility/refreshPage';

import passwordIcon from "../../src/resources/images/password.png";
import calenderIcon from "../../src/resources/images/calender.png";
import BtnAccept from './btnAccept';
import SaveErrDetail from '../utility/saveErrDetail.jsx';

export default function UpdateLogin() {

    const { clientId, setClientId } = useContext(UserContext);

    const findPrimaryIDInClientRefUrl = "http://localhost:9001/client/clientref/clientId/";
    const updatePwdUrl = "http://localhost:9001/client/chpwd/";
    const updateDateUrl = "http://localhost:9001/client/chmemdte/";
    const msgLoginDetailUrl = "http://localhost:9001/message/newmsg/";

    const todayDate = new Date().toISOString().slice(0, 19);
    const msgDate_ = ConvertToTimeStamp(new Date().toISOString().slice(0, 10));
    const pwdSubject_ = "Password details updated"
    const MemoDateSubject_ = "Memorable date details updated"
    const From_ = "Housing Department"
    const message_ = "Your login details successfully updated. This is an auto-generated message, do not reply or request any detail."

    const datesData = dates;
    const monthsData = months;

    const ageMax = new Date().getFullYear();        // year picker up to current year
    const ageMin = new Date().getFullYear() - 120;  // year picker 120 year back from current year

    const inputStyle = { maxHeight: '38px', maxWidth: '275px', marginLeft: '50px' };
    const iconStyle = { marginLeft: '5px', color: 'black', cursor: 'pointer' };
    const datePickerStyle = { maxWidth: '70px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const monthPickerStyle = { maxWidth: '130px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const yearPickerStyle = { width: '80px', float: 'left', border: '5' };
    const btnSytle = { fontSize: '16px', width: 'auto', textTransform: 'none', marginLeft: '20px' };
    // const btnCancelSytle = { fontSize: '16px', color: 'blue', width: 'auto', textTransform: 'none', marginRight: '10px', backgroundColor:'#9cbaea'};
    const labelStyle = { maxHeight: 'auto', fontSize: '16px', width: 'auto', color: '#3b71ca' };

    const [refId, setRefId] = useState();

    var date1 = "1975-12-30"
    const [memorableDate, setMemorableDate] = useState(date1);
    const [memDate, setMemDate] = useState(date1.split('-')[2]);
    const [memMonth, setMemMonth] = useState(date1.split('-')[1]);
    const [memYear, setMemYear] = useState(date1.split('-')[0]);

    var date2 = "1975-12-30"
    const [reEntermemorableDate, setReenterMemorableDate] = useState(date2);
    const [reEnterMemDate, setReenterMemDate] = useState(date2.split('-')[2]);
    const [reEnterMemMonth, setReenterMemMonth] = useState(date2.split('-')[1]);
    const [reEnterMemYear, setReenterMemYear] = useState(date2.split('-')[0]);

    const [password, setPassword] = useState("");
    const [reEnterPwd, setReEnterPwd] = useState("");
    const [oldPwd, setOldPwd] = useState("")

    const [showOption, setShowOption] = useState(true)
    const [showDateInput, setShowDateInput] = useState(false)
    const [showPwdInput, setShowPwdInput] = useState(false)

    const [showInfoModal, setShowInfoModal] = useState(false);
    const [modalInfo, setModalInfo] = useState("");

    useEffect(() => {
        fetchData();

        setShowOption(true);
        setShowDateInput(false);
        setShowPwdInput(false);
    }, []);

    async function fetchData() {
        try {
            console.log(`UseEffect :- ${findPrimaryIDInClientRefUrl + clientId}`);

            const responseReference = await axios.get(findPrimaryIDInClientRefUrl + clientId)
            if (responseReference) {
                console.log(`Primary applicant found in clientreference collection:- ${responseReference.data.clientid}`)
                console.log(`_id found in clientreference collection:- ${responseReference.data.clientRef_id}`)
                setRefId(responseReference.data.clientRef_id)

                if (!responseReference.data.clientDt == "") {
                    date1 = ConvertToDate(responseReference.data.clientDt);
                    setMemDate(date1.split('-')[2]);
                    setMemMonth(date1.split('-')[1]);
                    setMemYear(date1.split('-')[0]);

                    date2 = ConvertToDate(responseReference.data.clientDt);
                    setReenterMemDate(date2.split('-')[2]);
                    setReenterMemMonth(date2.split('-')[1]);
                    setReenterMemYear(date2.split('-')[0]);
                }
            }

        } catch (error) {
            
            let result = error.message;
            const errDetails = {
                error_Location: 'UpdLgn101',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            console.log(response)

            setModalInfo("UpdLgn101: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const handleDate = (e) => {

        console.log(`Im in save date`);

        e.preventDefault();

        // checking date

        try {

            const date1 = (memYear + "-" + memMonth + "-" + memDate);
            const date2 = (reEnterMemYear + "-" + reEnterMemMonth + "-" + reEnterMemDate);
            setMemorableDate(date1);
            setReenterMemorableDate(date2);

            console.log(memorableDate, reEntermemorableDate)

            const date1Valid = validDate(date1);
            const date2Valid = validDate(date2);
            const memMatchsValid = memDateMatch(date1, date2);

            console.log(`Validation result is memorable date ${memMatchsValid}`);

            if ((!memMatchsValid) || (!date1Valid) || (!date2Valid)) {

                !date1Valid && setModalInfo("Error: Not a valid date")
                setShowInfoModal(true);
                !date2Valid && setModalInfo("Error: Re-entered date is not valid")
                setShowInfoModal(true);
                !memMatchsValid && setModalInfo("Error: Memorable dates not match")
                setShowInfoModal(true);
            } else {
                console.log(`FINAL memorable date result passed ${date1}, ${date2}`);
                const timeStampedDate = ConvertToTimeStamp(date2)
                saveDate(timeStampedDate)
            }
        } catch (error) {
            
            let result = error.message;
            const errDetails = {
                error_Location: 'UpdLgn102',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            console.log(response)

            setModalInfo("UpdLgn102: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const saveDate = async (date_) => {
        console.log(`Im in save date ${date_}`);

        try {
            const dateInfo = {
                newDate: date_,
                oldPwd: oldPwd,
            };

            console.table(dateInfo)

            const response = await axios.put(updateDateUrl + refId, dateInfo, {})
            console.log(`Output from backend ${response.data.message}`)

            if (response.data.Status_Reply === "Success") {

                console.log(clientId)

                const messageInfo = {
                    clientId: clientId,
                    messageDate: msgDate_,
                    messageSubject: MemoDateSubject_,
                    messageFrom: From_,
                    message: message_,
                    messageStatus: false
                }

                console.table(messageInfo)

                const result = sendMessage(messageInfo);

                setModalInfo("Successfully updated")
                setShowInfoModal(true);

            } else {
                setModalInfo("Invalid information")
                setShowInfoModal(true);
            }

        } catch (error) {
            
            let result = error.message;
            const errDetails = {
                error_Location: 'UpdLgn103',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            console.log(response)

            setModalInfo("UpdLgn103: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const handlePassword = (e) => {

        e.preventDefault();
        console.log(`Im in save password`);

        try {

            const pwd1Valid = validPwd(password);
            const pwd2Valid = validPwd(reEnterPwd);
            const oldPwdValid = validPwd(oldPwd);
            const pwdMatchValid = pwdMatch(password, reEnterPwd);

            console.log(`Validation result is pwd ${pwdMatchValid}`);

            if ((!pwd1Valid) || (!pwd2Valid) || (!pwdMatchValid) || (!oldPwdValid)) {

                !pwd1Valid && setModalInfo("Error: Invalid password")
                setShowInfoModal(true);
                !pwd2Valid && setModalInfo("Error: Invalid password")
                setShowInfoModal(true);
                !oldPwdValid && setModalInfo("Error: Old password invalid")
                setShowInfoModal(true);
                !pwdMatchValid && setModalInfo("Error: Password match error")
                setShowInfoModal(true);
            } else {
                console.log(`FINAL password result passed ${password}, ${reEnterPwd}, ${oldPwd}`);
                savePassword();
            }
        } catch (error) {
            
            let result = error.message;
            const errDetails = {
                error_Location: 'UpdLgn104',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            console.log(response)

            setModalInfo("UpdLgn104: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const savePassword = async () => {
        console.log('Im in save password');
        try {

            const passwordInfo = {
                newPwd: password,
                oldPwd: oldPwd,
            };

            console.table(passwordInfo)

            const response = await axios.put(updatePwdUrl + refId, passwordInfo, {})
            console.log(`Output from backend ${response.data.message}`)

            if (response.data.Status_Reply === "Success") {

                console.log(clientId)

                const messageInfo = {
                    clientId: clientId,
                    messageDate: msgDate_,
                    messageSubject: pwdSubject_,
                    messageFrom: From_,
                    message: message_,
                    messageStatus: false
                }

                console.table(messageInfo)

                const result = sendMessage(messageInfo);

                setModalInfo("Successfully updated")
                setShowInfoModal(true);
                setTimeout(() => {
                    refreshPage();
                }, 3000);

            } else {
                setModalInfo("Invalid information")
                setShowInfoModal(true);
            }
        } catch (error) {
            
            let result = error.message;
            const errDetails = {
                error_Location: 'UpdLgn105',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            console.log(response)

            setModalInfo("UpdLgn105: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const sendMessage = async (messageInfo) => {

        console.log("Iam in send message")

        try {
            console.table(messageInfo)

            const response = await axios.post(msgLoginDetailUrl, messageInfo)
            if (response) {
                console.log(response.data.Status_Reply);
                return response.data.Status_Reply;
            } else {
                return response.data.Status_Reply;
            }
        } catch (error) {
            
            let result = error.message;
            const errDetails = {
                error_Location: 'UpdLgn106',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            console.log(response)

            setModalInfo("UpdLgn106: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }

    }

    const OptionSelector = (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto ps-4 pt-4' style={{ backgroundColor: '#f7f2f287' }} >
                <MDBTypography component={'div'} className='card-header'
                    style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} >
                    <strong>Update Login Details</strong>
                </MDBTypography>
                <MDBCardBody className='d-flex justify-content-center'>
                    <MDBRow>
                        <MDBCol className='size-md mx-2'>
                            <MDBRow>
                                <MDBRipple
                                    className='bg-image hover-overlay hover-shadow-0-strong'
                                    rippleTag='div'
                                    rippleColor='light' >
                                    <img src={passwordIcon} style={{ maxWidth: '100px' }} />
                                    <a href='#!'>
                                        <div className='mask' style={{ backgroundColor: 'rgba(254, 254, 254, 0.4)' }}
                                            onClick={(e) => { setShowPwdInput(true); setShowOption(false); setShowDateInput(false); }}>
                                        </div>
                                    </a>
                                </MDBRipple>
                            </MDBRow>
                            <MDBRow>
                                <MDBTypography component={'div'} style={{ textAlign: 'center', paddingTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>
                                    Password
                                </MDBTypography>
                            </MDBRow>
                        </MDBCol>

                        <MDBCol className='size-md mx-2'>
                            <MDBRow>
                                <MDBRipple
                                    className='bg-image hover-overlay hover-shadow-0-strong rounded'
                                    rippleTag='div'
                                    rippleColor='light' >
                                    <img src={calenderIcon} style={{ maxWidth: '100px' }} />
                                    <a href='#!'>
                                        <div className='mask' style={{ backgroundColor: 'rgba(254, 254, 254, 0.4)' }}
                                            onClick={(e) => { setShowDateInput(true); setShowPwdInput(false); setShowOption(false); }}>
                                        </div>
                                    </a>
                                </MDBRipple>
                            </MDBRow>
                            <MDBRow>
                                <MDBTypography component={'div'} style={{ textAlign: 'center', paddingTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>
                                    Memorable Date
                                </MDBTypography>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    )

    const ShowDateFields = (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto ps-4 pt-4' style={{ backgroundColor: '#f7f2f287' }} >
                <MDBTypography component={'div'} className='card-header'
                    style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} >
                    <strong>Edit Login Details</strong>
                </MDBTypography>

                <MDBCardBody >
                    {/**********  Password */}
                    <MDBRow>
                        <MDBCol className='size=md'>

                            <MDBTypography component={'div'} className='card-header'
                                style={labelStyle} >
                                <strong>Enter your new memorable date</strong>
                            </MDBTypography>
                            <div className='btn-group mx-5'>
                                <select style={datePickerStyle}
                                    className="form-select rounded"
                                    value={memDate}
                                    onChange={(e) => { let newEdit = { ...memDate }; newEdit = e.target.value; setMemDate(newEdit) }} >
                                    {datesData.map((option) => (
                                        <option key={option.dKey} value={option.dKey}>{option.dValue}</option>
                                    ))}
                                </select>

                                <select style={monthPickerStyle}
                                    className="form-select rounded"
                                    value={memMonth}
                                    onChange={(e) => { let newEdit = { ...memMonth }; newEdit = e.target.value; setMemMonth(newEdit) }} >
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
                                    value={memYear}
                                    onChange={(e) => { let newEdit = { ...memYear }; newEdit = e.target.value; setMemYear(newEdit) }} >
                                </input>
                            </div>
                            <MDBTypography component={'div'} className='card-header'
                                style={labelStyle} >
                                <strong>Enter your new memorable date again*</strong>
                            </MDBTypography>
                            <div className='btn-group mx-5'>
                                <select style={datePickerStyle}
                                    className="form-select rounded"
                                    value={reEnterMemDate}
                                    onChange={(e) => { let newEdit = { ...reEnterMemDate }; newEdit = e.target.value; setReenterMemDate(newEdit) }} >
                                    {datesData.map((option) => (
                                        <option key={option.dKey} value={option.dKey}>{option.dValue}</option>
                                    ))}
                                </select>

                                <select style={monthPickerStyle}
                                    className="form-select rounded"
                                    value={reEnterMemMonth}
                                    onChange={(e) => { let newEdit = { ...reEnterMemMonth }; newEdit = e.target.value; setReenterMemMonth(newEdit) }} >
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
                                    value={reEnterMemYear}
                                    onChange={(e) => { let newEdit = { ...reEnterMemYear }; newEdit = e.target.value; setReenterMemYear(newEdit) }} >
                                </input>
                            </div>

                            <MDBTypography component={'div'} className='card-header'
                                style={labelStyle} >
                                <strong>Enter your password*</strong>
                            </MDBTypography>
                            <input style={inputStyle} className='form-control' type='password'
                                minLength={6} maxLength={10} value={oldPwd} onChange={(e) => { let newEdit = { ...oldPwd }; newEdit = e.target.value; setOldPwd(newEdit) }}></input>

                            <MDBRow className='p-2'>
                                <form className='d-flex w-auto p-2'>
                                    <BtnAccept btnStyle={btnSytle}
                                        onClick={(e) => { if (window.confirm("Update Memorable date?")) handleDate(e) }}>
                                        Save Memorable Date
                                    </BtnAccept>
                                    <BtnAccept btnStyle={btnSytle} color='secondary'
                                        onClick={(e) => { gotoAccountPage(e) }}>
                                        Cancel
                                    </BtnAccept>
                                </form>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    )

    const ShowPwdFields = (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto ps-4 pt-4' style={{ backgroundColor: '#f7f2f287' }} >
                <MDBTypography component={'div'} className='card-header'
                    style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} >
                    <strong>Edit Login Details</strong>
                </MDBTypography>

                <MDBCardBody >
                    <MDBTypography component={'div'} className='card-header'
                        style={labelStyle} >
                        <strong>Enter your new password</strong>
                    </MDBTypography>
                    <input style={inputStyle} className='form-control' type='password'
                        minLength={6} maxLength={10} value={password} onChange={(e) => { let newEdit = { ...password }; newEdit = e.target.value; setPassword(newEdit) }}></input>
                    <MDBTypography component={'div'} className='card-header'
                        style={labelStyle} >
                        <strong>Enter your new password again*</strong>
                    </MDBTypography>
                    <input style={inputStyle} className='form-control' type='password'
                        minLength={6} maxLength={10} value={reEnterPwd} onChange={(e) => { let newEdit = { ...reEnterPwd }; newEdit = e.target.value; setReEnterPwd(newEdit) }}></input>

                    <MDBTypography component={'div'} className='card-header'
                        style={labelStyle} >
                        <strong>Enter your old password*</strong>
                    </MDBTypography>
                    <input style={inputStyle} className='form-control' type='password'
                        minLength={6} maxLength={10} value={oldPwd} onChange={(e) => { let newEdit = { ...oldPwd }; newEdit = e.target.value; setOldPwd(newEdit) }}></input>

                    <MDBRow className='p-2'>
                        <form className='d-flex w-auto p-2'>
                            <BtnAccept btnStyle={btnSytle}
                                onClick={(e) => { if (window.confirm("Update password?")) handlePassword(e) }}>
                                Save Password
                            </BtnAccept>
                            <BtnAccept btnStyle={btnSytle} color='secondary'
                                onClick={(e) => { gotoAccountPage(e) }}>
                                Cancel
                            </BtnAccept>
                        </form>
                    </MDBRow>
                </MDBCardBody>

            </MDBCard>
        </React.Fragment >
    )

    const gotoAccountPage = (e) => {
        setModalInfo("Update cancelled")
        setShowInfoModal(true);
        setTimeout(() => {
            refreshPage();
        }, 3000);
    }

    return (
        <React.Fragment>
            {
                showOption && OptionSelector
            }

            {
                showPwdInput && ShowPwdFields
            }

            {
                showDateInput && ShowDateFields
            }
            {
                showInfoModal &&
                <PopUp
                    modalInfo={modalInfo}
                    setShowInfoModal={setShowInfoModal}>
                </PopUp>
            }
        </React.Fragment >
    );
}