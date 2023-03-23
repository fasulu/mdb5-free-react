import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import { UserContext } from "../userContext/UserContext"
import { useNavigate, useLocation } from "react-router-dom";

import { dates, months } from '../resources/datePicker';
import { validEmail, validDate, validPostcode, validNumber } from '../validations/Validator.jsx';
import { ToCamelCase } from '../validations/Validator.jsx';
import { ConvertToDate, ConvertToTimeStamp } from '../utility/dateConvertion';

import {
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBRow, MDBCol,
    MDBTypography,
    MDBBtn,
    MDBRadio
} from 'mdb-react-ui-kit';

export default function JointApplicantEdit() {

    const { clientId, setClientId } = useContext(UserContext);

    const navigate = useNavigate();
    const location = useLocation();

    // var primaryApplicantID = location.state.primaryID;

    const findPrimaryIDInClientUrl = "http://localhost:9001/client/clientid/";
    const findPrimaryIDInJointUrl = "http://localhost:9001/joint/clientid/";

    const updateJointApplicantUrl = "http://localhost:9001/joint/update/";

    const datesData = dates;
    const monthsData = months;

    const yearMax = new Date().getFullYear();        // year picker up to current year
    const yearMin = new Date().getFullYear() - 120;  // year picker 120 year back from current year

    const labelStyle = { maxHeight: 'auto', fontSize: '15px', width: 'auto', color: '#4f4f4f', padding: '0px', marginLeft: '0px' };
    const inputStyle = { maxHeight: 'auto', fontSize: '16px', minwidth: '250px', color: 'black' };
    const commentStyle = { minHeight: '150px', fontSize: '16px', minWidth: '250px', color: 'black' };
    const memberStyle = { paddingLeft: '10px', color: 'black', };
    const headerStyle = { fontSize: '17px', backgroundColor: '#e3f6fd' };
    const btnSytle = { fontSize: '16px', width: 'auto', textTransform: 'none', marginRight: '10px' };

    const comboBoxStyle = { maxWidth: '250px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const datePickerStyle = { maxWidth: '70px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const monthPickerStyle = { maxWidth: '130px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const yearPickerStyle = { width: '80px', float: 'left', border: '5' };

    const [relationWithPrimaryApplicant, setRelationWithPrimaryApplicant] = useState("")
    const [_id, set_id] = useState("");
    const [fName, setFName] = useState("");
    const [mName, setMName] = useState("");
    const [sName, setSName] = useState("");
    const [nINO, setNINO] = useState("");
    const [sex, setSex] = useState("");

    var tempDOB = ""
    var tempMovedDate = "";
    var tempDelDate = "";
    var moved_ = "";
    var delDate_ = "";

    // tempDOB = tempDOB.split('-')[2] + '-' + tempDOB.split('-')[1] + '-' + tempDOB.split('-')[0]
    const [dateofbirth, setdateofbirth] = useState("");
    const [primaryApplicantAddress, setPrimaryApplicantAddress] = useState("")
    const [currentlyLiveWithYou, setCurrentlyLiveWithYou] = useState();

    const [movedDate, setMovedDate] = useState(tempMovedDate);
    const [movedInDate, setMovedInDate] = useState(tempMovedDate.split('-')[1]);
    const [movedInMonth, setMovedInMonth] = useState(tempMovedDate.split('-')[0]);
    const [movedInYear, setMovedInYear] = useState(tempMovedDate.split('-')[2]);

    const [livingInDiffAddress, setLivingInDiffAddress] = useState("");
    const [showCorrespondenceAddress, setShowCorrespondenceAddress] = useState(false)
    const [corresPostcode, setCorresPostcode] = useState("");
    const [corresLine1, setCorresLine1] = useState("");
    const [corresLine2, setCorresLine2] = useState("");
    const [corresLine3, setCorresLine3] = useState("");
    const [corresLine4, setCorresLine4] = useState("");
    const [isShePregnant, setIsShePregnant] = useState("no");
    const [showDeliveryDate, setShowDeliveryDate] = useState(false);

    const [deliveryDate, setDeliveryDate] = useState(tempDelDate);
    const [delDate, setDelDate] = useState(tempDelDate.split('-')[1]);
    const [delMonth, setDelMonth] = useState(tempDelDate.split('-')[0]);
    const [delYear, setDelYear] = useState(tempDelDate.split('-')[2]);
    const [telephone, setTelephone] = useState("");
    const [workPhone, setWorkPhone] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [healthCondition, setHealthCondition] = useState("");
    const [areYouWorker, setAreYouWorker] = useState("no");
    const [comments, setComments] = useState("");

    const [showPregnantField, setShowPregnantField] = useState(false)

    useEffect(() => {
        fetchData();

        if (sex.toLowerCase() == "male") {
            setShowPregnantField(false);
        } else { setShowPregnantField(true) }
    }, [])

    async function fetchData() {
        try {
            console.log(`UseEffect :- ${findPrimaryIDInJointUrl + clientId}`);

            const responseClient = await axios.get(findPrimaryIDInClientUrl + clientId)
            console.log(`Primary applicant found in primary client collection:- ${responseClient.data.clientExist._id}`)
            if (responseClient) {
                const responseJoint = await axios.get(findPrimaryIDInJointUrl + clientId)
                if (responseJoint) {
                    console.log(`Primary applicant found in joint collection:- ${responseJoint.data.jointApplicantDetails.clientId}`)
                    set_id(responseJoint.data.jointApplicantDetails._id)
                    setRelationWithPrimaryApplicant(responseJoint.data.jointApplicantDetails.clientJoint_relationship)
                    setFName(responseJoint.data.jointApplicantDetails.clientJoint_firstname)
                    setMName(responseJoint.data.jointApplicantDetails.clientJoint_middlename)
                    setSName(responseJoint.data.jointApplicantDetails.clientJoint_surname)
                    setNINO(responseJoint.data.jointApplicantDetails.clientJoint_NINO)
                    setSex(responseJoint.data.jointApplicantDetails.clientJoint_Sex)

                    tempDOB = ConvertToDate(responseJoint.data.jointApplicantDetails.clientJoint_dateofbirth);
                    setdateofbirth(tempDOB.split('-')[2] + '-' + tempDOB.split('-')[1] + '-' + tempDOB.split('-')[0]);

                    setCurrentlyLiveWithYou(responseJoint.data.jointApplicantDetails.clientJoint_current_live_with_you)
                    if (responseJoint.data.jointApplicantDetails.clientJoint_current_live_with_you === 'yes') {

                        window.document.getElementById('livingInDiffAddressYes').checked = true;
                        window.document.getElementById('livingInDiffAddressNo').checked = false;
                        setShowCorrespondenceAddress(false);

                    } else {
                        window.document.getElementById('livingInDiffAddressNo').checked = true;;
                        window.document.getElementById('livingInDiffAddressYes').checked = false;
                        setShowCorrespondenceAddress(true);
                    }

                    setLivingInDiffAddress(responseJoint.data.jointApplicantDetails.clientJoint_livingin_different_address)

                    setHealthCondition(responseJoint.data.jointApplicantDetails.clientJoint_illness);

                    tempMovedDate = ConvertToDate(responseJoint.data.jointApplicantDetails.clientJoint_moved_to_current_address);
                    console.log(`temp date ${tempMovedDate}`)
                    setMovedInDate(tempMovedDate.split('-')[2]); setMovedInMonth(tempMovedDate.split('-')[1]); setMovedInYear(tempMovedDate.split('-')[0]);

                    setTelephone(responseJoint.data.jointApplicantDetails.clientJoint_telephone_home)
                    setWorkPhone(responseJoint.data.jointApplicantDetails.clientJoint_telephone_work)
                    setMobile(responseJoint.data.jointApplicantDetails.clientJoint_telephone_mobile)
                    setEmail(responseJoint.data.jointApplicantDetails.clientJoint_email)

                    if (responseJoint.data.jointApplicantDetails.clientJoint_delivery_date === "") {
                        setDelDate("dd"); setDelMonth("mm"); setDelYear("yy");
                    }
                    tempDelDate = ConvertToDate(responseJoint.data.jointApplicantDetails.clientJoint_delivery_date)
                    setDelDate(tempDelDate.split('-')[2]); setDelMonth(tempDelDate.split('-')[1]); setDelYear(tempDelDate.split('-')[0]);

                    setAreYouWorker(responseJoint.data.jointApplicantDetails.clientJoint_are_you_worker)
                    setComments(responseJoint.data.jointApplicantDetails.clientJoint_comments)

                    setCorresPostcode(responseJoint.data.jointApplicantDetails.clientJoint_corres_postcode)
                    setCorresLine1(responseJoint.data.jointApplicantDetails.clientJoint_corres_address_line1)
                    setCorresLine2(responseJoint.data.jointApplicantDetails.clientJoint_corres_address_line2)
                    setCorresLine3(responseJoint.data.jointApplicantDetails.clientJoint_corres_address_line3)
                    setCorresLine4(responseJoint.data.jointApplicantDetails.clientJoint_corres_address_line4)
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    const findPostcodeAddress = (e) => {
        e.preventDefault();
        setShowCorrespondenceAddress(true);
        alert('Sorry... \nPostcode search is not able to connect with UK Post Office API, \nplease enter the address manually')
    }

    const handleJointApplicant = (e) => {
        e.preventDefault();

        // const delvy = delYear + '-' + delMonth + '-' + delDate;
        // setDeliveryDate(delvy);
        // const moved = movedInYear + '-' + movedInMonth + '-' + movedInDate;
        // setMovedDate(moved);

        const postcodeValid = validPostcode(corresPostcode);

        const movedDateValid = validDate(movedInYear + '-' + movedInMonth + '-' + movedInDate)
        if (movedDateValid) {
            moved_ = ConvertToTimeStamp(movedInYear + '-' + movedInMonth + '-' + movedInDate)
            console.log(moved_)
            setMovedDate(moved_)
        }
        const deliveryValid = validDate(delYear + '-' + delMonth + '-' + delDate);
        if (deliveryValid) {
            delDate_ = ConvertToTimeStamp(delYear + '-' + delMonth + '-' + delDate)
            console.log(delDate_)
            setDeliveryDate(delDate_)
        }
        const emailValid = validEmail(email);
        const telephoneValid = validNumber(telephone);
        const workphoneValid = validNumber(workPhone);
        const mobileValid = validNumber(mobile);

        // if not pregnant set data to empty string
        if (!isShePregnant) {
            setDeliveryDate("")
        }
        // on changing to living with primary applicant empty all corres address
        if (currentlyLiveWithYou == "yes") {
            setCorresPostcode("")
            setCorresLine1("")
            setCorresLine2("")
            setCorresLine3("")
            setCorresLine4("")
        }

        console.log(`Validation result is postcode ${postcodeValid} email ${emailValid}, 
        home telephone ${telephoneValid}, work telephone ${workphoneValid}, 
        mobile ${mobileValid}, delivery ${deliveryValid}, movedDate ${movedDateValid}`)

        if ((!postcodeValid) || (!movedDateValid) || (!deliveryValid) ||
            (!emailValid) || (!telephoneValid) || (!workphoneValid) || (!mobileValid)) {
            !postcodeValid && alert('Postcode error');
            !movedDateValid && alert('Moved In date error');
            !deliveryValid && alert('Delivery date error');
            !emailValid && alert('Email error');
            !telephoneValid && alert('Telephone number error');
            !workphoneValid && alert('Work telephone number error');
            !mobileValid && alert('Mobile number error');
        } else {
            console.log('FINAL Result passed', healthCondition, currentlyLiveWithYou,
                movedDate, corresPostcode, corresLine1, corresLine2, corresLine3, corresLine4,
                currentlyLiveWithYou, telephone, mobile, workPhone,
                isShePregnant, deliveryDate, areYouWorker
            )
            saveJointApplicant()
        }
    }

    const saveJointApplicant = async () => {

        console.log(`In save joint applicant jointId is ${_id}`);

        const JointApplicantInfo = {

            clientJoint_current_live_with_you: currentlyLiveWithYou,
            clientJoint_livingin_different_address: livingInDiffAddress,
            clientJoint_moved_to_current_address: moved_,

            clientJoint_corres_postcode: corresPostcode,
            clientJoint_corres_address_line1: corresLine1,
            clientJoint_corres_address_line2: corresLine2,
            clientJoint_corres_address_line3: corresLine3,
            clientJoint_corres_address_line4: corresLine4,

            clientJoint_is_she_pregnant: isShePregnant,
            clientJoint_delivery_date: delDate_,

            clientJoint_telephone_home: telephone,
            clientJoint_telephone_work: workPhone,
            clientJoint_telephone_mobile: mobile,
            clientJoint_email: email,

            clientJoint_illness: healthCondition,

            clientJoint_are_you_worker: areYouWorker,

            clientJoint_comments: comments,
        }
        console.table(JointApplicantInfo)
        try {

            const response = await axios.put(updateJointApplicantUrl + _id, JointApplicantInfo, {})
            console.log(`Output from backend ${response.data.message}`)

            if (response.status === 200) {
                console.log(`Status from backend ${response.status}`);
            }

        } catch (error) {
            console.log(error)
        }
    }

    const gotoAccountPage = (e) => {
        navigate('/account');
    }

    return (
        <React.Fragment>
            <MDBContainer className='ps-5 pt-3' >

                <MDBCard className='w-100 mx-auto' style={{ backgroundColor: '#f7f2f287' }} >
                    <MDBCardBody >

                        {/* ********** Applicant relationship  */}

                        <MDBRow alignment='center'>
                            <MDBTypography className='card-header mb-4' style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} >
                                <strong>Edit Partner/Joint Applicant Details</strong>
                            </MDBTypography>
                            <MDBRow>
                                <MDBCol className='col-lg-3 col-md-4 col-sm-6 col-xs-6'>
                                    <MDBTypography style={labelStyle}>Full Name:<strong style={memberStyle}>{ToCamelCase(fName) + " " + ToCamelCase(sName)}</strong></MDBTypography>

                                </MDBCol>
                                <MDBCol className='col-lg-3 col-md-4 col-sm-6 col-xs-6'>
                                    <MDBTypography style={labelStyle}>NINO:<strong style={memberStyle}>{nINO.toUpperCase()}</strong></MDBTypography>

                                </MDBCol>
                                <MDBCol className='col-lg-3 col-md-2 col-sm-6 col-xs-6'>
                                    <MDBTypography style={labelStyle}>DOB:<strong style={memberStyle}>{ToCamelCase(dateofbirth)}</strong></MDBTypography>

                                </MDBCol>
                                <MDBCol className='col-lg-3 col-md-2 col-sm-6 col-xs-6'>
                                    <MDBTypography style={labelStyle}>Relation:<strong style={memberStyle}>{ToCamelCase(relationWithPrimaryApplicant)}</strong></MDBTypography>
                                </MDBCol>
                            </MDBRow>
                        </MDBRow>

                        <hr style={{ height: '4px' }}></hr>

                        <MDBTypography className='card-header mt-4 mb-2'
                            style={headerStyle} >
                            <strong>Does this person have any physical or mental health conditions or illnesses lasting or expected to last for 12 months or more?</strong>
                        </MDBTypography>
                        <div className='px-4 mb-2' >
                            <select style={{ overflow: 'scroll', width: '150px' }} className="form-select rounded"
                                onChange={(e) => { let newEdit = { ...healthCondition }; newEdit = e.target.value; setHealthCondition(newEdit) }} >
                                <option defaultValue >Please choose</option>
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                                <option value="prefer not to say">Prefer not to say</option>
                            </select>
                        </div>

                        <MDBTypography className='card-header mt-4 mb-2'
                            style={headerStyle} >
                            <strong>Does this person currently live with you?</strong>
                        </MDBTypography>
                        <div className='px-4 mb-2' >
                            <MDBRow>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='currentlyLiveWithYouRadio' label='Yes' value='yes'
                                        inline id='currentlyLiveWithYouYes'
                                        htmlFor="currentlyLiveWithYouYes"
                                        onClick={(e) => { let newEdit = { ...currentlyLiveWithYou }; newEdit = e.target.value; setCurrentlyLiveWithYou(newEdit); setShowCorrespondenceAddress(false) }}></MDBRadio>
                                </MDBCol>

                                <MDBCol className='col-3'>
                                    <MDBRadio name='currentlyLiveWithYouRadio' label='No' value='no'
                                        inline id='currentlyLiveWithYouNo' htmlFor='currentlyLiveWithYouNo'
                                        onClick={(e) => { let newEdit = { ...currentlyLiveWithYou }; newEdit = e.target.value; setCurrentlyLiveWithYou(newEdit); setShowCorrespondenceAddress(true) }}></MDBRadio>
                                </MDBCol>
                            </MDBRow>
                        </div>

                        <MDBTypography className='card-header mt-4 mb-3'
                            style={headerStyle} >
                            <strong>Date moved into this address?</strong>
                        </MDBTypography>

                        <div className='px-4 mb-2' >
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

                        <div className='mt-4 mb-2' >
                            <div style={{ fontSize: '13px', height: 'auto', width: 'auto', background: '#e4f5fb' }} className=" help-content border border-grey rounded">
                                <MDBTypography className='card-header'
                                    style={headerStyle} >
                                    <strong>What is their current address</strong>
                                </MDBTypography>
                            </div>
                            <MDBRow className='mt-2 mb-2'>
                                <MDBRadio className='mx-3' name='livingInDiffAddressRadio' id='livingInDiffAddressYes'
                                    htmlFor='livingInDiffAddressYes' label='Living with primary applicant'
                                    value='Living with primary applicant'
                                    onChange={(e) => { setLivingInDiffAddress("Living with primary applicant"); setShowCorrespondenceAddress(false); }}></MDBRadio>     {/* Get and show primary applicant address in this place */}

                            </MDBRow>
                            <MDBRow>
                                <MDBRadio className='mx-3' name='livingInDiffAddressRadio' id='livingInDiffAddressNo'
                                    label='This person is living at a different address' htmlFor='livingInDiffAddressNo'
                                    value='Living in different address'
                                    onChange={(e) => { setLivingInDiffAddress("Living in different address"); setShowCorrespondenceAddress(true); }}></MDBRadio>     {/* Spouse or partner living in different address */}
                            </MDBRow>

                        </div>

                        {/* ***********  Address  */}
                        {
                            showCorrespondenceAddress &&
                            <div id='showAddress'>
                                <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                                    <MDBCardBody>
                                        <div id='showAddressDetails'>
                                            <p style={{ fontSize: '16px' }}><strong>Postcode*</strong></p>

                                            <div className='mt-3 mb-2' >
                                                <input style={inputStyle} className='form-control' type='text' placeholder='postcode...'
                                                    maxLength={8} value={corresPostcode || ""}
                                                    onChange={(e) => { let newEdit = { ...corresPostcode }; newEdit = e.target.value; setCorresPostcode(newEdit) }} />
                                            </div>
                                            <form className='d-flex w-auto mb-3'>
                                                <MDBBtn style={{ fontSize: '16px', width: 'auto', textTransform: 'none' }} color='primary me-1'
                                                    onClick={findPostcodeAddress} >
                                                    Find address
                                                </MDBBtn>
                                            </form>
                                            {/* ***********  Address line 1  */}
                                            <div>

                                                <div className='mt-4'>
                                                    <p style={{ fontSize: '16px' }}><strong>Address line 1*</strong></p>
                                                </div>

                                                <div className='' >
                                                    <input style={inputStyle} className='form-control ' type='text' placeholder='house or flat number and street'
                                                        maxLength={75} value={corresLine1 || ""}
                                                        onChange={(e) => { let newEdit = { ...corresLine1 }; newEdit = e.target.value; setCorresLine1(newEdit) }} />
                                                </div>
                                            </div>
                                            {/* ***********  Address line 2  */}
                                            <div>
                                                <div className='mt-4'>
                                                    <p style={{ fontSize: '16px' }}><strong>Address line 2*</strong></p>
                                                </div>
                                                <div className='' >
                                                    <input style={inputStyle} className='form-control' type='text' placeholder='Address line 2'
                                                        maxLength={75} value={corresLine2 || ""}
                                                        onChange={(e) => { let newEdit = { ...corresLine2 }; newEdit = e.target.value; setCorresLine2(newEdit) }} />
                                                </div>
                                            </div>

                                            {/* ***********  Address line 3  */}
                                            <div>
                                                <div className='mt-4'>
                                                    <p style={{ fontSize: '16px' }}><strong>Address line 3*</strong></p>
                                                </div>
                                                <div className='' >
                                                    <input style={inputStyle} className='form-control' type='text' placeholder='Address line 3'
                                                        maxLength={75} value={corresLine3 || ""}
                                                        onChange={(e) => { let newEdit = { ...corresLine3 }; newEdit = e.target.value; setCorresLine3(newEdit) }} />
                                                </div>
                                            </div>

                                            {/* ***********  Address line 4  */}
                                            <div>
                                                <div className='mt-4'>
                                                    <p style={{ fontSize: '16px' }}><strong>Address line 4*</strong></p>
                                                </div>
                                                <div className='' >
                                                    <input style={inputStyle} className='form-control' type='text' placeholder='Address line 4'
                                                        maxLength={75} value={corresLine4 || ""}
                                                        onChange={(e) => { let newEdit = { ...corresLine4 }; newEdit = e.target.value; setCorresLine4(newEdit) }} />
                                                </div>
                                            </div>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                        }

                        <MDBTypography className='card-header mt-4 mb-2'
                            style={headerStyle} >
                            <strong>Home telephone</strong>
                        </MDBTypography>
                        <div className='px-4 mb-2' >
                            <MDBRow>
                                <MDBCol className='col-6'>
                                    <div  >
                                        <input style={inputStyle} className='form-control' type='text' placeholder='Work phone...'
                                            maxLength={20} value={telephone}
                                            onChange={(e) => { let newEdit = { ...telephone }; newEdit = e.target.value; setTelephone(newEdit) }}></input>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </div>

                        <MDBTypography className='card-header mt-4 mb-2'
                            style={headerStyle} >
                            <strong>Work telephone</strong>
                        </MDBTypography>
                        <div className='px-4 mb-2' >
                            <MDBRow>
                                <MDBCol className='col-6'>
                                    <div  >
                                        <input style={inputStyle} className='form-control' type='text' placeholder='Work phone...'
                                            maxLength={20} value={workPhone}
                                            onChange={(e) => { let newEdit = { ...workPhone }; newEdit = e.target.value; setWorkPhone(newEdit) }}></input>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </div>

                        <MDBTypography className='card-header mt-4 mb-2'
                            style={headerStyle} >
                            <strong>Mobile</strong>
                        </MDBTypography>
                        <div className='px-4 mb-2' >
                            <MDBRow>
                                <MDBCol className='col-6'>
                                    <div  >
                                        <input style={inputStyle} className='form-control' type='text' placeholder='Mobile...'
                                            maxLength={20} value={mobile}
                                            onChange={(e) => { let newEdit = { ...mobile }; newEdit = e.target.value; setMobile(newEdit) }}></input>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </div>

                        <MDBTypography className='card-header mt-4 mb-2'
                            style={headerStyle} >
                            <strong>Email</strong>
                        </MDBTypography>
                        <div className='px-4 mb-2' >
                            <MDBRow>
                                <MDBCol className='col-6'>
                                    <div  >
                                        <input style={inputStyle} className='form-control' type='text' placeholder='Email...'
                                            maxLength={50} value={email}
                                            onChange={(e) => { let newEdit = { ...email }; newEdit = e.target.value; setEmail(newEdit) }}></input>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </div>

                        {showPregnantField &&
                            <>
                                <MDBTypography className='card-header mt-4 mb-2'
                                    style={headerStyle} >
                                    <strong>Is she pregnant?</strong>
                                </MDBTypography>
                                <div className='px-4 mb-2' >
                                    <MDBRow>
                                        <MDBCol className='col-3'>
                                            <MDBRadio id='IsShePregnantYes' name='isShePregnantRadio'
                                                inline htmlFor="isShePregnantYes" label='Yes' value='yes'
                                                onClick={(e) => { let newEdit = { ...isShePregnant }; newEdit = e.target.value; setIsShePregnant(newEdit); setShowDeliveryDate(true) }}></MDBRadio>
                                        </MDBCol>

                                        <MDBCol className='col-3'>
                                            <MDBRadio id='IsShePregnantNo' name='isShePregnantRadio'
                                                inline htmlFor='isShePregnantNo' defaultChecked label='No' value='no'
                                                onClick={(e) => { let newEdit = { ...isShePregnant }; newEdit = e.target.value; setIsShePregnant(newEdit); setShowDeliveryDate(false) }}></MDBRadio>
                                        </MDBCol>
                                    </MDBRow>
                                </div>

                                {showDeliveryDate &&
                                    <div id='showDeliveryDate'>

                                        <MDBTypography className='card-header mt-4 mb-2'
                                            style={headerStyle} >
                                            <strong>Delivery date</strong>
                                        </MDBTypography>
                                        <div style={{ marginLeft: '25px', fontSize: '12px', padding: '5px' }}>
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span className="configured-help-text">This information can be found in the pregnancy green book.</span>
                                            </span>
                                        </div>
                                        <div className="help-content">
                                            <span className="help-text">
                                                <span style={{ marginLeft: '30px', fontSize: '12px' }} className="configured-help-text">For example 27 01 2000</span>
                                            </span>
                                        </div>

                                        <div className='mt-2 m-4'>
                                            <div className='btn-group'>
                                                <select style={datePickerStyle}
                                                    className="form-select rounded"
                                                    aria-label="Default select example"
                                                    value={delDate}
                                                    onChange={(e) => { let newEdit = { ...delDate }; newEdit = e.target.value; setDelDate(newEdit) }} >
                                                    {datesData.map((option) => (
                                                        <option key={option.dKey} value={option.dKey}>{option.dValue}</option>
                                                    ))}
                                                </select>
                                                <select style={monthPickerStyle}
                                                    className="form-select rounded"
                                                    value={delMonth}
                                                    onChange={(e) => { let newEdit = { ...delMonth }; newEdit = e.target.value; setDelMonth(newEdit) }} >
                                                    {monthsData.map((option) => (
                                                        <option key={option.mKey} value={option.mKey}>{option.mValue}</option>
                                                    ))}
                                                </select>
                                                <input className='form-control rounded'
                                                    style={yearPickerStyle}
                                                    type='number'
                                                    border={5}
                                                    min={new Date().getFullYear()}
                                                    max={new Date().getFullYear() + 1}
                                                    placeholder='year'
                                                    value={delYear}
                                                    onChange={(e) => { let newEdit = { ...delYear }; newEdit = e.target.value; setDelYear(newEdit) }} >
                                                </input>

                                            </div>
                                        </div>
                                    </div>
                                }
                            </>
                        }


                        <MDBTypography className='card-header mt-4 mb-2'
                            style={headerStyle} >
                            <strong>Does this person work, self-employed or a student?*</strong>
                        </MDBTypography>
                        <div className='px-4 mb-2' >
                            <MDBRow>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='areYouWorkRadio' label='Yes' value='yes'
                                        inline id='areYouWorkYes' htmlFor="areYouWorkYes"
                                        onClick={(e) => { let newEdit = { ...areYouWorker }; newEdit = e.target.value; setAreYouWorker(newEdit) }}></MDBRadio>
                                </MDBCol>

                                <MDBCol className='col-3'>
                                    <MDBRadio name='areYouWorkRadio' label='No' value='no'
                                        inline id='areYouWorkNo' htmlFor='areYouWorkNo' defaultChecked
                                        onClick={(e) => { let newEdit = { ...areYouWorker }; newEdit = e.target.value; setAreYouWorker(newEdit) }}></MDBRadio>
                                </MDBCol>
                            </MDBRow>
                        </div>

                        <MDBTypography className='card-header mt-4 mb-2'
                            style={headerStyle} >
                            <strong>Comments</strong>
                        </MDBTypography>
                        <div className='px-4 mb-2' >
                            <MDBRow>
                                <MDBCol className='col-8'>
                                    <div  >
                                        <textarea style={commentStyle} className='form-control' type='text' placeholder='Comments...'
                                            maxLength={20} value={comments}
                                            onChange={(e) => { let newEdit = { ...comments }; newEdit = e.target.value; setComments(newEdit) }}></textarea>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </div>

                        {/**********  Confirm and save */}
                        <form className='d-flex w-auto mt-3 p-4'>
                            <MDBBtn style={btnSytle}
                                onClick={handleJointApplicant} >
                                Save </MDBBtn>
                            {/* <MDBBtn style={btnSytle}
                                color='secondary' onClick={gotoAccountPage}>
                                Cancel</MDBBtn> */}
                        </form>

                    </MDBCardBody>
                </MDBCard>
            </MDBContainer >
        </React.Fragment >
    );
}