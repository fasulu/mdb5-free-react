import React, { useEffect, useState } from 'react';

import { areyous } from '../resources/areyou';
import { tenures } from '../resources/tenure';
import { correspondences } from '../resources/correspondence';
import { ethnicities } from '../resources/ethnicity';
import { nationalities } from '../resources/nationality';
import { sexOrients } from '../resources/sexOrient';
import { beliefs } from '../resources/belief';
import { languages } from '../resources/language';
import { dates, months } from '../resources/datePicker';
import { validPwd, validEmail, validName, validPostcode, validNumber, emailMatch, pwdMatch, memDateMatch, ValidNINO } from '../validations/Validator.jsx';
import ApplicationProgress from '../components/applicationProgress'

import {
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBRow, MDBCol,
    MDBTypography,
    MDBBtn,
    MDBRadio, MDBCheckbox
} from 'mdb-react-ui-kit';

export default function UpdateContact() {

    const datesData = dates;
    const monthsData = months;

    const ageMax = new Date().getFullYear();        // year picker up to current year
    const ageMin = new Date().getFullYear() - 120;  // year picker 120 year back from current year

    const inputStyle = { fontSize: '14px', width: '250px' };
    const comboBoxStyle = { maxWidth: '250px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const datePickerStyle = { maxWidth: '70px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const monthPickerStyle = { maxWidth: '130px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const yearPickerStyle = { width: '80px', float: 'left', border: '5' };

    const [showAddress, setShowAddress] = useState(false);

    const [title, setTitle] = useState("Mr");
    const [fName, setFName] = useState("Rishi");
    const [mName, setMName] = useState("Sunak");
    const [sName, setSName] = useState("Singh");
    const [nINO, setNINO] = useState("ZW123456P");
    const [postcode, setPostcode] = useState("LW1 3AN");
    const [addLine1, setAddLine1] = useState("10 Downing Street");
    const [addLine2, setAddLine2] = useState("West Minster");
    const [addLine3, setAddLine3] = useState("London");
    const [addLine4, setAddLine4] = useState("UK");
    const [telephone, setTelephone] = useState("0201234569");
    const [mobile, setMobile] = useState("07894563214");
    const [workPhone, setWorkPhone] = useState("0201245879");
    const [email, setEmail] = useState("rsunak@dowingst.com");
    const [reEnterEmail, setReEnterEmail] = useState("rsunak@dowingst.com");
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

    const [nameErr, setNameErr] = useState(false);
    const [ninoErr, setNinoErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [postcodeErr, setPostcodeErr] = useState(false);
    const [numberErr, setNumberErr] = useState(false)
    const [emailMatchsErr, setEmailMatchesErr] = useState(false)
    const [pwdMatchsErr, setPwdMatchesErr] = useState(false)
    const [memMatchsErr, setMemMatchesErr] = useState(false)

    useEffect(() => {

    }, [])

    const showInConsole = (e) => {

        e.preventDefault();

        setMemorableDate(memMonth + "/" + memDate + "/" + memYear);
        setReenterMemorableDate(reEnterMemMonth + "/" + reEnterMemDate + "/" + reEnterMemYear);

        setNameErr(validName(fName));
        setNameErr(validName(sName));
        setNameErr(ValidNINO(nINO));
        setPasswordErr(validPwd(password));
        setEmailErr(validEmail(email));
        setPostcodeErr(validPostcode(postcode));
        setNumberErr(validNumber(telephone));
        setNumberErr(validNumber(workPhone));
        setNumberErr(validNumber(mobile));

        setEmailMatchesErr(emailMatch(email, reEnterEmail))
        setPwdMatchesErr(pwdMatch(password, reEnterPwd))
        setMemMatchesErr(memDateMatch(memorableDate, reEntermemorableDate))

        console.log(`Validation result is fname/sname ${nameErr} pwd ${passwordErr}, 
        email ${emailErr}, postcode ${postcodeErr}, email matches ${emailMatchsErr}, 
        home telephone ${telephone}, work telephone ${workPhone}, mobile ${mobile},
        memorable date ${memMatchsErr}, pwd match ${pwdMatchsErr}`)

        console.log('in show in console', title, fName, mName, sName, nameChange,
            nINO, postcode, addLine1, addLine2, addLine3, addLine4,
            telephone, mobile, workPhone, email, reEnterEmail,
            memorableDate, reEntermemorableDate,
            password, reEnterPwd
        )

        if ((!pwdMatchsErr) || (!memMatchsErr) || (!emailMatchsErr) || (!nameErr) || (!emailErr) || (!postcodeErr) || (!numberErr) || (!ninoErr)) {
            !nameErr && alert('Name error');
            !emailErr && alert('Email error');
            !postcodeErr && alert('Postcode error');
            !numberErr && alert('Telephone/Mobile number error');
            !emailMatchsErr && alert('Email match error');
            !pwdMatchsErr && alert('Password error');
            !memMatchsErr && alert('Memorable date error');
            !emailMatchsErr && alert('Email error');
        }
    }

    const findPostcodeAddress = (e) => {
        e.preventDefault();
        setShowAddress(true);
        alert('Sorry... \nPostcode search is not connected to UK Post Office API, \nplease enter the address manually')
    }

    const showAddresCard = (e) => {
        e.preventDefault();
        setShowAddress(true);
    }

    return (
        <React.Fragment>
            <MDBContainer className='ps-5 pt-3'  >

                <MDBCard className='w-100 mx-auto' style={{ backgroundColor: '#f7f2f287' }} >
                    <MDBRow>
                        <MDBCol>
                            <MDBTypography className='card-header'
                                style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} >
                                <strong>{`${fName} ${mName} ${sName}`}</strong><span>Address</span>
                            </MDBTypography>
                        </MDBCol>

                    </MDBRow>

                    <MDBRow>
                        <MDBCol className='size=md '>
                            <MDBCard>
                                <MDBCardBody className='p-1'>
                                    <MDBTypography className='card-header'
                                        style={{ fontSize: '17px', backgroundColor: '#b7b5b521' }} >
                                        <strong>Address</strong>
                                    </MDBTypography>

                                    <MDBRow>
                                        <MDBCol >
                                            <MDBTypography style={{ fontSize: '16px' }} label='Name'>Address </MDBTypography>
                                        </MDBCol>
                                        <MDBCol >

                                            <MDBTypography style={{ fontSize: '16px' }} label='Name'>{addLine1} </MDBTypography>

                                            <MDBTypography style={{ fontSize: '16px' }} label='Name'>{addLine2} </MDBTypography>

                                            <MDBTypography style={{ fontSize: '16px' }} label='Name'>{addLine3} </MDBTypography>
                                            <MDBTypography style={{ fontSize: '16px' }} label='Name'>{postcode} </MDBTypography>

                                            <MDBTypography style={{ fontSize: '16px' }} label='Name'>{addLine4} </MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='size=md '>
                            <MDBCard>
                                <MDBCardBody className='p-1'>
                                    <MDBTypography className='card-header'
                                        style={{ fontSize: '17px', backgroundColor: '#b7b5b521' }} >
                                        <strong>Correspondence</strong>
                                    </MDBTypography>

                                    <MDBRow>
                                        <MDBCol >
                                            <MDBTypography style={{ fontSize: '16px' }} label='Name'>Address </MDBTypography>
                                        </MDBCol>
                                        <MDBCol >

                                            <MDBTypography style={{ fontSize: '16px' }} label='Name'>{addLine1} </MDBTypography>

                                            <MDBTypography style={{ fontSize: '16px' }} label='Name'>{addLine2} </MDBTypography>

                                            <MDBTypography style={{ fontSize: '16px' }} label='Name'>{addLine3} </MDBTypography>
                                            <MDBTypography style={{ fontSize: '16px' }} label='Name'>{postcode} </MDBTypography>

                                            <MDBTypography style={{ fontSize: '16px' }} label='Name'>{addLine4} </MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    <MDBCardBody >

                    </MDBCardBody>
                </MDBCard>

                <MDBCard>
                    <MDBCardBody>

                    </MDBCardBody>
                </MDBCard>

                {/* ***********  Contact Details  */}
                <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>

                    <MDBCardBody>
                        <div>
                            <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} tag='h6'><strong>Contact Details</strong></MDBTypography>

                        </div>

                        {/* ***********  Home telephone  */}
                        <div>

                            <div className='mt-4'>
                                <p style={{ fontSize: '17px' }}><strong>Home telephone*</strong></p>
                            </div>
                            <div className="help-content">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">including area code</span>
                                </span>
                            </div>
                            <div>
                                <div className='mt-2' >
                                    <input style={inputStyle} className='form-control' type='text' placeholder='home telephone'
                                        minLength={9} maxLength={20} onChange={(e) => { setTelephone(e.target.value) }} />
                                </div>
                            </div>

                        </div>

                        {/* ***********  Work telephone  */}
                        <div>

                            <div className='mt-4'>
                                <p style={{ fontSize: '17px' }}><strong>Work telephone*</strong></p>
                            </div>
                            <div>
                                <div className='mt-2' >
                                    <input style={inputStyle} className='form-control' type='text' placeholder='work telephone'
                                        minLength={9} maxLength={20} onChange={(e) => { setWorkPhone(e.target.value) }} />
                                </div>
                            </div>
                        </div>

                        {/* ***********  Mobile telephone  */}
                        <div>

                            <div className='mt-4'>
                                <p style={{ fontSize: '17px' }}><strong>Mobile telephone*</strong></p>
                            </div>
                            <div>
                                <div className='mt-2' >
                                    <input style={inputStyle} className='form-control' type='text' placeholder='mobile telephone'
                                        minLength={11} maxLength={20} onChange={(e) => { setMobile(e.target.value) }} />
                                </div>
                            </div>
                        </div>

                        {/* ***********  Email address  */}
                        <div>

                            <div className='mt-4'>
                                <p style={{ fontSize: '17px' }}><strong>Email address*</strong></p>
                            </div>
                            <div>
                                <div className='mt-2' >
                                    <input style={inputStyle} className='form-control' type='text' placeholder='email address'
                                        minLength={6} maxLength={40} onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <p style={{ fontSize: '17px' }}><strong>Please re-enter your email address*</strong></p>
                            </div>
                            <div>
                                <div className='mt-2' >
                                    <input style={inputStyle} className='form-control' type='text' placeholder='re-enter email address'
                                        minLength={6} maxLength={40} onChange={(e) => { setReEnterEmail(e.target.value) }} />
                                </div>
                            </div>

                        </div>

                    </MDBCardBody>
                </MDBCard>

                {/* ********** Login Details */}
                <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>

                    <MDBCardBody>

                        <div>
                            <p className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} ><strong>Login Details</strong></p>
                            <div className='mt-4'>
                                <p style={{ fontSize: '17px' }}><strong>Enter your new memorable date</strong></p>
                            </div>
                        </div>

                        <div>

                            <div className="help-content mt-2">
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">
                                        You need to set a memorable date to use when you log in next.</span>
                                </span>
                            </div>

                            <div className="help-content">
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">
                                        Please make sure you remember your new memorable date as you will need it when you log in next.</span>
                                </span>
                            </div>
                        </div>

                        {/**********  Memorable date */}
                        <div className='memorabledate'>

                            <div className='mt-4'>
                                <p style={{ fontSize: '16px' }}><strong>Enter your new memorable date*</strong></p>
                            </div>

                            <div style={{ width: '280px' }} className=" mt-2 help-content border border-grey rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text ">
                                        For example 01 01 2000</span>
                                </span>
                            </div>

                            <div className='mt-2'>
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

                            <div className='mt-4'>
                                <p style={{ fontSize: '16px' }}><strong>Enter your new memorable date again*</strong></p>
                                <div className='mt-2'>
                                    <div className='btn-group'>
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
                            </div>
                        </div>

                        {/**********  Password */}
                        <div>

                            <div className='mt-4'>
                                <p style={{ fontSize: '17px' }}><strong>Enter your new password</strong></p>
                            </div>


                            <div className="help-content">
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">
                                        You need to set a password to use when you log in next.</span>
                                </span>
                            </div>

                            <div className="help-content mt-2 mb-2">
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">
                                        Please enter a password that is between 6 and 10 characters long and has at least 1 lower case letter, 1 upper case letter and 1 number. Symbols and punctuation are not allowed.</span>
                                </span>
                            </div>
                            <div className="help-content">
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">
                                        Please make sure you remember your new password as you will need it when you log in next.</span>
                                </span>
                            </div>

                            <div className='mt-4'>
                                <p style={{ fontSize: '16px' }}><strong>Enter your new password*</strong></p>

                            </div>

                            <div className='mb-4' >
                                <input style={inputStyle} className='form-control' type='password' placeholder='Password...'
                                    minLength={6} maxLength={10} value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                            </div>

                            <div className='mt-4'>
                                <p style={{ fontSize: '16px' }}><strong>Enter your new password again*</strong></p>

                            </div>
                            <div className='mb-4' >
                                <input style={inputStyle} className='form-control' type='password' placeholder='Reenter password...'
                                    minLength={6} maxLength={10} value={reEnterPwd} onChange={(e) => { setReEnterPwd(e.target.value) }}></input>
                            </div>
                        </div>

                        <form className='d-flex w-auto'>
                            <MDBBtn style={{ fontSize: '18px', width: 'auto', textTransform: 'none' }} color='primary me-1'>
                                {/* <MDBIcon fas icon='caret-left' className='me-2' /> */}
                                Previous Page</MDBBtn>

                            <MDBBtn style={{ fontSize: '18px', width: 'auto', textTransform: 'none' }} color='primary'
                                onClick={showInConsole}>
                                {/* <MDBIcon fas icon='caret-right' className='me-2' /> */}
                                Next Page</MDBBtn>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer >
        </React.Fragment>
    );
}