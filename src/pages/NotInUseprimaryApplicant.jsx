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
import { validPwd, validEmail, validName, validPostcode, validNumber, emailMatch, pwdMatch, memDateMatch, validNINO } from '../validations/Validator.jsx';
import ApplicationProgress from '../components/applicationProgress'

import {
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBRow, MDBCol,
    MDBTypography,
    MDBBtn,
    MDBRadio, MDBCheckbox
} from 'mdb-react-ui-kit';

export default function PrimaryApplicant() {

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
    const comboBoxStyle = { maxWidth: '250px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const datePickerStyle = { maxWidth: '70px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const monthPickerStyle = { maxWidth: '130px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const yearPickerStyle = { width: '80px', float: 'left', border: '5' };

    const [showLandlord, setShowLandlord] = useState(false);
    const [showAddress, setShowAddress] = useState(false);
    const [showCorrespondence, setShowCorrespondence] = useState(false);
    const [showLocalAuthority, setShowLocalAuthority] = useState(false);
    const [showTenancyRef, setShowTenancyRef] = useState(false);

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
    const [postcode, setPostcode] = useState("");
    const [addLine1, setAddLine1] = useState("");
    const [addLine2, setAddLine2] = useState("");
    const [addLine3, setAddLine3] = useState("");
    const [addLine4, setAddLine4] = useState("");
    const [movedInDate, setMovedInDate] = useState("");
    const [movedDate, setMovedDate] = useState("");
    const [movedMonth, setMovedMonth] = useState("");
    const [movedYear, setMovedYear] = useState("");
    const [rented, setRented] = useState("");
    const [landlordName, setLandlordName] = useState("");
    const [landlordAddress, setLandlordAddress] = useState("");
    const [currentTenancyType, setCurrentTenancyType] = useState("");
    const [infoAboutCurrentAddress, setInfoAboutCurrentAddress] = useState("");
    const [livedAbroad, setLivedAbroad] = useState("no");
    const [communicationAddress, setCommunicationAddress] = useState("");
    const [correspondenceType, setCorrespondenceType] = useState("")
    const [placedByLocalAuthrty, setPlacedByLocalAuthrty] = useState("");
    const [localAuthrtyName, setLocalAuthrtyName] = useState("");
    const [correspondencePostcode, setCorrespondencePostcode] = useState("");
    const [correspondenceAddLine1, setCorrespondenceAddLine1] = useState("");
    const [correspondenceAddLine2, setCorrespondenceAddLine2] = useState("");
    const [correspondenceAddLine3, setCorrespondenceAddLine3] = useState("");
    const [correspondenceAddLine4, setCorrespondenceAddLine4] = useState("");
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
    const [areyou, setAreYou] = useState("");
    const [connection, setConnection] = useState([]);
    const [memorableDate, setMemorableDate] = useState("");
    const [memDate, setMemDate] = useState("");
    const [memMonth, setMemMonth] = useState("");
    const [memYear, setMemYear] = useState("");
    const [reEntermemorableDate, setReenterMemorableDate] = useState("");
    const [reEnterMemDate, setReenterMemDate] = useState("");
    const [reEnterMemMonth, setReenterMemMonth] = useState("");
    const [reEnterMemYear, setReenterMemYear] = useState("");
    const [password, setPassword] = useState("");
    const [reEnterPwd, setReEnterPwd] = useState("");

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

        setdateofbirth(dobMonth + "/" + dobDate + "/" + dobYear);
        setMovedInDate(movedMonth + "/" + movedDate + "/" + movedYear);
        setMemorableDate(memMonth + "/" + memDate + "/" + memYear);
        setReenterMemorableDate(reEnterMemMonth + "/" + reEnterMemDate + "/" + reEnterMemYear);

        setNameErr(validName(fName));
        setNameErr(validName(sName));
        setNameErr(validNINO(nINO));
        setPasswordErr(validPwd(password));
        setEmailErr(validEmail(email));
        setPostcodeErr(validPostcode(postcode));
        setPostcodeErr(validPostcode(correspondencePostcode));
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
            nINO, dateofbirth, sex, livedAbroad,
            postcode, addLine1, addLine2, addLine3, addLine4,
            movedInDate,
            rented, landlordName, landlordAddress, currentTenancyType, infoAboutCurrentAddress,
            communicationAddress, correspondenceType, placedByLocalAuthrty, localAuthrtyName,
            correspondencePostcode, correspondenceAddLine1, correspondenceAddLine2, correspondenceAddLine3, correspondenceAddLine4,
            telephone, mobile, workPhone, email, reEnterEmail,
            ethnicity, nationality, sexOrient, belief,
            healthCondition, preferedLanguage, needInterpreter,
            tenure, tenancyRefNo, areyou, connection,
            memorableDate, reEntermemorableDate,
            password, reEnterPwd
        )

        if ((!pwdMatchsErr) || (!memMatchsErr) || (!emailMatchsErr)|| (!nameErr) || (!emailErr) || (!postcodeErr) || (!numberErr) || (!ninoErr)) {
            !nameErr && alert('Name error');
            !emailErr && alert('Email error');
            !ninoErr && alert('NINO error');
            !postcodeErr && alert('Postcode error');
            !numberErr && alert('Telephone/Mobile number error');
            !emailMatchsErr && alert('Email match error');
            !pwdMatchsErr && alert('Password error');
            !memMatchsErr && alert('Memorable date error');
            !emailMatchsErr && alert('Email error');
        }
    }

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

    return (
        <React.Fragment>
            <MDBContainer  >

                <MDBRow className='my-5 justify-content-center' bgcolor='#f7f2f287'>
                    {/* <MDBCol className='col-md-6 col-sm-6'> */}
                    <MDBCol className='mx-2' size='md'  >

                        <p style={{ fontSize: '17px' }}><strong>Register your household</strong></p>
                        <p style={{ fontSize: '16px', lineHeight: '3px' }}>Household Registration</p>

                        <MDBCard className=' mx-auto' style={{ backgroundColor: '#f7f2f287' }} >

                            {/* ********** Primary Applicant Details  */}
                            <MDBCardBody >
                                <div className='mb-2'>
                                    <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} tag='h6'><strong>Primary Applicant Details</strong></MDBTypography>
                                    <p style={{ fontSize: '16px' }}><strong>Title *</strong></p>
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

                                    <p className='mb-4' style={{ fontSize: '16px' }}><strong>Your first name(s) *</strong></p>
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

                                    <p style={{ fontSize: '16px' }}><strong>Your middle name(s) *</strong></p>
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

                                    <p style={{ fontSize: '16px' }}><strong>Your surname *</strong></p>
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

                                    <p style={{ fontSize: '14px' }}><strong>Have you ever used a different name, eg a maiden name or by deed poll? if so, please provide details</strong></p>
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

                                {/* ********** NINO   */}
                                <div>

                                    <p style={{ fontSize: '16px' }}><strong>Your National Insurance Number *</strong></p>
                                    <div className='mb-4' >
                                        <input style={inputStyle} className='form-control' type='text'
                                            maxLength={9} value={nINO} onChange={(e) => { setNINO(e.target.value) }}></input>
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
                                                min={ageMin}
                                                max={ageMax}
                                                placeholder='year'
                                                onChange={(e) => { setDOBYear(e.target.value) }}>
                                            </input>

                                        </div>
                                    </div>
                                </div>

                                {/* *********** Sex  */}
                                <div>

                                    <div className='mt-4'>
                                        <p style={{ fontSize: '16px' }}><strong>Your sex *</strong></p>
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

                        {/* ***********  Lived abroad  */}
                        <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>

                            <MDBCardBody>

                                <div>

                                    <div>
                                        <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }}><strong>Lived Abroad</strong></MDBTypography>
                                    </div>

                                    <p style={{ fontSize: '16px' }}><strong>Have you or any member of your household lived abroad in the last 5 years? *</strong></p>

                                    <MDBRow>
                                        <MDBCol className='col-3'>
                                            <MDBRadio name='livedAbroadRadio' value='yes' label='Yes' inline id='livedAbroadYes' htmlFor="livedAbroadYes"
                                                onClick={(e) => { setLivedAbroad(e.target.value) }}></MDBRadio>
                                        </MDBCol>
                                        <MDBCol className='col-3'>

                                            <MDBRadio name='livedAbroadRadio' value='no' label='No' inline id='livedAbroadNo' htmlFor='livedAbroadNo'
                                                onChange={(e) => { setLivedAbroad(e.target.value) }}></MDBRadio>
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
                                        <MDBBtn style={{ fontSize: '16px', width: 'auto', textTransform: 'none' }} color='primary me-1'
                                            onClick={showAddresCard} >
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
                                                    onChange={(e) => { setMovedDate(e.target.value) }} >
                                                    {datesData.map((option) => (
                                                        <option key={option.dKey} value={option.dKey}>{option.dValue}</option>
                                                    ))}
                                                </select>

                                                <select style={monthPickerStyle}
                                                    className="form-select rounded"
                                                    onChange={(e) => { setMovedMonth(e.target.value) }} >
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
                                                    onChange={(e) => { setMovedYear(e.target.value) }} >
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
                                                value='yes' onChange={(e) => { setRented(e.target.value); setShowLandlord(true); }}></MDBRadio>     {/* setShowLandlord will  show or hide according to the selection */}
                                            <MDBRadio name='rentedRadio' label='No' inline id='rentedNo' htmlFor="rentedNo"
                                                value='no' onChange={(e) => { setRented(e.target.value); setShowLandlord(false); }}></MDBRadio>     {/* setShowLandlord will  show or hide according to the selection */}

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
                                                        maxLength={30} onChange={(e) => { setLandlordName(e.target.value) }} />
                                                </div>
                                                <div className="help-content mt-2">
                                                    <span className="help-text">
                                                        <span style={{ fontSize: '12px' }} className="configured-help-text">
                                                            <strong>Landlord Address</strong></span>
                                                    </span>
                                                </div>
                                                <div className='mb-4' >
                                                    <textarea style={{ width: '350px' }} className='form-control' type='text'
                                                        maxLength={100} onChange={(e) => { setLandlordAddress(e.target.value) }} />
                                                </div>
                                                <div className='mt-4'>
                                                    <p style={{ fontSize: '16px', backgroundColor: '#c6d1d075', padding: '5px' }}><strong>Current tenancy type*</strong></p>
                                                    <select style={comboBoxStyle} className="form-select rounded"
                                                        maxLength={50} value={currentTenancyType} onChange={(e) => { setCurrentTenancyType(e.target.value) }}>
                                                        <option defaultValue>Please Select</option>
                                                        <option value="Assuredshorthold tenancy">Assuredshorthold tenancy</option>
                                                        <option value="Assured tenancy">Assured tenancy</option>
                                                        <option value="Excluded tenancy or licence (such as lodging)">Excluded tenancy or licence (such as lodging)</option>
                                                        <option value="Regulated tenancy">Regulated tenancy</option>
                                                    </select>
                                                </div>
                                                <div className='mt-4'>
                                                    <p style={{ fontSize: '16px', backgroundColor: '#c6d1d075', padding: '5px' }}><strong>Any other information about this address</strong></p>
                                                    <div className='mb-4' >
                                                        <textarea style={{ width: '350px', height: '75px' }} className='form-control' type='text'
                                                            maxLength={150} onChange={(e) => { setInfoAboutCurrentAddress(e.target.value) }} />
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
                                                    value='current address' onChange={(e) => { setCommunicationAddress(e.target.value); setShowCorrespondence(false); }}></MDBRadio>    {/* setShowCorrespondence will  show or hide according to the selection */}
                                                <MDBRadio name='communicationAddressRadio' id='communicationAddressNo' label='To my correspondence address' inline
                                                    value='correspondence address' onChange={(e) => { setCommunicationAddress(e.target.value); setShowCorrespondence(true); }}></MDBRadio>
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
                                                        onChange={(e) => { setCorrespondenceType(e.target.value); setShowCorrespondence(showCorrespondence) }}>    {/* showCorrespondence will show or hide according to the selection */}
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
                                                    <div style={{ width: '' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                                        <span className="far fa-question-circle help-icon"></span>
                                                        <span className="help-text">
                                                            <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter the postcode using capital letters. For example: B1 1BB. If your address is outside UK please enter XY1 1YX.</span>
                                                        </span>
                                                    </div>
                                                    <div className='mb-4' >
                                                        <input style={inputStyle} className='form-control' type='text' placeholder='postcode...'
                                                            maxLength={8} onChange={(e) => { setCorrespondencePostcode(e.target.value) }} />
                                                    </div>

                                                    <div style={{ width: '' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                                        <span className="far fa-question-circle help-icon"></span>
                                                        <span className="help-text">
                                                            <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter a postcode and click the find address or use the enter address button to fill in the address fields manually.</span>
                                                        </span>
                                                    </div>
                                                    <form className='d-flex input-group w-auto mt-1'>
                                                        <MDBBtn style={{ fontSize: '13px', border: 'solid 1px #bbb', title: 'Not connected with Post Office address search api' }} disabled color='light'>

                                                            Find address

                                                        </MDBBtn>
                                                        <MDBBtn style={{ fontSize: '10px', border: 'solid 1px #bbb', marginLeft: '5px' }} color='light'>

                                                            Enter an address manually

                                                        </MDBBtn>
                                                    </form>
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
                                                            maxLength={75} onChange={(e) => { setCorrespondenceAddLine1(e.target.value) }} />
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
                                                            maxLength={75} onChange={(e) => { setCorrespondenceAddLine2(e.target.value) }} />
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
                                                            maxLength={75} onChange={(e) => { setCorrespondenceAddLine3(e.target.value) }} />
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
                                                            maxLength={75} onChange={(e) => { setCorrespondenceAddLine4(e.target.value) }} />
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

                                {/**********  Sexual orientation */}
                                <div>

                                    <div className='mt-4'>
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
                                        <p style={{ fontSize: '17px' }}><strong>Which language do you prefer using? *</strong></p>
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
                                <div>

                                    <div className='mt-4'>
                                        <p style={{ fontSize: '17px' }}><strong>Do you require an interpreter? *</strong></p>
                                    </div>
                                    <MDBRow>
                                        <MDBCol className='col-3'>
                                            <MDBRadio name='needInterpreterRadio' id='needInterpreterYes' label='Yes' inline
                                                value='yes' onChange={(e) => { setNeedInterpreter(e.target.value) }} />
                                        </MDBCol>
                                        <MDBCol className='col-3'>
                                            <MDBRadio name='needInterpreterRadio' id='needInterpreterNo' label='No' inline
                                                value='no' onChange={(e) => { setNeedInterpreter(e.target.value) }} />
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
                                            onChange={(e) => { setAreYou(e.target.value) }}>
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

                    </MDBCol>
                    {/* <MDBCol className='col-md-6 col-sm-6'> */}
                    <MDBCol className='mx-2' size='md'  >

                        <ApplicationProgress iconStatus={"PrimaryApplicant"} ></ApplicationProgress>
                    </MDBCol>
                </MDBRow>
            </MDBContainer >
        </React.Fragment>
    );
}