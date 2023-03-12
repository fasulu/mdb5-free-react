import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

import { areyous } from '../resources/areyou';
import { tenures } from '../resources/tenure';
import { ethnicities } from '../resources/ethnicity';
import { nationalities } from '../resources/nationality';
import { sexOrients } from '../resources/sexOrient';
import { beliefs } from '../resources/belief';
import { languages } from '../resources/language';
import { dates, months } from '../resources/datePicker';
import { validEmail, validName, validPostcode, validNumber, emailMatch, validNINO, validDate, validMName } from '../validations/Validator.jsx';
import { UserContext } from "../userContext/UserContext"

import {
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBRow, MDBCol,
    MDBTypography,
    MDBBtn,
    MDBRadio, MDBCheckbox
} from 'mdb-react-ui-kit';

export default function JointApplicant() {
    
    const { clientId, setClientId } = useContext(UserContext);

    const navigate = useNavigate();

    // let primaryApplicantID = location.state.primaryID;

    const urL = "http://localhost:9001/joint/addclientjoint";
    const findPrimaryIDurL = "http://localhost:9001/joint/jointid/";

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
    const commentStyle = { minHeight: '150px', fontSize: '16px', minWidth: '250px', color: 'black' };

    const [showAddress, setShowAddress] = useState(false);
    const [showLocalAuthority, setShowLocalAuthority] = useState(false);
    const [showTenancyRef, setShowTenancyRef] = useState(false);
    const [continueApplication, setContinueApplication] = useState(true);

    const [primaryApplicantClientId, setPrimaryApplicantClientId] = useState(clientId)
    const [relationship, setRelationship] = useState("")
    const [title, setTitle] = useState("");
    const [fName, setFName] = useState("");
    const [mName, setMName] = useState("");
    const [sName, setSName] = useState("");
    const [nameChange, setNameChange] = useState("none");
    const [nINO, setNINO] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");
    const [sex, setSex] = useState("");

    const [dobDate, setDOBDate] = useState("");
    const [dobMonth, setDOBMonth] = useState("");
    const [dobYear, setDOBYear] = useState("");

    const [livedAbroad, setLivedAbroad] = useState("no");

    const [currentlyLiveWithYou, setCurrentlyLiveWithYou] = useState("no");
    const [livingInDiffAddress, setLivingInDiffAddress] = useState("yes");

    const [movedInDate, setMovedInDate] = useState("");

    const [movedDate, setMovedDate] = useState("");
    const [movedMonth, setMovedMonth] = useState("");
    const [movedYear, setMovedYear] = useState("");

    const [corresPostcode, setCorresPostcode] = useState("");
    const [corresAddLine1, setCorresAddLine1] = useState("none");
    const [corresAddLine2, setCorresAddLine2] = useState("none");
    const [corresAddLine3, setCorresAddLine3] = useState("none");
    const [corresAddLine4, setCorresAddLine4] = useState("none");

    const [placedByLocalAuthrty, setPlacedByLocalAuthrty] = useState("no");
    const [localAuthrtyName, setLocalAuthrtyName] = useState("none");

    const [isShePregnant, setIsShePregnant] = useState("no");
    const [showDeliveryDate, setShowDeliveryDate] = useState(false);
    const [deliveryDate, setDeliveryDate] = useState("");
    const [delDate, setDelDate] = useState("");
    const [delMonth, setDelMonth] = useState("");
    const [delYear, setDelYear] = useState("");

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

    const [isYourPartner, setIsYourPartner] = useState("none of the above");
    const [areYouWorker, setAreYouWorker] = useState("no");
    const [connection, setConnection] = useState();

    const [comments, setComments] = useState("none");

    const todayDate = new Date().toISOString().slice(0, 19); // produces 2023-02-25

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            console.log(`UseEffect :- ${findPrimaryIDurL + primaryApplicantClientId}`)

            // const token = TokenVerify()

            // console.log(`adminPage useEffect token result is ${token}`)

            // const response = await axios.get(loggedInUrl, {
            //     headers: {
            //         Authorization: "Bearer " + token
            //     }
            // })

            // console.log(response.data.validUser)

            const response = await axios.get(findPrimaryIDurL + primaryApplicantClientId)
            console.log(`Response from backend:- ${response.data.message}`)
            
        } catch (error) {
            
        }
    }


    const findPostcodeAddress = (e) => {
        e.preventDefault();
        setShowAddress(true);
        alert('Sorry... \nPostcode search is not connected to UK Post Office API, \nplease enter the address manually')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const handleConnectionCheckbox = () => {

            var check_ed = "";
            var markedCheckbox = document.getElementsByName('connectionCheckbox');
            for (var checkbox of markedCheckbox) {
                if (checkbox.checked)
                    check_ed += (checkbox.value + ',');
            }
            // if nothing checked, automatically saves checkbox value 17(None of the above)
            if (check_ed == "") {
                check_ed = "17";
            }
            let newChecked = { ...connection }; newChecked = check_ed; setConnection(newChecked)

        }

        const formatDate = () => {
            let birth_ = { ...dateofbirth }; birth_ = (dobYear + "-" + dobMonth + "-" + dobDate); setDateofbirth(birth_);
            let moved_ = { ...movedInDate }; moved_ = (movedYear + "-" + movedMonth + "-" + movedDate); setMovedInDate(moved_);
            let delivry_ = { ...deliveryDate }; delivry_ = (delYear + "-" + delMonth + "-" + delDate); setDeliveryDate(delivry_);
        }

        formatDate();

        handleConnectionCheckbox();

        const fNameErr = validName(fName);
        const mNameErr = validMName(mName);
        const sNameErr = validName(sName);
        const ninoErr = validNINO(nINO)
        const emailErr = validEmail(email);
        const dobErr = validDate(dateofbirth);
        const movedErr = validDate(movedInDate);
        const delvyErr = validDate(deliveryDate);
        const corresPostcodeErr = validPostcode(corresPostcode);
        const telephoneErr = validNumber(telephone);
        const workphoneErr = validNumber(workPhone);
        const mobileErr = validNumber(mobile);
        const emailMatchesErr = emailMatch(email, reEnterEmail)

        console.log(`Validation result is fname/sname ${fNameErr} ${mNameErr}, ${sNameErr}, 
        nino ${ninoErr}, email ${emailErr}, email matches ${emailMatchesErr}, correspondence postcode ${corresPostcodeErr}, 
        dob ${dobErr}, moved ${movedErr}, delvy ${delvyErr},
        telephone ${telephoneErr}, workphone ${workphoneErr}, mobile ${mobileErr},
        home telephone ${telephone}, work telephone ${workPhone}, mobile ${mobile}`)

        console.log('Im in saveJointApplicant', relationship,
            title, fName, mName, sName, nameChange,
            nINO, dateofbirth, sex,
            corresPostcode, corresAddLine1, corresAddLine2, corresAddLine3, corresAddLine4,
            currentlyLiveWithYou, movedInDate, placedByLocalAuthrty, localAuthrtyName,
            telephone, mobile, workPhone, email, reEnterEmail,
            ethnicity, nationality, sexOrient, isShePregnant, deliveryDate,
            belief, healthCondition, preferedLanguage, needInterpreter,
            tenure, tenancyRefNo, isYourPartner, areYouWorker, connection, comments, todayDate
        )

        if ((!fNameErr) || (!mNameErr) || (!sNameErr) || (!emailErr) || (!emailMatchesErr) || (!ninoErr) ||
            (!dobErr) || (!movedErr) || (!delvyErr) || (!corresPostcodeErr) || (!telephoneErr) || (!workphoneErr) || (!mobileErr)) {
            !fNameErr && alert('First Name error');
            !mNameErr && alert('Middle Name error');
            !sNameErr && alert('Surname error');
            !ninoErr && alert('NINO error');
            !dobErr && alert('Please check date of birth');
            !movedErr && alert('Please check moved in date');
            !delvyErr && alert('Please check delivery date');
            !telephoneErr && alert('Telephone number error');
            !workphoneErr && alert('Work telephone number error');
            !mobileErr && alert('Mobile number error');
            !emailErr && alert('Email error');
            !corresPostcodeErr && alert('Postcode error');
            !emailMatchesErr && alert('Email match error');
        } else {
            console.log(`Final Result passed :- ${relationship},
            ${title}, ${fName}, ${mName}, ${sName}, ${nameChange},
            ${nINO}, ${dateofbirth}, ${sex},
            ${corresPostcode}, ${corresAddLine1}, ${corresAddLine2}, ${corresAddLine3}, ${corresAddLine4},
            ${currentlyLiveWithYou}, ${movedInDate}, ${placedByLocalAuthrty}, ${localAuthrtyName},
            ${telephone}, ${mobile}, ${workPhone}, ${email}, ${reEnterEmail},
            ${ethnicity}, ${nationality}, ${sexOrient}, ${isShePregnant}, ${deliveryDate},
            ${belief}, ${healthCondition}, ${preferedLanguage}, ${needInterpreter},
            ${tenure}, ${tenancyRefNo}, ${isYourPartner}, ${areYouWorker}, ${connection}, ${comments}, ${todayDate}`);

            saveJointApplicant();
        }
    }

    const saveJointApplicant = async () => {

        console.log(`In save joint applicant`);

        const JointApplicantInfo = {
            clientId: primaryApplicantClientId,
            clientJoint_relationship: relationship,
            clientJoint_title: title,
            clientJoint_firstname: fName,
            clientJoint_middlename: mName,
            clientJoint_surname: sName,
            clientJoint_namechange: nameChange,
            clientJoint_NINO: nINO,
            clientJoint_dateofbirth: dateofbirth,
            clientJoint_sex: sex,

            clientJoint_lived_abroad: livedAbroad,
            clientJoint_moved_to_current_address: movedInDate,

            clientJoint_current_live_with_you: currentlyLiveWithYou,
            clientJoint_livingin_different_address: livingInDiffAddress,

            clientJoint_correspondence_postcode: corresPostcode,
            clientJoint_correspondence_address_line1: corresAddLine1,
            clientJoint_correspondence_address_line2: corresAddLine2,
            clientJoint_correspondence_address_line3: corresAddLine3,
            clientJoint_correspondence_address_line4: corresAddLine4,

            clientJoint_placed_by_local_authority: placedByLocalAuthrty,
            clientJoint_if_yes_local_authority: localAuthrtyName,

            clientJoint_is_she_pregnant: isShePregnant,
            clientJoint_delivery_date: deliveryDate,

            clientJoint_telephone_home: telephone,
            clientJoint_telephone_mobile: mobile,
            clientJoint_telephone_work: workPhone,
            clientJoint_email: email,

            clientJoint_ethnicity: ethnicity,
            clientJoint_nationality: nationality,
            clientJoint_sex_orient: sexOrient,
            clientJoint_religion: belief,
            clientJoint_illness: healthCondition,

            clientJoint_interpreter: needInterpreter,
            clientJoint_language_prefer: preferedLanguage,

            clientJoint_current_tenure: tenure,
            clientJoint_current_tenure_bhamCouncilTenancyNum: tenancyRefNo,

            clientJoint_from_which_country: isYourPartner,
            clientJoint_are_you_worker: areYouWorker,
            clientJoint_connection_to_birmingham: connection,

            clientJoint_registration_date: todayDate,
            clientJoint_comments: comments,
        }

        try {

            const response = await axios.post(urL, JointApplicantInfo);

            console.log(`Output from backend ${response.data.message}`)

            if (response.status === 200) {
                console.log(`Status from backend ${response.status}`);                
                navigate('/account', { state: { jointName: fName } });
            }

        } catch (error) {
            console.log(error)
        }
    }

    const cancelEntry = (e) => {
        window.location.reload();
    }

    return (
        <React.Fragment>
            <MDBContainer className='ps-5 pt-3' >

                <MDBCard className='w-100 mx-auto' style={{ backgroundColor: '#f7f2f287' }} >

                    <p style={{ fontSize: '17px' }}><strong>Register your household - Joint Applicant</strong></p>

                    <MDBTypography className='card-header' style={{ fontSize: '13px', backgroundColor: '#dcdcdc' }} ><strong>Household Members - If you wish to share the tenancy equally and sign for it jointlty, please add you spouse or partner by selectiong "add joint applicant"</strong></MDBTypography>

                    {/* ********** Primary Applicant Details  */}
                    <MDBCardBody >

                        {/* ********** Applicant relationship  */}
                        <div >
                            <MDBTypography className='card-header' style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} ><strong>Main Details</strong></MDBTypography>

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Relationship to main applicant *</strong></p>
                            <select style={{ overflow: 'scroll', width: 'auto' }} className="form-select border-rounded mb-2"
                                value={relationship} onChange={(e) => { let newEdit = { ...relationship }; newEdit = e.target.value; setRelationship(newEdit) }}>
                                <option defaultValue >Spouse or Partnership</option>
                                <option value="Husband">Husband</option>
                                <option value="Wife">Wife</option>
                                <option value="Civil Partner">Civil Partner</option>
                                <option value="Daughter">Daughter</option>
                                <option value="Son">Son</option>
                                <option value="Relative">Relative</option>
                                <option value="Friend">Friend</option>
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

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Your first name(s) *</strong></p>
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

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Your middle name(s) *</strong></p>
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

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Your surname *</strong></p>
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

                            <p className='mt-3 mb-2' style={{ fontSize: '14px' }}><strong>Have you ever used a different name, eg a maiden name or by deed poll? if so, please provide details</strong></p>
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

                        {/* ********** Does you partner currently live with you?  */}
                        <div >
                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Does your partner currently live with you? *</strong></p>
                            <MDBRow>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='currentlyLiveWithYouRadio' value='yes' label='Yes' inline id='currentlyLiveWithYouYes' htmlFor="currentlyLiveWithYouYes"
                                        onClick={(e) => { let newEdit = { ...currentlyLiveWithYou }; newEdit = e.target.value; setCurrentlyLiveWithYou(newEdit) }}></MDBRadio>
                                </MDBCol>
                                <MDBCol className='col-3'>

                                    <MDBRadio name='currentlyLiveWithYouRadio' label='No' inline id='currentlyLiveWithYouNo' htmlFor='currentlyLiveWithYouNo'
                                        value='no' defaultChecked
                                        onClick={(e) => { let newEdit = { ...currentlyLiveWithYou }; newEdit = e.target.value; setCurrentlyLiveWithYou(newEdit) }}></MDBRadio>
                                </MDBCol>
                            </MDBRow>

                        </div>
                        {/* ********** NINO   */}
                        <div>

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Your National Insurance Number *</strong></p>
                            <div className='mb-4' >
                                <input style={inputStyle} className='form-control' type='text'
                                    maxLength={9} value={nINO} onChange={(e) => { let newEdit = { ...nINO }; newEdit = e.target.value; setNINO(newEdit) }}></input>
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

                {/* ***********  Lived abroad  */}
                <MDBCard className='mt-4 mb-2' style={{ backgroundColor: '#f7f2f287' }}>

                    <MDBCardBody>
                        <div>
                            <div>
                                <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }}><strong>Lived Abroad</strong></MDBTypography>
                            </div>
                            <p style={{ fontSize: '16px' }}><strong>Have this member  lived abroad in the last 5 years? *</strong></p>

                            <MDBRow>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='livedAbroadRadio' value='yes' label='Yes' inline id='livedAbroadYes' htmlFor="livedAbroadYes"
                                        onClick={(e) => { let newEdit = { ...livedAbroad }; newEdit = e.target.value; setLivedAbroad(newEdit) }}></MDBRadio>
                                </MDBCol>
                                <MDBCol className='col-3'>

                                    <MDBRadio name='livedAbroadRadio' label='No' inline id='livedAbroadNo' htmlFor='livedAbroadNo'
                                        value='no' defaultChecked
                                        onClick={(e) => { let newEdit = { ...livedAbroad }; newEdit = e.target.value; setLivedAbroad(newEdit) }}></MDBRadio>
                                </MDBCol>
                            </MDBRow>

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
                                        value='yes' onChange={(e) => { let newEdit = { ...placedByLocalAuthrty }; newEdit = e.target.value; setPlacedByLocalAuthrty(newEdit); setShowLocalAuthority(true); }}></MDBRadio>     {/* setShowLocalAuthority will  show or hide according to the selection */}
                                </MDBCol>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='placedByLocalAuthrtyRadio' id='placedByLocalAuthrtyNo' label='No' htmlFor='placedByLocalAuthrtyNo' inline
                                        value='no' defaultChecked
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
                                            maxLength={25} value={localAuthrtyName}
                                            onChange={(e) => { let newEdit = { ...localAuthrtyName }; newEdit = e.target.value; setLocalAuthrtyName(newEdit) }} />
                                    </div>
                                </div>
                            }

                            {/* *********** What is thier current address? */}
                            <div className=''>
                                <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>What is their current address?</strong></p>
                                <div style={{ fontSize: '13px', height: 'auto', width: 'auto', background: '#e4f5fb' }} className=" help-content border border-grey rounded">
                                    <p className='mx-2 mt-3 mb-2' style={{ fontSize: '12px' }}><strong>Is this person living with one of the following people?</strong></p>
                                    <div className='mx-2 mb-2'>
                                        <MDBRadio className='mx-1' name='livingInDiffAddressRadio' id='livingInDiffAddressYes' label="Living with primary applicant" htmlFor='livingInDiffAddressYes'
                                            defaultValue='Living with primary applicant'
                                            onChange={(e) => { let newEdit = { ...livingInDiffAddress }; newEdit = e.target.value; setLivingInDiffAddress(newEdit); setContinueApplication(false); setShowAddress(false) }}></MDBRadio>     {/* Get and show primary applicant address in this place */}
                                        <MDBRadio className='mx-1' name='livingInDiffAddressRadio' id='livingInDiffAddressNo' label='This person is living at a different address' htmlFor='livingInDiffAddressNo'
                                            value='Living in different address'
                                            onChange={(e) => { let newEdit = { ...livingInDiffAddress }; newEdit = e.target.value; setLivingInDiffAddress(newEdit); setContinueApplication(false); setShowAddress(true) }}></MDBRadio>     {/* Spouse or partner living in different address */}
                                    </div>
                                </div>
                                <p className='mt-3 mb-2' style={{ fontSize: '13px' }}>You must select an option to conitue</p>
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
                                        <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter the Postcode using capital letters. For example: B1 1BB. If your address is outside UK please enter XY1 1YX.</span>
                                    </span>
                                </div>
                                <div className='mt-3 mb-2' >
                                    <input style={inputStyle} className='form-control' type='text' placeholder='postcode...'
                                        maxLength={8} value={corresPostcode} onChange={(e) => { let newEdit = { ...corresPostcode }; newEdit = e.target.value; setCorresPostcode(newEdit) }} />
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
                                            maxLength={75} value={corresAddLine1} onChange={(e) => { let newEdit = { ...corresAddLine1 }; newEdit = e.target.value; setCorresAddLine1(newEdit) }} />
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
                                            maxLength={75} value={corresAddLine2} onChange={(e) => { let newEdit = { ...corresAddLine2 }; newEdit = e.target.value; setCorresAddLine2(newEdit) }} />
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
                                            maxLength={75} value={corresAddLine3} onChange={(e) => { let newEdit = { ...corresAddLine3 }; newEdit = e.target.value; setCorresAddLine3(newEdit) }} />
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
                                            maxLength={75} value={corresAddLine4} onChange={(e) => { let newEdit = { ...corresAddLine4 }; newEdit = e.target.value; setCorresAddLine4(newEdit) }} />
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
                        {/* ***********  home telephone  */}
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
                                        minLength={6} maxLength={40} onChange={(e) => { let newEdit = { ...email }; newEdit = e.target.value; setEmail(newEdit) }} />
                                </div>
                            </div>
                            <div className='mt-4 help-content border border-grey rounded' style={{ background: '#e4f5fb' }}>
                                <p style={{ marginLeft: '5px', fontSize: '17px' }}><strong>Please re-enter your email address*</strong></p>
                            </div>
                            <div>
                                <div className='mt-2' >
                                    <input style={inputStyle} className='form-control' type='email' placeholder='re-enter email address'
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
                                <p style={{ marginLeft: '5px', fontSize: '17px' }}><strong>What is your sexual orientation? *</strong></p>
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
                                        value='yes' onChange={(e) => { let newEdit = { ...isShePregnant }; newEdit = e.target.value; setIsShePregnant(newEdit); setShowDeliveryDate(true); }}></MDBRadio>     {/* setShowDeliveryDate will  show or hide according to the selection */}
                                </MDBCol>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='isShePregnantRadio' id='isShePregnantNo' label='No' htmlFor='isShePregnantNo' inline
                                        value='no' defaultChecked
                                        onChange={(e) => { let newEdit = { ...isShePregnant }; newEdit = e.target.value; setIsShePregnant(newEdit); setShowDeliveryDate(false); }}></MDBRadio>     {/* setShowDeliveryDate will  show or hide according to the selection */}
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
                                <p style={{ fontSize: '17px' }}><strong>Do you have any physical or mental health conditions or illnesses lasting or expected to last for 12 months or more? *</strong></p>
                            </div>

                            <div className='mt-2' >
                                <select style={{ overflow: 'scroll', width: '150px' }} className="form-select rounded"
                                    value={healthCondition}
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
                                <p style={{ fontSize: '17px' }}><strong>Which language does you partner prefer using? *</strong></p>
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
                        <div className='mt-4  help-content border border-grey rounded' style={{ background: '#e4f5fb' }}>
                            <p style={{ marginLeft: '5px', fontSize: '17px' }}><strong>Does your partner require an interpreter? *</strong></p>
                            <MDBRow >
                                <MDBCol className='col-3 mx-2 mb-2'>
                                    <MDBRadio name='needInterpreterRadio' id='needInterpreterYes' label='Yes' inline
                                        value='yes' onChange={(e) => { let newEdit = { ...needInterpreter }; newEdit = e.target.value; setNeedInterpreter(newEdit) }} />
                                </MDBCol>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='needInterpreterRadio' id='needInterpreterNo' label='No' inline
                                        value='no' defaultChecked
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
                                <p style={{ fontSize: '17px' }}><strong>What is your partner's current tenure? *</strong></p>
                            </div>
                            <div className='mt-2' >
                                <select style={comboBoxStyle}
                                    className="form-select rounded"
                                    aria-label="Default select example"
                                    onChange={(e) => { let newEdit = { ...tenure }; newEdit = e.target.value; setTenure(newEdit); setShowTenancyRef(!showTenancyRef) }}>
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
                                    value={isYourPartner}
                                    onChange={(e) => { let newEdit = { ...isYourPartner }; newEdit = e.target.value; setIsYourPartner(newEdit) }}>
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

                        {/**********  Is your partner a worker, self-employed or a student?*/}
                        <div className=" mt-2 help-content border border-grey rounded" style={{ fontSize: '13px', width: 'auto', background: '#e4f5fb' }}>
                            <div className='mt-2'>
                                <p style={{ marginLeft: '5px', fontSize: '17px' }}><strong>Is your partner a worker, self-employed or a student?*</strong></p>
                            </div>
                            <MDBRow className='mb-2'>
                                <MDBCol className='col-3 mx-2 mb-2'>
                                    <MDBRadio name='areYouWorkerRadio' id='areYouWorkerYes' label='Yes' inline
                                        value='yes' defaultChecked
                                        onChange={(e) => { let newEdit = { ...areYouWorker }; newEdit = e.target.value; setAreYouWorker(newEdit) }} />
                                </MDBCol>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='areYouWorkerRadio' id='areYouWorkerNo' label='No' inline
                                        value='no' onChange={(e) => { let newEdit = { ...areYouWorker }; newEdit = e.target.value; setAreYouWorker(newEdit) }} />
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

                        <form className='d-flex w-auto mt-3'>
                            <MDBBtn style={{ fontSize: '16px', width: 'auto', textTransform: 'none' }} color='primary me-1'
                                disabled={continueApplication} onClick={handleSubmit}  >
                                Save Joint Member</MDBBtn>
                            <MDBBtn className='me-1 btn btn-outline-secondary' style={{ fontSize: '16px', width: 'auto', textTransform: 'none' }} color='white'
                                onClick={cancelEntry}>
                                Cancel</MDBBtn>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </React.Fragment >
    );
}