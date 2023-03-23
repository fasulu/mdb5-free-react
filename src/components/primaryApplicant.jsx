import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

import { areyous } from '../resources/areyou';
import { tenures } from '../resources/tenure';
import { correspondences } from '../resources/correspondence';
import { ethnicities } from '../resources/ethnicity';
import { nationalities } from '../resources/nationality';
import { sexOrients } from '../resources/sexOrient';
import { beliefs } from '../resources/belief';
import { languages } from '../resources/language';
import { dates, months } from '../resources/datePicker';
import { validEmail, validName, validPostcode, validNumber, validDate, emailMatch, validMName, pwdMatch, memDateMatch, validPwd } from '../validations/Validator';
import { ConvertToDate, ConvertToTimeStamp } from '../utility/dateConvertion';

import {
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBRow, MDBCol,
    MDBTypography,
    MDBBtn,
    MDBRadio, MDBCheckbox
} from 'mdb-react-ui-kit';

export default function PrimaryApplicant() {

    const urL = "http://localhost:9001/client/signup";
    const clientNinoUrl = "http://localhost:9001/client/clientnino/"
    const createClientLoginUrl = "http://localhost:9001/client/clientref"

    const navigate = useNavigate();
    const location = useLocation();

    let memberid = location.state.nino
    // console.log(memberid)

    const areyouData = areyous;
    const tenureData = tenures;
    const correspondenceData = correspondences;
    const ethnicityData = ethnicities;
    const nationalityData = nationalities;
    const sexOrientData = sexOrients;
    const beliefData = beliefs;
    const datesData = dates;
    const monthsData = months;

    const ageMax = new Date().getFullYear();        // year picker up to current year
    const ageMin = new Date().getFullYear() - 120;  // year picker 120 year back from current year

    const inputStyle = { fontSize: '14px', width: '250px' };
    const ninoInputStyle = { fontSize: '14px', fontWeight: 'bold', width: '250px', borderColor: '#79baf3', backgroundColor: '#b8ffb8', color: 'grey' }
    const comboBoxStyle = { maxWidth: '250px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const datePickerStyle = { maxWidth: '70px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const monthPickerStyle = { maxWidth: '130px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const yearPickerStyle = { width: '80px', float: 'left', border: '5' };
    const commentStyle = { minHeight: '150px', fontSize: '16px', minWidth: '250px', color: 'black' };

    const [showLandlord, setShowLandlord] = useState(false);
    const [showAddress, setShowAddress] = useState(false);
    const [showCorrespondence, setShowCorrespondence] = useState(false);
    const [showLocalAuthority, setShowLocalAuthority] = useState(false);
    const [showTenancyRef, setShowTenancyRef] = useState(false);

    const [currentSavedClientId, setCurrentSavedClientId] = useState({});
    const [title, setTitle] = useState("");
    const [fName, setFName] = useState("");
    const [mName, setMName] = useState("");
    const [sName, setSName] = useState("");
    const [nameChange, setNameChange] = useState("none");
    const nINO = memberid.toUpperCase();
    const [sex, setSex] = useState("");
    const [livedAbroad, setLivedAbroad] = useState("no");

    const [postcode, setPostcode] = useState("");
    const [addLine1, setAddLine1] = useState("");
    const [addLine2, setAddLine2] = useState("");
    const [addLine3, setAddLine3] = useState("");
    const [addLine4, setAddLine4] = useState("");

    const [dateofbirth, setDateofbirth] = useState("");
    const [dobDate, setDOBDate] = useState("");
    const [dobMonth, setDOBMonth] = useState("");
    const [dobYear, setDOBYear] = useState("");

    const [movedInDate, setMovedInDate] = useState("");
    const [movedDate, setMovedDate] = useState("");
    const [movedMonth, setMovedMonth] = useState("");
    const [movedYear, setMovedYear] = useState("");

    const [rented, setRented] = useState("no");
    const [landlordName, setLandlordName] = useState("none");
    const [landlordAddress, setLandlordAddress] = useState("none");
    const [currentTenancyType, setCurrentTenancyType] = useState("dont know");
    const [infoAboutCurrentAddress, setInfoAboutCurrentAddress] = useState("none");

    const [communicationAddress, setCommunicationAddress] = useState("current address");
    const [correspondenceType, setCorrespondenceType] = useState("none")
    const [correspondencePostcode, setCorrespondencePostcode] = useState("");
    const [correspondenceAddLine1, setCorrespondenceAddLine1] = useState("");
    const [correspondenceAddLine2, setCorrespondenceAddLine2] = useState("");
    const [correspondenceAddLine3, setCorrespondenceAddLine3] = useState("");
    const [correspondenceAddLine4, setCorrespondenceAddLine4] = useState("");

    const [placedByLocalAuthrty, setPlacedByLocalAuthrty] = useState("no");
    const [localAuthrtyName, setLocalAuthrtyName] = useState("none");

    const [telephone, setTelephone] = useState("");
    const [mobile, setMobile] = useState("");
    const [workPhone, setWorkPhone] = useState("");
    const [email, setEmail] = useState("");
    const [reEnterEmail, setReEnterEmail] = useState("");

    const [ethnicity, setEthnicity] = useState("prefer not to say");
    const [nationality, setNationality] = useState("non-eea national");
    const [sexOrient, setSexOrient] = useState("prefer not to say");
    const [belief, setBelief] = useState("prefer not to say");
    const [healthCondition, setHealthCondition] = useState("no");

    const [preferedLanguage, setPreferedLanguage] = useState("english");
    const [needInterpreter, setNeedInterpreter] = useState("no");

    const [tenure, setTenure] = useState("");
    const [tenancyRefNo, setTenancyRefNo] = useState("");

    const [areyou, setAreYou] = useState("none of the above");       // this field is mentioned as 'client_from_which_country'
    const [connection, setConnection] = useState("");

    const [memorableDate, setMemorableDate] = useState("");
    const [memDate, setMemDate] = useState("");
    const [memMonth, setMemMonth] = useState("");
    const [memYear, setMemYear] = useState("");

    const [reEnterMemorableDate, setReEnterMemorableDate] = useState("");
    const [reEnterMemDate, setReenterMemDate] = useState("");
    const [reEnterMemMonth, setReenterMemMonth] = useState("");
    const [reEnterMemYear, setReenterMemYear] = useState("");

    const [password, setPassword] = useState("");
    const [reEnterPwd, setReEnterPwd] = useState("");

    const [comments, setComments] = useState("none");
    const status_ = "active"

    const todayDate = new Date().toISOString().slice(0, 19); // produces 2023-02-25T00:00:00

    useEffect(() => {

    }, [])

    var birth_ = ""
    var moved_ = ""
    var dateMemorable = ""
    var reEnteredDateMemorable = ""
    var corresPostcodeValid = "";

    const formatDate = () => {

        birth_ = dobYear + "-" + dobMonth + "-" + dobDate;
        moved_ = movedYear + "-" + movedMonth + "-" + movedDate;
        dateMemorable = memYear + "-" + memMonth + "-" + memDate;
        reEnteredDateMemorable = reEnterMemYear + "-" + reEnterMemMonth + "-" + reEnterMemDate;

    }

    const handleConnectionCheckbox = () => {

        var check_ed = "";
        var markedCheckbox = document.getElementsByName('connectionCheckbox');
        for (var checkbox of markedCheckbox) {
            if (checkbox.checked)
                check_ed += (checkbox.value + ', ');
        }
        // if nothing checked, automatically saves checkbox value 17(None of the above)
        if (check_ed == "") {
            check_ed = "17";
        }
        let newEdit = { ...connection }; newEdit = check_ed; setConnection(newEdit)
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        handleConnectionCheckbox();

        formatDate();

        const fNameValid = validName(fName);
        const mNameValid = validMName(mName);
        const sNameValid = validName(sName);
        const passwordValid = validPwd(password);

        const birthValid = validDate(birth_);
        if (birthValid) {
            const timeStampedDOB = ConvertToTimeStamp(birth_);
            console.log(birth_, timeStampedDOB)
            setDateofbirth(timeStampedDOB);
        } else {
            alert('Date of birth invalid date');
        }

        const movedValid = validDate(moved_);
        if (movedValid) {
            const timeStampedMovedInDate = ConvertToTimeStamp(moved_);
            console.log(moved_, timeStampedMovedInDate)
            setMovedInDate(timeStampedMovedInDate);
        } else {
            alert('Invalid Moved-In date');
        }

        const dateMemorableValid = validDate(dateMemorable);
        if (dateMemorableValid) {
            const timeStampedMemorableDate = ConvertToTimeStamp(dateMemorable);
            console.log(dateMemorable, timeStampedMemorableDate)
            setMemorableDate(timeStampedMemorableDate);
        }

        const reEnteredDateMemorableValid = validDate(reEnteredDateMemorable);
        var timeStampedReEnteredMemorableDate;
        if (reEnteredDateMemorableValid) {
            timeStampedReEnteredMemorableDate = ConvertToTimeStamp(reEnteredDateMemorable);
            console.log(reEnteredDateMemorable, timeStampedReEnteredMemorableDate)
            setReEnterMemorableDate(timeStampedReEnteredMemorableDate);
        }

        const emailValid = validEmail(email);
        const reenteredEmailValid = validEmail(reEnterEmail);
        const postcodeValid = validPostcode(postcode);

        if (!correspondencePostcode.trim() == "") {
            corresPostcodeValid = validPostcode(correspondencePostcode);
            !corresPostcodeValid && alert('Correspondence postcode error');
        }
        const telephoneValid = validNumber(telephone);
        const workphoneValid = validNumber(workPhone);
        const mobileValid = validNumber(mobile);

        const emailMatchesValid = emailMatch(email, reEnterEmail)
        const pwdMatchesValid = pwdMatch(password, reEnterPwd)
        const memMatchesValid = memDateMatch(dateMemorable, reEnteredDateMemorable)

        // console.log(todayDate)

        console.log(`Validation result is fname/sname ${fName} ${mName} ${sName}, 
        email ${email}, email matches ${reEnterEmail}, postcode ${postcode}, 
        correspondence postcode ${correspondencePostcode}, 
        home telephone ${telephone}, work telephone ${workPhone}, mobile ${mobile},
        pwd ${password}, pwd matches ${reEnterPwd}, 
        memorable date ${memorableDate}, memorable date matches ${reEnteredDateMemorable}`)

        console.log('FINAL Result passed', title, fName, mName, sName, nameChange,
            nINO, birth_, dateofbirth, sex, livedAbroad,
            postcode, addLine1, addLine2, addLine3, addLine4,
            moved_, movedInDate,
            rented, landlordName, landlordAddress, currentTenancyType, infoAboutCurrentAddress,
            communicationAddress, correspondenceType, placedByLocalAuthrty, localAuthrtyName,
            correspondencePostcode, correspondenceAddLine1, correspondenceAddLine2, correspondenceAddLine3, correspondenceAddLine4,
            telephone, mobile, workPhone, email, reEnterEmail,
            ethnicity, nationality, sexOrient, belief,
            healthCondition, preferedLanguage, needInterpreter,
            tenure, tenancyRefNo, areyou, connection,
            memorableDate, reEnteredDateMemorable,
            password, reEnterPwd, comments, todayDate, status_
        );

        if ((!pwdMatchesValid) || (!memMatchesValid) || (!emailMatchesValid) || (sex == "Please Choose") ||
            (!fNameValid) || (!mNameValid) || (!sNameValid) || (!emailValid) || (!reenteredEmailValid) ||
            (!postcodeValid) || (!telephoneValid) || (!workphoneValid) || (!mobileValid) ||
            (!birthValid) || (!movedValid) || (!dateMemorableValid) || (!reEnteredDateMemorableValid)) {
            !fNameValid && alert('First Name error');
            !mNameValid && alert('Middle Name error');
            !sNameValid && alert('Surname error');
            !emailValid && alert('Email error');
            !movedValid && alert('Please check moved in date');
            !dateMemorableValid && alert('Please check memorable date');
            !reEnteredDateMemorableValid && alert('Reentered email error');
            !postcodeValid && alert('Postcode error');
            !telephoneValid && alert('Telephone number error');
            !workphoneValid && alert('Work telephone number error');
            !mobileValid && alert('Mobile number error');
            !passwordValid && alert('Password error');
            !emailMatchesValid && alert('Email match error');
            !pwdMatchesValid && alert('Password match error');
            !memMatchesValid && alert('Memorable date error');

            if (sex == "Please Choose") {
                alert('Sex is not selected');
            }
            console.log(`Unable to save`)
        } else {
            console.log('FINAL Result passed', title, fName, mName, sName, nameChange,
                nINO, birth_, dateofbirth, sex, livedAbroad,
                postcode, addLine1, addLine2, addLine3, addLine4,
                movedInDate,
                rented, landlordName, landlordAddress, currentTenancyType, infoAboutCurrentAddress,
                communicationAddress, correspondenceType, placedByLocalAuthrty, localAuthrtyName,
                correspondencePostcode, correspondenceAddLine1, correspondenceAddLine2, correspondenceAddLine3, correspondenceAddLine4,
                telephone, mobile, workPhone, email, reEnterEmail,
                ethnicity, nationality, sexOrient, belief,
                healthCondition, preferedLanguage, needInterpreter,
                tenure, tenancyRefNo, areyou, connection,
                memorableDate, reEnteredDateMemorable,
                password, reEnterPwd, comments, todayDate, status_
            );
            savePrimaryApplicant();
            setTimeout(function () { getThisClientID() }, 10000);
            setTimeout(function () { createLoginReference() }, 2000);

        }
    }

    const findPostcodeAddress = (e) => {
        e.preventDefault();
        setShowAddress(true);
        alert('Sorry... \nPostcode auto-fill not available rightnow, \nplease enter your address manually')
    }

    const showAddressCard = (e) => {
        e.preventDefault();
        setShowAddress(true);
    }

    const previousPage = () => {
        try {

            navigate('/nino')

        } catch (error) {
            alert("Unable to proceed on your request")
            console.log(`Goto previous page error:- ${error}`)
        }
    }

    const savePrimaryApplicant = async () => {

        const primaryApplicantInfo = {
            client_title: title,
            client_firstname: fName,
            client_middlename: mName,
            client_surname: sName,
            client_namechange: nameChange,
            client_NINO: nINO,
            client_dateofbirth: dateofbirth,
            client_sex: sex,
            client_lived_abroad: livedAbroad,
            client_moved_to_current_address: movedInDate,
            client_postcode: postcode,
            client_address_line1: addLine1,
            client_address_line2: addLine2,
            client_address_line3: addLine3,
            client_address_line4: addLine4,
            client_is_rented_property: rented,
            client_landlord_name: landlordName,
            client_landlord_address: landlordAddress,
            client_landlord_tenancy_type: currentTenancyType,
            client_landlord_info_about_this_address: infoAboutCurrentAddress,
            client_communication_address: communicationAddress,
            client_correspondence_type: correspondenceType,
            client_correspondence_postcode: correspondencePostcode,
            client_correspondence_address_line1: correspondenceAddLine1,
            client_correspondence_address_line2: correspondenceAddLine2,
            client_correspondence_address_line3: correspondenceAddLine3,
            client_correspondence_address_line4: correspondenceAddLine4,
            client_placed_by_local_authority: placedByLocalAuthrty,
            client_if_yes_local_authority: localAuthrtyName,
            client_telephone_home: telephone,
            client_telephone_mobile: mobile,
            client_telephone_work: workPhone,
            client_email: email,
            client_ethnicity: ethnicity,
            client_nationality: nationality,
            client_sex_orient: sexOrient,
            client_religion: belief,
            client_illness: healthCondition,
            client_interpreter: needInterpreter,
            client_language_prefer: preferedLanguage,
            client_current_tenure: tenure,
            client_current_tenure_bhamCouncilTenancyNum: tenancyRefNo,
            client_from_which_country: areyou,
            client_connection_to_birmingham: connection,
            client_password: password,
            client_memorable_date: memorableDate,
            client_registration_date: todayDate,
            client_status: status_,
            client_comments: comments,
        }

        try {
            const response = await axios.post(urL, primaryApplicantInfo)
            const tempData=response.data

            console.log(`Output from backend ${tempData.message}`)
            console.log(`Output from backend ${tempData.status}`)
            console.log(`Output from backend ${tempData.clientAdded}`)
            console.log(`Output from backend ${JSON.stringify(tempData.clientAdded)}`)

        } catch (error) {
            console.log(error)
        }
    }

    const getThisClientID = async () => {

        try {
            const response = await axios.get(clientNinoUrl + nINO)
            setCurrentSavedClientId(response.data);

            console.log(`Output from nino check message ${JSON.stringify(currentSavedClientId.message)}`)
            console.log(`Output id ${JSON.stringify(currentSavedClientId.clientId)}`)
            console.log(`Output nino ${JSON.stringify(currentSavedClientId.clientNINO)}`)

        } catch (error) {
            console.log(error)
        }
    }

    const createLoginReference = async () => {

        console.log(nINO,
            fName,
            sName,
            password,
            memorableDate)

        const clientLoginSaveInfo = {
            client_NINO: nINO,
            client_firstname: fName,
            client_surname: sName,
            client_password: password,
            client_memorable_date: memorableDate,
        }
        try {
            const response = await axios.post(createClientLoginUrl, clientLoginSaveInfo)
            console.log(JSON.stringify(response.data));
            console.log(response.data);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <React.Fragment>
            <MDBContainer className='ps-5 pt-3'  >

                <p style={{ fontSize: '17px' }}><strong>Register your household</strong></p>
                <MDBCard className='w-100 mx-auto' style={{ backgroundColor: '#f7f2f287' }} >

                    {/* ********** Primary Applicant Details  */}
                    <MDBCardBody >
                        <div className='mb-2'>
                            <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} tag='h6'><strong>Primary Applicant Details</strong></MDBTypography>
                            <p style={{ fontSize: '16px' }}><strong>Title *</strong></p>
                            <select style={{ overflow: 'scroll', width: 'auto' }} className="form-select border-rounded" aria-label="Default select example"
                                value={title} onChange={(e) => { let newEdit = { ...title }; newEdit = e.target.value; setTitle(newEdit) }}>
                                <option defaultValue={title}>Please Choose</option>
                                <option value="Dr">Dr</option>
                                <option value="Miss">Miss</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Ms">Ms</option>
                            </select>

                        </div>

                        {/* ********** First name  */}
                        <div>

                            <p className='mb-4' style={{ fontSize: '16px' }}><strong>Your first name(s) *</strong></p>
                            <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                </span>
                            </div>
                            <div className='mb-4' >
                                <input style={inputStyle} className='form-control' type='text' placeholder='First name...'
                                    maxLength={20} value={fName} onChange={(e) => { let newEdit = { ...fName }; newEdit = e.target.value; setFName(newEdit) }}></input>
                            </div>
                        </div>

                        {/* ********** Middle name  */}
                        <div>

                            <p style={{ fontSize: '16px' }}><strong>Your middle name(s) *</strong></p>
                            <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                </span>
                            </div>
                            <div className='mb-4' >
                                <input style={inputStyle} className='form-control' type='text' placeholder='Middle name...'
                                    maxLength={20} value={mName} onChange={(e) => { let newEdit = { ...mName }; newEdit = e.target.value; setMName(newEdit) }}></input>
                            </div>
                        </div>

                        {/* ********** Surname  */}
                        <div>

                            <p style={{ fontSize: '16px' }}><strong>Your surname *</strong></p>
                            <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                </span>
                            </div>
                            <div className='mb-4' >
                                <input style={inputStyle} className='form-control' type='text' placeholder='Surname...'
                                    maxLength={20} value={sName} onChange={(e) => { let newEdit = { ...sName }; newEdit = e.target.value; setSName(newEdit) }}></input>
                            </div>

                        </div>

                        {/* ********** Name change  */}
                        <div>
                            <p style={{ fontSize: '14px' }}><strong>Have you ever used a different name, eg a maiden name or by deed poll? if so, please provide details</strong></p>
                            <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Have you ever used a different name, eg a maiden name or by deed poll? if so, please provide details</span>
                                </span>
                            </div>
                            <div className='mb-4' >
                                <input style={inputStyle} className='form-control' type='text' placeholder='Have you ever used a different name, eg a maiden name or by deed poll? if so, please provide details'
                                    maxLength={50} value={nameChange} onChange={(e) => { let newEdit = { ...nameChange }; newEdit = e.target.value; setNameChange(newEdit) }}></input>
                            </div>
                        </div>

                        {/* ********** NINO   */}
                        <div>

                            <p style={{ fontSize: '16px' }}><strong>Your National Insurance Number *</strong></p>
                            <div className='mb-4' >
                                <input className='form-control'
                                    style={ninoInputStyle} type='text'
                                    maxLength={9} value={nINO} readOnly ></input>

                            </div>
                        </div>

                        {/* *********** Date of Birth  */}
                        <div>

                            <p style={{ fontSize: '16px' }}><strong>Your date of birth *</strong></p>
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
                                        min={ageMin}
                                        max={ageMax}
                                        placeholder='year'
                                        onChange={(e) => { let newEdit = { ...dobYear }; newEdit = e.target.value; setDOBYear(newEdit) }}>
                                    </input>

                                </div>
                            </div>
                        </div>

                        {/* *********** Sex  */}
                        <div>

                            <div className='mt-4'>
                                <p style={{ fontSize: '16px' }}><strong>Your sex *</strong></p>
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

                {/* ***********  Lived abroad  */}
                <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>

                    <MDBCardBody>
                        <div>
                            <div>
                                <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }}><strong>Lived Abroad</strong></MDBTypography>
                            </div>
                            <p style={{ fontSize: '16px' }}><strong>Have you or any member of your household lived abroad in the last 5 years?*</strong></p>

                            <MDBRow>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='livedAbroadRadio' value='yes' label='Yes' inline id='livedAbroadYes' htmlFor="livedAbroadYes"
                                        onClick={(e) => { let newEdit = { ...livedAbroad }; newEdit = e.target.value; setLivedAbroad(newEdit) }}></MDBRadio>
                                </MDBCol>
                                <MDBCol className='col-3'>

                                    <MDBRadio name='livedAbroadRadio' label='No' inline id='livedAbroadNo' htmlFor='livedAbroadNo'
                                        defaultChecked
                                        onChange={(e) => { let newEdit = { ...livedAbroad }; newEdit = e.target.value; setLivedAbroad(newEdit) }}></MDBRadio>
                                </MDBCol>
                            </MDBRow>

                        </div>

                    </MDBCardBody>
                </MDBCard>

                {/* ***********  Current address */}
                <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                    <MDBCardBody>
                        <div>
                            <div>
                                <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} ><strong>Current Address</strong></MDBTypography>
                                <p style={{ fontSize: '16px' }}><strong>1. Address details</strong></p>

                            </div>
                            {/* ***********  Postcode  */}

                            <p style={{ fontSize: '16px' }}><strong>Postcode*</strong></p>
                            <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter the postcode using capital letters. For example: B1 1BB. If your address is outside UK please enter XY1 1YX.</span>
                                </span>
                            </div>
                            <div className='mb-4' >
                                <input style={inputStyle} className='form-control' type='text' placeholder='postcode...'
                                    maxLength={8} value={postcode} onChange={(e) => { let newEdit = { ...postcode }; newEdit = e.target.value; setPostcode(newEdit) }} />
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
                                <MDBBtn style={{ fontSize: '16px', width: 'auto', textTransform: 'none' }} color='primary me-1'
                                    onClick={showAddressCard} >
                                    Enter an address manually</MDBBtn>
                            </form>

                        </div>

                        {showAddress &&
                            <div id='showAddressDetails'>
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
                                            maxLength={75} value={addLine1} onChange={(e) => { let newEdit = { ...addLine1 }; newEdit = e.target.value; setAddLine1(newEdit) }} />
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
                                            maxLength={75} value={addLine2} onChange={(e) => { let newEdit = { ...addLine2 }; newEdit = e.target.value; setAddLine2(newEdit) }} />
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
                                            maxLength={75} value={addLine3} onChange={(e) => { let newEdit = { ...addLine3 }; newEdit = e.target.value; setAddLine3(newEdit) }} />
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
                                            maxLength={75} value={addLine4} onChange={(e) => { let newEdit = { ...addLine4 }; newEdit = e.target.value; setAddLine4(newEdit) }} />
                                    </div>
                                </div>
                            </div>
                        }

                        <div className='mt-4'>
                            {/* *********** When moved to this address  */}

                            <div>
                                <p style={{ fontSize: '16px' }}><strong>2. When did you move into this address?</strong></p>
                                <div className="help-content">
                                    <p className='' style={{ fontSize: '14px' }}><strong>Date you moved into this address *</strong></p>

                                </div>

                                <div className="help-content">
                                    <span className="help-text">
                                        <span style={{ fontSize: '12px' }} className="configured-help-text">For example 27 01 2000</span>
                                    </span>
                                </div>

                                <div className='mt-2'>
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
                                            min={ageMin + 70}
                                            max={ageMax}
                                            placeholder='year'
                                            onChange={(e) => { let newEdit = { ...movedYear }; newEdit = e.target.value; setMovedYear(newEdit) }} >
                                        </input>
                                    </div>
                                </div>
                            </div>

                            {/* ***********  Rented property?  */}
                            <div>

                                <div>
                                    <div className='mt-4'>
                                        <p style={{ fontSize: '16px' }}><strong>Is this a rented property?*</strong></p>
                                    </div>
                                    <MDBRadio name='rentedRadio' label='Yes' inline id='rentedYes' htmlFor="rentedYes"
                                        value='yes' onChange={(e) => { let newEdit = { ...rented }; newEdit = e.target.value; setRented(newEdit); setShowLandlord(true); }}></MDBRadio>     {/* setShowLandlord will  show or hide according to the selection */}
                                    <MDBRadio name='rentedRadio' label='No' inline id='rentedNo' htmlFor="rentedNo"
                                        defaultChecked
                                        onChange={(e) => { let newEdit = { ...rented }; newEdit = e.target.value; setRented(newEdit); setShowLandlord(false); }}></MDBRadio>     {/* setShowLandlord will  show or hide according to the selection */}

                                </div>
                            </div>

                            {/* ***********  Landlord Details. Show Landlord input details div when user selected Yes, if not hide the div */}
                            <div>

                                {showLandlord &&

                                    <div id='landLordDetails'>
                                        <div className='mt-4'>
                                            <p style={{ fontSize: '16px', backgroundColor: '#c6d1d075', padding: '5px' }}><strong>Landload and tenancy details*</strong></p>
                                        </div>

                                        <div className="help-content mt-2">
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px' }} className="configured-help-text">
                                                    <strong>Landlord Name</strong></span>
                                            </span>
                                        </div>
                                        <div className='mb-4' >
                                            <input style={inputStyle} className='form-control' type='text'
                                                maxLength={30} defaultValue={landlordName}
                                                onChange={(e) => { let newEdit = { ...landlordName }; newEdit = e.target.value; setLandlordName(newEdit) }} />
                                        </div>
                                        <div className="help-content mt-2">
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px' }} className="configured-help-text">
                                                    <strong>Landlord Address</strong></span>
                                            </span>
                                        </div>
                                        <div className='mb-4' >
                                            <textarea style={{ width: '350px' }} className='form-control' type='text'
                                                maxLength={100} defaultValue={landlordName}
                                                onChange={(e) => { let newEdit = { ...landlordAddress }; newEdit = e.target.value; setLandlordAddress(newEdit) }} />
                                        </div>
                                        <div className='mt-4'>
                                            <p style={{ fontSize: '16px', backgroundColor: '#c6d1d075', padding: '5px' }}><strong>Current tenancy type*</strong></p>
                                            <select style={comboBoxStyle} className="form-select rounded"
                                                maxLength={50} value={currentTenancyType} onChange={(e) => { let newEdit = { ...currentTenancyType }; newEdit = e.target.value; setCurrentTenancyType(newEdit) }}>
                                                <option defaultValue>Please Select</option>
                                                <option value="Assuredshorthold tenancy">Assuredshorthold tenancy</option>
                                                <option value="Assured tenancy">Assured tenancy</option>
                                                <option value="Excluded tenancy or licence (such as lodging)">Excluded tenancy or licence (such as lodging)</option>
                                                <option value="Regulated tenancy">Regulated tenancy</option>
                                                <option value="I dont know">I dont know</option>
                                            </select>
                                        </div>
                                        <div className='mt-4'>
                                            <p style={{ fontSize: '16px', backgroundColor: '#c6d1d075', padding: '5px' }}><strong>Any other information about this address</strong></p>
                                            <div className='mb-4' >
                                                <textarea style={{ width: '350px', height: '75px' }} className='form-control' type='text'
                                                    maxLength={150} defaultValue={infoAboutCurrentAddress}
                                                    onChange={(e) => { let newEdit = { ...infoAboutCurrentAddress }; newEdit = e.target.value; setInfoAboutCurrentAddress(newEdit) }} />
                                            </div>
                                        </div>
                                    </div>

                                }
                            </div>

                            {/* ***********  Where you want to send letters  */}
                            <div>

                                <div className='mt-4'>
                                    <p style={{ fontSize: '16px' }}><strong>3. Correspondence Address</strong></p>

                                </div>
                                <div>
                                    <div className='mt-4'>
                                        <p style={{ fontSize: '16px' }}><strong>Where would you like any letters related to your application sent:</strong></p>
                                    </div>

                                    <MDBRow>
                                        <MDBRadio name='communicationAddressRadio' id='communicationAddressYes' label='To my current address' inline
                                            defaultChecked
                                            defaultValue={communicationAddress}
                                            onChange={(e) => { let newEdit = { ...communicationAddress }; newEdit = e.target.value; setCommunicationAddress(newEdit); setShowCorrespondence(false); }}></MDBRadio>    {/* setShowCorrespondence will  show or hide according to the selection */}
                                        <MDBRadio name='communicationAddressRadio' id='communicationAddressNo' label='To my correspondence address' inline
                                            value='correspondence address' onChange={(e) => { let newEdit = { ...communicationAddress }; newEdit = e.target.value; setCommunicationAddress(newEdit); setShowCorrespondence(true); }}></MDBRadio>
                                    </MDBRow>
                                </div>

                            </div>

                            {/* ***********  Correspondence description. Show Correspondence address input when user selected to different addres, if not hide this div */}

                            {showCorrespondence &&
                                <div id='showCorrespondenceDetails'>

                                    {/* ***********  Correspondence description.  */}
                                    <div>

                                        <div className='mt-4'>
                                            <p style={{ fontSize: '16px', backgroundColor: '#c6d1d075', padding: '5px' }}><strong>Correspondence description</strong></p>
                                            <select style={comboBoxStyle}
                                                className="form-select rounded"
                                                onChange={(e) => { let newEdit = { ...correspondenceType }; newEdit = e.target.value; setCorrespondenceType(newEdit); setShowCorrespondence(showCorrespondence) }}>    {/* showCorrespondence will show or hide according to the selection */}
                                                {correspondenceData.map((option) => (
                                                    <option key={option.correspondenceKey} value={option.correspondenceKey}>{option.correspondence}</option>
                                                ))}
                                            </select>
                                            {/* <select style={{ overflow: 'scroll', width: '150px' }} className="form-select rounded"
                                                    value={correspondenceType} onChange={(e) => { setCorrespondenceType(e.target.value); setShowCorrespondence(showCorrespondence) }}>
                                                    <option defaultValue>Please Select</option>
                                                    <option value="Home">Home</option>
                                                    <option value="work">Work</option>
                                                    <option value="solicitor">Solicitor</option>
                                                    <option value="parents">Parents</option>
                                                    <option value="other">Other</option>
                                                </select> */}
                                            {/* <select style={comboBoxStyle}
                                                    className="form-select rounded"
                                                    aria-label="Default select example"
                                                    onChange={(e) => { setAreYou(e.target.value) }}>
                                                    {areyouData.map((option) => (
                                                        <option value={option.areYouKey}>{option.areYou}</option>
                                                    ))}
                                                </select> */}
                                        </div>
                                    </div>

                                    <div className='mt-4'>
                                        {/* ***********  Correspondence postcode  */}
                                        <div>

                                            <p style={{ fontSize: '17px', backgroundColor: '#c6d1d075', padding: '5px' }}><strong>Postcode*</strong></p>

                                            <div className='mb-4' >
                                                <input style={inputStyle} className='form-control' type='text' placeholder='postcode...'
                                                    maxLength={8} onChange={(e) => { let newEdit = { ...correspondencePostcode }; newEdit = e.target.value; setCorrespondencePostcode(newEdit) }} />
                                            </div>
                                        </div>

                                        {/* ***********  Correspondence address line 1  */}
                                        <div>

                                            <div className='mt-4'>
                                                <p style={{ fontSize: '17px', backgroundColor: '#c6d1d075', padding: '5px' }}><strong>Correspondence address line 1*</strong></p>
                                            </div>
                                            <div style={{ width: '' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                                <span className="far fa-question-circle help-icon"></span>
                                                <span className="help-text">
                                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter the house or flat number and street name. For example: 12 High Street</span>
                                                </span>
                                            </div>
                                            <div className='' >
                                                <input style={inputStyle} className='form-control' type='text' placeholder='house or flat number and street name'
                                                    maxLength={75} onChange={(e) => { let newEdit = { ...correspondenceAddLine1 }; newEdit = e.target.value; setCorrespondenceAddLine1(newEdit) }} />
                                            </div>

                                        </div>

                                        {/* ***********  Correspondence address line 2  */}
                                        <div>

                                            <div className='mt-4'>
                                                <p style={{ fontSize: '17px', backgroundColor: '#c6d1d075', padding: '5px' }}><strong>Correspondence address line 2*</strong></p>
                                            </div>
                                            <div style={{ width: '' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                                <span className="far fa-question-circle help-icon"></span>
                                                <span className="help-text">
                                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter the second line of your Correspondence address</span>
                                                </span>
                                            </div>
                                            <div className='' >
                                                <input style={inputStyle} className='form-control' type='text' placeholder='Correspondence address line 2'
                                                    maxLength={75} onChange={(e) => { let newEdit = { ...correspondenceAddLine2 }; newEdit = e.target.value; setCorrespondenceAddLine2(newEdit) }} />
                                            </div>
                                        </div>

                                        {/* ***********  Correspondence address line 3  */}
                                        <div>

                                            <div className='mt-4'>
                                                <p style={{ fontSize: '17px', backgroundColor: '#c6d1d075', padding: '5px' }}><strong>Correspondence address line 3*</strong></p>
                                            </div>
                                            <div style={{ width: '300px' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                                <span className="far fa-question-circle help-icon"></span>
                                                <span className="help-text">
                                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter the third line of your Correspondence address</span>
                                                </span>
                                            </div>
                                            <div className='' >
                                                <input style={inputStyle} className='form-control' type='text' placeholder='Correspondence address line 3'
                                                    maxLength={75} onChange={(e) => { let newEdit = { ...correspondenceAddLine3 }; newEdit = e.target.value; setCorrespondenceAddLine3(newEdit) }} />
                                            </div>
                                        </div>

                                        {/* ***********  Correspondence address line 4  */}
                                        <div>

                                            <div className='mt-4'>
                                                <p style={{ fontSize: '17px', backgroundColor: '#c6d1d075', padding: '5px' }}><strong>Correspondence address line 4*</strong></p>
                                            </div>
                                            <div style={{ width: '310px' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                                <span className="far fa-question-circle help-icon"></span>
                                                <span className="help-text">
                                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter the fourth line of your Correspondence address</span>
                                                </span>
                                            </div>
                                            <div className='' >
                                                <input style={inputStyle} className='form-control' type='text' placeholder='Correspondence address line 4'
                                                    maxLength={75} onChange={(e) => { let newEdit = { ...correspondenceAddLine4 }; newEdit = e.target.value; setCorrespondenceAddLine4(newEdit) }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                            {/* ***********  Were placed by local authority. Show Local Authority input when user selected Yes, if not hide this div  */}
                            <div>

                                <div className='mt-4'>
                                    <p style={{ fontSize: '16px', backgroundColor: '#c6d1d075', padding: '5px' }}><strong>Were you placed at this address in Birmingham by another local Authority?*</strong></p>
                                </div>

                                <MDBRow>
                                    <MDBCol className='col-3'>
                                        <MDBRadio name='placedByLocalAuthrtyRadio' id='placedByLocalAuthrtyYes' label='Yes' htmlFor='placedByLocalAuthrtyYes' inline
                                            value='yes' onChange={(e) => { let newEdit = { ...placedByLocalAuthrty }; newEdit = e.target.value; setPlacedByLocalAuthrty(newEdit); setShowLocalAuthority(true); }}></MDBRadio>     {/* setShowLocalAuthority will  show or hide according to the selection */}
                                    </MDBCol>
                                    <MDBCol className='col-3'>
                                        <MDBRadio name='placedByLocalAuthrtyRadio' id='placedByLocalAuthrtyNo' label='No' htmlFor='placedByLocalAuthrtyNo' inline
                                            defaultChecked
                                            onChange={(e) => { let newEdit = { ...placedByLocalAuthrty }; newEdit = e.target.value; setPlacedByLocalAuthrty(newEdit); setShowLocalAuthority(false); }}></MDBRadio>     {/* setShowLocalAuthority will  show or hide according to the selection */}
                                    </MDBCol>
                                </MDBRow>

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
                            </div>

                        </div>
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
                                    <input style={inputStyle} className='form-control' type='text' placeholder='email address'
                                        minLength={6} maxLength={40} onChange={(e) => { let newEdit = { ...email }; newEdit = e.target.value; setEmail(newEdit) }} />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <p style={{ fontSize: '17px' }}><strong>Please re-enter your email address*</strong></p>
                            </div>
                            <div>
                                <div className='mt-2' >
                                    <input style={inputStyle} className='form-control' type='text' placeholder='re-enter email address'
                                        minLength={6} maxLength={40} onChange={(e) => { let newEdit = { ...reEnterEmail }; newEdit = e.target.value; setReEnterEmail(newEdit) }} />
                                </div>
                            </div>

                        </div>

                    </MDBCardBody>
                </MDBCard>

                {/**********  Equality and Diversity Monitoring  */}
                <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>

                    <MDBCardBody>
                        <div>
                            <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} ><strong>Equality and Diversity Monitoring</strong></MDBTypography>
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

                        {/**********  Sexual orientation */}
                        <div>

                            <div className='mt-4'>
                                <p style={{ fontSize: '17px' }}><strong>What is your sexual orientation? *</strong></p>
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

                        {/**********  Health condition */}
                        <div>

                            <div className='mt-4'>
                                <p style={{ fontSize: '17px' }}><strong>Do you have any physical or mental health conditions or illnesses lasting or expected to last for 12 months or more? *</strong></p>
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

                        {/**********  Prefered Language */}
                        <div>

                            <div className='mt-4'>
                                <p style={{ fontSize: '17px' }}><strong>Which language do you prefer using? *</strong></p>
                            </div>

                            <div className='mt-2' >
                                <select style={comboBoxStyle}
                                    className="form-select rounded"
                                    value={preferedLanguage}
                                    onChange={(e) => { let newEdit = { ...preferedLanguage }; newEdit = e.target.value; setPreferedLanguage(newEdit) }} >
                                    {languages.map((option) => (
                                        <option key={option.languageKey} value={option.languageKey}>{option.language}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/**********  Interpreter */}
                        <div>

                            <div className='mt-4'>
                                <p style={{ fontSize: '17px' }}><strong>Do you require an interpreter? *</strong></p>
                            </div>
                            <MDBRow>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='needInterpreterRadio' id='needInterpreterYes' label='Yes' inline
                                        value='yes' onChange={(e) => { let newEdit = { ...needInterpreter }; newEdit = e.target.value; setNeedInterpreter(newEdit) }} />
                                </MDBCol>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='needInterpreterRadio' id='needInterpreterNo' label='No' inline
                                        defaultChecked
                                        onChange={(e) => { let newEdit = { ...needInterpreter }; newEdit = e.target.value; setNeedInterpreter(newEdit) }} />
                                </MDBCol>
                            </MDBRow>

                        </div>

                    </MDBCardBody>
                </MDBCard>

                {/**********  Eligibility */}
                <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>

                    <MDBCardBody>

                        <div>
                            <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} tag='h6'><strong>Eligibility</strong></MDBTypography>
                        </div>

                        {/**********  Current tenure */}
                        <div>

                            <div className='mt-4'>
                                <p style={{ fontSize: '17px' }}><strong>What is your current tenure? *</strong></p>
                            </div>
                            <div className='mt-2' >
                                <select style={comboBoxStyle}
                                    className="form-select rounded"
                                    aria-label="Default select example"
                                    onChange={(e) => { let newEdit = { ...tenure }; newEdit = e.target.value; setTenure(newEdit); setShowTenancyRef(true) }}>
                                    {tenureData.map((option) => (
                                        <option key={option.tenureKey} value={option.tenureKey}>{option.tenure}</option>
                                    ))}
                                </select>
                            </div>
                            {/* The following option is only for birmingham city council tenants, so this will check for that particular option has been selected*/}
                            {showTenancyRef && tenure == "1" &&
                                <div>
                                    <div className="help-content">
                                        <span className="help-text">
                                            <span style={{ fontSize: '12px' }} className="configured-help-text">
                                                As a Birmingham City Council Tenant when accepting an offer you MUST give vacant possession of your property. Failure to do so will result in your offer being withdrawn!</span>
                                        </span>
                                    </div>

                                    <div style={{ width: '280px' }} className=" mt-2 help-content border border-grey rounded">
                                        <span className="far fa-question-circle help-icon"></span>
                                        <span className="help-text">
                                            <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text ">
                                                This can be found on your Tenancy Agreement</span>
                                        </span>
                                    </div>

                                    <div className='mt-3' >
                                        <input style={{ width: '250px', fontSize: '13px' }} className='form-control' type='text' placeholder='Enter your tenancy agreement number'
                                            maxLength={15} onChange={(e) => { let newEdit = { ...tenancyRefNo }; newEdit = e.target.value; setTenancyRefNo(newEdit) }} />
                                    </div>
                                </div>
                            }
                        </div>

                        {/**********  Are you? */}
                        <div>

                            <div className="help-content">
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">
                                        Only certain people who are persons from abroad are eligible to join our housing register. The following questions will help us determine if you are eligible.</span>
                                </span>
                            </div>

                            <div className='mt-4'>
                                <p style={{ fontSize: '17px' }}><strong>Are you?*</strong></p>
                            </div>
                            <div className="help-content border border-grey rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text ">
                                        The EEA includes EU countries and also Iceland, Liechtenstein and Norway. It allows them to be part of the EU's single market. Switzerland is neither an EU or EEA member but is part of the single market - this means Swiss nationals have the same rights to live and work in the UK as other EEA nationals.</span>
                                </span>
                            </div>
                            <div className='mt-2' >
                                <select style={comboBoxStyle}
                                    className="form-select rounded"
                                    aria-label="Default select example"
                                    onChange={(e) => { let newEdit = { ...areyou }; newEdit = e.target.value; setAreYou(newEdit) }}>
                                    {areyouData.map((option) => (
                                        <option key={option.areYouKey} value={option.areYouKey}>{option.areYou}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    </MDBCardBody>
                </MDBCard>

                {/**********  Connection to Birmingham */}
                <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>

                    <MDBCardBody>
                        <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} ><strong>Connection to Birmingham</strong></MDBTypography>

                        <div>

                            <div>
                                <div className='mt-4'>
                                    <p style={{ fontSize: '17px' }}><strong>In order to help us understand why you want to live in Birmingham, we need to know about your connection to the city. Please choose from the following options. *</strong></p>
                                </div>
                                <div>
                                    <MDBCheckbox name='connectionCheckbox' value='1' id='flexCheck1' label='I have lived in Birmingham for the last 24 months or more' />
                                    <MDBCheckbox name='connectionCheckbox' value='2' id='flexCheck2' label='I am currently employed or have a confirmed offer of employment in Birmingham' />
                                    <MDBCheckbox name='connectionCheckbox' value='3' id='flexCheck4' label='Birmingham City Council has accepted a homeless duty to me and placed me outside of Birmingham' />
                                    <MDBCheckbox name='connectionCheckbox' value='4' id='flexCheck5' label='I am in, or due to undertake training or higher education in Birmingham that will last at least 6 months or more' />
                                    <MDBCheckbox name='connectionCheckbox' value='5' id='flexCheck6' label='I have caring responsibility for someone resident in Birmingham' />
                                    <MDBCheckbox name='connectionCheckbox' value='6' id='flexCheck7' label='I am a care leaver aged 18 - 21 who is owed a duty of care by Birmingham City Council' />
                                    <MDBCheckbox name='connectionCheckbox' value='7' id='flexCheck8' label='I need to be near specialist medical or support services only available in Birmingham' />
                                    <MDBCheckbox name='connectionCheckbox' value='8' id='flexCheck9' label='I am care leaver aged 22 to 25 who is owed a duty of care by Birmingham City Council and pursuing a programme of education' />
                                    <MDBCheckbox name='connectionCheckbox' value='9' id='flexCheck10' label='I am a current member of His Majestys Armed Forces' />
                                    <MDBCheckbox name='connectionCheckbox' value='10' id='flexCheck11' label='I am a current or former member of His Majestys Armed Forces and I need to move due to a medical condition that was caused by my military service' />
                                    <MDBCheckbox name='connectionCheckbox' value='11' id='flexCheck12' label='I am the spouse or civil partner of a person who has died as a result of their service in His Majestys Armed Forces and I am now leaving Services Accommodation' />
                                    <MDBCheckbox name='connectionCheckbox' value='12' id='flexCheck13' label='I am no longer a member of His Majestys Armed Forces, however I was discharged within the last 5 years' />
                                    <MDBCheckbox name='connectionCheckbox' value='13' id='flexCheck14' label='I am a former spouse or civil partner of a person in His Majestys Armed Forces and I am now leaving Services Accommodation' />
                                    <MDBCheckbox name='connectionCheckbox' value='14' id='flexCheck15' label='I am an adult child of Service personnel who is no longer able to remain in the family home due to the impact moving from base to base' />
                                    <MDBCheckbox name='connectionCheckbox' value='15' id='flexCheck16' label='I have near relatives in Birmingham and they have been resident in Birmingham for the last 5 years or more' />
                                    <MDBCheckbox name='connectionCheckbox' value='16' id='flexCheck17' label='I need to move away from another area to escape violence or harm' />
                                    <MDBCheckbox name='connectionCheckbox' value='17' id='flexCheck18' label='None of the above' />
                                </div>
                            </div>
                        </div>
                    </MDBCardBody>
                </MDBCard>

                {/**********  Any comments or additional information */}
                <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                    <MDBCardBody>
                        <p className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} ><strong>Any other comments or additional information</strong></p>
                        <div className='mt-4' >
                            <MDBCol className='col-10'>
                                <div  >
                                    <textarea style={commentStyle} className='form-control' type='text' placeholder='Comments...'
                                        maxLength={20} value={comments}
                                        onChange={(e) => { let newEdit = { ...comments }; newEdit = e.target.value; setComments(newEdit) }}></textarea>
                                </div>
                            </MDBCol>
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
                                        onChange={(e) => { let newEdit = { ...memDate }; newEdit = e.target.value; setMemDate(newEdit) }} >
                                        {datesData.map((option) => (
                                            <option key={option.dKey} value={option.dKey}>{option.dValue}</option>
                                        ))}
                                    </select>

                                    <select style={monthPickerStyle}
                                        className="form-select rounded"
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
                                        onChange={(e) => { let newEdit = { ...memYear }; newEdit = e.target.value; setMemYear(newEdit) }} >
                                    </input>

                                </div>
                            </div>

                            <div className='mt-4'>
                                <p style={{ fontSize: '16px' }}><strong>Enter your new memorable date again*</strong></p>
                                <div className='mt-2'>
                                    <div className='btn-group'>
                                        <select style={datePickerStyle}
                                            className="form-select rounded"
                                            onChange={(e) => { let newEdit = { ...reEnterMemDate }; newEdit = e.target.value; setReenterMemDate(newEdit) }} >
                                            {datesData.map((option) => (
                                                <option key={option.dKey} value={option.dKey}>{option.dValue}</option>
                                            ))}
                                        </select>

                                        <select style={monthPickerStyle}
                                            className="form-select rounded"
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
                                            onChange={(e) => { let newEdit = { ...reEnterMemYear }; newEdit = e.target.value; setReenterMemYear(newEdit) }} >
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
                                    minLength={6} maxLength={10} value={password} onChange={(e) => { let newEdit = { ...password }; newEdit = e.target.value; setPassword(newEdit) }}></input>
                            </div>

                            <div className='mt-4'>
                                <p style={{ fontSize: '16px' }}><strong>Enter your new password again*</strong></p>

                            </div>
                            <div className='mb-4' >
                                <input style={inputStyle} className='form-control' type='password' placeholder='Reenter password...'
                                    minLength={6} maxLength={10} value={reEnterPwd} onChange={(e) => { let newEdit = { ...reEnterPwd }; newEdit = e.target.value; setReEnterPwd(newEdit) }}></input>
                            </div>
                        </div>

                        <form className='d-flex w-auto'>
                            <MDBBtn style={{ fontSize: '18px', width: 'auto', textTransform: 'none' }} color='primary me-1'
                                onClick={previousPage}>
                                {/* <MDBIcon fas icon='caret-left' className='me-2' /> */}
                                Previous Page</MDBBtn>

                            <MDBBtn style={{ fontSize: '18px', width: 'auto', textTransform: 'none' }} color='primary'
                                onClick={handleSubmit}>
                                {/* <MDBIcon fas icon='caret-right' className='me-2' /> */}
                                Next Page</MDBBtn>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer >
        </React.Fragment>
    );
}