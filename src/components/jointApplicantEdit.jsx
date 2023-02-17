import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { dates, months } from '../resources/datePicker';
import { validEmail, validName, validPostcode, validNumber, emailMatch, validNINO } from '../validations/Validator.jsx';

import {
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBRow, MDBCol,
    MDBTypography,
    MDBBtn,
    MDBRadio, MDBCheckbox
} from 'mdb-react-ui-kit';

export default function JointApplicantEdit() {

    const navigate = useNavigate();

    const datesData = dates;
    const monthsData = months;

    const yearMax = new Date().getFullYear();        // year picker up to current year
    const yearMin = new Date().getFullYear() - 120;  // year picker 120 year back from current year

    const inputStyle = { fontSize: '14px', width: '250px' };
    const comboBoxStyle = { maxWidth: '250px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const datePickerStyle = { maxWidth: '70px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const monthPickerStyle = { maxWidth: '130px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const yearPickerStyle = { width: '80px', float: 'left', border: '5' };

    const [relationWithPrimaryApplicant, setRelationWithPrimaryApplicant] = useState("Wife")
    const [fName, setFName] = useState("Prity");
    const [mName, setMName] = useState("");
    const [sName, setSName] = useState("Patel");
    const [nINO, setNINO] = useState("WF123456A");
    let tempDOB = "10/25/1975"
    tempDOB = tempDOB.split('/')[1] + '/' + tempDOB.split('/')[0] + '/' + tempDOB.split('/')[2]
    const [dateofbirth, setdateofbirth] = useState(tempDOB);
    const [primaryApplicantAddress, setPrimaryApplicantAddress] = useState("Need to fill dynamically")
    const [currentlyLiveWithYou, setCurrentlyLiveWithYou] = useState("yes");
    const [livingInDiffAddress, setLivingInDiffAddress] = useState("yes");
    const [showCorrespondenceAddress, setShowCorrespondenceAddress] = useState(false)
    const [postcode, setPostcode] = useState("LP1 1QW");
    const [addLine1, setAddLine1] = useState("12 Blackpool Avenue");
    const [addLine2, setAddLine2] = useState("Kensington");
    const [addLine3, setAddLine3] = useState("London");
    const [addLine4, setAddLine4] = useState("UK");
    const [isShePregnant, setIsShePregnant] = useState("no");
    const [showDeliveryDate, setShowDeliveryDate] = useState(false);
    const [deliveryDate, setDeliveryDate] = useState("");
    const [delDate, setDelDate] = useState("");
    const [delMonth, setDelMonth] = useState("");
    const [delYear, setDelYear] = useState("");
    const [telephone, setTelephone] = useState("0204568542");
    const [mobile, setMobile] = useState("07874598965");
    const [workPhone, setWorkPhone] = useState("02012564789");
    const [email, setEmail] = useState("pretypaty@msn.com");
    const [healthCondition, setHealthCondition] = useState("no");
    const [areYouWorker, setAreYouWorker] = useState("no");

    const [ninoErr, setNinoErr] = useState(false);
    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [postcodeErr, setPostcodeErr] = useState(false);
    const [numberErr, setNumberErr] = useState(false)

    useEffect(() => {

    }, [])

    const findPostcodeAddress = (e) => {
        e.preventDefault();
        setShowCorrespondenceAddress(true);
        alert('Sorry... \nPostcode search is not connected to UK Post Office API, \nplease enter the address manually')
    }

    const showAddresCard = (e) => {
        e.preventDefault();
        setShowCorrespondenceAddress(true);
    }

    const ContinueOnJointApplicantDetails = (e) => {
        e.preventDefault();
        if (livingInDiffAddress === "Living with primary applicant") {
            setShowCorrespondenceAddress(false);
        } else { setShowCorrespondenceAddress(true); }

    }

    const saveJointMember = (e) => {
        e.preventDefault();

        setdateofbirth(dateofbirth.split('/')[1] + "/" + dateofbirth.split('/')[0] + "/" + dateofbirth.split('/')[2]);  // change the US date format to UK date format
        setDeliveryDate(delDate + "/" + delMonth + "/" + delYear);

        if(currentlyLiveWithYou === 'yes') {
            setCurrentlyLiveWithYou(true);
        } else {setCurrentlyLiveWithYou(false)};

        setPostcodeErr(validPostcode(postcode))
        setNumberErr(validNumber(telephone))
        setNumberErr(validNumber(workPhone))
        setNumberErr(validNumber(mobile))

        console.log(`Validation result is fname/sname ${nameErr}, 
        email ${emailErr}, postcode ${postcodeErr}, home telephone ${telephone}, 
        work telephone ${workPhone}, mobile ${mobile}`)

        console.log('Im in saveJointMember', relationWithPrimaryApplicant,
           fName, mName, sName,
            nINO, dateofbirth,
            postcode, addLine1, addLine2, addLine3, addLine4,
            currentlyLiveWithYou, telephone, mobile, workPhone,
            isShePregnant, deliveryDate,
            healthCondition, areYouWorker
        )

        if ((!postcodeErr) || (!numberErr)) {
            !postcodeErr && alert('Postcode error');
            !numberErr && alert('Telephone/Mobile number error');
        }
    }

    const gotoAccountPage = (e) => {
        navigate('/account');
    }

    return (
        <React.Fragment>
            <MDBContainer className='ps-5 pt-3' >

                <MDBCard className='w-100 mx-auto' style={{ backgroundColor: '#f7f2f287' }} >
                    <p style={{ fontSize: '17px' }}><strong>Edit Your Partner Details</strong></p>
                    <MDBCardBody >
                        {/* ********** Applicant relationship  */}
                        <div >
                            <MDBTypography className='card-header' style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} >
                                <strong>Main Details</strong>
                            </MDBTypography>
                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Relationship to main applicant *</strong></p>
                            <input style={inputStyle} className='form-control' type='text'
                                value={relationWithPrimaryApplicant} readOnly >
                            </input>
                        </div>

                        {/* ********** First name  */}
                        <div>

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Your first name(s) *</strong></p>
                            <div className='mb-4' >
                                <input style={inputStyle} className='form-control' type='text' placeholder='First name...'
                                    maxLength={20} value={fName} readOnly ></input>
                            </div>
                        </div>

                        {/* ********** Middle name  */}
                        <div>

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Your middle name(s) *</strong></p>

                            <div className='mb-4' >
                                <input style={inputStyle} className='form-control' type='text' placeholder='Middle name...'
                                    maxLength={20} value={mName} readOnly ></input>
                            </div>
                        </div>

                        {/* ********** Surname  */}
                        <div>

                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Your surname *</strong></p>

                            <div className='mb-4' >
                                <input style={inputStyle} className='form-control' type='text' placeholder='Surname...'
                                    maxLength={20} value={sName} readOnly ></input>
                            </div>

                        </div>

                        {/* ********** NINO   */}
                        <div>
                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Your National Insurance Number *</strong></p>
                            <div className='mb-4' >
                                <input style={inputStyle} className='form-control' type='text'
                                    maxLength={9} value={nINO} readOnly ></input>
                            </div>
                        </div>

                        {/* *********** Date of Birth  */}
                        <div>
                            <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Your date of birth *</strong></p>

                            <div >
                                <input style={inputStyle} className='form-control' type='text'
                                    maxLength={9} value={dateofbirth} readOnly ></input>
                            </div>
                        </div>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard className='mt-4 mb-2' style={{ backgroundColor: '#f7f2f287' }}>
                    <MDBCardBody>
                        <div className='mb-2'>
                            <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} ><strong>Does your partner currently live with you? *</strong></MDBTypography>
                        </div>
                        {/* ********** Does you partner currently live with you?  */}
                        <div >
                            <MDBRow>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='currentlyLiveWithYouRadio' label='Yes' value='yes'
                                        inline id='currentlyLiveWithYouYes' htmlFor="currentlyLiveWithYouYes"                                        
                                        onClick={(e) => { setCurrentlyLiveWithYou(e.target.value) }}></MDBRadio>
                                </MDBCol>
                                <MDBCol className='col-3'>

                                    <MDBRadio name='currentlyLiveWithYouRadio' label='No' value='no'
                                        inline id='currentlyLiveWithYouNo' htmlFor='currentlyLiveWithYouNo'
                                        onClick={(e) => { setCurrentlyLiveWithYou(e.target.value) }}></MDBRadio>
                                </MDBCol>
                            </MDBRow>
                        </div>

                        <div className='mb-2'>

                            {/* *********** What is thier current address? */}
                            <div>
                                <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Current Address</strong></p>
                                <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>What is their current address?</strong></p>
                                <div style={{ fontSize: '13px', height: 'auto', width: 'auto', background: '#e4f5fb' }} className=" help-content border border-grey rounded">
                                    <p className='mx-2 mt-3 mb-2' style={{ fontSize: '12px' }}><strong>Is this person living with one of the following people?</strong></p>

                                    <MDBRadio className='mx-1' name='livingInDiffAddressRadio' id='livingInDiffAddressYes' label={primaryApplicantAddress} htmlFor='livingInDiffAddressYes'
                                        value='yes' onChange={(e) => { setLivingInDiffAddress("Living with primary applicant"); setShowCorrespondenceAddress(false); }}></MDBRadio>     {/* Get and show primary applicant address in this place */}
                                    <MDBRadio className='mx-1' name='livingInDiffAddressRadio' id='livingInDiffAddressNo' label='This person is living at a different addres' htmlFor='livingInDiffAddressNo'
                                        value='no' onChange={(e) => { setLivingInDiffAddress("Living in different address"); setShowCorrespondenceAddress(true); }}></MDBRadio>     {/* Spouse or partner living in different address */}
                                </div>
                            </div>
                        </div>
                    </MDBCardBody>
                </MDBCard>

                {/* ***********  Postcode  */}
                {
                    showCorrespondenceAddress &&
                    <div id='showAddress'>
                        <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                            <MDBCardBody>
                                <div id='showAddressDetails'>
                                    <p style={{ fontSize: '16px' }}><strong>Postcode*</strong></p>

                                    <div className='mt-3 mb-2' >
                                        <input style={inputStyle} className='form-control' type='text' placeholder='postcode...'
                                            maxLength={8} value={postcode} onChange={(e) => { setPostcode(e.target.value) }} />
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
                                                maxLength={75} value={addLine1} onChange={(e) => { setAddLine1(e.target.value) }} />
                                        </div>
                                    </div>

                                    {/* ***********  Address line 2  */}
                                    <div>

                                        <div className='mt-4'>
                                            <p style={{ fontSize: '16px' }}><strong>Address line 2*</strong></p>
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
                                        <div className='' >
                                            <input style={inputStyle} className='form-control' type='text' placeholder='Address line 4'
                                                maxLength={75} value={addLine4} onChange={(e) => { setAddLine4(e.target.value) }} />
                                        </div>
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                }

                {/* ***********  Contact Details  */}
                <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>

                    <MDBCardBody>
                        <div className='mb-2'>
                            <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} ><strong>Contact Details</strong></MDBTypography>

                        </div>

                        {/* ***********  honme telephone  */}
                        <div>
                            <div className='mt-4'>
                                <p style={{ fontSize: '17px' }}><strong>Home telephone*</strong></p>
                            </div>
                            <div>
                                <div className='mt-2' >
                                    <input style={inputStyle} className='form-control' type='text' placeholder='home telephone'
                                        minLength={9} maxLength={20} value={telephone} onChange={(e) => { setTelephone(e.target.value) }} />
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
                                        minLength={9} maxLength={20} value={workPhone} onChange={(e) => { setWorkPhone(e.target.value) }} />
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
                                        minLength={11} maxLength={20} value={mobile} onChange={(e) => { setMobile(e.target.value) }} />
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
                                        minLength={6} maxLength={40} value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                            </div>
                        </div>

                    </MDBCardBody>

                </MDBCard>

                {/**********  Equality and Diversity Monitoring  */}
                <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>

                    <MDBCardBody>
                        {/**********  Is your partner pregnant? */}
                        <div className='mb-2'>
                            <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} ><strong>Is your partner pregnant?*</strong></MDBTypography>

                        </div>
                        <div>
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
                                    <option >{healthCondition}</option>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                    <option value="prefer not to say">Prefer not to say</option>
                                </select>
                            </div>
                        </div>
                        {/**********  Are you  a worker, self-employed or a student?*/}
                        <div className=" mt-4 help-content border border-grey rounded" style={{ fontSize: '13px', width: 'auto', background: '#e4f5fb' }}>

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

                {/**********  Confirmat and save */}
                <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                    <MDBCardBody>


                        <form className='d-flex w-auto mt-3'>
                            <MDBBtn style={{ fontSize: '16px', width: 'auto', textTransform: 'none' }}
                                color='success me-1' onClick={saveJointMember} >
                                Save </MDBBtn>
                            <MDBBtn style={{ fontSize: '16px', width: 'auto', textTransform: 'none' }}
                                color='warning' onClick={gotoAccountPage}>
                                Cancel</MDBBtn>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </React.Fragment >
    );
}