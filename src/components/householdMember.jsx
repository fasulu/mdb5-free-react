import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from "../userContext/UserContext"


import { areyous } from '../resources/areyou';
import { tenures } from '../resources/tenure';
import { ethnicities } from '../resources/ethnicity';
import { nationalities } from '../resources/nationality';
import { sexOrients } from '../resources/sexOrient';
import { beliefs } from '../resources/belief';
import { dates, months } from '../resources/datePicker';
import { validEmail, validName, validPostcode, validNumber, emailMatch, pwdMatch, memDateMatch, validNINO } from '../validations/Validator.jsx';
import ApplicationProgress from '../components/applicationProgress'

import {
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBRow, MDBCol,
    MDBTypography,
    MDBBtn,
    MDBRadio
} from 'mdb-react-ui-kit';

export default function HouseholdMember() {
    
    const { clientId, setClientId } = useContext(UserContext);

    const ethnicityData = ethnicities;
    const nationalityData = nationalities;
    const sexOrientData = sexOrients;
    const beliefData = beliefs;
    const datesData = dates;
    const monthsData = months;

    const yearMax = new Date().getFullYear();        // year picker up to current year
    const yearMin = new Date().getFullYear() - 120;  // year picker 120 year back from current year

    const inputStyle = { fontSize: '14px', width: '250px' };
    const comboBoxStyle = { maxWidth: '250px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const datePickerStyle = { maxWidth: '70px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const monthPickerStyle = { maxWidth: '130px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const yearPickerStyle = { width: '80px', float: 'left', border: '5' };
    
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
    const [nameChange, setNameChange] = useState("");
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

    const [placedByLocalAuthrty, setPlacedByLocalAuthrty] = useState("");
    const [localAuthrtyName, setLocalAuthrtyName] = useState("");

    const [isSpouseOfAnotherMember, setIsSpouseOfAnotherMember] = useState("no");
    const [spouseAnotherMember, setSpouseAnotherMember] = useState(false);
    const [showDeliveryDate, setShowDeliveryDate] = useState(false);

    const [telephone, setTelephone] = useState("");
    const [mobile, setMobile] = useState("");
    const [workPhone, setWorkPhone] = useState("");
    const [email, setEmail] = useState("");
    const [reEnterEmail, setReEnterEmail] = useState("");

    const [ethnicity, setEthnicity] = useState("");
    const [nationality, setNationality] = useState("");
    const [sexOrient, setSexOrient] = useState("");
    const [belief, setBelief] = useState("");
    const [healthCondition, setHealthCondition] = useState("no");

    const [areYouWorker, setAreYouWorker] = useState("no");
    const [comments, setComments] = useState("");

    useEffect(() => {

    }, [])

    const handleCheckbox = (e) => {

        // e.preventDefault();
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
        setShowAddress(true);
        alert('Sorry... \nPostcode search is not connected to UK Post Office API, \nplease enter the address manually')
    }

    const saveJointMember = (e) => {
        e.preventDefault();

        setdateofbirth(dobMonth + "/" + dobDate + "/" + dobYear);
        setMovedInDate(movedMonth + "/" + movedDate + "/" + movedYear);
        setDeliveryDate(delMonth + "/" + delDate + "/" + delYear);

        const fNameErr = validName(fName);
        const mNameErr = validName(sName);
        const sNameErr = validName(sName);
        const spouseNameErr = validName(spouseAnotherMemberName);
        const ninoErr = validNINO(nINO);
        const emailErr = validEmail(email);
        const telephoneErr = validNumber(telephone);
        const workphoneErr = validNumber(workPhone);
        const mobileErr = validNumber(mobile);
        const emailMatchesErr = emailMatch(email, reEnterEmail);

        console.log(`Validation result is fname/mname/sname ${fNameErr} ${mNameErr} ${sNameErr}, 
        ninoErr ${ninoErr}, spouse name ${spouseNameErr}, home telephone ${telephoneErr}, work telephone ${workphoneErr}, 
        mobile ${mobileErr},email ${emailErr}, email matches ${emailMatchesErr}`)

        console.log('Im in saveJointMember', relationWithPrimaryApplicant,
            assessmentPurposeOnly, title, fName, mName, sName, nameChange,
            currentlyLiveWithYou, isSpouseOfAnotherMember, spouseAnotherMemberName,
            nINO, dateofbirth, sex, placedByLocalAuthrty, localAuthrtyName,
            currentAddress, telephone, mobile, workPhone, email, reEnterEmail, movedInDate,
            ethnicity, nationality, belief, sexOrient,
            isShePregnant, deliveryDate,
            healthCondition, areYouWorker
        )

        if ((!fNameErr) || (!mNameErr) || (!sNameErr) || (!emailErr) || (!emailMatchesErr) ||
            (!ninoErr) || (!telephoneErr) || (!workphoneErr) || (!mobileErr)) {
            !fNameErr && alert('First Name error');
            !mNameErr && alert('Middle Name error');
            !sNameErr && alert('Surname error');
            !telephoneErr && alert('Telephone number error');
            !workphoneErr && alert('Work telephone number error');
            !mobileErr && alert('Mobile number error');
            !emailErr && alert('Email error');
            !ninoErr && alert('NINO error');
            !emailMatchesErr && alert('Email match error');

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
                    <MDBTypography className='card-header' style={{ fontSize: '13px', backgroundColor: '#dcdcdc' }} ><strong>Household Members - If you wish to share the tenancy equally and sign for it jointlty, please add you spouse or partner by selectiong "add joint applicant"</strong></MDBTypography>

                    {/* ********** Primary Applicant Details  */}
                    <MDBCardBody >

                        {/* ********** Applicant relationship  */}
                        <div >
                            <MDBTypography className='card-header' style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} ><strong>Main Details</strong></MDBTypography>

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Relationship to main applicant *</strong></p>
                            <select style={{ overflow: 'scroll', width: 'auto' }} className="form-select border-rounded mb-2"
                                value={relationWithPrimaryApplicant} onChange={(e) => { let newEdit = { ...relationWithPrimaryApplicant }; newEdit = e.target.value; setRelationWithPrimaryApplicant(newEdit) }}>
                                <option defaultValue>Please choose</option>
                                <option value="1">Daughter</option>
                                <option value="2">Relative</option>
                                <option value="3">Son</option>
                                <option value="4">Friend</option>
                            </select>

                            <div style={{ width: 'auto' }} className="mb-4 help-content border border-grey rounded">

                                <span className="help-text">
                                    <span style={{ marginTop: '5px', fontSize: '12px', padding: '5px' }} className="configured-help-text">This household member must be aged over 18 and may be your husband, wife, spouse or civil partner.  If you offered a tenancy, this will be granted jointly with you and your partner </span>
                                </span>
                            </div>
                        </div>

                        {/* ********** Has this household member been added for assessment purpose only?  */}
                        <div >
                            <p className='mt-3 mb-2' style={{ fontSize: '14px' }}><strong>Has this household member been added for assessment purpose only and therefor will not be moving with you? *</strong></p>
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
                                <option value="1">Dr</option>
                                <option value="2">Miss</option>
                                <option value="3">Mr</option>
                                <option value="4">Mrs</option>
                                <option value="5">Ms</option>
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
                                    maxLength={20} value={fName} onChange={(e) => { let newEdit = { ...fName }; newEdit = e.target.value; setFName(newEdit) }}></input>
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
                                    maxLength={20} value={mName} onChange={(e) => { let newEdit = { ...mName }; newEdit = e.target.value; setMName(newEdit) }}></input>
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
                                    maxLength={20} value={sName} onChange={(e) => { let newEdit = { ...sName }; newEdit = e.target.value; setSName(newEdit) }}></input>
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
                                    maxLength={50} value={nameChange} onChange={(e) => { let newEdit = { ...nameChange }; newEdit = e.target.value; setNameChange(newEdit) }}></input>
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
                                <>
                                    <div className=" mt-2 p-2 help-content border border-grey rounded">

                                        <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Above person's spouse first name and surname *</strong></p>
                                        <div className='mb-4' >
                                            <input className='form-control' type='text' placeholder='First name and Surname...'
                                                maxLength={50} value={spouseAnotherMemberName} onChange={(e) => { let newEdit = { ...spouseAnotherMemberName }; newEdit = e.target.value; SetSpouseAnotherMemberName(newEdit) }}></input>
                                        </div>

                                    </div>
                                </>
                            }

                        </div>

                        {/* ********** NINO   */}
                        <div>

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Household Member's NINO *</strong></p>
                            <div className='mb-4' >
                                <input style={inputStyle} className='form-control' type='text'
                                    maxLength={9} value={nINO} onChange={(e) => { let newEdit = { ...nINO }; newEdit = e.target.value; setNINO(newEdit) }}></input>
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
                            <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} >
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
                                                maxLength={8} value={postcode} onChange={(e) => { setPostcode(e.target.value) }} />
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
                                                    maxLength={75} value={addLine1} onChange={(e) => { setAddLine1(e.target.value) }} />
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
                                                    maxLength={75} value={addLine2} onChange={(e) => { setAddLine2(e.target.value) }} />
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
                                                    maxLength={75} value={addLine3} onChange={(e) => { setAddLine3(e.target.value) }} />
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
                                                    maxLength={75} value={addLine4} onChange={(e) => { setAddLine4(e.target.value) }} />
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
                            <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} ><strong>Contact Details</strong></MDBTypography>
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
                            <MDBTypography className='card-header'
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
                                    <textarea style={{ width: '250px', height: '350px' }} className='form-control' type='text'
                                        maxLength={250} onChange={(e) => { let newEdit = { ...comments }; newEdit = e.target.value; setComments(newEdit) }} />
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                </MDBCard>
                <form className='d-flex w-auto mt-4'>
                    <MDBBtn style={{ fontSize: '16px', width: 'auto', textTransform: 'none' }} color='primary me-1'
                        onClick={saveJointMember} >
                        Save Household Member</MDBBtn>
                    <MDBBtn className='me-1 btn btn-outline-secondary' style={{ fontSize: '16px', width: 'auto', textTransform: 'none' }} color='white'
                        onClick={cancelEntry}>
                        Cancel</MDBBtn>
                </form>
                <MDBCardBody>
                </MDBCardBody>

            </MDBContainer>
        </React.Fragment >
    );
}