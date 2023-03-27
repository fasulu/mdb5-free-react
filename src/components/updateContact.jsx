import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { dates, months } from '../resources/datePicker';
import { correspondences } from '../resources/correspondence';

import { validEmail, validPostcode, validNumber, emailMatch, validDate } from '../validations/Validator.jsx';
import { ConvertToDate, ConvertToTimeStamp } from '../utility/dateConvertion';
import { decryptDetails } from '../utility/hashDetails';
import { UserContext } from "../userContext/UserContext"

import {
    MDBCard, MDBCardBody,
    MDBRow, MDBCol,
    MDBTypography,
    MDBBtn,
    MDBRadio
} from 'mdb-react-ui-kit';
import { refreshPage } from '../utility/refreshPage';

export default function UpdateContact() {

    const { clientId, setClientId } = useContext(UserContext);

    const navigate = useNavigate();

    const correspondenceData = correspondences;

    const primaryClientIdUrl = "http://localhost:9001/client/clientid/";
    const primaryClientUpdateUrl = "http://localhost:9001/client/update/";


    const inputStyle = { marginLeft: '15px' };
    const labelStyle = { paddingLeft: '0px', maxHeight: 'auto', fontSize: '17px', width: 'auto', color: '#3b71ca' };
    const btnSytle = { fontSize: '16px', width: 'auto', textTransform: 'none', marginRight: '10px' };
    const commentStyle = {marginLeft: '15px', minHeight: '150px', fontSize: '16px', minWidth: '250px', color: 'black' };
    const comboBoxStyle = { marginLeft: '15px', maxWidth: '250px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }

    const datePickerStyle = { maxWidth: '70px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const monthPickerStyle = { maxWidth: '130px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const yearPickerStyle = { width: '80px', float: 'left', border: '5' };

    const datesData = dates;
    const monthsData = months;
    const yearMax = new Date().getFullYear();        // year picker up to current year
    const yearMin = new Date().getFullYear() - 120;  // year picker 120 year back from current year

    const [primaryApplicantClientId, setPrimaryApplicantClientId] = useState(clientId)

    var movedDate = "";
    // const [movedDate, setMovedDate] = useState(tempMovedDate);
    const [movedInDate, setMovedInDate] = useState();
    const [movedInMonth, setMovedInMonth] = useState();
    const [movedInYear, setMovedInYear] = useState();

    const [postcode, setPostcode] = useState("");
    const [addLine1, setAddLine1] = useState("");
    const [addLine2, setAddLine2] = useState("");
    const [addLine3, setAddLine3] = useState("");
    const [addLine4, setAddLine4] = useState("");

    const [communicationAddress, setCommunicationAddress] = useState("");
    const [correspondenceType, setCorrespondenceType] = useState("")
    const [corresPostcode, setCorresPostcode] = useState("");
    const [corresAddLine1, setCorresAddLine1] = useState("");
    const [corresAddLine2, setCorresAddLine2] = useState("");
    const [corresAddLine3, setCorresAddLine3] = useState("");
    const [corresAddLine4, setCorresAddLine4] = useState("");

    const [telephone, setTelephone] = useState("");
    const [workPhone, setWorkPhone] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [reEnterEmail, setReEnterEmail] = useState("");
    const [comments, setComments] = useState("none");


    const [showCorrespondence, setShowCorrespondence] = useState(false);

    useEffect(() => {

        fetchData();

        // movedDate = (response.data.memberExist.clientOtherHousehold_moved_to_current_address);
        // console.log(movedDate)
        // movedDate = ConvertToDate(movedDate);
        // setMovedInDate(movedDate.split('-')[2]); setMovedInMonth(movedDate.split('-')[1]); setMovedInYear(movedDate.split('-')[0]);

    }, [])

    async function fetchData() {
        try {
            const idRef = decryptDetails();     // get id and reference from local storage using dcrypDetails() module.
            console.log(idRef)
            setClientId(idRef.decryptedID);     // get id and reference from local storage using dcrypDetails() module.
            console.log(clientId);

            const response = await axios.get(primaryClientIdUrl + idRef.decryptedID)
            if (response.data.clientExist) {

                console.log(`Response from backend:- ${response.data.message}`)

                movedDate = ConvertToDate(response.data.clientExist.client_moved_to_current_address)
                setMovedInDate(movedDate.split('-')[2]);
                setMovedInMonth(movedDate.split('-')[1]);
                setMovedInYear(movedDate.split('-')[0])

                setPostcode(response.data.clientExist.client_postcode)
                setAddLine1(response.data.clientExist.client_address_line1)
                setAddLine2(response.data.clientExist.client_address_line2)
                setAddLine3(response.data.clientExist.client_address_line3)
                setAddLine4(response.data.clientExist.client_address_line4)
                setCommunicationAddress(response.data.clientExist.client_communication_address)
                setCorrespondenceType(response.data.clientExist.client_correspondence_type)
                setCorresPostcode(response.data.clientExist.client_correspondence_postcode)
                setCorresAddLine1(response.data.clientExist.client_correspondence_address_line1)
                setCorresAddLine2(response.data.clientExist.client_correspondence_address_line2)
                setCorresAddLine3(response.data.clientExist.client_correspondence_address_line3)
                setCorresAddLine4(response.data.clientExist.client_correspondence_address_line4)
                setTelephone(response.data.clientExist.client_telephone_home)
                setWorkPhone(response.data.clientExist.client_telephone_work)
                setMobile(response.data.clientExist.client_telephone_mobile)
                setEmail(response.data.clientExist.client_email)
                setReEnterEmail(response.data.clientExist.client_email)
                setComments(response.data.clientExist.client_comments)
            } else {

                console.log(`Response from backend:- ${response.data.message}`)

            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSave = (e) => {

        e.preventDefault();

        movedDate = movedInYear + "-" + movedInMonth + "-" + movedInDate;
        const movedInValid = validDate(movedDate)
        if (movedInValid) {
            movedDate = ConvertToTimeStamp(movedDate);
        } else {
            alert('Invalid moved-in date')
        }

        const postcodeValid = validPostcode(postcode);
        if (!postcode) {
            alert('Invalid postcode')
        }

        if (!corresPostcode == "") {
            const corresPostcodeValid = validPostcode(corresPostcode);
            if (!corresPostcodeValid) {
                alert(' Correspondence postcode invalid')
            }
        }

        const emailValid = validEmail(email);
        const telephoneValid = validNumber(telephone);
        const workphoneValid = validNumber(workPhone);
        const mobileValid = validNumber(mobile);
        const EmailMatchesValid = emailMatch(email, reEnterEmail);

        console.log(`Validation result is  email ${emailValid}, 
        postcode ${postcodeValid}, home telephone ${telephoneValid}, 
        work telephone ${workphoneValid}, mobile ${mobileValid}, 
        emailmatchesValid ${EmailMatchesValid}`)

        if (correspondenceType == "") {
            setCorrespondenceType("5")
        }

        var radioBtn = window.document.getElementById('communicationAddressYes');
        if (radioBtn.checked == true) {
            setCommunicationAddress('current address')
        } else {
            setCommunicationAddress('correspondence address')
        }

        if ((!emailValid) || (!telephoneValid) || (!movedInValid) || (!postcode) || (!corresPostcode) ||
            (!workphoneValid) || (!mobileValid) || (!EmailMatchesValid)) {

            !telephoneValid && alert('Telephone number error');
            !mobileValid && alert('Mobile number error');
            !emailValid && alert('Email error');
            !workphoneValid && alert('Work phone error');
            !EmailMatchesValid && alert('Email does not match');
        } else {

            console.log('FINAL Result passed', postcode, addLine1, addLine2, addLine3, addLine4,
                correspondenceType, communicationAddress, corresPostcode, corresAddLine1,
                corresAddLine2, corresAddLine3, corresAddLine4, telephone, mobile, workPhone,
                email, reEnterEmail, movedDate, comments
            );

            updateClient();

            // refreshPage('Contact information saved successfully')
        }
    }

    const updateClient = async () => {
        console.log('Im in update client');

        const clientInfo = {
            client_moved_to_current_address: movedDate,
            client_postcode: postcode,
            client_address_line1: addLine1,
            client_address_line2: addLine2,
            client_address_line3: addLine3,
            client_address_line4: addLine4,
            client_communication_address: communicationAddress,
            client_correspondence_type: correspondenceType,
            client_correspondence_postcode: corresPostcode,
            client_correspondence_address_line1: corresAddLine1,
            client_correspondence_address_line2: corresAddLine2,
            client_correspondence_address_line3: corresAddLine3,
            client_correspondence_address_line4: corresAddLine4,
            client_telephone_home: telephone,
            client_telephone_mobile: mobile,
            client_telephone_work: workPhone,
            client_email: email,
            client_comments: comments
        }
        console.table(clientInfo)

        const response = await axios.put(primaryClientUpdateUrl + clientId, clientInfo, {})
        console.log(`Output from backend ${response.data.message}`)

        refreshPage(response.data.message);
    }

    return (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto ps-4 pt-3' style={{ backgroundColor: '#f7f2f287' }} >
                <MDBTypography className='card-header'
                    style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} >
                    <strong>Edit Primary Applicant Details</strong>
                </MDBTypography>
                <MDBCardBody>

                    {/**********  Permanent Address */}
                    <MDBRow>
                        <MDBCol className='size=md'>

                            <MDBTypography className='card-header'
                                style={labelStyle} >
                                <strong>Date moved into this address?</strong>
                            </MDBTypography>
                            <div className='mx-3 mb-2' >
                                <div className='btn-group' >
                                    <select style={datePickerStyle}
                                        className="form-select rounded"
                                        value={movedInDate}
                                        onChange={(e) => { let newEdit = { ...movedInDate }; newEdit = e.target.value; setMovedInDate(newEdit) }} >
                                        {datesData.map((option) => (
                                            <option key={option.dKey} value={option.dKey}>{option.dValue}</option>
                                        ))}
                                    </select>

                                    <select style={monthPickerStyle}
                                        className="form-select rounded"
                                        value={movedInMonth}
                                        onChange={(e) => { let newEdit = { ...movedInMonth }; newEdit = e.target.value; setMovedInMonth(newEdit) }} >
                                        {monthsData.map((option) => (
                                            <option key={option.mKey} value={option.mKey}>{option.mValue}</option>
                                        ))}
                                    </select>

                                    <input className='form-control rounded'
                                        style={yearPickerStyle}
                                        type='number'
                                        min={yearMin + 70}
                                        max={yearMax}
                                        placeholder='year'
                                        value={movedInYear}
                                        onChange={(e) => { let newEdit = { ...movedInYear }; newEdit = e.target.value; setMovedInYear(newEdit) }} >
                                    </input>
                                </div>
                            </div>

                            <div className=''>
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

                            {/**********  Correspondence Address */}
                            <div >
                                <MDBTypography className='card-header'
                                    style={labelStyle} >
                                    <strong>Correspondence Address</strong>
                                </MDBTypography>

                                <div className=''>
                                    <MDBRow >
                                        <div className='mt-2'>
                                            <MDBRadio className='mx-2' name='communicationAddressRadio' id='communicationAddressYes' label='To my permanent address' inline
                                                defaultChecked
                                                defaultValue='current address'
                                                onChange={(e) => { let newEdit = { ...communicationAddress }; newEdit = e.target.value; setCommunicationAddress(newEdit); setShowCorrespondence(false) }}></MDBRadio>    {/* setShowCorrespondence will  show or hide according to the selection */}
                                        </div>
                                        <div className='mt-2'>
                                            <MDBRadio className='mx-2' name='communicationAddressRadio' id='communicationAddressNo' label='To my correspondence address' inline
                                                value='correspondence address'
                                                onChange={(e) => { let newEdit = { ...communicationAddress }; newEdit = e.target.value; setCommunicationAddress(newEdit); setShowCorrespondence(true) }}></MDBRadio>
                                        </div>

                                    </MDBRow>
                                </div>
                                {
                                    showCorrespondence &&
                                    <>

                                        < p className=' mt-3' ><strong>Correspondence description</strong>
                                            <select style={comboBoxStyle}
                                                className="form-select rounded"
                                                onChange={(e) => { let newEdit = { ...correspondenceType }; newEdit = e.target.value; setCorrespondenceType(newEdit); }}>    {/* showCorrespondence will show or hide according to the selection */}
                                                {correspondenceData.map((option) => (
                                                    <option key={option.correspondenceKey} value={option.correspondence}>{option.correspondence}</option>
                                                ))}
                                            </select>
                                        </p>
                                        < p className=' mt-3' ><strong>1st line of address</strong>
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
                                    </>
                                }

                            </div>


                            {/********** Contact details */}
                            <div >
                                <MDBTypography className='card-header'
                                    style={labelStyle} >
                                    <strong>Contact Details</strong>
                                </MDBTypography>
                                <p  ><strong>Home Telephone</strong>
                                    <input style={inputStyle} className='form-control' type='test' placeholder='Home telephone'
                                        minLength={9} maxLength={20} value={telephone}
                                        onChange={(e) => { let newEdit = { ...telephone }; newEdit = e.target.value; setTelephone(newEdit) }} />
                                </p>
                                <p  ><strong>Work Telephone</strong>
                                    <input style={inputStyle} className='form-control' type='test' placeholder='Work telephone'
                                        minLength={9} maxLength={20} value={workPhone}
                                        onChange={(e) => { let newEdit = { ...workPhone }; newEdit = e.target.value; setWorkPhone(newEdit) }} />
                                </p>
                                <p  ><strong>Mobile</strong>
                                    <input style={inputStyle} className='form-control' type='test' placeholder='Mobile'
                                        minLength={9} maxLength={20} value={mobile}
                                        onChange={(e) => { let newEdit = { ...mobile }; newEdit = e.target.value; setMobile(newEdit) }} />
                                </p>
                            </div>

                            <div >
                                <MDBTypography className='card-header'
                                    style={labelStyle} >
                                    <strong>Email Details</strong>
                                </MDBTypography>
                                <p  ><strong>New Email</strong>
                                    <input style={inputStyle} className='form-control' type='test' placeholder='New email'
                                        minLength={6} maxLength={40} value={email}
                                        onChange={(e) => { let newEdit = { ...email }; newEdit = e.target.value; setEmail(newEdit) }} />
                                </p>
                                <p  ><strong>Enter your new email again</strong>
                                    <input style={inputStyle} className='form-control' type='test' placeholder='Enter your new email again'
                                        minLength={6} maxLength={40} value={reEnterEmail}
                                        onChange={(e) => { let newEdit = { ...reEnterEmail }; newEdit = e.target.value; setReEnterEmail(newEdit) }} />
                                </p>
                            </div>

                            <div>
                                <MDBTypography className='card-header'
                                    style={labelStyle} >
                                    <strong>Comments</strong>
                                </MDBTypography>

                                <div  >
                                    <textarea style={commentStyle} className='form-control' type='text' placeholder='Comments...'
                                        maxLength={20} value={comments}
                                        onChange={(e) => { let newEdit = { ...comments }; newEdit = e.target.value; setComments(newEdit) }}></textarea>
                                </div>

                            </div>

                            <form className='d-flex w-auto p-3'>
                                <MDBBtn style={btnSytle}
                                    onClick={handleSave}>
                                    Save
                                </MDBBtn>

                            </form>                            
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    );
}