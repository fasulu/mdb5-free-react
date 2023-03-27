import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { UserContext } from "../userContext/UserContext"

import { dates, months } from '../resources/datePicker';
import { validDate, validPwd, pwdMatch, memDateMatch } from '../validations/Validator.jsx';
import { ConvertToDate, ConvertToTimeStamp } from '../utility/dateConvertion';

import {
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBRow, MDBCol,
    MDBTypography,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';

import BtnEdit from './btnEdit';
import BtnCancel from './btnCancel';
import { refreshPage } from '../utility/refreshPage';

export default function UpdateLogin() {

    const { clientId, setClientId } = useContext(UserContext);

    const findPrimaryIDInClientRefUrl = "http://localhost:9001/client/clientref/clientId/";
    const updatePwdUrl = "http://localhost:9001/client/chpwd/";
    const updateDateUrl = "http://localhost:9001/client/chmemdte/";

    const navigate = useNavigate();

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
    const labelSubHeadStyle = { maxHeight: 'auto', fontSize: '18px', width: 'auto', color: '#464444', backgroundColor: '#e9f0f3' };
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

    const [showDateInput, setShowDateInput] = useState(false)
    const [showPwdInput, setShowPwdInput] = useState(false)

    useEffect(() => {
        fetchData();

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
            console.log(error)
        }
    }

    const handleDate = (e) => {

        console.log(`Im in save date`);

        e.preventDefault();

        // checking date

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

            !date1Valid && alert('Not a valid date')
            !date2Valid && alert('Re-entered date is not valid')
            !memMatchsValid && alert('Memorable dates not match');
        } else {
            console.log(`FINAL memorable date result passed ${date1}, ${date2}`);
            const timeStampedDate=ConvertToTimeStamp(date2)
            saveDate(timeStampedDate)
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
        
        refreshPage(response.data.message);
        } catch (error) {
            console.log(error)
        }
        
    }

    const handlePassword = (e) => {

        e.preventDefault();
        console.log(`Im in save password`);

        const pwd1Valid = validPwd(password);
        const pwd2Valid = validPwd(reEnterPwd);
        const oldPwdValid = validPwd(oldPwd);
        const pwdMatchValid = pwdMatch(password, reEnterPwd);

        console.log(`Validation result is pwd ${pwdMatchValid}`);

        if ((!pwd1Valid) || (!pwd2Valid) || (!pwdMatchValid) || (!oldPwdValid)) {

            !pwd1Valid && alert('Invalid password');
            !pwd2Valid && alert('Invalid password');
            !oldPwdValid && alert('Old password invalid');
            !pwdMatchValid && alert('Password match error');
        } else {
            console.log(`FINAL password result passed ${password}, ${reEnterPwd}, ${oldPwd}`);
            savePassword();
        }
    }

    const savePassword = async () => {
        console.log('Im in save password');

        const passwordInfo = {
            newPwd: password,
            oldPwd: oldPwd,
        };

        console.table(passwordInfo)

        const response = await axios.put(updatePwdUrl + refId, passwordInfo, {})
        console.log(`Output from backend ${response.data.message}`)

        refreshPage(response.data.message);

    }

    const showDateFields = (e) => {
        e.preventDefault();
        if (showDateInput) {
            setShowDateInput(false)
        } else {
            setShowDateInput(true);
        }
    }

    const showPwdFields = (e) => {
        e.preventDefault();
        if (showPwdInput) {
            setShowPwdInput(false)
        } else {
            setShowPwdInput(true);
        }
    }

    return (
        <React.Fragment>
            {/* <MDBContainer className='ps-5 pt-3' alignment='center'  > */}
            <MDBCard className='w-100 mx-auto ps-5' style={{ backgroundColor: '#f7f2f287' }} >
                <MDBTypography className='card-header'
                    style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} >
                    <strong>Edit Login Details</strong>
                </MDBTypography>

                <MDBCardBody >
                    {/**********  Password */}
                    <MDBRow>
                        <MDBCol className='size=md'>

                            <MDBTypography className='card-header'
                                style={labelSubHeadStyle} >
                                <strong>Edit your password</strong>
                                <MDBIcon style={iconStyle} fas icon='pencil-alt'
                                    onClick={(e) => {  setShowPwdInput(true); setShowDateInput(false) }}  />
                            </MDBTypography>

                            {showPwdInput &&
                                <>
                                    <MDBTypography className='card-header'
                                        style={labelStyle} >
                                        <strong>Enter your new password</strong>
                                    </MDBTypography>
                                    <input style={inputStyle} className='form-control' type='password'
                                        minLength={6} maxLength={10} value={password} onChange={(e) => { let newEdit = { ...password }; newEdit = e.target.value; setPassword(newEdit) }}></input>
                                    <MDBTypography className='card-header'
                                        style={labelStyle} >
                                        <strong>Enter your new password again*</strong>
                                    </MDBTypography>
                                    <input style={inputStyle} className='form-control' type='password'
                                        minLength={6} maxLength={10} value={reEnterPwd} onChange={(e) => { let newEdit = { ...reEnterPwd }; newEdit = e.target.value; setReEnterPwd(newEdit) }}></input>

                                    <MDBTypography className='card-header'
                                        style={labelStyle} >
                                        <strong>Enter your old password*</strong>
                                    </MDBTypography>
                                    <input style={inputStyle} className='form-control' type='password'
                                        minLength={6} maxLength={10} value={oldPwd} onChange={(e) => { let newEdit = { ...oldPwd }; newEdit = e.target.value; setOldPwd(newEdit) }}></input>

                                    <MDBRow className='p-2'>
                                        <form className='d-flex w-auto p-2'>
                                            <MDBBtn style={btnSytle}
                                                onClick={handlePassword}>
                                                Save Password
                                            </MDBBtn>
                                        </form>
                                    </MDBRow>
                                </>
                            }
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>

                <MDBCardBody >
                    {/**********  Memorable date */}
                    <MDBRow >
                        <MDBCol className='size=md '>
                            <MDBTypography className='card-header'
                                style={labelSubHeadStyle} >
                                <strong>Edit your memorable date</strong>
                                <MDBIcon style={iconStyle} fas icon='pencil-alt'
                                    onClick={(e) => { setShowDateInput(true); setShowPwdInput(false) }} />
                            </MDBTypography>
                            {showDateInput &&
                                <>
                                    <MDBTypography className='card-header'
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
                                    <MDBTypography className='card-header'
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

                                    <MDBTypography className='card-header'
                                        style={labelStyle} >
                                        <strong>Enter your old password*</strong>
                                    </MDBTypography>
                                    <input style={inputStyle} className='form-control' type='password'
                                        minLength={6} maxLength={10} value={oldPwd} onChange={(e) => { let newEdit = { ...oldPwd }; newEdit = e.target.value; setOldPwd(newEdit) }}></input>

                                    <MDBRow className='p-2'>
                                        <form className='d-flex w-auto p-2'>
                                            <MDBBtn style={btnSytle}
                                                onClick={handleDate}>
                                                Save Memorable Date
                                            </MDBBtn>
                                        </form>
                                    </MDBRow>
                                </>
                            }
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>

            </MDBCard>
            {/* </MDBContainer > */}
        </React.Fragment >
    );
}