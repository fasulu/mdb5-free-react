import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { dates, months } from '../resources/datePicker';
import { validDate, validPwd, validEmail, emailMatch, pwdMatch, memDateMatch } from '../validations/Validator.jsx';
// import {UserContext} from "../userContext/UserContext"

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

export default function UpdateLogin() {

    // const { clientId, setClientId } = useContext(UserContext);

    const navigate = useNavigate();

    const datesData = dates;
    const monthsData = months;

    const ageMax = new Date().getFullYear();        // year picker up to current year
    const ageMin = new Date().getFullYear() - 120;  // year picker 120 year back from current year

    const inputStyle = { maxHeight: '38px', maxWidth: '275px' };
    const datePickerStyle = { maxWidth: '70px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const monthPickerStyle = { maxWidth: '130px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const yearPickerStyle = { width: '80px', float: 'left', border: '5' };
    const btnSytle = { fontSize: '16px', width: 'auto', textTransform: 'none', marginRight: '10px' };
    const labelStyle = { maxHeight: 'auto', fontSize: '16px', width: 'auto', color: '#3b71ca' };

    let date1 = "09/20/1975"
    const [memorableDate, setMemorableDate] = useState(date1);
    const [memDate, setMemDate] = useState(date1.split('/')[1]);
    const [memMonth, setMemMonth] = useState(date1.split('/')[0]);
    const [memYear, setMemYear] = useState(date1.split('/')[2]);

    let date2 = "09/20/1975"
    const [reEntermemorableDate, setReenterMemorableDate] = useState(date2);
    const [reEnterMemDate, setReenterMemDate] = useState(date2.split('/')[1]);
    const [reEnterMemMonth, setReenterMemMonth] = useState(date2.split('/')[0]);
    const [reEnterMemYear, setReenterMemYear] = useState(date2.split('/')[2]);
    const [password, setPassword] = useState("A1asdfgh");
    const [reEnterPwd, setReEnterPwd] = useState("A1asdfgh");

    const [showDateInput, setShowDateInput] = useState(false)

    useEffect(() => {

    }, [])

    const save_ = (e) => {

        console.log(`Im in save_`);

        e.preventDefault();

        // checking date

        const date1 = (memMonth + "/" + memDate + "/" + memYear);
        const date2 = (reEnterMemMonth + "/" + reEnterMemDate + "/" + reEnterMemYear);
        setReenterMemorableDate(date1);
        setReenterMemorableDate(date2);

        console.log(memorableDate, reEntermemorableDate)

        const pwd1Err = validPwd(password);
        const pwd2Err = validPwd(reEnterPwd);
        const pwdMatchErr = pwdMatch(password, reEnterPwd);
        const date1Err = validDate(date1);
        const date2Err = validDate(date2);
        const memMatchsErr = memDateMatch(date1, date2);

        console.log(`Validation result is pwd ${pwdMatchErr}, memorable date ${memMatchsErr}`);

        if ((!pwd1Err) || (!pwd2Err) || (!pwdMatchErr) || (!memMatchsErr) || (!date1Err) || (!date2Err) ) {

            !pwd1Err && alert('Password one error');
            !pwd2Err && alert('Password two error');
            !pwdMatchErr && alert('Password match error');
            !date1Err && alert('Date one error')
            !date2Err && alert('Date two error')
            !memMatchsErr && alert('Memorable date match error');
        } else {
            console.log(`FINAL Result passed ${password}, ${reEnterPwd}, ${date1}, ${date2}`);
        }
    }

    const gotoAccountPage = (e) => {
        navigate('/account');
    }

    const showDateFields = (e) => {
        e.preventDefault();
        if (showDateInput) {
            setShowDateInput(false)
        } else {
            setShowDateInput(true);
        }
    }

    return (
        <React.Fragment>
            {/* <MDBContainer className='ps-5 pt-3' alignment='center'  > */}
                <MDBCard className='w-100 mx-auto' style={{ backgroundColor: '#f7f2f287' }} >
                    <MDBTypography className='card-header'
                        style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} >
                        <strong>Edit Login Details</strong>
                    </MDBTypography>
                    <MDBCardBody >

                        {/**********  Password */}
                        <MDBRow>
                            <MDBCol className='size=md'>
                                <MDBTypography className='card-header'
                                    style={labelStyle} >
                                    <strong>Enter your new password</strong>
                                </MDBTypography>
                                <input style={inputStyle} className='form-control' type='password' placeholder='Password...'
                                    minLength={6} maxLength={10} value={password} onChange={(e) => { let newEdit = { ...password }; newEdit = e.target.value; setPassword(newEdit) }}></input>
                                <MDBTypography className='card-header'
                                    style={labelStyle} >
                                    <strong>Enter your new password again</strong>
                                </MDBTypography>
                                <input style={inputStyle} className='form-control' type='password' placeholder='Reenter password...'
                                    minLength={6} maxLength={10} value={reEnterPwd} onChange={(e) => { let newEdit = { ...reEnterPwd }; newEdit = e.target.value; setReEnterPwd(newEdit) }}></input>
                            </MDBCol>
                        </MDBRow>

                        <hr style={{ height: '3px' }}></hr>

                        {/**********  Memorable date */}
                        <MDBRow >
                            <MDBCol className='size=md '>
                                <MDBTypography className='card-header'
                                    style={labelStyle} >
                                    <strong>Edit your memorable date*</strong>
                                    <MDBIcon style={{ marginLeft: '5px', color: '#fd5d00' }} fas icon='pencil-alt'
                                        onClick={(e) => { showDateFields(e) }} />
                                </MDBTypography>

                                {
                                    showDateInput &&
                                    <>
                                        <div className='btn-group'>
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
                                        <div className='btn-group '>
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
                                    </>

                                }

                                {/* <div className='btn-group'>
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
                                </div> */}

                            </MDBCol>
                        </MDBRow>

                        <MDBRow className='p-2'>
                            <form className='d-flex w-auto p-2'>
                                <MDBBtn style={btnSytle}
                                    onClick={save_}>
                                    Save
                                </MDBBtn>

                                {/* <MDBBtn style={btnSytle}
                                    color='secondary'
                                    onClick={gotoAccountPage}>
                                    Cancel
                                </MDBBtn> */}
                            </form>
                        </MDBRow>

                    </MDBCardBody>
                </MDBCard>
            {/* </MDBContainer > */}
        </React.Fragment >
    );
}