import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import { UserContext } from "../userContext/UserContext"
import { useNavigate } from "react-router-dom";

import { ethnicities } from '../resources/ethnicity';
import { nationalities } from '../resources/nationality';
import { sexOrients } from '../resources/sexOrient';
import { beliefs } from '../resources/belief';
import { dates, months } from '../resources/datePicker';
import { validEmail, validName, validPostcode, validNumber, emailMatch, pwdMatch, memDateMatch, validNINO, validDate } from '../validations/Validator.jsx';
import { ConvertToTimeStamp } from '../utility/dateConvertion';
import BtnAccept from './btnAccept.jsx';
import SaveErrDetail from '../utility/saveErrDetail.jsx';

import { refreshPage } from '../utility/refreshPage';
import PopUp from './popUp';

import {
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBRow, MDBCol,
    MDBTypography,
    MDBBtn,
    MDBRadio
} from 'mdb-react-ui-kit';

export default function HouseholdMember() {

    const navigate = useNavigate();

    const { clientId, setClientId } = useContext(UserContext);

    const ethnicityData = ethnicities;
    const nationalityData = nationalities;
    const sexOrientData = sexOrients;
    const beliefData = beliefs;
    const datesData = dates;
    const monthsData = months;

    const addMemberUrl = "http://localhost:9001/member/addclientmember";

    const yearMax = new Date().getFullYear();        // year picker up to current year
    const yearMin = new Date().getFullYear() - 120;  // year picker 120 year back from current year

    const inputStyle = { fontSize: '14px', width: '250px' };
    const comboBoxStyle = { maxWidth: '250px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const datePickerStyle = { maxWidth: '70px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const monthPickerStyle = { maxWidth: '130px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const yearPickerStyle = { width: '80px', float: 'left', border: '5' };

    const btnSytle = { fontSize: '16px', width: 'auto', textTransform: 'capitalize', marginRight: '10px', backgroundColor: '#3b71ca' };

    const [showAddress, setShowAddress] = useState(false);
    const [showLocalAuthority, setShowLocalAuthority] = useState(false);

    const [partnerAddress, setPartnerAddress] = useState("Need to fill dynamically")

    const [primaryApplicantClientId, setPrimaryApplicantClientId] = useState(clientId)
    const [relationWithPrimaryApplicant, setRelationWithPrimaryApplicant] = useState("");
    const [assessmentPurposeOnly, setAssessmentPurposeOnly] = useState("no");
    const [title, setTitle] = useState("");
    const [fName, setFName] = useState("");
    const [mName, setMName] = useState("");
    const [sName, setSName] = useState("");
    const [nameChange, setNameChange] = useState("none");
    const [nINO, setNINO] = useState("");
    const [dateofbirth, setdateofbirth] = useState("");
    const [dobDate, setDOBDate] = useState("");
    const [dobMonth, setDOBMonth] = useState("");
    const [dobYear, setDOBYear] = useState("");
    const [sex, setSex] = useState("");

    const [currentlyLiveWithYou, setCurrentlyLiveWithYou] = useState("no");
    const [movedInDate, setMovedInDate] = useState("");
    const [movedDate, setMovedDate] = useState("");
    const [movedMonth, setMovedMonth] = useState("");
    const [movedYear, setMovedYear] = useState("");
    const [currentAddress, setCurrentAddress] = useState("");

    const [isShePregnant, setIsShePregnant] = useState("no");
    const [spouseAnotherMemberName, SetSpouseAnotherMemberName] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [delDate, setDelDate] = useState("");
    const [delMonth, setDelMonth] = useState("");
    const [delYear, setDelYear] = useState("");

    const [placedByLocalAuthrty, setPlacedByLocalAuthrty] = useState("no");
    const [localAuthrtyName, setLocalAuthrtyName] = useState("none");

    const [isSpouseOfAnotherMember, setIsSpouseOfAnotherMember] = useState("no");
    const [spouseAnotherMember, setSpouseAnotherMember] = useState(false);
    const [showDeliveryDate, setShowDeliveryDate] = useState(false);

    const [telephone, setTelephone] = useState("");
    const [mobile, setMobile] = useState("");
    const [workPhone, setWorkPhone] = useState("");
    const [email, setEmail] = useState("");
    const [reEnterEmail, setReEnterEmail] = useState("");

    const [ethnicity, setEthnicity] = useState("16");
    const [nationality, setNationality] = useState("16");
    const [sexOrient, setSexOrient] = useState("3");
    const [belief, setBelief] = useState("9");
    const [healthCondition, setHealthCondition] = useState("no");

    const [areYouWorker, setAreYouWorker] = useState("no");
    const [comments, setComments] = useState("none");

    const [showInfoModal, setShowInfoModal] = useState(false);
    const [modalInfo, setModalInfo] = useState("");

    var fNameValid = "false"
    var mNameValid = "false"
    var sNameValid = "false"
    var spouseNameValid = "false"
    var ninoValid = "false";
    var telephoneValid = "false";
    var workphoneValid = "false";
    var mobileValid = "false";
    var emailValid = "false";
    var emailMatchesValid = "false";

    const todayDate = new Date().toISOString().slice(0, 19); // produces 2023-02-25

    useEffect(() => {

    }, [])

    const handleCheckbox = (e) => {

        e.preventDefault();

        let checkedItems = [...connection];
        if (e.target.checked) {
            checkedItems = [...connection, e.target.value];
        } else {
            checkedItems.splice(connection.indexOf(e.target.value), 1);
        }
        setConnection(checkedItems);
        console.log(connection);
    }

    const findPostcodeAddress = (e) => {
        e.preventDefault();
        setModalInfo('Sorry... Postcode auto-completion not available rightnow, please enter your address manually')
        setShowInfoModal(true);
        setShowAddress(true);
    }

    var birth_ = "";
    var moved_ = "";
    var del_ = "";

    const formatDate = () => {

        birth_ = dobYear + "-" + dobMonth + "-" + dobDate;
        moved_ = movedYear + "-" + movedMonth + "-" + movedDate;
        del_ = delYear + "-" + delMonth + "-" + delDate;

        // setdateofbirth(dobYear + "-" + dobMonth + "-" + dobDate);
        // setMovedInDate(movedYear + "-" + movedMonth + "-" + movedDate);
        // setDeliveryDate(delYear + "-" + delMonth + "-" + delDate);
        try {
            const birthValid = validDate(birth_);
            if (birthValid) {
                // const timeStampedDOB = ConvertToTimeStamp(birth_);
                birth_ = ConvertToTimeStamp(birth_);
                console.log(birth_)
                // setdateofbirth(timeStampedDOB);
            } else {
                setModalInfo('Date of birth invalid')
                setShowInfoModal(true);
            }

            const movedValid = validDate(moved_);
            if (movedValid) {
                // const timeStampedMovedInDate = ConvertToTimeStamp(moved_);
                moved_ = ConvertToTimeStamp(moved_);
                console.log(moved_)
                // setMovedInDate(timeStampedMovedInDate);
            } else {
                setModalInfo('Invalid Moved-In date')
                setShowInfoModal(true);
            }

            if (isShePregnant == "yes") {
                const delValid = validDate(del_);
                if (delValid) {
                    const timeStampedDelDate = ConvertToTimeStamp(del_);
                    del_ = ConvertToTimeStamp(del_);
                    console.log(del_)
                    // setDeliveryDate(timeStampedDelDate);
                } else {
                    // alert(`Invalid delivery date`)
                    setModalInfo('Invalid delivery date')
                    setShowInfoModal(true);
                }
            } else {
                setDeliveryDate("");
            }
        } catch (error) {

            let result = error.message;
            const errDetails = {
                error_Location: 'HsMem101',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            console.log(response)

            setModalInfo("HsMem101: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const handleMember = (e) => {
        e.preventDefault();

        formatDate();

        try {

            fNameValid = validName(fName);
            mNameValid = validName(sName);
            sNameValid = validName(sName);
            spouseNameValid = validName(spouseAnotherMemberName);

            if (nINO.trim() !== "") {
                ninoValid = validNINO(nINO);
            } else { ninoValid = true }

            if (telephone.trim() !== "") {
                telephoneValid = validNumber(telephone);
            } else { telephoneValid = true }

            if (workPhone.trim() !== "") {
                workphoneValid = validNumber(workPhone);
            } else { workphoneValid = true }

            if (mobile.trim() !== "") {
                mobileValid = validNumber(mobile);
            } else { mobileValid = true }

            if ((email.trim() !== "") && (reEnterEmail.trim() !== "")) {
                emailValid = validEmail(email);
                emailMatchesValid = emailMatch(email, reEnterEmail);
            } else { emailValid = true; emailMatchesValid = true }

            console.log(`Validation result is fname/mname/sname ${fNameValid} ${mNameValid} ${sNameValid}, 
        ninoValid ${ninoValid}, spouse name ${spouseNameValid}, home telephone ${telephoneValid}, work telephone ${workphoneValid}, 
        mobile ${mobileValid},email ${emailValid}, email matches ${emailMatchesValid}`)

            console.log('Im in handleMember', relationWithPrimaryApplicant,
                assessmentPurposeOnly, title, fName, mName, sName, nameChange,
                currentlyLiveWithYou, isSpouseOfAnotherMember, spouseAnotherMemberName,
                nINO, dateofbirth, sex, placedByLocalAuthrty, localAuthrtyName,
                currentAddress, telephone, mobile, workPhone, email, reEnterEmail, movedInDate,
                ethnicity, nationality, belief, sexOrient,
                isShePregnant, deliveryDate,
                healthCondition, areYouWorker
            )

            if ((!fNameValid) || (!mNameValid) || (!sNameValid) || (!emailValid) || (!emailMatchesValid) ||
                (!ninoValid) || (!telephoneValid) || (!workphoneValid) || (!mobileValid)) {
                !fNameValid && setModalInfo('Error: First Name')
                setShowInfoModal(true);
                !mNameValid && setModalInfo('Error: Middle Name')
                setShowInfoModal(true);
                !sNameValid && setModalInfo('Error: Surname')
                setShowInfoModal(true);
                !ninoValid && setModalInfo('Error: NINO')
                setShowInfoModal(true);
                !telephoneValid && setModalInfo('Error: Telephone number')
                setShowInfoModal(true);
                !workphoneValid && setModalInfo('Error: Work telephone number')
                setShowInfoModal(true);
                !mobileValid && setModalInfo('Error: Mobile number')
                setShowInfoModal(true);
                !emailValid && setModalInfo('Error: Email')
                setShowInfoModal(true);
                !emailMatchesValid && setModalInfo('Error: Email does not match')
                setShowInfoModal(true);

            } else {
                saveMember()
            }
        } catch (error) {

            let result = error.message;
            const errDetails = {
                error_Location: 'HsMem102',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            console.log(response)

            setModalInfo("HsMem102: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }

    }

    const saveMember = async () => {

        const memberInfo = {
            clientId: primaryApplicantClientId,
            clientOtherHousehold_relationshipWithClient: relationWithPrimaryApplicant,
            clientOtherHousehold_assessment_purpose_only: assessmentPurposeOnly,
            clientOtherHousehold_title: title,
            clientOtherHousehold_firstname: fName,
            clientOtherHousehold_middlename: mName,
            clientOtherHousehold_surname: sName,
            clientOtherHousehold_namechange: nameChange,
            clientOtherHousehold_NINO: nINO,
            clientOtherHousehold_dateofbirth: birth_,
            clientOtherHousehold_sex: sex,
            clientOtherHousehold_live_with_you: currentlyLiveWithYou,
            clientOtherHousehold_moved_to_current_address: moved_,
            clientOtherHousehold_current_address: currentAddress,
            clientOtherHousehold_is_she_pregnant: isShePregnant,
            clientOtherHousehold_spouse_another_member_name: spouseAnotherMemberName,
            clientOtherHousehold_DeliveryDate: del_,
            clientOtherHousehold_placed_by_local_authority: placedByLocalAuthrty,
            clientOtherHousehold_if_yes_local_authority: localAuthrtyName,
            clientOtherHousehold_telephone_home: telephone,
            clientOtherHousehold_telephone_mobile: mobile,
            clientOtherHousehold_telephone_work: workPhone,
            clientOtherHousehold_email: email,
            clientOtherHousehold_nationality: ethnicity,
            clientOtherHousehold_sex_orient: nationality,
            clientOtherHousehold_ethnicity: sexOrient,
            clientOtherHousehold_religion: belief,
            clientOtherHousehold_illness: healthCondition,
            clientOtherHousehold_are_you_worker: areYouWorker,
            clientOtherHousehold_registration_date: todayDate,
            clientOtherHousehold_comments: comments
        }
        console.table(memberInfo)
        try {

            const response = await axios.post(addMemberUrl, memberInfo);

            if (response.status === 200) {
                console.log(`Status from backend ${response.data.Status_Reply}`);
                setModalInfo(response.data.Status_Reply)
                setShowInfoModal(true);
                setTimeout(() => {
                    refreshPage();
                }, 3000);
            } else {
                setModalInfo('Something went wrong, please try again...')
                setShowInfoModal(true);
            }
        } catch (error) {
            
            let result = error.message;
            const errDetails = {
                error_Location: 'HsMem103',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            console.log(response)

            setModalInfo("HsMem103: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const cancelEntry = (e) => {
        window.location.reload();
    }

    return (
        <React.Fragment>
            <MDBContainer className='ps-5 pt-3' >

                <p style={{ fontSize: '17px' }}><strong>Register your household - Member </strong></p>

                <MDBCard className='mb-2' style={{ backgroundColor: '#f7f2f287' }} >
                    <MDBTypography component={'div'} className='card-header' style={{ fontSize: '13px', backgroundColor: '#dcdcdc' }} ><strong>Household Members - If you wish to share the tenancy equally and sign for it jointlty, please add you spouse or partner by selectiong "add joint applicant"</strong></MDBTypography>

                    {/* ********** Primary Applicant Details  */}
                    <MDBCardBody >

                        {/* ********** Applicant relationship  */}
                        <div >
                            <MDBTypography component={'div'} className='card-header' style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} ><strong>Main Details</strong></MDBTypography>

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Relationship to main applicant *</strong></p>
                            <select style={{ overflow: 'scroll', width: 'auto' }} className="form-select border-rounded mb-2"
                                value={relationWithPrimaryApplicant} onChange={(e) => { let newEdit = { ...relationWithPrimaryApplicant }; newEdit = e.target.value; setRelationWithPrimaryApplicant(newEdit) }}>
                                <option defaultValue>Please choose</option>
                                <option value="Daughter">Daughter</option>
                                <option value="Relative">Relative</option>
                                <option value="Son">Son</option>
                                <option value="Friend">Friend</option>
                            </select>

                            <div style={{ width: 'auto' }} className="mb-4 help-content border border-grey rounded">

                                <span className="help-text">
                                    <span style={{ marginTop: '5px', fontSize: '12px', padding: '5px' }} className="configured-help-text">This household member must be aged over 18 and may be your husband, wife, spouse or civil partner.  If you offered a tenancy, this will be granted jointly with you and your partner </span>
                                </span>
                            </div>
                        </div>

                        {/* ********** Has this household member been added for assessment purpose only?  */}
                        <div >
                            <p className='mt-3 mb-2' style={{ fontSize: '14px' }}><strong>Has this household member been added for assessment purpose only and therefore will not be moving with you? *</strong></p>
                            <MDBRow>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='assessmentPurposeOnlyRadio' value='yes' label='Yes' inline id='assessmentPurposeOnlyYes' htmlFor="assessmentPurposeOnlyYes"
                                        onClick={(e) => { let newEdit = { ...assessmentPurposeOnly }; newEdit = e.target.value; setAssessmentPurposeOnly(newEdit) }}></MDBRadio>
                                </MDBCol>
                                <MDBCol className='col-3'>

                                    <MDBRadio name='assessmentPurposeOnlyRadio' value='no' label='No' defaultChecked inline id='assessmentPurposeOnlyNo' htmlFor='assessmentPurposeOnlyNo'
                                        onChange={(e) => { let newEdit = { ...assessmentPurposeOnly }; newEdit = e.target.value; setAssessmentPurposeOnly(newEdit) }}></MDBRadio>
                                </MDBCol>
                            </MDBRow>

                        </div>
                        {/* ********** Applicant title  */}
                        <div >

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Title *</strong></p>
                            <select style={{ overflow: 'scroll', width: 'auto' }} className="form-select border-rounded" aria-label="Default select example"
                                value={title} onChange={(e) => { let newEdit = { ...title }; newEdit = e.target.value; setTitle(newEdit) }}>
                                <option defaultValue>Please Choose</option>
                                <option value="Dr">Dr</option>
                                <option value="Miss">Miss</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Ms">Ms</option>
                            </select>

                        </div>

                        {/* ********** First name  */}
                        <div>

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>First name(s) *</strong></p>
                            <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                </span>
                            </div>
                            <div className='mb-4' >
                                <input style={inputStyle} className='form-control' type='text' placeholder='First name...'
                                    maxLength={20} value={fName || ''} onChange={(e) => { let newEdit = { ...fName }; newEdit = e.target.value; setFName(newEdit) }}></input>
                            </div>
                        </div>

                        {/* ********** Middle name  */}
                        <div>

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Middle name(s) *</strong></p>
                            <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                </span>
                            </div>
                            <div className='mb-4' >
                                <input style={inputStyle} className='form-control' type='text' placeholder='Middle name...'
                                    maxLength={20} value={mName || ''} onChange={(e) => { let newEdit = { ...mName }; newEdit = e.target.value; setMName(newEdit) }}></input>
                            </div>
                        </div>

                        {/* ********** Surname  */}
                        <div>

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Surname *</strong></p>
                            <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                </span>
                            </div>
                            <div className='mb-4' >
                                <input style={inputStyle} className='form-control' type='text' placeholder='Surname...'
                                    maxLength={20} value={sName || ''} onChange={(e) => { let newEdit = { ...sName }; newEdit = e.target.value; setSName(newEdit) }}></input>
                            </div>

                        </div>

                        {/* ********** Name change  */}
                        <div>

                            <p className='mt-3 mb-2' style={{ fontSize: '14px' }}><strong>Have this household member ever used a different name, eg a maiden name or by deed poll? if so, please provide details</strong></p>
                            <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Have you ever used a different name, eg a maiden name or by deed poll? if so, please provide details</span>
                                </span>
                            </div>
                            <div className='mb-4' >
                                <input style={inputStyle} className='form-control' type='text' placeholder='Have you ever used a different name, eg a maiden name or by deed poll? if so, please provide details'
                                    maxLength={50} value={nameChange || ''} onChange={(e) => { let newEdit = { ...nameChange }; newEdit = e.target.value; setNameChange(newEdit) }}></input>
                            </div>
                        </div>

                        {/* ********** Does this member currently live with you?  */}
                        <div >
                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Does this household member currently live with you? *</strong></p>
                            <MDBRow>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='currentlyLiveWithYouRadio' value='yes' label='Yes' inline id='currentlyLiveWithYouYes' htmlFor="currentlyLiveWithYouYes"
                                        onClick={(e) => { let newEdit = { ...currentlyLiveWithYou }; newEdit = e.target.value; setCurrentlyLiveWithYou(newEdit) }}></MDBRadio>
                                </MDBCol>
                                <MDBCol className='col-3'>

                                    <MDBRadio name='currentlyLiveWithYouRadio' value='no' defaultChecked label='No' inline id='currentlyLiveWithYouNo' htmlFor='currentlyLiveWithYouNo'
                                        onClick={(e) => { let newEdit = { ...currentlyLiveWithYou }; newEdit = e.target.value; setCurrentlyLiveWithYou(newEdit) }}></MDBRadio>
                                </MDBCol>
                            </MDBRow>

                        </div>

                        {/* ********** Is this Household member a spouse or partner of another household member?  */}
                        <div >
                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Is this household member a spouse or partner of another household member? *</strong></p>
                            <MDBRow>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='spouseOfAnotherMemberRadio' value='yes' label='Yes' inline id='spouseOfAnotherMemberYes' htmlFor="spouseOfAnotherMemberYes"
                                        onClick={(e) => { let newEdit = { ...isSpouseOfAnotherMember }; newEdit = e.target.value; setIsSpouseOfAnotherMember(newEdit); setSpouseAnotherMember(true) }}></MDBRadio>
                                </MDBCol>
                                <MDBCol className='col-3'>

                                    <MDBRadio name='spouseOfAnotherMemberRadio' value='no' defaultChecked label='No' inline id='spouseOfAnotherMemberNo' htmlFor='spouseOfAnotherMemberNo'
                                        onChange={(e) => { let newEdit = { ...isSpouseOfAnotherMember }; newEdit = e.target.value; setIsSpouseOfAnotherMember(newEdit); setSpouseAnotherMember(false) }}></MDBRadio>
                                </MDBCol>
                            </MDBRow>

                            {/* ********** Above person's First/Surname  */}
                            {spouseAnotherMember &&
                                <React.Fragment>
                                    <div className=" mt-2 p-2 help-content border border-grey rounded">

                                        <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Above person's spouse first name and surname *</strong></p>
                                        <div className='mb-4' >
                                            <input className='form-control' type='text' placeholder='First name and Surname...'
                                                maxLength={50} value={spouseAnotherMemberName || ''} onChange={(e) => { let newEdit = { ...spouseAnotherMemberName }; newEdit = e.target.value; SetSpouseAnotherMemberName(newEdit) }}></input>
                                        </div>

                                    </div>
                                </React.Fragment >
                            }

                        </div>

                        {/* ********** NINO   */}
                        <div>

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Household Member's NINO *</strong></p>
                            <div className='mb-4' >
                                <input style={inputStyle} className='form-control' type='text'
                                    maxLength={9} value={nINO || ''} onChange={(e) => { let newEdit = { ...nINO }; newEdit = e.target.value; setNINO(newEdit) }}></input>
                            </div>
                        </div>

                        {/* *********** Date of Birth  */}
                        <div>

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Date of birth *</strong></p>
                            <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                </span>
                            </div>
                            <div className="help-content">
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">For example 27 01 2000</span>
                                </span>
                            </div>

                            <div className='mt-2'>
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
                                        min={yearMin}
                                        max={yearMax}
                                        placeholder='year'
                                        onChange={(e) => { let newEdit = { ...dobYear }; newEdit = e.target.value; setDOBYear(newEdit) }}>
                                    </input>

                                </div>
                            </div>
                        </div>

                        {/* *********** Sex  */}
                        <div>

                            <div className='mt-4'>
                                <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Gender *</strong></p>
                                <select style={comboBoxStyle} className="form-select border-rounded"
                                    value={sex} onChange={(e) => { let newEdit = { ...sex }; newEdit = e.target.value; setSex(newEdit) }}>
                                    <option defaultValue>Please Choose</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>

                    </MDBCardBody>
                </MDBCard>

                {/* *********** Was this household member placed at this address in Birmingham by another local Authority? */}
                <MDBCard className='mt-4 mb-2' style={{ backgroundColor: '#f7f2f287' }}>
                    <MDBCardBody>

                        <div className='mb-2'>
                            <MDBTypography component={'div'} className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} >
                                <strong>Current Address</strong></MDBTypography>

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Was this household member place at this address in Birmingham by another local Authority?*</strong></p>
                            <MDBRow>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='placedByLocalAuthrtyRadio' id='placedByLocalAuthrtyYes' label='Yes' htmlFor='placedByLocalAuthrtyYes' inline
                                        value='yes' onChange={(e) => { let newEdit = { ...placedByLocalAuthrty }; newEdit = e.target.value; setPlacedByLocalAuthrty(newEdit); setShowLocalAuthority(true); }}></MDBRadio>     {/* setShowLocalAuthority will  show or hide according to the selection */}
                                </MDBCol>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='placedByLocalAuthrtyRadio' id='placedByLocalAuthrtyNo' label='No' defaultChecked htmlFor='placedByLocalAuthrtyNo' inline
                                        value='no' onChange={(e) => { let newEdit = { ...placedByLocalAuthrty }; newEdit = e.target.value; setPlacedByLocalAuthrty(newEdit); setShowLocalAuthority(false); }}></MDBRadio>     {/* setShowLocalAuthority will  show or hide according to the selection */}
                                </MDBCol>
                            </MDBRow>
                        </div>
                        {showLocalAuthority &&
                            <div>

                                <div className='mt-4'>
                                    <p style={{ fontSize: '16px' }}><strong>If yes, by which local authority?</strong></p>
                                </div>

                                <div className='' >
                                    <input style={inputStyle} className='form-control' type='text' placeholder='Enter the local authority name'
                                        maxLength={25} onChange={(e) => { let newEdit = { ...localAuthrtyName }; newEdit = e.target.value; setLocalAuthrtyName(newEdit) }} />
                                </div>
                            </div>
                        }

                        {/* *********** What is their current address? */}
                        <div>

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}>
                                <strong>What is their current address?</strong></p>

                            <div style={{ fontSize: '13px', height: 'auto', width: 'auto', background: '#e4f5fb' }} className=" help-content border border-grey rounded">
                                <p className='mx-2 mt-3 mb-2' style={{ fontSize: '12px' }}><strong>Is this person living in the following address?</strong></p>
                                <MDBRow className='mt-3 mb-2'>
                                    <MDBRadio className='mx-2' name='livingInDiffAddressRadio' id='livingInDiffAddressYes' label='Living with primary applicant' htmlFor='livingInDiffAddressYes'
                                        value='Living with primary applicant' onChange={(e) => { let newEdit = { ...currentAddress }; newEdit = e.target.value; setCurrentAddress(newEdit); }}></MDBRadio>
                                </MDBRow>
                                <MDBRow className='mb-2'>
                                    <MDBRadio className='mx-2' name='livingInDiffAddressRadio' id='livingInDiffAddressNo' label='Living in different address' htmlFor='livingInDiffAddressNo'
                                        value='Living in different address' defaultChecked onChange={(e) => { let newEdit = { ...currentAddress }; newEdit = e.target.value; setCurrentAddress(newEdit); }}></MDBRadio>
                                </MDBRow>
                            </div>

                        </div>

                        {/* *********** Currently not receiving or saving the member address - Postcode  */}
                        {showAddress &&
                            <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                                <MDBCardBody>
                                    <div id='showAddressDetails'>
                                        <p style={{ fontSize: '16px' }}><strong>Please fill their address*</strong></p>
                                        <p style={{ fontSize: '16px' }}><strong>Postcode*</strong></p>
                                        <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter the postcode using capital letters. For example: B1 1BB. If your address is outside UK please enter XY1 1YX.</span>
                                            </span>
                                        </div>
                                        <div className='mt-3 mb-2' >
                                            <input style={inputStyle} className='form-control' type='text' placeholder='postcode...'
                                                maxLength={8} value={postcode || ''} onChange={(e) => { setPostcode(e.target.value) }} />
                                        </div>

                                        <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter a postcode and click the find address button to search for an address by postcode or use the enter address button to fill in the address fields manually.</span>
                                            </span>
                                        </div>

                                        <form className='d-flex w-auto mb-3'>
                                            <MDBBtn style={{ fontSize: '16px', width: 'auto', textTransform: 'none' }} color='primary me-1'
                                                onClick={findPostcodeAddress} >
                                                Find address</MDBBtn>
                                        </form>

                                        {/* ***********  Address line 1  */}
                                        <div>

                                            <div className='mt-4'>
                                                <p style={{ fontSize: '16px' }}><strong>Address line 1*</strong></p>
                                            </div>
                                            <div style={{ width: '' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                                <span className="far fa-question-circle help-icon"></span>
                                                <span className="help-text">
                                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter the house or flat number and street name. For example: 12 High Street</span>
                                                </span>
                                            </div>
                                            <div className='' >
                                                <input style={inputStyle} className='form-control ' type='text' placeholder='house or flat number and street'
                                                    maxLength={75} value={addLine1 || ''} onChange={(e) => { setAddLine1(e.target.value) }} />
                                            </div>
                                        </div>

                                        {/* ***********  Address line 2  */}
                                        <div>

                                            <div className='mt-4'>
                                                <p style={{ fontSize: '16px' }}><strong>Address line 2*</strong></p>
                                            </div>
                                            <div style={{ width: '220px' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                                <span className="far fa-question-circle help-icon"></span>
                                                <span className="help-text">
                                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter the second line of your address</span>
                                                </span>
                                            </div>
                                            <div className='' >
                                                <input style={inputStyle} className='form-control' type='text' placeholder='Address line 2'
                                                    maxLength={75} value={addLine2 || ''} onChange={(e) => { setAddLine2(e.target.value) }} />
                                            </div>
                                        </div>

                                        {/* ***********  Address line 3  */}
                                        <div>

                                            <div className='mt-4'>
                                                <p style={{ fontSize: '16px' }}><strong>Address line 3*</strong></p>
                                            </div>
                                            <div style={{ width: '220px' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                                <span className="far fa-question-circle help-icon"></span>
                                                <span className="help-text">
                                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter the third line of your address</span>
                                                </span>
                                            </div>
                                            <div className='' >
                                                <input style={inputStyle} className='form-control' type='text' placeholder='Address line 3'
                                                    maxLength={75} value={addLine3 || ''} onChange={(e) => { setAddLine3(e.target.value) }} />
                                            </div>
                                        </div>

                                        {/* ***********  Address line 4  */}
                                        <div>

                                            <div className='mt-4'>
                                                <p style={{ fontSize: '16px' }}><strong>Address line 4*</strong></p>
                                            </div>
                                            <div style={{ width: '220px' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                                <span className="far fa-question-circle help-icon"></span>
                                                <span className="help-text">
                                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter the fourth line of your address</span>
                                                </span>
                                            </div>
                                            <div className='' >
                                                <input style={inputStyle} className='form-control' type='text' placeholder='Address line 4'
                                                    maxLength={75} value={addLine4 || ''} onChange={(e) => { setAddLine4(e.target.value) }} />
                                            </div>
                                        </div>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        }
                    </MDBCardBody>
                </MDBCard>



                {/* ***********  Contact Details  */}
                <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>

                    <MDBCardBody>
                        <div className='mb-2'>
                            <MDBTypography component={'div'} className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} ><strong>Contact Details</strong></MDBTypography>
                        </div>

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
                                        minLength={9} maxLength={20} onChange={(e) => { let newEdit = { ...telephone }; newEdit = e.target.value; setTelephone(newEdit) }} />
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
                                        minLength={9} maxLength={20} onChange={(e) => { let newEdit = { ...workPhone }; newEdit = e.target.value; setWorkPhone(newEdit) }} />
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
                                        minLength={11} maxLength={20} onChange={(e) => { let newEdit = { ...mobile }; newEdit = e.target.value; setMobile(newEdit) }} />
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
                                    <input style={inputStyle} className='form-control' type='email' placeholder='email address'
                                        minLength={6} maxLength={40} onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                            </div>
                            <div className='mt-4  help-content border border-grey rounded' style={{ background: '#e4f5fb' }}>
                                <p style={{ fontSize: '17px' }}><strong>Please re-enter your email address*</strong></p>
                                <div className='p-2 mt-2' >
                                    <input style={inputStyle} className='form-control' type='email' placeholder='re-enter email address'
                                        minLength={6} maxLength={40} onChange={(e) => { let newEdit = { ...reEnterEmail }; newEdit = e.target.value; setReEnterEmail(newEdit) }} />
                                </div>
                            </div>

                        </div>

                        {/* *********** When moved to this address  */}
                        <div className='mt-4'>
                            <p style={{ fontSize: '16px' }}><strong>Date moved into this address?</strong></p>
                            <div className="help-content">
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">For example 27 01 2000</span>
                                </span>
                            </div>

                            <div className='mt-1'>
                                <div className='btn-group' >
                                    <select style={datePickerStyle}
                                        className="form-select rounded"
                                        onChange={(e) => { let newEdit = { ...movedDate }; newEdit = e.target.value; setMovedDate(newEdit) }} >
                                        {datesData.map((option) => (
                                            <option key={option.dKey} value={option.dKey}>{option.dValue}</option>
                                        ))}
                                    </select>

                                    <select style={monthPickerStyle}
                                        className="form-select rounded"
                                        onChange={(e) => { let newEdit = { ...movedMonth }; newEdit = e.target.value; setMovedMonth(newEdit) }} >
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
                                        onChange={(e) => { let newEdit = { ...movedYear }; newEdit = e.target.value; setMovedYear(newEdit) }} >
                                    </input>
                                </div>
                            </div>
                        </div>
                    </MDBCardBody>
                </MDBCard>

                {/**********  Equality and Diversity Monitoring  */}
                <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>

                    <MDBCardBody>
                        <div>
                            <MDBTypography component={'div'} className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} ><strong>Equality and Diversity Monitoring</strong></MDBTypography>
                        </div>

                        {/**********  Ethnic group  */}
                        <div>

                            <div className='mt-4'>
                                <div >
                                    <p style={{ fontSize: '17px' }}><strong>What is your ethnic group? *</strong></p>
                                </div>

                                <div className='mt-2' >

                                    <select style={comboBoxStyle}
                                        className="form-select rounded"
                                        onChange={(e) => { let newEdit = { ...ethnicity }; newEdit = e.target.value; setEthnicity(newEdit) }}>
                                        {ethnicityData.map((option) => (
                                            <option key={option.ethnicityKey} value={option.ethnicityKey}>{option.ethnicity}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/**********  Nationality  */}
                        <div>

                            <div className='mt-4'>
                                <p style={{ fontSize: '17px' }}><strong>What is your nationality? *</strong></p>
                            </div>

                            <div className='mt-2' >
                                <select style={comboBoxStyle}
                                    className="form-select rounded"
                                    onChange={(e) => { let newEdit = { ...nationality }; newEdit = e.target.value; setNationality(newEdit) }}>
                                    {nationalityData.map((option) => (
                                        <option key={option.nationalityKey} value={option.nationalityKey}>{option.nationality}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/**********  Belief */}
                        <div>

                            <div className='mt-4'>
                                <p style={{ fontSize: '17px' }}><strong>What is your religion or belief? *</strong></p>
                            </div>

                            <div className='mt-2' >
                                <select style={comboBoxStyle}
                                    className="form-select rounded"
                                    onChange={(e) => { let newEdit = { ...belief }; newEdit = e.target.value; setBelief(newEdit) }}>
                                    {beliefData.map((option) => (
                                        <option key={option.beliefKey} value={option.beliefKey}>{option.belief}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/**********  Sexual orientation */}
                        <div>

                            <div className='mt-4  help-content border border-grey rounded' style={{ background: '#e4f5fb' }}>
                                <p style={{ fontSize: '17px', margin: '3px' }}><strong>What is your sexual orientation? *</strong></p>
                            </div>

                            <div className='mt-2' >
                                <select style={comboBoxStyle}
                                    className="form-select rounded"
                                    onChange={(e) => { let newEdit = { ...sexOrient }; newEdit = e.target.value; setSexOrient(newEdit) }}>
                                    {sexOrientData.map((option) => (
                                        <option key={option.sexOrientKey} value={option.sexOrientKey}>{option.sexOrient}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/**********  Is this household member is pregnant? */}
                        <div>

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Is this household member is pregnant?*</strong></p>
                            <span className="far fa-question-circle help-icon"></span>
                            <span className="help-text">
                                <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">You will need to let us know when the baby is born by providing a full copy of the birth certificate.</span>
                            </span>
                            <MDBRow>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='isShePregnantRadio' id='isShePregnantYes' label='Yes' htmlFor='isShePregnantYes' inline
                                        value='yes' onChange={(e) => { let newEdit = { ...isShePregnant }; newEdit = e.target.value; setIsShePregnant(newEdit); setShowDeliveryDate(true); }}></MDBRadio>     {/* setShowDeliveryDate will  show or hide according to the selection */}
                                </MDBCol>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='isShePregnantRadio' id='isShePregnantNo' label='No' defaultChecked htmlFor='isShePregnantNo' inline
                                        value='no' onChange={(e) => { let newEdit = { ...isShePregnant }; newEdit = e.target.value; setIsShePregnant(newEdit); setShowDeliveryDate(false); }}></MDBRadio>     {/* setShowDeliveryDate will  show or hide according to the selection */}
                                </MDBCol>
                            </MDBRow>
                        </div>

                        {showDeliveryDate &&
                            <div id='showDeliveryDate'>

                                <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Delivery Date *</strong></p>
                                <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                    <span className="far fa-question-circle help-icon"></span>
                                    <span className="help-text">
                                        <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">This information can be found in your pregancy green book.</span>
                                    </span>
                                </div>
                                <div className="help-content">
                                    <span className="help-text">
                                        <span style={{ fontSize: '12px' }} className="configured-help-text">For example 27 01 2000</span>
                                    </span>
                                </div>

                                <div className='mt-2'>
                                    <div className='btn-group'>
                                        <select style={datePickerStyle}
                                            className="form-select rounded"
                                            aria-label="Default select example"
                                            onChange={(e) => { let newEdit = { ...delDate }; newEdit = e.target.value; setDelDate(newEdit) }}>
                                            {datesData.map((option) => (
                                                <option key={option.dKey} value={option.dKey}>{option.dValue}</option>
                                            ))}
                                        </select>
                                        <select style={monthPickerStyle}
                                            className="form-select rounded"
                                            onChange={(e) => { let newEdit = { ...delMonth }; newEdit = e.target.value; setDelMonth(newEdit) }}>
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
                                            onChange={(e) => { let newEdit = { ...delYear }; newEdit = e.target.value; setDelYear(newEdit) }}>
                                        </input>

                                    </div>
                                </div>
                            </div>
                        }

                        {/**********  Health condition */}
                        <div>

                            <div className='mt-4'>
                                <p style={{ fontSize: '17px' }}><strong>Does any physical or mental health conditions or illnesses lasting or expected to last for 12 months or more? *</strong></p>
                            </div>

                            <div className='mt-2' >
                                <select style={{ overflow: 'scroll', width: '150px' }} className="form-select rounded"
                                    onChange={(e) => { let newEdit = { ...healthCondition }; newEdit = e.target.value; setHealthCondition(newEdit) }} >
                                    <option defaultValue>Please Select</option>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                    <option value="prefer not to say">Prefer not to say</option>
                                </select>
                            </div>
                        </div>

                    </MDBCardBody>
                </MDBCard>

                {/**********  Employment details*/}
                <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                    <MDBCardBody>
                        <div>
                            <MDBTypography component={'div'} className='card-header'
                                style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} tag='h6'>
                                <strong>Employment details</strong>
                            </MDBTypography>
                        </div>
                        <div className="mt-2 help-content border border-grey rounded" style={{ fontSize: '13px', width: 'auto', background: '#e4f5fb' }}>

                            <div className='p-2 mt-2'>
                                <p style={{ fontSize: '17px' }}>
                                    <strong>Does this household member have a writtern offer or employment in Birmingham?*</strong></p>
                                <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                    <span className="far fa-question-circle help-icon"></span>
                                    <span className="help-text">
                                        <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">If yes, you are required to provide a letter from your employer detailing your job, type of employment contract(permenant, fixed term or casual, full or part time) and confirmation that you are still employed by them or a dated contract of employment with your name on with your latest wage/salary slip.</span>
                                    </span>
                                </div>
                            </div>
                            <MDBRow className='px-2 mb-2'>
                                <MDBCol className='col-3 mx-2 mb-2'>
                                    <MDBRadio name='areYouWorkerRadio' id='areYouWorkerYes' label='Yes' inline
                                        value='yes' onChange={(e) => { let newEdit = { ...areYouWorker }; newEdit = e.target.value; setAreYouWorker(newEdit) }} />
                                </MDBCol>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='areYouWorkerRadio' id='areYouWorkerNo' label='No' inline defaultChecked
                                        value='no' onChange={(e) => { let newEdit = { ...areYouWorker }; newEdit = e.target.value; setAreYouWorker(newEdit) }} />
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBCardBody>
                </MDBCard>

                {/**********  Any comments or additional information */}
                <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                    <MDBCardBody>
                        <p className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} ><strong>Any other comments or additional information</strong></p>
                        <div className='mt-4' >
                            <MDBRow>
                                <MDBCol >
                                    <textarea style={{ maxWidth: '500px', height: '350px' }} className='form-control' type='text'
                                        maxLength={250} onChange={(e) => { let newEdit = { ...comments }; newEdit = e.target.value; setComments(newEdit) }} />
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                </MDBCard>
                <form className='d-flex w-auto mt-4'>
                    <BtnAccept style={btnSytle}
                        onClick={handleMember} >
                        Save Member</BtnAccept>

                    <BtnAccept style={btnSytle} color='secondary'
                        onClick={cancelEntry}>
                        Cancel</BtnAccept>
                </form>
                <MDBCardBody>
                </MDBCardBody>

            </MDBContainer>
            {
                showInfoModal && <PopUp modalInfo={modalInfo} setShowInfoModal={setShowInfoModal}></PopUp>
            }
        </React.Fragment >
    );
}