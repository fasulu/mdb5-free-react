import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { dates, months } from '../resources/datePicker';
import { validPwd, validEmail, validName, validPostcode, validNumber, emailMatch, pwdMatch, memDateMatch, validNINO } from '../validations/Validator.jsx';

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
    const labelStyle = { maxHeight: 'auto', fontSize: '16px', width: 'auto', color: '#3b71ca' };
    const btnSytle = { fontSize: '16px', width: 'auto', textTransform: 'none', marginRight: '10px' };

    const [postcode, setPostcode] = useState("LW1 3AN");
    const [addLine1, setAddLine1] = useState("10 Apian Street");
    const [addLine2, setAddLine2] = useState("West Minster");
    const [addLine3, setAddLine3] = useState("London");
    const [addLine4, setAddLine4] = useState("UK");

    const [corresPostcode, setCorresPostcode] = useState("LS1 1AA");
    const [corresAddLine1, setCorresAddLine1] = useState("1050 Whirlpool Suite");
    const [corresAddLine2, setCorresAddLine2] = useState("Gatewick boulevard");
    const [corresAddLine3, setCorresAddLine3] = useState("London");
    const [corresAddLine4, setCorresAddLine4] = useState("UK");

    const [telephone, setTelephone] = useState("0201234569");
    const [workPhone, setWorkPhone] = useState("0201245879");
    const [mobile, setMobile] = useState("07894563214");
    const [email, setEmail] = useState("rsunak@dowingst.com");
    const [reEnterEmail, setReEnterEmail] = useState("rsunak@dowingst.com");

    useEffect(() => {

    }, [])

    const save_ = (e) => {

        e.preventDefault();

        const emailErr = validEmail(email);
        const postcodeErr = validPostcode(postcode);
        const telephoneErr = validNumber(telephone);
        const workphoneErr = validNumber(workPhone);
        const mobileErr = validNumber(mobile);
        const EmailMatchesErr = emailMatch(email, reEnterEmail);

        console.log(`Validation result is  email ${emailErr}, 
        postcode ${postcodeErr}, home telephone ${telephoneErr}, 
        work telephone ${workphoneErr}, mobile ${mobileErr}, 
        emailmatchesErr ${EmailMatchesErr}`)

        
        if ((!emailErr) || (!postcodeErr) || (!telephoneErr) ||
            (!workphoneErr) || (!mobileErr) || (!EmailMatchesErr)) {

            !telephoneErr && alert('telephone error');
            !mobileErr && alert('mobile error');
            !emailErr && alert('Email error');
            !postcodeErr && alert('Postcode error');
            !workphoneErr && alert('work phone error');
            !EmailMatchesErr && alert('Email match error');
        } else {

            console.log('FINAL Result passed', postcode, addLine1, addLine2, addLine3, addLine4,
            corresPostcode, corresAddLine1, corresAddLine2, corresAddLine3, corresAddLine4,
            telephone, mobile, workPhone, email, reEnterEmail);
        }
    }

    const cancelEntry = (e) => {
        // window.location.reload();
        navigator('/account')
    }

    return (
        <React.Fragment>
            <MDBContainer className='ps-5 pt-3' alignment='center' >
                <MDBCard className='w-100 mx-auto' style={{ backgroundColor: '#f7f2f287' }} >
                    <MDBTypography className='card-header'
                        style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} >
                        <strong>Edit Member Details</strong>
                    </MDBTypography>
                    <MDBCardBody>

                        {/**********  Permanent Address */}
                        <MDBRow>
                            <MDBCol className='size=md'>
                                <div className='p-2'>
                                    <MDBTypography className='card-header'
                                        style={labelStyle} >
                                        <strong>Permanent Address</strong>
                                    </MDBTypography>

                                    <p className='mt-3' ><strong>1st line of address</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='1st line of your address'
                                            minLength={9} maxLength={20} value={addLine1}
                                            onChange={(e) => { let newEdit = { ...addLine1 }; newEdit = e.target.value; setAddLine1(newEdit) }} /></p>

                                    <p className=' mt-3'><strong>2nd line of address</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='2nd line of your address'
                                            minLength={9} maxLength={20} value={addLine2}
                                            onChange={(e) => { let newEdit = { ...addLine2 }; newEdit = e.target.value; setAddLine2(newEdit) }} /></p>

                                    <p className=' mt-3'><strong>3rd line of address</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='3rd line of your address'
                                            minLength={9} maxLength={20} value={addLine3}
                                            onChange={(e) => { let newEdit = { ...addLine3 }; newEdit = e.target.value; setAddLine3(newEdit) }} /></p>

                                    <p className=' mt-3' ><strong>4th line of address</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='4th line of your address'
                                            minLength={9} maxLength={20} value={addLine4}
                                            onChange={(e) => { let newEdit = { ...addLine4 }; newEdit = e.target.value; setAddLine4(newEdit) }} /></p>

                                    <p className=' mt-3' ><strong>Postcode</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='Postcode'
                                            minLength={6} maxLength={9} value={postcode}
                                            onChange={(e) => { let newEdit = { ...postcode }; newEdit = e.target.value; setPostcode(newEdit) }} /></p>
                                </div>
                            </MDBCol>

                            {/**********  Correspondence Address */}
                            <MDBCol className='size=md'>
                                <div className='p-2'>
                                    <MDBTypography className='card-header'
                                        style={labelStyle} >
                                        <strong>Correspondence Address</strong>
                                    </MDBTypography>
                                    <p className=' mt-3' ><strong>1st line of address</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='1st line of correspondence address'
                                            minLength={9} maxLength={20} value={corresAddLine1}
                                            onChange={(e) => { let newEdit = { ...corresAddLine1 }; newEdit = e.target.value; setCorresAddLine1(newEdit) }} /></p>

                                    <p className=' mt-3' ><strong>2nd line of address</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='2nd line of correspondence address'
                                            minLength={9} maxLength={20} value={corresAddLine2}
                                            onChange={(e) => { let newEdit = { ...corresAddLine2 }; newEdit = e.target.value; setCorresAddLine2(newEdit) }} /></p>

                                    <p className=' mt-3' ><strong>3rd line of address</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='3rd line of correspondence address'
                                            minLength={9} maxLength={20} value={corresAddLine3}
                                            onChange={(e) => { let newEdit = { ...corresAddLine3 }; newEdit = e.target.value; setCorresAddLine3(newEdit) }} /></p>

                                    <p className=' mt-3' ><strong>4th line of address</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='4th line of correspondence address'
                                            minLength={9} maxLength={20} value={corresAddLine4}
                                            onChange={(e) => { let newEdit = { ...corresAddLine4 }; newEdit = e.target.value; setCorresAddLine4(newEdit) }} /></p>

                                    <p className=' mt-3' ><strong>Postcode</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='Correspondence postcode'
                                            minLength={6} maxLength={9} value={corresPostcode}
                                            onChange={(e) => { let newEdit = { ...corresPostcode }; newEdit = e.target.value; setCorresPostcode(newEdit) }} /></p>
                                </div>
                            </MDBCol>
                        </MDBRow>

                        {/********** Contact details */}
                        <MDBRow>
                            <MDBCol className='size=md'>
                                <div className='p-2'>
                                    <MDBTypography className='card-header'
                                        style={labelStyle} >
                                        <strong>Contact Details</strong>
                                    </MDBTypography>
                                    <p className=' mt-3' ><strong>Home Telephone</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='Home telephone'
                                            minLength={9} maxLength={20} value={telephone}
                                            onChange={(e) => { let newEdit = { ...telephone }; newEdit = e.target.value; setTelephone(newEdit) }} />
                                    </p>
                                    <p className=' mt-3' ><strong>Work Telephone</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='Work telephone'
                                            minLength={9} maxLength={20} value={workPhone}
                                            onChange={(e) => { let newEdit = { ...workPhone }; newEdit = e.target.value; setWorkPhone(newEdit) }} />
                                    </p>
                                    <p className=' mt-3' ><strong>Mobile</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='Mobile'
                                            minLength={9} maxLength={20} value={mobile}
                                            onChange={(e) => { let newEdit = { ...mobile }; newEdit = e.target.value; setMobile(newEdit) }} />
                                    </p>
                                </div>
                            </MDBCol>

                            <MDBCol className='size=md'>
                                <div className='p-2'>
                                    <MDBTypography className='card-header'
                                        style={labelStyle} >
                                        <strong>Email Details</strong>
                                    </MDBTypography>
                                    <p className=' mt-3' ><strong>New Email</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='New email'
                                            minLength={6} maxLength={40} value={email}
                                            onChange={(e) => { let newEdit = { ...email }; newEdit = e.target.value; setEmail(newEdit) }} />
                                    </p>
                                    <p className=' mt-3' ><strong>Enter your new email again</strong>
                                        <input style={inputStyle} className='form-control' type='test' placeholder='Enter your new email again'
                                            minLength={6} maxLength={40} value={reEnterEmail}
                                            onChange={(e) => { let newEdit = { ...reEnterEmail }; newEdit = e.target.value; setReEnterEmail(newEdit) }} />
                                    </p>
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <form className='d-flex w-auto p-2'>
                            <MDBBtn style={btnSytle}
                                onClick={save_}>
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
        </React.Fragment>
    );
}