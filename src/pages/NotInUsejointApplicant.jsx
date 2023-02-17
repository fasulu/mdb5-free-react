import React, { useEffect, useState } from 'react';

import { areyous } from '../resources/areyou';
import { tenures } from '../resources/tenure';
import { ethnicities } from '../resources/ethnicity';
import { nationalities } from '../resources/nationality';
import { sexOrients } from '../resources/sexOrient';
import { beliefs } from '../resources/belief';
import { languages } from '../resources/language';
import { dates, months } from '../resources/datePicker';
import { validEmail, validName, validPostcode, validNumber, emailMatch, validNINO } from '../validations/Validator.jsx';
import ApplicationProgress from '../components/applicationProgress'

import {
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBRow, MDBCol,
    MDBTypography,
    MDBBtn,
    MDBRadio, MDBCheckbox
} from 'mdb-react-ui-kit';

export default function JointApplicant() {

    const areyouData = areyous;
    const tenureData = tenures;
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
    const [showTenancyRef, setShowTenancyRef] = useState(false);

    const [relationWithPrimaryApplicant, setRelationWithPrimaryApplicant] = useState(2)
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
    const [partnerAddress, setPartnerAddress] = useState("Need to fill dynamically")
    const [postcode, setPostcode] = useState("");
    const [addLine1, setAddLine1] = useState("");
    const [addLine2, setAddLine2] = useState("");
    const [addLine3, setAddLine3] = useState("");
    const [addLine4, setAddLine4] = useState("");
    const [placedByLocalAuthrty, setPlacedByLocalAuthrty] = useState("");
    const [localAuthrtyName, setLocalAuthrtyName] = useState("");
    const [livingInDiffAddress, setLivingInDiffAddress] = useState("");
    const [isShePregnant, setIsShePregnant] = useState("no");
    const [showDeliveryDate, setShowDeliveryDate] = useState(false);
    const [deliveryDate, setDeliveryDate] = useState("");
    const [delDate, setDelDate] = useState("");
    const [delMonth, setDelMonth] = useState("");
    const [delYear, setDelYear] = useState("");
    const [movedToUkDate, setMovedToUkDate] = useState("");
    const [movedUKDate, setMovedUKDate] = useState("");
    const [movedUKMonth, setMovedUKMonth] = useState("");
    const [movedUKYear, setMovedUKYear] = useState("");
    const [currentlyLiveWithYou, setCurrentlyLiveWithYou] = useState("no");
    const [telephone, setTelephone] = useState("");
    const [mobile, setMobile] = useState("");
    const [workPhone, setWorkPhone] = useState("");
    const [email, setEmail] = useState("");
    const [reEnterEmail, setReEnterEmail] = useState("");
    const [ethnicity, setEthnicity] = useState("");
    const [nationality, setNationality] = useState("");
    const [sexOrient, setSexOrient] = useState("");
    const [belief, setBelief] = useState("");
    const [healthCondition, setHealthCondition] = useState("");
    const [preferedLanguage, setPreferedLanguage] = useState("");
    const [needInterpreter, setNeedInterpreter] = useState("");
    const [tenure, setTenure] = useState("");
    const [tenancyRefNo, setTenancyRefNo] = useState("");
    const [isYourPartner, setIsYourPartner] = useState("");
    const [areYouWorker, setAreYouWorker] = useState();
    const [connection, setConnection] = useState([]);

    const [ninoErr, setNinoErr] = useState(false);
    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [postcodeErr, setPostcodeErr] = useState(false);
    const [numberErr, setNumberErr] = useState(false)
    const [emailMatchsErr, setEmailMatchesErr] = useState(false)

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

    const showAddresCard = (e) => {
        e.preventDefault();
        setShowAddress(true);
    }

    const ContinueOnJointApplicantDetails = (e) => {
        e.preventDefault();
        if (livingInDiffAddress === "Living with primary applicant") {
            setShowAddress(false);
        } else { setShowAddress(true); }

    }

    const saveJointMember = (e) => {
        e.preventDefault();

        setdateofbirth(dobMonth + "/" + dobDate + "/" + dobYear);
        setMovedToUkDate(movedUKMonth + "/" + movedUKDate + "/" + movedUKYear);
        setDeliveryDate(delDate + "/" + delMonth + "/" + delYear);

        setNameErr(validName(fName))
        setNameErr(validName(sName))
        setNinoErr(validNINO(nINO))
        setEmailErr(validEmail(email))
        setPostcodeErr(validPostcode(postcode))
        setNumberErr(validNumber(telephone))
        setNumberErr(validNumber(workPhone))
        setNumberErr(validNumber(mobile))

        setEmailMatchesErr(emailMatch(email, reEnterEmail))

        console.log(`Validation result is fname/sname ${nameErr}, 
        email ${emailErr}, postcode ${postcodeErr}, email matches ${emailMatchsErr}, 
        home telephone ${telephone}, work telephone ${workPhone}, mobile ${mobile}`)

        console.log('Im in saveJointMember', relationWithPrimaryApplicant,
            title, fName, mName, sName, nameChange,
            nINO, dateofbirth, sex,
            postcode, addLine1, addLine2, addLine3, addLine4,
            currentlyLiveWithYou, movedToUkDate, placedByLocalAuthrty, localAuthrtyName,
            telephone, mobile, workPhone, email, reEnterEmail,
            ethnicity, nationality, sexOrient, isShePregnant, deliveryDate,
            belief, healthCondition, preferedLanguage, needInterpreter,
            tenure, tenancyRefNo, isYourPartner, areYouWorker, connection
        )

        if ((!emailMatchsErr) || (!nameErr) || (!emailErr) || (!postcodeErr) || (!numberErr) || (!ninoErr)) {
            !nameErr && alert('Name error');
            !emailErr && alert('Email error');
            !ninoErr && alert('NINO error');
            !postcodeErr && alert('Postcode error');
            !numberErr && alert('Telephone/Mobile number error');
            !emailMatchsErr && alert('Email match error');
        }
    }

    const cancelEntry = (e) => {
        window.location.reload();
    }

    return (
        <React.Fragment>

            <MDBContainer  >

                <MDBRow className='my-5 justify-content-center' bgcolor='#f7f2f287'>
                    {/* <MDBCol className='col-md-6 col-sm-6'> */}
                    <MDBCol className='mx-2' size='md'  >

                        <p style={{ fontSize: '17px' }}><strong>Register your household</strong></p>
                        <p style={{ fontSize: '16px', lineHeight: '3px' }}>Joint Applicant and Other Household Members</p>

                        <MDBCard className='mt-4 mb-2' style={{ backgroundColor: '#f7f2f287' }} >
                            <MDBTypography className='card-header' style={{ fontSize: '13px', backgroundColor: '#dcdcdc' }} ><strong>Household Members - If you wish to share the tenancy equally and sign for it jointlty, please add you spouse or partner by selectiong "add joint applicant"</strong></MDBTypography>

                            {/* ********** Primary Applicant Details  */}
                            <MDBCardBody >

                                {/* ********** Applicant relationship  */}
                                <div >
                                    <MDBTypography className='card-header' style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} ><strong>Main Details</strong></MDBTypography>

                                    <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Relationship to main applicant *</strong></p>
                                    <select style={{ overflow: 'scroll', width: 'auto' }} className="form-select border-rounded mb-2"
                                        value={relationWithPrimaryApplicant} onChange={(e) => { setRelationWithPrimaryApplicant(e.target.value) }}>
                                        <option defaultValue={title}>Spouse or Partnership</option>
                                        <option value="1">Civil Partner</option>
                                        <option value="2">Husband</option>
                                        <option value="3">Wife</option>
                                    </select>

                                    <div style={{ width: 'auto' }} className="mb-4 help-content border border-grey rounded">

                                        <span className="help-text">
                                            <span style={{ marginTop: '5px', fontSize: '12px', padding: '5px' }} className="configured-help-text">Your partner must be aged over 18 and may be your husband, wife, spouse or civil partner.  If you offered a tenancy, this will be granted jointly with you and your partner </span>
                                        </span>
                                    </div>
                                </div>

                                {/* ********** Applicant title  */}
                                <div >

                                    <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Title *</strong></p>
                                    <select style={{ overflow: 'scroll', width: 'auto' }} className="form-select border-rounded" aria-label="Default select example"
                                        value={title} onChange={(e) => { setTitle(e.target.value) }}>
                                        <option defaultValue={title}>Please Choose</option>
                                        <option value="1">Dr</option>
                                        <option value="2">Miss</option>
                                        <option value="3">Mr</option>
                                        <option value="4">Mrs</option>
                                        <option value="5">Ms</option>
                                    </select>

                                </div>

                                {/* ********** First name  */}
                                <div>

                                    <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Your first name(s) *</strong></p>
                                    <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                        <span className="far fa-question-circle help-icon"></span>
                                        <span className="help-text">
                                            <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                        </span>
                                    </div>
                                    <div className='mb-4' >
                                        <input style={inputStyle} className='form-control' type='text' placeholder='First name...'
                                            maxLength={20} value={fName} onChange={(e) => { setFName(e.target.value) }}></input>
                                    </div>
                                </div>

                                {/* ********** Middle name  */}
                                <div>

                                    <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Your middle name(s) *</strong></p>
                                    <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                        <span className="far fa-question-circle help-icon"></span>
                                        <span className="help-text">
                                            <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                        </span>
                                    </div>
                                    <div className='mb-4' >
                                        <input style={inputStyle} className='form-control' type='text' placeholder='Middle name...'
                                            maxLength={20} value={mName} onChange={(e) => { setMName(e.target.value) }}></input>
                                    </div>
                                </div>

                                {/* ********** Surname  */}
                                <div>

                                    <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Your surname *</strong></p>
                                    <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                        <span className="far fa-question-circle help-icon"></span>
                                        <span className="help-text">
                                            <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                        </span>
                                    </div>
                                    <div className='mb-4' >
                                        <input style={inputStyle} className='form-control' type='text' placeholder='Surname...'
                                            maxLength={20} value={sName} onChange={(e) => { setSName(e.target.value) }}></input>
                                    </div>

                                </div>

                                {/* ********** Name change  */}
                                <div>

                                    <p className='mt-3 mb-2' style={{ fontSize: '14px' }}><strong>Have you ever used a different name, eg a maiden name or by deed poll? if so, please provide details</strong></p>
                                    <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                        <span className="far fa-question-circle help-icon"></span>
                                        <span className="help-text">
                                            <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Have you ever used a different name, eg a maiden name or by deed poll? if so, please provide details</span>
                                        </span>
                                    </div>
                                    <div className='mb-4' >
                                        <input style={inputStyle} className='form-control' type='text' placeholder='Have you ever used a different name, eg a maiden name or by deed poll? if so, please provide details'
                                            maxLength={50} value={nameChange} onChange={(e) => { setNameChange(e.target.value) }}></input>
                                    </div>
                                </div>

                                {/* ********** Does you partner currently live with you?  */}
                                <div >
                                    <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Does your partner currently live with you? *</strong></p>
                                    <MDBRow>
                                        <MDBCol className='col-3'>
                                            <MDBRadio name='currentlyLiveWithYouRadio' value='yes' label='Yes' inline id='currentlyLiveWithYouYes' htmlFor="currentlyLiveWithYouYes"
                                                onClick={(e) => { setCurrentlyLiveWithYou(e.target.value) }}></MDBRadio>
                                        </MDBCol>
                                        <MDBCol className='col-3'>

                                            <MDBRadio name='currentlyLiveWithYouRadio' value='no' label='No' inline id='currentlyLiveWithYouNo' htmlFor='currentlyLiveWithYouNo'
                                                onChange={(e) => { setCurrentlyLiveWithYou(e.target.value) }}></MDBRadio>
                                        </MDBCol>
                                    </MDBRow>

                                </div>
                                {/* ********** NINO   */}
                                <div>

                                    <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Your National Insurance Number *</strong></p>
                                    <div className='mb-4' >
                                        <input style={inputStyle} className='form-control' type='text'
                                            maxLength={9} value={nINO} onChange={(e) => { setNINO(e.target.value) }}></input>
                                    </div>
                                </div>

                                {/* *********** Date of Birth  */}
                                <div>

                                    <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Your date of birth *</strong></p>
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
                                                onChange={(e) => { setDOBDate(e.target.value) }}>
                                                {datesData.map((option) => (
                                                    <option key={option.dKey} value={option.dKey}>{option.dValue}</option>
                                                ))}
                                            </select>
                                            <select style={monthPickerStyle}
                                                className="form-select rounded"
                                                onChange={(e) => { setDOBMonth(e.target.value) }}>
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
                                                onChange={(e) => { setDOBYear(e.target.value) }}>
                                            </input>

                                        </div>
                                    </div>
                                </div>

                                {/* *********** Sex  */}
                                <div>

                                    <div className='mt-4'>
                                        <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Gender *</strong></p>
                                        <select style={comboBoxStyle} className="form-select border-rounded"
                                            value={sex} onChange={(e) => { setSex(e.target.value) }}>
                                            <option defaultValue>Please Choose</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>

                            </MDBCardBody>
                        </MDBCard>

                        {/* *********** Was your partner place at this address in Birmingham by another local Authority? */}
                        <MDBCard className='mt-4 mb-2' style={{ backgroundColor: '#f7f2f287' }}>
                            <MDBCardBody>

                                <div className='mb-2'>
                                    <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} ><strong>Current Address</strong></MDBTypography>

                                    <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Was your partner place at this address in Birmingham by another local Authority?*</strong></p>
                                    <MDBRow>
                                        <MDBCol className='col-3'>
                                            <MDBRadio name='placedByLocalAuthrtyRadio' id='placedByLocalAuthrtyYes' label='Yes' htmlFor='placedByLocalAuthrtyYes' inline
                                                value='yes' onChange={(e) => { setPlacedByLocalAuthrty(e.target.value); setShowLocalAuthority(true); }}></MDBRadio>     {/* setShowLocalAuthority will  show or hide according to the selection */}
                                        </MDBCol>
                                        <MDBCol className='col-3'>
                                            <MDBRadio name='placedByLocalAuthrtyRadio' id='placedByLocalAuthrtyNo' label='No' htmlFor='placedByLocalAuthrtyNo' inline
                                                value='no' onChange={(e) => { setPlacedByLocalAuthrty(e.target.value); setShowLocalAuthority(false); }}></MDBRadio>     {/* setShowLocalAuthority will  show or hide according to the selection */}
                                        </MDBCol>
                                    </MDBRow>

                                    {showLocalAuthority &&
                                        <div>

                                            <div className='mt-4'>
                                                <p style={{ fontSize: '16px' }}><strong>If yes, by which local authority?</strong></p>
                                            </div>

                                            <div className='' >
                                                <input style={inputStyle} className='form-control' type='text' placeholder='Enter the local authority name'
                                                    maxLength={25} onChange={(e) => { setLocalAuthrtyName(e.target.value) }} />
                                            </div>
                                        </div>
                                    }

                                    {/* *********** What is ther current address? */}
                                    <div>

                                        <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Current Address</strong></p>
                                        <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>What is their current address?</strong></p>
                                        <div style={{ fontSize: '13px', height: 'auto', width: 'auto', background: '#e4f5fb' }} className=" help-content border border-grey rounded">
                                            <p className='mx-2 mt-3 mb-2' style={{ fontSize: '12px' }}><strong>Is this person living with one of the following people?</strong></p>

                                            <MDBRadio className='mx-1' name='livingInDiffAddressRadio' id='livingInDiffAddressYes' label={partnerAddress} htmlFor='livingInDiffAddressYes'
                                                value='yes' onChange={(e) => { setLivingInDiffAddress("Living with primary applicant"); setShowAddress(false); }}></MDBRadio>     {/* Get and show primary applicant address in this place */}
                                            <MDBRadio className='mx-1' name='livingInDiffAddressRadio' id='livingInDiffAddressNo' label='This person is living at a different addres' htmlFor='livingInDiffAddressNo'
                                                value='no' onChange={(e) => { setLivingInDiffAddress("Living in different address"); }}></MDBRadio>     {/* Spouse or partner living in different address */}
                                        </div>
                                        <p className='mt-3 mb-2' style={{ fontSize: '13px' }}>You must select an option to conitue</p>

                                        <form className='d-flex w-auto mx-2'>
                                            <MDBBtn style={{ fontSize: '12px', width: 'auto', textTransform: 'none' }} color='btn btn-outline-secondary me-1'
                                                onClick={ContinueOnJointApplicantDetails}>
                                                Continue</MDBBtn>
                                        </form>

                                    </div>
                                </div>

                            </MDBCardBody>
                        </MDBCard>

                        {/* ***********  Postcode  */}
                        {showAddress &&
                            <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                                <MDBCardBody>
                                    <div id='showAddressDetails'>
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
                                            {/* <MDBBtn style={{ fontSize: '16px', width: 'auto', textTransform: 'none' }} color='primary me-1'
                                                onClick={showAddresCard}>
                                                Enter an address manually</MDBBtn> */}
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
                                            <input style={inputStyle} className='form-control' type='email' placeholder='email address'
                                                minLength={6} maxLength={40} onChange={(e) => { setEmail(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='mt-4  help-content border border-grey rounded' style={{ background: '#e4f5fb' }}>
                                        <p style={{ fontSize: '17px' }}><strong>Please re-enter your email address*</strong></p>
                                    </div>
                                    <div>
                                        <div className='mt-2' >
                                            <input style={inputStyle} className='form-control' type='email' placeholder='re-enter email address'
                                                minLength={6} maxLength={40} onChange={(e) => { setReEnterEmail(e.target.value) }} />
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
                                                onChange={(e) => { setEthnicity(e.target.value) }}>
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
                                            onChange={(e) => { setNationality(e.target.value) }}>
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
                                            onChange={(e) => { setBelief(e.target.value) }}>
                                            {beliefData.map((option) => (
                                                <option key={option.beliefKey} value={option.beliefKey}>{option.belief}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/**********  Sexual orientation */}
                                <div>

                                    <div className='mt-4  help-content border border-grey rounded' style={{ background: '#e4f5fb' }}>
                                        <p style={{ fontSize: '17px' }}><strong>What is your sexual orientation? *</strong></p>
                                    </div>

                                    <div className='mt-2' >
                                        <select style={comboBoxStyle}
                                            className="form-select rounded"
                                            onChange={(e) => { setSexOrient(e.target.value) }}>
                                            {sexOrientData.map((option) => (
                                                <option key={option.sexOrientKey} value={option.sexOrientKey}>{option.sexOrient}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/**********  Is your partner pregnant? */}
                                <div>

                                    <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Is your partner pregnant?*</strong></p>
                                    <span className="far fa-question-circle help-icon"></span>
                                    <span className="help-text">
                                        <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">You will need to let us know when the bay is born by providing a full copy of the birth certificate.</span>
                                    </span>
                                    <MDBRow>
                                        <MDBCol className='col-3'>
                                            <MDBRadio name='isShePregnantRadio' id='isShePregnantYes' label='Yes' htmlFor='isShePregnantYes' inline
                                                value='yes' onChange={(e) => { setIsShePregnant(e.target.value); setShowDeliveryDate(true); }}></MDBRadio>     {/* setShowDeliveryDate will  show or hide according to the selection */}
                                        </MDBCol>
                                        <MDBCol className='col-3'>
                                            <MDBRadio name='isShePregnantRadio' id='isShePregnantNo' label='No' htmlFor='isShePregnantNo' inline
                                                value='no' onChange={(e) => { setIsShePregnant(e.target.value); setShowDeliveryDate(false); }}></MDBRadio>     {/* setShowDeliveryDate will  show or hide according to the selection */}
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
                                                    onChange={(e) => { setDelDate(e.target.value) }}>
                                                    {datesData.map((option) => (
                                                        <option key={option.dKey} value={option.dKey}>{option.dValue}</option>
                                                    ))}
                                                </select>
                                                <select style={monthPickerStyle}
                                                    className="form-select rounded"
                                                    onChange={(e) => { setDelMonth(e.target.value) }}>
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
                                                    onChange={(e) => { setDelYear(e.target.value) }}>
                                                </input>

                                            </div>
                                        </div>
                                    </div>
                                }

                                {/**********  Health condition */}
                                <div>

                                    <div className='mt-4'>
                                        <p style={{ fontSize: '17px' }}><strong>Do you have any physical or mental health conditions or illnesses lasting or expected to last for 12 months or more? *</strong></p>
                                    </div>

                                    <div className='mt-2' >
                                        <select style={{ overflow: 'scroll', width: '150px' }} className="form-select rounded"
                                            onChange={(e) => { setHealthCondition(e.target.value) }} >
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
                                        <p style={{ fontSize: '17px' }}><strong>Which language does you partner prefer using? *</strong></p>
                                    </div>

                                    <div className='mt-2' >
                                        <select style={comboBoxStyle}
                                            className="form-select rounded"
                                            onChange={(e) => { setPreferedLanguage(e.target.value) }} >
                                            {languages.map((option) => (
                                                <option key={option.languageKey} value={option.languageKey}>{option.language}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/**********  Interpreter */}
                                <div >

                                    <div className='mt-4  help-content border border-grey rounded' style={{ background: '#e4f5fb' }}>
                                        <p style={{ fontSize: '17px' }}><strong>Does your partner require an interpreter? *</strong></p>
                                        <MDBRow >
                                            <MDBCol className='col-3 mx-2 mb-2'>
                                                <MDBRadio name='needInterpreterRadio' id='needInterpreterYes' label='Yes' inline
                                                    value='yes' onChange={(e) => { setNeedInterpreter(e.target.value) }} />
                                            </MDBCol>
                                            <MDBCol className='col-3'>
                                                <MDBRadio name='needInterpreterRadio' id='needInterpreterNo' label='No' inline
                                                    value='no' onChange={(e) => { setNeedInterpreter(e.target.value) }} />
                                            </MDBCol>
                                        </MDBRow>
                                    </div>

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
                                        <p style={{ fontSize: '17px' }}><strong>What is your partner's current tenure? *</strong></p>
                                    </div>
                                    <div className='mt-2' >
                                        <select style={comboBoxStyle}
                                            className="form-select rounded"
                                            aria-label="Default select example"
                                            onChange={(e) => { setTenure(e.target.value); setShowTenancyRef(!showTenancyRef) }}>
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
                                                    maxLength={15} onChange={(e) => { setTenancyRefNo(e.target.value) }} />
                                            </div>
                                        </div>
                                    }
                                </div>

                                {/**********  Is your partner? */}
                                <div>

                                    <div className="help-content">
                                        <span className="help-text">
                                            <span style={{ fontSize: '12px' }} className="configured-help-text">
                                                Only certain people who are persons from abroad are eligible to join our housing register. The following questions will help us determine if you are eligible.</span>
                                        </span>
                                    </div>

                                    <div className='mt-4'>
                                        <p style={{ fontSize: '17px' }}><strong>Is your partner?*</strong></p>
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
                                            onChange={(e) => { setIsYourPartner(e.target.value) }}>
                                            {areyouData.map((option) => (
                                                <option key={option.areYouKey} value={option.areYouKey}>{option.areYou}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* *********** When moved to this address  */}
                                <div className='mt-4'>
                                    <p style={{ fontSize: '16px' }}><strong>2. When did your partner move to the UK?</strong></p>
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
                                                onChange={(e) => { setMovedUKDate(e.target.value) }} >
                                                {datesData.map((option) => (
                                                    <option key={option.dKey} value={option.dKey}>{option.dValue}</option>
                                                ))}
                                            </select>

                                            <select style={monthPickerStyle}
                                                className="form-select rounded"
                                                onChange={(e) => { setMovedUKMonth(e.target.value) }} >
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
                                                onChange={(e) => { setMovedUKYear(e.target.value) }} >
                                            </input>
                                        </div>
                                    </div>
                                </div>

                                {/**********  Are you  a worker, self-employed or a student?*/}
                                <div className=" mt-2 help-content border border-grey rounded" style={{ fontSize: '13px', width: 'auto', background: '#e4f5fb' }}>

                                    <div className='mt-2'>
                                        <p style={{ fontSize: '17px' }}><strong>Are you  a worker, self-employed or a student?*</strong></p>
                                    </div>
                                    <MDBRow className='mb-2'>
                                        <MDBCol className='col-3 mx-2 mb-2'>
                                            <MDBRadio name='areYouWorkerRadio' id='areYouWorkerYes' label='Yes' inline
                                                value='yes' onChange={(e) => { setAreYouWorker(e.target.value) }} />
                                        </MDBCol>
                                        <MDBCol className='col-3'>
                                            <MDBRadio name='areYouWorkerRadio' id='areYouWorkerNo' label='No' inline
                                                value='no' onChange={(e) => { setAreYouWorker(e.target.value) }} />
                                        </MDBCol>
                                    </MDBRow>

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
                                            <MDBCheckbox name='flexCheck' value='1' id='flexCheck1' label='I have lived in Birmingham for the last 24 months or more'
                                                onChange={handleCheckbox} />
                                            <MDBCheckbox name='flexCheck' value='2' id='flexCheck2' label='I am currently employed or have a confirmed offer of employment in Birmingham'
                                                onChange={handleCheckbox} />
                                            <MDBCheckbox name='flexCheck' value='3' id='flexCheck4' label='Birmingham City Council has accepted a homeless duty to me and placed me outside of Birmingham'
                                                onChange={handleCheckbox} />
                                            <MDBCheckbox name='flexCheck' value='4' id='flexCheck5' label='I am in, or due to undertake training or higher education in Birmingham that will last at least 6 months or more'
                                                onChange={handleCheckbox} />
                                            <MDBCheckbox name='flexCheck' value='5' id='flexCheck6' label='I have caring responsibility for someone resident in Birmingham'
                                                onChange={handleCheckbox} />
                                            <MDBCheckbox name='flexCheck' value='6' id='flexCheck7' label='I am a care leaver aged 18 - 21 who is owed a duty of care by Birmingham City Council'
                                                onChange={handleCheckbox} />
                                            <MDBCheckbox name='flexCheck' value='7' id='flexCheck8' label='I need to be near specialist medical or support services only available in Birmingham'
                                                onChange={handleCheckbox} />
                                            <MDBCheckbox name='flexCheck' value='8' id='flexCheck9' label='I am care leaver aged 22 to 25 who is owed a duty of care by Birmingham City Council and pursuing a programme of education'
                                                onChange={handleCheckbox} />
                                            <MDBCheckbox name='flexCheck' value='9' id='flexCheck10' label='I am a current member of His Majestys Armed Forces'
                                                onChange={handleCheckbox} />
                                            <MDBCheckbox name='flexCheck' value='10' id='flexCheck11' label='I am a current or former member of His Majestys Armed Forces and I need to move due to a medical condition that was caused by my military service'
                                                onChange={handleCheckbox} />
                                            <MDBCheckbox name='flexCheck' value='11' id='flexCheck12' label='I am the spouse or civil partner of a person who has died as a result of their service in His Majestys Armed Forces and I am now leaving Services Accommodation'
                                                onChange={handleCheckbox} />
                                            <MDBCheckbox name='flexCheck' value='12' id='flexCheck13' label='I am no longer a member of His Majestys Armed Forces, however I was discharged within the last 5 years'
                                                onChange={handleCheckbox} />
                                            <MDBCheckbox name='flexCheck' value='13' id='flexCheck14' label='I am a former spouse or civil partner of a person in His Majestys Armed Forces and I am now leaving Services Accommodation'
                                                onChange={handleCheckbox} />
                                            <MDBCheckbox name='flexCheck' value='14' id='flexCheck15' label='I am an adult child of Service personnel who is no longer able to remain in the family home due to the impact moving from base to base'
                                                onChange={handleCheckbox} />
                                            <MDBCheckbox name='flexCheck' value='15' id='flexCheck16' label='I have near relatives in Birmingham and they have been resident in Birmingham for the last 5 years or more'
                                                onChange={handleCheckbox} />
                                            <MDBCheckbox name='flexCheck' value='16' id='flexCheck17' label='I need to move away from another area to escape violence or harm'
                                                onChange={handleCheckbox} />
                                            <MDBCheckbox name='flexCheck' value='17' id='flexCheck18' label='None of the above'
                                                onChange={handleCheckbox} />
                                        </div>
                                    </div>
                                </div>

                                <form className='d-flex w-auto mt-3'>
                                    <MDBBtn style={{ fontSize: '16px', width: 'auto', textTransform: 'none' }} color='primary me-1'
                                        onClick={saveJointMember} >
                                        Save Joint Member</MDBBtn>
                                    <MDBBtn className='me-1 btn btn-outline-secondary' style={{ fontSize: '16px', width: 'auto', textTransform: 'none' }} color='white'
                                        onClick={cancelEntry}>
                                        Cancel</MDBBtn>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    {/* <MDBCol className='col-md-6 col-sm-6'> */}
                    <MDBCol className='mx-2' size='md'  >

                        <ApplicationProgress iconStatus={"JointApplicant"} ></ApplicationProgress>
                    </MDBCol>
                </MDBRow>
            </MDBContainer >
        </React.Fragment >
    );
}