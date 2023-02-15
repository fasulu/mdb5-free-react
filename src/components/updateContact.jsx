import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { dates, months } from '../resources/datePicker';
import { validPwd, validEmail, validName, validPostcode, validNumber, emailMatch, pwdMatch, memDateMatch, ValidNINO } from '../validations/Validator.jsx';

import {
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBRow, MDBCol,
    MDBTypography,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function UpdateContact() {

    const navigator = useNavigate();

    const inputStyle = { marginLeft: '5px' };
    
    const [fName, setFName] = useState("Rishi");
    const [mName, setMName] = useState("Sunak");
    const [sName, setSName] = useState("Singh");
    const [nINO, setNINO] = useState("ZW123456P");
    const [addLine1, setAddLine1] = useState("10 Downing Street");
    const [addLine2, setAddLine2] = useState("West Minster");
    const [addLine3, setAddLine3] = useState("London");
    const [postcode, setPostcode] = useState("LW1 3AN");
    const [addLine4, setAddLine4] = useState("UK");

    const [correspondenceAddLine1, setCorrespondenceAddLine1] = useState("1050 Whirlpool Suite");
    const [correspondenceAddLine2, setCorrespondenceAddLine2] = useState("Gatewick boulevard");
    const [correspondenceAddLine3, setCorrespondenceAddLine3] = useState("London");
    const [correspondencePostcode, setCorrespondencePostcode] = useState("LS1 1AA");
    const [correspondenceAddLine4, setCorrespondenceAddLine4] = useState("UK");

    const [telephone, setTelephone] = useState("0201234569");
    const [mobile, setMobile] = useState("07894563214");
    const [workPhone, setWorkPhone] = useState("0201245879");
    const [email, setEmail] = useState("rsunak@dowingst.com");
    const [reEnterEmail, setReEnterEmail] = useState("rsunak@dowingst.com");
    
    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [numberErr, setNumberErr] = useState(false)
    const [emailMatchsErr, setEmailMatchesErr] = useState(false)
    
    useEffect(() => {

    }, [])

    const save = (e) => {

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

    const cancelEntry = (e) => {
        // window.location.reload();
        navigator('/account')
    }

    return (
        <React.Fragment>
            <MDBContainer className='ps-5 pt-3'  >
                <MDBCard className='w-100 mx-auto' style={{ backgroundColor: '#f7f2f287' }} >
                    <MDBTypography className='card-header'
                        style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} >
                        <strong>{`${fName} ${mName} ${sName} (NINO:- ${nINO})`}</strong>
                    </MDBTypography>

                    <MDBCardBody>

                        {/**********  Permanent Address */}
                        <MDBRow>
                            <MDBCol className='size=md'>
                                <div className='p-2'>
                                    <MDBTypography className='card-header'
                                        style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} >
                                        <strong>Permanent Address</strong>
                                    </MDBTypography>

                                    <p className='mt-3' ><strong>1st line of address</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='1st line of your address'
                                            minLength={9} maxLength={20} value={addLine1} onChange={(e) => { setAddLine1(e.target.value) }} /></p>

                                    <p className=' mt-3'><strong>2nd line of address</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='2nd line of your address'
                                            minLength={9} maxLength={20} value={addLine2} onChange={(e) => { setAddLine2(e.target.value) }} /></p>

                                    <p className=' mt-3'><strong>3rd line of address</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='3rd line of your address'
                                            minLength={9} maxLength={20} value={addLine3} onChange={(e) => { setAddLine3(e.target.value) }} /></p>

                                    <p className=' mt-3' ><strong>4th line of address</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='4th line of your address'
                                            minLength={9} maxLength={20} value={addLine4} onChange={(e) => { setAddLine4(e.target.value) }} /></p>

                                    <p className=' mt-3' ><strong>Postcode</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='Postcode'
                                            minLength={9} maxLength={20} value={postcode} onChange={(e) => { setPostcode(e.target.value) }} /></p>
                                </div>
                            </MDBCol>

                            {/**********  Correspondence Address */}
                            <MDBCol className='size=md'>
                                <div className='p-2'>
                                    <MDBTypography className='card-header'
                                        style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} >
                                        <strong>Correspondence Address</strong>
                                    </MDBTypography>
                                    <p className=' mt-3' ><strong>1st line of address</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='1st line of correspondence address'
                                            minLength={9} maxLength={20} value={correspondenceAddLine1} onChange={(e) => { setCorrespondenceAddLine1(e.target.value) }} /></p>

                                    <p className=' mt-3' ><strong>2nd line of address</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='2nd line of correspondence address'
                                            minLength={9} maxLength={20} value={correspondenceAddLine2} onChange={(e) => { setCorrespondenceAddLine2(e.target.value) }} /></p>

                                    <p className=' mt-3' ><strong>3rd line of address</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='3rd line of correspondence address'
                                            minLength={9} maxLength={20} value={correspondenceAddLine3} onChange={(e) => { setCorrespondenceAddLine3(e.target.value) }} /></p>

                                    <p className=' mt-3' ><strong>4th line of address</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='4th line of correspondence address'
                                            minLength={9} maxLength={20} value={correspondenceAddLine4} onChange={(e) => { setCorrespondenceAddLine4(e.target.value) }} /></p>

                                    <p className=' mt-3' ><strong>Postcode</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='Correspondence postcode'
                                            minLength={9} maxLength={20} value={correspondencePostcode} onChange={(e) => { setCorrespondencePostcode(e.target.value) }} /></p>

                                </div>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol className='size=md'>
                                <div className='p-2'>
                                    <MDBTypography className='card-header'
                                        style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} >
                                        <strong>Contact Details</strong>
                                    </MDBTypography>
                                    <p className=' mt-3' ><strong>Home Telephone</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='Home telephone'
                                            minLength={9} maxLength={20} value={telephone} onChange={(e) => { setTelephone(e.target.value) }} />
                                    </p>
                                    <p className=' mt-3' ><strong>Work Telephone</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='Work telephone'
                                            minLength={9} maxLength={20} value={workPhone} onChange={(e) => { setWorkPhone(e.target.value) }} />
                                    </p>
                                    <p className=' mt-3' ><strong>Mobile</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='Mobile'
                                            minLength={9} maxLength={20} value={mobile} onChange={(e) => { setMobile(e.target.value) }} />
                                    </p>
                                </div>
                            </MDBCol>
                            <MDBCol className='size=md'>
                                <div className='p-2'>
                                    <MDBTypography className='card-header'
                                        style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} >
                                        <strong>Email Details</strong>
                                    </MDBTypography>
                                    <p className=' mt-3' ><strong>New Email</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='New email'
                                            minLength={6} maxLength={40} value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                    </p>
                                    <p className=' mt-3' ><strong>Enter your new email again</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='Enter your new email again'
                                            minLength={6} maxLength={40} value={reEnterEmail} onChange={(e) => { setReEnterEmail(e.target.value) }} />
                                    </p>
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <form className='d-flex w-auto p-2'>
                            <MDBBtn style={{ fontSize: '18px', width: 'auto', textTransform: 'none' }}
                                color='success me-1'
                                onClick={save}>
                                Save
                            </MDBBtn>

                            <MDBBtn style={{ fontSize: '18px', width: 'auto', textTransform: 'none' }}
                                color='warning'
                                onClick={cancelEntry}>
                                Cancel
                            </MDBBtn>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer >
        </React.Fragment>
    );
}