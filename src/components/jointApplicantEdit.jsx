import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import { UserContext } from "../userContext/UserContext"
import { useNavigate, useLocation } from "react-router-dom";

import PopUp from './popUp';

import { dates, months } from '../resources/datePicker';
import { validEmail, validDate, validPostcode, validNumber } from '../validations/Validator.jsx';
import { ToCamelCase } from '../validations/Validator.jsx';
import { ConvertToLocalDate, ConvertToDate, ConvertToTimeStamp } from '../utility/dateConvertion';
import { refreshPage } from '../utility/refreshPage';
import BtnAccept from './btnAccept.jsx';
import SaveErrDetail from '../utility/saveErrDetail.jsx';

import {
    MDBCard, MDBCardBody,
    MDBRow, MDBCol,
    MDBTypography,
    MDBBtn,
    MDBRadio
} from 'mdb-react-ui-kit';

export default function JointApplicantEdit() {

    const { clientId, setClientId } = useContext(UserContext);

    const navigate = useNavigate();

    // var primaryApplicantID = location.state.primaryID;

    const findPrimaryIDInClientUrl = "http://localhost:9001/client/clientid/";
    const findPrimaryIDInJointUrl = "http://localhost:9001/joint/clientid/";

    const updateJointApplicantUrl = "http://localhost:9001/joint/update/";
    const deleteJointUrl = "http://localhost:9001/joint/delete/";

    const datesData = dates;
    const monthsData = months;

    const yearMax = new Date().getFullYear();        // year picker up to current year
    const yearMin = new Date().getFullYear() - 120;  // year picker 120 year back from current year

    const labelStyle = { maxHeight: 'auto', fontSize: '15px', width: 'auto', color: '#4f4f4f' };
    const inputStyle = { maxHeight: 'auto', fontSize: '16px', minwidth: '250px', color: 'black' };
    const commentStyle = { minHeight: '150px', fontSize: '16px', minWidth: '250px', color: 'black' };
    const memberStyle = { paddingLeft: '10px', color: 'black', };
    const headerStyle = { fontSize: '17px', backgroundColor: '#e3f6fd' };

    const btnSytle = { fontSize: '16px', width: 'auto', textTransform: 'capitalize', marginRight: '10px', backgroundColor: '#3b71ca' };

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
    var movedDateValid = false;
    var deliveryValid = false;

    const [dateofbirth, setdateofbirth] = useState("");
    const [currentlyLiveWithYou, setCurrentlyLiveWithYou] = useState("");

    const [movedDate, setMovedDate] = useState(tempMovedDate);
    const [movedInDate, setMovedInDate] = useState(tempMovedDate.split('-')[1]);
    const [movedInMonth, setMovedInMonth] = useState(tempMovedDate.split('-')[0]);
    const [movedInYear, setMovedInYear] = useState(tempMovedDate.split('-')[2]);

    const [livingInDiffAddress, setLivingInDiffAddress] = useState("Living with primary applicant");
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
    const [comments, setComments] = useState("none");

    const [showPregnantField, setShowPregnantField] = useState(false)

    const [showInfoModal, setShowInfoModal] = useState(false);
    const [modalInfo, setModalInfo] = useState("");

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

                    tempDOB = ConvertToLocalDate(responseJoint.data.jointApplicantDetails.clientJoint_dateofbirth);
                    setdateofbirth(tempDOB);

                    setCurrentlyLiveWithYou(responseJoint.data.jointApplicantDetails.clientJoint_current_live_with_you)
                    if (responseJoint.data.jointApplicantDetails.clientJoint_current_live_with_you === 'yes') {
                        window.document.getElementById('CurrentlyLiveWithYouYes').checked = true;
                        window.document.getElementById('LivingInDiffAddressNo').checked = true;
                        setShowCorrespondenceAddress(false);

                    } else {
                        window.document.getElementById('CurrentlyLiveWithYouNo').checked = true;
                        window.document.getElementById('LivingInDiffAddressYes').checked = true;

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
                    console.log(`temp del date ${tempDelDate}`)
                    setDelDate(tempDelDate.split('-')[2]); setDelMonth(tempDelDate.split('-')[1]); setDelYear(tempDelDate.split('-')[0]);

                    setAreYouWorker(responseJoint.data.jointApplicantDetails.clientJoint_are_you_worker)

                    if (responseJoint.data.jointApplicantDetails.clientJoint_are_you_worker === 'yes') {
                        window.document.getElementById('AreYouWorkYes').checked = true;
                    } else {
                        window.document.getElementById('AreYouWorkNo').checked = true;;
                    }

                    setComments(responseJoint.data.jointApplicantDetails.clientJoint_comments)

                    setCorresPostcode(responseJoint.data.jointApplicantDetails.clientJoint_corres_postcode)
                    setCorresLine1(responseJoint.data.jointApplicantDetails.clientJoint_corres_address_line1)
                    setCorresLine2(responseJoint.data.jointApplicantDetails.clientJoint_corres_address_line2)
                    setCorresLine3(responseJoint.data.jointApplicantDetails.clientJoint_corres_address_line3)
                    setCorresLine4(responseJoint.data.jointApplicantDetails.clientJoint_corres_address_line4)
                }
            }

        } catch (error) {
            
            let result = error.message;
            const errDetails = {
                error_Location: 'JntEdit101',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            console.log(response)

            setModalInfo("JntApt101: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const findPostcodeAddress = (e) => {
        e.preventDefault();
        setModalInfo('Sorry... Postcode auto-completion not available rightnow, please enter your address manually')
        setShowInfoModal(true);
        setShowCorrespondenceAddress(true);
        // alert('Sorry... \nPostcode search is not able to connect with UK Post Office API, \nplease enter the address manually')
    }

    const handleJointApplicant = (e) => {
        e.preventDefault();

        try {
            const postcodeValid = validPostcode(corresPostcode);

            console.log(movedInYear, movedInMonth, movedInDate)

            movedDateValid = validDate(movedInYear + '-' + movedInMonth + '-' + movedInDate)
            if (movedDateValid) {
                moved_ = ConvertToTimeStamp(movedInYear + '-' + movedInMonth + '-' + movedInDate)
                console.log(moved_)
                setMovedDate(moved_)
            }

            // if not pregnant set data to empty string
            if (!isShePregnant) {
                setDeliveryDate("");
                delDate_ = "";
                deliveryDate = true;
            } else {
                deliveryValid = validDate(delYear + '-' + delMonth + '-' + delDate);
                if (deliveryValid) {
                    delDate_ = ConvertToTimeStamp(delYear + '-' + delMonth + '-' + delDate)
                    console.log(delDate_)
                    setDeliveryDate(delDate_)
                } else {
                    deliveryDate = true;
                    setDeliveryDate("");
                    delDate_ = "";
                }
            }

            const emailValid = validEmail(email);
            const telephoneValid = validNumber(telephone);
            const workphoneValid = validNumber(workPhone);
            const mobileValid = validNumber(mobile);

            // on changing to living with primary applicant empty all corres address
            if (currentlyLiveWithYou == "yes") {
                setCorresPostcode("")
                setCorresLine1("")
                setCorresLine2("")
                setCorresLine3("")
                setCorresLine4("")
            }

            // if 'liveing with you' selected set 'living in different address'
            let livingWithYouN = window.document.getElementById('CurrentlyLiveWithYouNo').checked
            let livingWithYouY = window.document.getElementById('CurrentlyLiveWithYouYes').checked

            if (livingWithYouN) {
                setLivingInDiffAddress("Living in different address");
            } else if (livingWithYouY) {
                setLivingInDiffAddress("Living with primary applicant");
            } else if ((!livingWithYouN) && (!livingWithYouY)) {
                setLivingInDiffAddress("Living with primary applicant");
            }

            console.log(`Validation result is postcode ${postcodeValid} email ${emailValid}, 
                    home telephone ${telephoneValid}, work telephone ${workphoneValid}, 
                    mobile ${mobileValid}, delivery ${deliveryValid}, movedDate ${movedDateValid}`)

            if ((!postcodeValid) || (!movedDateValid) || (!deliveryValid) ||
                (!emailValid) || (!telephoneValid) || (!workphoneValid) || (!mobileValid)) {

                !postcodeValid && setModalInfo('Postcode error')
                setShowInfoModal(true);

                !movedDateValid && setModalInfo('Invalid Moved-In date')
                setShowInfoModal(true);

                !deliveryValid && setModalInfo('Delivery date error')
                setShowInfoModal(true);

                !emailValid && setModalInfo('Email error')
                setShowInfoModal(true);

                !telephoneValid && setModalInfo('Telephone number error')
                setShowInfoModal(true);

                !workphoneValid && setModalInfo('Work telephone number error')
                setShowInfoModal(true);

                !mobileValid && setModalInfo('Mobile number error')
                setShowInfoModal(true);
            } else {
                console.log('FINAL Result passed', healthCondition, currentlyLiveWithYou,
                    movedDate, corresPostcode, corresLine1, corresLine2, corresLine3, corresLine4,
                    currentlyLiveWithYou, telephone, mobile, workPhone,
                    isShePregnant, deliveryDate, areYouWorker
                )
                saveJointApplicant()
            }
        } catch (error) {
            
            let result = error.message;
            const errDetails = {
                error_Location: 'JntApt102',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            console.log(response)

            setModalInfo("JntApt102: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const saveJointApplicant = async () => {

        try {

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


            const response = await axios.put(updateJointApplicantUrl + _id, JointApplicantInfo, {})
            console.log(`Output from backend ${response.data.message}`)

            if (response.status === 200) {
                console.log(`Status from backend ${response.data.Status_Reply}`);
                setModalInfo(response.data.Status_Reply)
                setShowInfoModal(true);
                setTimeout(() => {
                    refreshPage();
                }, 5000);

            } else {
                setModalInfo('Something went wrong, please try again...')
                setShowInfoModal(true);
            }

        } catch (error) {
            
            let result = error.message;
            const errDetails = {
                error_Location: 'JntApt103',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            console.log(response)

            setModalInfo("JntApt103: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const handleRemoveJointApplicant = async (e) => {
        console.log("Iam in delete joint applicant");

        console.log(deleteJointUrl + _id);

        try {
            const response = await axios.delete(deleteJointUrl + _id);

            if (response.data) {
                console.log(response.data.Status_Reply)
                setModalInfo(response.data.Status_Reply)
                setShowInfoModal(true);
            } else {
                console.log(response.data.message)
                setModalInfo(response.data.Status_Reply)
                setShowInfoModal(true);
            }

        } catch (error) {
            
            let result = error.message;
            const errDetails = {
                error_Location: 'JntApt104',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            console.log(response)

            setModalInfo("JntApt104: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const gotoAccountPage = (e) => {
        setModalInfo('Update cancelled')
        setShowInfoModal(true);
    }

    return (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto ps-4 pt-4' style={{ backgroundColor: '#f7f2f287' }} >
                <MDBTypography component={'div'} className='card-header' style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} >
                    <strong>Joint Applicant / Partner Details</strong>
                </MDBTypography>
                <MDBCardBody className='p-1' >
                    {/* ********** Applicant Details  */}
                    <MDBRow className='mt-3'>
                        <MDBCol className='col-lg-3 col-md-4 col-sm-6 col-xs-6 '>
                            <MDBTypography component={'div'} style={labelStyle}>Full Name:<strong style={memberStyle}>{ToCamelCase(fName) + " " + ToCamelCase(sName)}</strong></MDBTypography>
                        </MDBCol>

                        <MDBCol className='col-lg-3 col-md-4 col-sm-6 col-xs-6'>
                            <MDBTypography component={'div'} style={labelStyle}>NINO:<strong style={memberStyle}>{nINO.toUpperCase()}</strong></MDBTypography>
                        </MDBCol>

                        <MDBCol className='col-lg-3 col-md-2 col-sm-6 col-xs-6'>
                            <MDBTypography component={'div'} style={labelStyle}>DOB:<strong style={memberStyle}>{ToCamelCase(dateofbirth)}</strong></MDBTypography>
                        </MDBCol>

                        <MDBCol className='col-lg-3 col-md-2 col-sm-6 col-xs-6'>
                            <MDBTypography component={'div'} style={labelStyle}>Relation:<strong style={memberStyle}>{ToCamelCase(relationWithPrimaryApplicant)}</strong></MDBTypography>
                        </MDBCol>
                    </MDBRow>

                    {/* health conditions */}
                    <MDBTypography component={'div'} className='card-header  mb-2'
                        style={headerStyle} >
                        <strong>Does this person have any physical or mental health conditions or illnesses lasting or expected to last for 12 months or more?</strong>
                    </MDBTypography>

                    <div className='px-4 mb-2' >
                        <select style={{ overflow: 'scroll', maxWidth: '155px' }} className="form-select rounded"
                            onChange={(e) => { let newEdit = { ...healthCondition }; newEdit = e.target.value; setHealthCondition(newEdit) }} >
                            <option defaultValue >Please choose</option>
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                            <option value="prefer not to say">Prefer not to say</option>
                        </select>
                    </div>

                    {/* currently live with you */}
                    <MDBTypography component={'div'} className='card-header mt-4 mb-2'
                        style={headerStyle} >
                        <strong>Does this person currently live with you?</strong>
                    </MDBTypography>
                    
                    <div className='px-4 mb-2' >
                        <MDBRow>
                            <MDBCol className='col-3'>
                                <MDBRadio name='currentlyLiveWithYouRadio' label='Yes' value='yes'
                                    inline id='CurrentlyLiveWithYouYes'
                                    htmlFor="currentlyLiveWithYouYes"
                                    onClick={(e) => { let newEdit = { ...currentlyLiveWithYou }; newEdit = e.target.value; setCurrentlyLiveWithYou(newEdit); setShowCorrespondenceAddress(false) }}></MDBRadio>
                            </MDBCol>

                            <MDBCol className='col-3'>
                                <MDBRadio name='currentlyLiveWithYouRadio' label='No' value='no'
                                    inline id='CurrentlyLiveWithYouNo'
                                    htmlFor='currentlyLiveWithYouNo'
                                    onClick={(e) => { let newEdit = { ...currentlyLiveWithYou }; newEdit = e.target.value; setCurrentlyLiveWithYou(newEdit); setShowCorrespondenceAddress(true) }}></MDBRadio>
                            </MDBCol>
                        </MDBRow>
                    </div>

                    {/* Date moved into this address? */}
                    <MDBTypography component={'div'} className='card-header mt-4 mb-3'
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
                                defaultValue={movedInYear || ''}
                                onChange={(e) => { let newEdit = { ...movedInYear }; newEdit = e.target.value; setMovedInYear(newEdit) }} >
                            </input>
                        </div>
                    </div>

                    {/* What is their current address */}
                    <div className='mt-4 mb-2' >
                        <div style={{ fontSize: '13px', height: 'auto', width: 'auto', background: '#e4f5fb' }} className=" help-content border border-grey rounded">
                            <MDBTypography component={'div'} className='card-header'
                                style={headerStyle} >
                                <strong>What is their current address</strong>
                            </MDBTypography>
                        </div>
                        <MDBRow className='mt-2 mb-2'>
                            <MDBRadio className='mx-3' name='livingInDiffAddressRadio'
                                id='LivingInDiffAddressNo' value='Living with primary applicant'
                                htmlFor='livingInDiffAddressNo' label='Living with primary applicant'
                                onChange={(e) => { let newEdit = { ...livingInDiffAddress }; newEdit = e.target.value; setLivingInDiffAddress(newEdit); setShowCorrespondenceAddress(false); }}></MDBRadio>     {/* Get and show primary applicant address in this place */}

                        </MDBRow>
                        <MDBRow>
                            <MDBRadio className='mx-3' name='livingInDiffAddressRadio'
                                id='LivingInDiffAddressYes' value='Living in different address'
                                label='This person is living at a different address' htmlFor='livingInDiffAddressYes'
                                onChange={(e) => { let newEdit = { ...livingInDiffAddress }; newEdit = e.target.value; setLivingInDiffAddress(newEdit); setShowCorrespondenceAddress(true); }}></MDBRadio>     {/* Spouse or partner living in different address */}
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
                                                maxLength={8} defaultValue={corresPostcode.toUpperCase() || ''}
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
                                                    maxLength={75} defaultValue={ToCamelCase(corresLine1) || ''}
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
                                                    maxLength={75} defaultValue={ToCamelCase(corresLine2) || ''}
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
                                                    maxLength={75} defaultValue={ToCamelCase(corresLine3) || ''}
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
                                                    maxLength={75} defaultValue={ToCamelCase(corresLine4) || ''}
                                                    onChange={(e) => { let newEdit = { ...corresLine4 }; newEdit = e.target.value; setCorresLine4(newEdit) }} />
                                            </div>
                                        </div>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    }
                    {/* Home telephone */}
                    <MDBTypography component={'div'} className='card-header mt-4 mb-2'
                        style={headerStyle} >
                        <strong>Home telephone</strong>
                    </MDBTypography>
                    <div className='px-4 mb-2' >
                        <MDBRow>
                            <MDBCol className='col-6'>
                                <div  >
                                    <input style={inputStyle} className='form-control' type='text' placeholder='Work phone...'
                                        maxLength={20} defaultValue={telephone || ''}
                                        onChange={(e) => { let newEdit = { ...telephone }; newEdit = e.target.value; setTelephone(newEdit) }}></input>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </div>

                    {/* Work telephone */}
                    <MDBTypography component={'div'} className='card-header mt-4 mb-2'
                        style={headerStyle} >
                        <strong>Work telephone</strong>
                    </MDBTypography>
                    <div className='px-4 mb-2' >
                        <MDBRow>
                            <MDBCol className='col-6'>
                                <div  >
                                    <input style={inputStyle} className='form-control' type='text' placeholder='Work phone...'
                                        maxLength={20} defaultValue={workPhone || ''}
                                        onChange={(e) => { let newEdit = { ...workPhone }; newEdit = e.target.value; setWorkPhone(newEdit) }}></input>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </div>

                    {/* Mobile */}
                    <MDBTypography component={'div'} className='card-header mt-4 mb-2'
                        style={headerStyle} >
                        <strong>Mobile</strong>
                    </MDBTypography>
                    <div className='px-4 mb-2' >
                        <MDBRow>
                            <MDBCol className='col-6'>
                                <div  >
                                    <input style={inputStyle} className='form-control' type='text' placeholder='Mobile...'
                                        maxLength={20} defaultValue={mobile || ''}
                                        onChange={(e) => { let newEdit = { ...mobile }; newEdit = e.target.value; setMobile(newEdit) }}></input>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </div>

                    {/* Email */}
                    <MDBTypography component={'div'} className='card-header mt-4 mb-2'
                        style={headerStyle} >
                        <strong>Email</strong>
                    </MDBTypography>
                    <div className='px-4 mb-2' >
                        <MDBRow>
                            <MDBCol className='col-6'>
                                <div  >
                                    <input style={inputStyle} className='form-control' type='text' placeholder='Email...'
                                        maxLength={50} defaultValue={email || ''}
                                        onChange={(e) => { let newEdit = { ...email }; newEdit = e.target.value; setEmail(newEdit) }}></input>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </div>

                    {showPregnantField &&
                        <React.Fragment>
                            <MDBTypography component={'div'} className='card-header mt-4 mb-2'
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

                                    <MDBTypography component={'div'} className='card-header mt-4 mb-2'
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
                                                defaultValue={delYear || ''}
                                                onChange={(e) => { let newEdit = { ...delYear }; newEdit = e.target.value; setDelYear(newEdit) }} >
                                            </input>

                                        </div>
                                    </div>
                                </div>
                            }
                        </React.Fragment >
                    }

                    {/* Does this person work */}
                    <MDBTypography component={'div'} className='card-header mt-4 mb-2'
                        style={headerStyle} >
                        <strong>Does this person work, self-employed or a student?*</strong>
                    </MDBTypography>
                    <div className='px-4 mb-2' >
                        <MDBRow>
                            <MDBCol className='col-3'>
                                <MDBRadio name='areYouWorkRadio' label='Yes' value='yes'
                                    inline id='AreYouWorkYes' htmlFor="areYouWorkYes"
                                    onClick={(e) => { let newEdit = { ...areYouWorker }; newEdit = e.target.value; setAreYouWorker(newEdit) }}></MDBRadio>
                            </MDBCol>

                            <MDBCol className='col-3'>
                                <MDBRadio name='areYouWorkRadio' label='No' value='no'
                                    inline id='AreYouWorkNo' htmlFor='areYouWorkNo'
                                    onClick={(e) => { let newEdit = { ...areYouWorker }; newEdit = e.target.value; setAreYouWorker(newEdit) }}></MDBRadio>
                            </MDBCol>
                        </MDBRow>
                    </div>

                    {/* Comments */}
                    <MDBTypography component={'div'} className='card-header mt-4 mb-2'
                        style={headerStyle} >
                        <strong>Comments</strong>
                    </MDBTypography>
                    <div className='px-4 mb-2' >
                        <MDBRow>
                            <MDBCol className='col-8'>
                                <div  >
                                    <textarea style={commentStyle} className='form-control' type='text' placeholder='Comments...'
                                        maxLength={20} defaultValue={comments}
                                        onChange={(e) => { let newEdit = { ...comments }; newEdit = e.target.value; setComments(newEdit) }}></textarea>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </div>

                    {/**********  Confirm and save */}
                    <form className='d-flex w-auto mt-3 p-4'>
                        <BtnAccept style={btnSytle}
                            onClick={(e) => { if (window.confirm("Update your information?")) handleJointApplicant(e) }} >
                            Save </BtnAccept>
                        <BtnAccept style={btnSytle} color='warning'
                            onClick={(e) => { if (window.confirm("You are about to delete permenantly!\nRemove this joint applicant?")) handleRemoveJointApplicant(e) }} >
                            Remove joint applicant </BtnAccept>
                        <BtnAccept style={btnSytle} color='secondary'
                            onClick={(e) => { if (window.confirm("Cancel update?")) gotoAccountPage(e) }}>
                            Cancel</BtnAccept>
                    </form>

                </MDBCardBody>
            </MDBCard>

            {
                showInfoModal && <PopUp modalInfo={modalInfo} setShowInfoModal={setShowInfoModal}></PopUp>
            }
        </React.Fragment >
    );
}