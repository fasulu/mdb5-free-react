import React from 'react';
import $ from 'jquery';
import {
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBRow, MDBCol,
    MDBTypography,
    MDBBtn,
    MDBRadio, MDBCheckbox
} from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';

export default function Registerclient() {

    const [title, setTitle] = useState("");
    const [fName, setFName] = useState("");
    const [mName, setMName] = useState("");
    const [sName, setSName] = useState("");
    const [nameChange, setNameChange] = useState("");
    const [dobDate, setDOBDate] = useState("");
    const [dobMonth, setDOBMonth] = useState("");
    const [dobYear, setDOBYear] = useState("");
    const [nINO, setNINO] = useState("");
    const [sex, setSex] = useState("");
    const [postcode, setPostcode] = useState("");
    const [addLine1, setAddLine1] = useState("");
    const [addLine2, setAddLine2] = useState("");
    const [addLine3, setAddLine3] = useState("");
    const [addLine4, setAddLine4] = useState("");
    const [movedDate, setMovedDate] = useState("");
    const [movedMonth, setMovedMonth] = useState("");
    const [movedYear, setMovedYear] = useState("");
    const [rented, setRented] = useState("");
    const [livedAbroad, setLivedAbroad] = useState("no");
    const [addressDifferent, setAddressDifferent] = useState("");
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
    const [ethnicity, setEthnicity] = useState("");
    const [nationality, setNationality] = useState("");
    const [sexOrient, setSexOrient] = useState("");
    const [belief, setBelieft] = useState("");
    const [healthCondition, setHealthCondition] = useState("");
    const [preferedLanguage, setPreferedLanguage] = useState("");
    const [needInterpreter, setNeedInterpreter] = useState("");
    const [tenure, setTenure] = useState("");
    const [tenancyRefNo, setTenancyRefNo] = useState("");
    const [areyou, setAreYou] = useState("");
    const [connection, setConnection] = useState("");
    const [memorableDate, setMemorableDate] = useState("");
    const [reEnterMemorableDate, setReEnterMemorableDate] = useState("");
    const [pwd, setPwd] = useState("");
    const [reEnterPwd, setReEnterPwd] = useState("");




    useEffect(() => {

    }, [])

    const showInConsole = (e) => {
        e.preventDefault();
        console.log('in show in console', title, fName, mName, sName, nameChange,
            nINO, dobDate, dobMonth, dobYear, sex, livedAbroad,
            postcode, addLine1, addLine2, addLine3, addLine4,
            movedDate,
            rented,
            addressDifferent, correspondenceType, placedByLocalAuthrty, localAuthrtyName,
            correspondencePostcode, correspondenceAddLine1, correspondenceAddLine2, correspondenceAddLine3, correspondenceAddLine4,
            telephone, mobile,
            workPhone, email,
            ethnicity, nationality, sexOrient, belief,
            healthCondition, preferedLanguage, needInterpreter,
            tenure, tenancyRefNo, areyou, connection,
            memorableDate, reEnterMemorableDate,
            pwd, reEnterPwd)



    }

    function handleChange(event) {
        setLivedAbroad(event.target.value);
        // setAddressDifferent(event.target.value);
        // setRented(event.target.value);
        console.log(event.target.value);
    }

    return (
        <MDBContainer   >

            <MDBRow className='my-3 justify-content-center' bgColor='#f7f2f287'>
                {/* <MDBCol className='mx-5' size='md'> */}
                <MDBCol className='mx-2' size='md'  >
                    <p style={{ fontSize: '17px' }}><strong>Register your household</strong></p>
                    <p style={{ fontSize: '16px', lineHeight: '1.5px' }}>Household Registration</p>

                    <MDBCard className=' mx-auto' style={{ backgroundColor: '#f7f2f287' }} >
                        <MDBCardBody >
                            <div className='mb-2'>
                                <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} tag='h6'><strong>Primary Applicant Details</strong></MDBTypography>
                                <p style={{ fontSize: '16px' }}><strong>Title *</strong></p>
                                <select style={{ overflow: 'scroll', width: 'auto' }} className="form-select border-rounded" aria-label="Default select example"
                                    value={title} onChange={(e) => { setTitle(e.target.value) }}>
                                    <option selected={title}>Please Choose</option>
                                    <option value="1">Dr</option>
                                    <option value="2">Miss</option>
                                    <option value="3">Mr</option>
                                    <option value="4">Mrs</option>
                                    <option value="5">Ms</option>
                                </select>

                            </div>

                            {/* ********** First name  */}
                            <region>
                                <p className='mb-4' style={{ fontSize: '16px' }}><strong>Your first name(s) *</strong></p>
                                <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                    <span className="far fa-question-circle help-icon"></span>
                                    <span className="help-text">
                                        <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                    </span>
                                </div>
                                <div className='mb-4' >
                                    <input style={{ width: '250px' }} className='form-control' type='text' placeholder='First name...'
                                        value={fName} onChange={(e) => { setFName(e.target.value) }}></input>
                                </div>
                            </region>

                            {/* ********** Middle name  */}
                            <region>
                                <p style={{ fontSize: '16px' }}><strong>Your middle name(s) *</strong></p>
                                <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                    <span className="far fa-question-circle help-icon"></span>
                                    <span className="help-text">
                                        <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                    </span>
                                </div>
                                <div className='mb-4' >
                                    <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Middle name...'
                                        value={mName} onChange={(e) => { setMName(e.target.value) }}></input>
                                </div>
                            </region>

                            {/* ********** Surname  */}
                            <region>

                                <p style={{ fontSize: '16px' }}><strong>Your surname *</strong></p>
                                <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                    <span className="far fa-question-circle help-icon"></span>
                                    <span className="help-text">
                                        <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                    </span>
                                </div>
                                <div className='mb-4' >
                                    <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Surname...'
                                        value={sName} onChange={(e) => { setSName(e.target.value) }}></input>
                                </div>

                            </region>

                            {/* ********** Name change  */}
                            <region>
                                <p style={{ fontSize: '14px' }}><strong>Have you ever used a different name, eg a maiden name or by deed poll? if so, please provide details</strong></p>
                                <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                    <span className="far fa-question-circle help-icon"></span>
                                    <span className="help-text">
                                        <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Have you ever used a different name, eg a maiden name or by deed poll? if so, please provide details</span>
                                    </span>
                                </div>
                                <div className='mb-4' >
                                    <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Have you ever used a different name, eg a maiden name or by deed poll? if so, please provide details'
                                        value={nameChange} onChange={(e) => { setNameChange(e.target.value) }}></input>
                                </div>
                            </region>

                            {/* ********** NINO   */}
                            <region>
                                <p style={{ fontSize: '16px' }}><strong>Your National Insurance Number *</strong></p>
                                <div className='mb-4' >
                                    <input style={{ width: '250px' }} className='form-control' type='text'
                                        value={nINO} onChange={(e) => { setNINO(e.target.value) }}></input>
                                </div>
                            </region>

                            {/* *********** Date of Birth  */}
                            <region>


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
                                        <select style={{ overflow: 'scroll', width: '70px' }} className="form-select rounded "
                                            value={dobDate} onChange={(e) => { setDOBDate(e.target.value) }}>
                                            <option selected>dd</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select>

                                        <select style={{ overflow: 'scroll', width: '78px' }} className="form-select rounded "
                                            value={dobMonth} onChange={(e) => { setDOBMonth(e.target.value) }}>
                                            <option selected>mm</option>
                                            <option value="1">January</option>
                                            <option value="2">February</option>
                                            <option value="3">March</option>
                                            <option value="4">April</option>
                                            <option value="5">May</option>
                                            <option value="6">June</option>
                                            <option value="7">July</option>
                                            <option value="8">August</option>
                                            <option value="9">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </select>

                                        <input className='form-control rounded' type='text' placeholder='year' style={{ width: '65px', float: 'left', borderColor: 'lightgrey', color: 'black' }}
                                            value={dobYear} onChange={(e) => { setDOBYear(e.target.value) }}></input>

                                    </div>
                                </div>
                            </region>

                            {/* *********** Sex  */}
                            <region>


                                <div className='mt-4'>
                                    <p style={{ fontSize: '16px' }}><strong>Your sex *</strong></p>
                                    <select style={{ overflow: 'scroll', width: 'auto' }} className="form-select border-rounded"
                                        value={sex} onChange={(e) => { setSex(e.target.value) }}>
                                        <option selected>Please Choose</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </region>

                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                        <MDBCardBody>

                            {/* ***********  Lived abroad  */}

                            <region>

                                <div>
                                    <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }}><strong>Lived Abroad</strong></MDBTypography>
                                </div>

                                <p style={{ fontSize: '16px' }}><strong>Have you or any member of your household lived abroad in the last 5 years? *</strong></p>
                                <div>
                                    <MDBRadio name='livedAbroadRadio' value='yes' label='Yes' inline id='livedAbroadYes' for="livedAbroadYes"
                                        onClick={(e) => { setLivedAbroad(e.target.value) }}></MDBRadio>
                                    <MDBRadio name='livedAbroadRadio' value='no' label='No' inline id='livedAbroadNo' for='livedAbroadNo'
                                        onChange={(e) => { setLivedAbroad(e.target.value) }}></MDBRadio>
                                </div>
                                {/* <div class="form-check">
                                    <input class="form-check-input" label='Yes' type="radio" id="livedAbroadYes"
                                                value='yes' onClick={(e) => { setLivedAbroad(e.target.value) }} />
                                            <label class="form-check-label" for="livedAbroadYes" >
                                                Yes
                                            </label>
                                </div> */}
                                {/* <div class="form-check">
                                    <input class="form-check-input" label='No' type="radio" id="livedAbroadNo"
                                                value='no' onClick={(e) => { setLivedAbroad(e.target.value) }} />
                                            <label class="form-check-label" for="livedAbroadNo" >
                                                No
                                            </label>
                                </div> */}
                                {/* <MDBRow onChange={handleChange}>
                                    <MDBCol className='col-2'>

                                        <input type="radio" id="livedAbroadYes" name="livedAbroad" checked={livedAbroad === "yes"} />Yes
                                        <label for="livedAbroadYes"></label>


                                    </MDBCol>
                                    <MDBCol className='col-10'>

                                        <input type="radio" id="livedAbroadNo" name="livedAbroad" checked={livedAbroad === "no"} />No
                                        <label for="livedAbroadNo"></label>
                                    </MDBCol>
                                </MDBRow> */}

                            </region>

                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                        <MDBCardBody>

                            {/* ***********  Current address - Postcode  */}
                            <region>

                                <div>
                                    <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} tag='h6'><strong>Current Address</strong></MDBTypography>
                                    <p style={{ fontSize: '16px' }}><strong>1. Address details</strong></p>

                                </div>
                                <p style={{ fontSize: '16px' }}><strong>Postcode*</strong></p>
                                <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                    <span className="far fa-question-circle help-icon"></span>
                                    <span className="help-text">
                                        <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter the postcode using capital letters. For example: B1 1BB. If your address is outside UK please enter XY1 1YX.</span>
                                    </span>
                                </div>
                                <div className='mb-4' >
                                    <input style={{ width: '250px' }} className='form-control' type='text' placeholder='postcode...'
                                        value={postcode} onChange={(e) => { setPostcode(e.target.value) }} />
                                </div>

                                <div style={{ width: 'auto' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                    <span className="far fa-question-circle help-icon"></span>
                                    <span className="help-text">
                                        <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter a postcode and click the find address button to search for an address by postcode or use the enter address button to fill in the address fields manually.</span>
                                    </span>
                                </div>
                                <form className='d-flex input-group w-auto mt-1'>
                                    <MDBBtn style={{ fontSize: '13px', border: 'solid 1px #bbb', title: 'Not connected with Post Office address search api' }} disabled color='light'>

                                        Find address

                                    </MDBBtn>
                                    <MDBBtn style={{ fontSize: '13px', border: 'solid 1px #bbb', marginLeft: '5px' }} color='light'>

                                        Enter an address manually

                                    </MDBBtn>
                                </form>

                            </region>

                            {/* ***********  Address line 1  */}
                            <region>
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
                                    <input style={{ width: '250px' }} className='form-control' type='text' placeholder='house or flat number and street'
                                        value={addLine1} onChange={(e) => { setAddLine1(e.target.value) }} />
                                </div>
                            </region>

                            {/* ***********  Address line 2  */}
                            <region>
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
                                    <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Address line 2'
                                        value={addLine2} onChange={(e) => { setAddLine2(e.target.value) }} />
                                </div>
                            </region>

                            {/* ***********  Address line 3  */}
                            <region>

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
                                    <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Address line 3'
                                        value={addLine3} onChange={(e) => { setAddLine3(e.target.value) }} />
                                </div>
                            </region>

                            {/* ***********  Address line 4  */}
                            <region>
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
                                    <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Address line 4'
                                        value={addLine4} onChange={(e) => { setAddLine4(e.target.value) }} />
                                </div>
                            </region>

                            <div className='mt-4'>
                                {/* *********** When moved to this address  */}

                                <region>
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
                                        <div className='btn-group'>
                                            <select style={{ overflow: 'scroll', width: '70px' }} className="form-select rounded "
                                                value={movedDate} onChange={(e) => { setMovedDate(e.target.value) }} >
                                                <option selected>dd</option>
                                                <option value="01">01</option>
                                                <option value="02">02</option>
                                                <option value="03">03</option>
                                                <option value="04">04</option>
                                                <option value="05">05</option>
                                                <option value="06">06</option>
                                                <option value="07">07</option>
                                                <option value="08">08</option>
                                                <option value="09">09</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                            </select>

                                            <select style={{ overflow: 'scroll', width: '78px' }} className="form-select rounded "
                                                value={movedMonth} onChange={(e) => { setMovedMonth(e.target.value) }} >
                                                <option selected>mm</option>
                                                <option value="1">January</option>
                                                <option value="2">February</option>
                                                <option value="3">March</option>
                                                <option value="4">April</option>
                                                <option value="5">May</option>
                                                <option value="6">June</option>
                                                <option value="7">July</option>
                                                <option value="8">August</option>
                                                <option value="9">September</option>
                                                <option value="10">October</option>
                                                <option value="11">November</option>
                                                <option value="12">December</option>
                                            </select>
                                            <input className='form-control rounded' type='text' placeholder='year'
                                                style={{ width: '65px', float: 'left', borderColor: 'lightgrey', color: 'black' }}
                                                value={movedYear} onChange={(e) => { setMovedYear(e.target.value) }} ></input>

                                        </div>
                                    </div>
                                </region>

                                {/* ***********  Rented property?  */}
                                <region>
                                    <div>
                                        <div className='mt-4'>
                                            <p style={{ fontSize: '16px' }}><strong>Is this a rented property?*</strong></p>
                                        </div>

                                        <div>
                                            <MDBRadio name='rentedRadio' label='Yes' inline id='rentedYes' for="rentedYes"
                                                value='yes' onChange={(e) => { setRented(e.target.value) }}></MDBRadio>
                                            <MDBRadio name='rentedRadio' label='No' inline id='rentedNo' for="rentedNo"
                                                value='no' onChange={(e) => { setRented(e.target.value) }}></MDBRadio>
                                        </div>
                                    </div>
                                </region>

                                <div className='mt-4'>
                                    <p style={{ fontSize: '16px' }}><strong>3. Correspondence Address</strong></p>

                                </div>

                                {/* ***********  Where you want to send letters  */}
                                <region>
                                    <div className='mt-4'>
                                        <p style={{ fontSize: '16px' }}><strong>Where would you like any letters related to your application sent:</strong></p>
                                    </div>

                                    <div >
                                        <div>
                                            <MDBRadio name='addressDifferentRadio' id='addressDifferentYes' label='To my current address' inline
                                                value='current address' onChange={(e) => { setAddressDifferent(e.target.value) }}></MDBRadio>
                                        </div>
                                        <div>
                                            <MDBRadio name='addressDifferentRadio' id='addressDifferentNo' label='To my correspondence addres' inline
                                                value='correspondence address' onChange={(e) => { setAddressDifferent(e.target.value) }}></MDBRadio>
                                        </div>

                                        {/* <div class="form-check">
                                            <input type="radio" class="form-check-input" id="radio3" name="optradio" value="option3" />
                                            <label class="form-check-label" for="radio1">Yes</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="radio4" name="optradio" value="option4" />
                                            <label class="form-check-label" for="radio2">No</label>
                                        </div> */}
                                    </div>
                                    {/* <MDBRow>
                                        <MDBCol className='col-6'>

                                            <input type="radio" id="currentAddress" name="currentAddress" value="current address"
                                                onChange={(e) => { setAddressDifferent(e.target.value) }} />
                                            <label for="currentAddress">Current Address</label>


                                        </MDBCol>
                                        <MDBCol className='col-6'>

                                            <input type="radio" id="correspondenceAddress" name="correspondenceAddress" value="correspondence address"
                                                onChange={(e) => { setAddressDifferent(e.target.value) }} />
                                            <label for="correspondenceAddress">Correspondence Address</label>
                                        </MDBCol>
                                    </MDBRow> */}
                                </region>

                                {/* ***********  Correspondence description  */}
                                <region>
                                    <div className='mt-4'>
                                        <p style={{ fontSize: '16px' }}><strong>Correspondence description</strong></p>
                                        <select style={{ overflow: 'scroll', width: '150px' }} className="form-select rounded"
                                            value={correspondenceType} onChange={(e) => { setCorrespondenceType(e.target.value) }}>
                                            <option selected>Please Select</option>
                                            <option value="Home">Home</option>
                                            <option value="work">Work</option>
                                            <option value="solicitor">Solicitor</option>
                                            <option value="parents">Parents</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </region>

                                {/* ***********  Were placed by local authority  */}
                                <region>
                                    <div className='mt-4'>
                                        <p style={{ fontSize: '16px' }}><strong>Were you placed at this address in Birmingham by another local Authority?*</strong></p>
                                    </div>

                                    <div >
                                        <div>
                                            <MDBRadio name='placedByLocalAuthrtyRadio' id='placedByLocalAuthrtyYes' label='Yes' for='placedByLocalAuthrtyYes' inline
                                                value='yes' onChange={(e) => { setPlacedByLocalAuthrty(e.target.value) }}></MDBRadio>
                                            <MDBRadio name='placedByLocalAuthrtyRadio' id='placedByLocalAuthrtyNo' label='No' for='placedByLocalAuthrtyNo' inline
                                                value='no' onChange={(e) => { setPlacedByLocalAuthrty(e.target.value) }}></MDBRadio>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='mt-4'>
                                            <p style={{ fontSize: '16px' }}><strong>If yes, by which local authority?</strong></p>
                                        </div>

                                        <div className='' >
                                            <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Enter the local authority name' />
                                        </div>
                                    </div>
                                </region>

                                {/* ***********  Correspondence postcode  */}
                                <div className='mt-4'>
                                    <region>

                                        <p style={{ fontSize: '17px' }}><strong>Postcode*</strong></p>
                                        <div style={{ width: '' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter the postcode using capital letters. For example: B1 1BB. If your address is outside UK please enter XY1 1YX.</span>
                                            </span>
                                        </div>
                                        <div className='mb-4' >
                                            <input style={{ width: '250px' }} className='form-control' type='text' placeholder='postcode...' />
                                        </div>

                                        <div style={{ width: '' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter a postcode and click the find address or use the enter address button to fill in the address fields manually.</span>
                                            </span>
                                        </div>
                                        <form className='d-flex input-group w-auto mt-1'>
                                            <MDBBtn style={{ fontSize: '10px', border: 'solid 1px #bbb' }} color='light'>

                                                Find address

                                            </MDBBtn>
                                            <MDBBtn style={{ fontSize: '10px', border: 'solid 1px #bbb', marginLeft: '5px' }} color='light'>

                                                Enter an address manually

                                            </MDBBtn>
                                        </form>
                                    </region>

                                    {/* ***********  Correspondence address line 1  */}
                                    <region>
                                        <div className='mt-4'>
                                            <p style={{ fontSize: '17px' }}><strong>Correspondence address line 1*</strong></p>
                                        </div>
                                        <div style={{ width: '' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter the house or flat number and street name. For example: 12 High Street</span>
                                            </span>
                                        </div>
                                        <div className='' >
                                            <input style={{ width: '250px' }} className='form-control' type='text' placeholder='house or flat number and street name' />
                                        </div>

                                    </region>

                                    {/* ***********  Correspondence address line 2  */}
                                    <region>
                                        <div className='mt-4'>
                                            <p style={{ fontSize: '17px' }}><strong>Correspondence address line 2*</strong></p>
                                        </div>
                                        <div style={{ width: '315px' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter the second line of your Correspondence address</span>
                                            </span>
                                        </div>
                                        <div className='' >
                                            <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Correspondence address line 2' />
                                        </div>
                                    </region>

                                    {/* ***********  Correspondence address line 3  */}
                                    <region>
                                        <div className='mt-4'>
                                            <p style={{ fontSize: '17px' }}><strong>Correspondence address line 3*</strong></p>
                                        </div>
                                        <div style={{ width: '300px' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter the third line of your Correspondence address</span>
                                            </span>
                                        </div>
                                        <div className='' >
                                            <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Correspondence address line 3' />
                                        </div>
                                    </region>

                                    {/* ***********  Correspondence address line 4  */}
                                    <region>
                                        <div className='mt-4'>
                                            <p style={{ fontSize: '17px' }}><strong>Correspondence address line 4*</strong></p>
                                        </div>
                                        <div style={{ width: '310px' }} className="mb-2 mt-2 help-content border border-grey rounded">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text">Enter the fourth line of your Correspondence address</span>
                                            </span>
                                        </div>
                                        <div className='' >
                                            <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Correspondence address line 4' />
                                        </div>
                                    </region>

                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                        <MDBCardBody>
                            <div>
                                <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} tag='h6'><strong>Contact Details</strong></MDBTypography>

                            </div>

                            {/* ***********  Home telephone  */}
                            <region>
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
                                        <input style={{ width: '250px' }} className='form-control' type='text' placeholder='home telephone' />
                                    </div>
                                </div>

                            </region>

                            {/* ***********  Work telephone  */}
                            <region>
                                <div className='mt-4'>
                                    <p style={{ fontSize: '17px' }}><strong>Work telephone*</strong></p>
                                </div>
                                <div>
                                    <div className='mt-2' >
                                        <input style={{ width: '250px' }} className='form-control' type='text' placeholder='work telephone' />
                                    </div>
                                </div>
                            </region>

                            {/* ***********  Mobile telephone  */}
                            <region>
                                <div className='mt-4'>
                                    <p style={{ fontSize: '17px' }}><strong>Mobile telephone*</strong></p>
                                </div>
                                <div>
                                    <div className='mt-2' >
                                        <input style={{ width: '250px' }} className='form-control' type='text' placeholder='mobile telephone' />
                                    </div>
                                </div>
                            </region>

                            {/* ***********  Email address  */}
                            <region>
                                <div className='mt-4'>
                                    <p style={{ fontSize: '17px' }}><strong>Email address*</strong></p>
                                </div>
                                <div>
                                    <div className='mt-2' >
                                        <input style={{ width: '250px' }} className='form-control' type='text' placeholder='email address' />
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <p style={{ fontSize: '17px' }}><strong>Please re-enter your email address*</strong></p>
                                </div>
                                <div>
                                    <div className='mt-2' >
                                        <input style={{ width: '250px' }} className='form-control' type='text' placeholder='re-enter email address' />
                                    </div>
                                </div>

                            </region>

                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                        <MDBCardBody>
                            <div>
                                <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} ><strong>Equality and Diversity Monitoring</strong></MDBTypography>
                            </div>

                            {/**********  Ethnic group  */}
                            <region>
                                <div className='mt-4'>
                                    <div >
                                        <p style={{ fontSize: '17px' }}><strong>What is your ethnic group? *</strong></p>
                                    </div>

                                    <div className='mt-2' >
                                        <select style={{ overflow: 'scroll', width: '150px' }} className="form-select rounded " >
                                            <option selected>Please Select</option>
                                            <option value="1"> Asian or Asian British: Any Other Asian Background</option>
                                            <option value="2"> Asian or Asian British: Bangladeshi</option>
                                            <option value="3"> Asian or Asian British: Chinese</option>
                                            <option value="4"> Asian or Asian British: Indian</option>
                                            <option value="5"> Asian or Asian British: Pakistani</option>
                                            <option value="6"> Black or Black British: African</option>
                                            <option value="7"> Black or Black British: Any Other Black/African/Caribbean background</option>
                                            <option value="8"> Black or Black British: Caribbean</option>
                                            <option value="9"> Mixed: Any Other Mixed Background</option>
                                            <option value="10"> Mixed: White and Asian</option>
                                            <option value="11"> Mixed: White and Black African</option>
                                            <option value="12"> Mixed: White and Black Caribbean/African</option>
                                            <option value="13"> Not known</option>
                                            <option value="14"> Other Ethnic: Any other ethnic group</option>
                                            <option value="15"> Other Ethnic: Arab</option>
                                            <option value="16"> Prefer not to say</option>
                                            <option value="17"> Refused</option>
                                            <option value="18"> White: Gypsy or Irish Traveller</option>
                                            <option value="19"> White: Irish</option>
                                            <option value="20"> White: Other White: Any other white background</option>
                                            <option value="21"> White: Welsh / English / Scottish / Northern Irish</option>
                                        </select>
                                    </div>
                                </div>
                            </region>

                            {/**********  Nationality  */}
                            <region>
                                <div className='mt-4'>
                                    <p style={{ fontSize: '17px' }}><strong>What is your nationality? *</strong></p>
                                </div>

                                <div className='mt-2' >
                                    <select style={{ overflow: 'scroll', width: '150px' }} className="form-select rounded" >
                                        <option selected>Please Select</option>
                                        <option value="1">UK National</option>
                                        <option value="2">UK National returning from residence overseas</option>
                                        <option value="3">Bulgaria</option>
                                        <option value="4">Croatia</option>
                                        <option value="5">Czech Republic</option>
                                        <option value="6">Estonia</option>
                                        <option value="7">Hungary</option>
                                        <option value="8">Ireland</option>
                                        <option value="9">Latvia</option>
                                        <option value="10">Lithuania</option>
                                        <option value="11">Poland</option>
                                        <option value="12">Romania</option>
                                        <option value="13">Slovakia</option>
                                        <option value="14">Slovenia</option>
                                        <option value="15">Other EEA national</option>
                                        <option value="16">Non-EEA national</option>
                                    </select>
                                </div>
                            </region>

                            {/**********  Sexual orientation */}
                            <region>
                                <div className='mt-4'>
                                    <p style={{ fontSize: '17px' }}><strong>What is your sexual orientation? *</strong></p>
                                </div>

                                <div className='mt-2' >
                                    <select style={{ overflow: 'scroll', width: '150px' }} className="form-select rounded" >
                                        <option selected>Please Select</option>
                                        <option value="1">Heterosexual or Straight</option>
                                        <option value="2">Gay or Lesbian</option>
                                        <option value="3">Prefer not to say</option>
                                        <option value="4">Other</option>
                                    </select>
                                </div>
                            </region>

                            {/**********  Belief */}
                            <region>
                                <div className='mt-4'>
                                    <p style={{ fontSize: '17px' }}><strong>What is your religion or belief? *</strong></p>
                                </div>

                                <div className='mt-2' >
                                    <select style={{ overflow: 'scroll', width: '150px' }} className="form-select rounded" >
                                        <option selected>Please Select</option>
                                        <option value="1">Buddhist</option>
                                        <option value="2">Christian (including all denominations)</option>
                                        <option value="3">Hindu</option>
                                        <option value="4">Jewish</option>
                                        <option value="5">Muslim</option>
                                        <option value="6">Sikh</option>
                                        <option value="7">Any other religion</option>
                                        <option value="8">Not known</option>
                                        <option value="9">Prefer not to say</option>
                                    </select>
                                </div>
                            </region>

                            {/**********  Health condition */}
                            <region>
                                <div className='mt-4'>
                                    <p style={{ fontSize: '17px' }}><strong>Do you have any physical or mental health conditions or illnesses lasting or expected to last for 12 months or more? *</strong></p>
                                </div>

                                <div className='mt-2' >
                                    <select style={{ overflow: 'scroll', width: '150px' }} className="form-select rounded" >
                                        <option selected>Please Select</option>
                                        <option value="1">No</option>
                                        <option value="2">Yes</option>
                                        <option value="3">Prefer not to say</option>
                                    </select>
                                </div>
                            </region>

                            {/**********  Prefered Language */}
                            <region>
                                <div className='mt-4'>
                                    <p style={{ fontSize: '17px' }}><strong>Which language do you prefer using? *</strong></p>
                                </div>

                                <div className='mt-2' >
                                    <select style={{ overflow: 'scroll', width: '150px' }} className="form-select rounded" >
                                        <option selected>Please Select</option>
                                        <option value="1">Albanian</option>
                                        <option value="2">Bengali</option>
                                        <option value="3">Buddhist</option>
                                        <option value="4">BSL - British sign language</option>
                                        <option value="5">Chinese</option>
                                        <option value="6">Czechoslovakian</option>
                                        <option value="7">English</option>
                                        <option value="8">Farsi</option>
                                        <option value="9">French</option>
                                        <option value="10">German</option>
                                        <option value="11">Greek</option>
                                        <option value="12">Gujarati</option>
                                        <option value="13">Halari</option>
                                        <option value="14">Hindi</option>
                                        <option value="15">Israeli (Hebrew)</option>
                                        <option value="16">Italian</option>
                                        <option value="17">Kosovan</option>
                                        <option value="18">Lingala</option>
                                        <option value="19">Luganda</option>
                                        <option value="20">Macedonian</option>
                                        <option value="21">Other</option>
                                        <option value="22">Portuguese</option>
                                        <option value="23">Punjabi</option>
                                        <option value="24">Romanian</option>
                                        <option value="25">Russian</option>
                                        <option value="26">Slovakian</option>
                                        <option value="27">Somali</option>
                                        <option value="28">Sorani - Kurdish Sorani</option>
                                        <option value="29">Spanish</option>
                                        <option value="30">Swahili</option>
                                        <option value="31">Tamil</option>
                                        <option value="32">Turkish</option>
                                        <option value="33">Ugandan</option>
                                        <option value="34">Urdu</option>
                                        <option value="35">Yugoslavian</option>
                                        <option value="36">Zulu</option>
                                    </select>
                                </div>
                            </region>

                            {/**********  Interpreter */}
                            <region>
                                <div className='mt-4'>
                                    <p style={{ fontSize: '17px' }}><strong>Do you require an interpreter? *</strong></p>
                                </div>

                                <div >
                                    <div>
                                        <MDBRadio name='needInterpreterRadio' id='needInterpreterYes' label='Need Interpreter?' inline
                                            value='yes' onChange={(e) => { setNeedInterpreter(e.target.value) }} />
                                        <MDBRadio name='needInterpreterRadio' id='needInterpreterNo' label='Need Interpreter?' inline
                                            value='no' onChange={(e) => { setNeedInterpreter(e.target.value) }} />
                                    </div>
                                </div>
                            </region>


                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                        <MDBCardBody>

                            {/**********  Current tenure */}
                            <div>
                                <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} tag='h6'><strong>Eligibility</strong></MDBTypography>
                            </div>

                            <region>
                                <div className='mt-4'>
                                    <p style={{ fontSize: '17px' }}><strong>What is your current tenure? *</strong></p>
                                </div>
                                <div className='mt-2' >
                                    <select style={{ overflow: 'scroll', width: '150px' }} className="form-select rounded" >
                                        <option selected>Please Select</option>
                                        <option value="1">Birmingham City Council Tenant</option>
                                        <option value="2">Registered Provider / Housing Association tenant</option>
                                        <option value="3">Living with friends or family</option>
                                        <option value="4">Private Tenant</option>
                                        <option value="5">Owner Occupier</option>
                                        <option value="6">Temporary Accommodation</option>
                                        <option value="7">Other</option>
                                    </select>
                                </div>

                                <div className="help-content">
                                    <span className="help-text">
                                        <span style={{ fontSize: '12px' }} className="configured-help-text">
                                            As a Birmingham City Council Tenant when accepting an offer you MUST give vacant possession of your property. Failure to do so will result in your offer being withdrawn!</span>
                                    </span>
                                </div>

                                {/* <div>
                                <MDBTypography className='card-header' style={{ backgroundColor: '#dcdcdc' }} tag='h6'><strong>Eligibility</strong></MDBTypography>
                                <div className='mt-3'>
                                    <MDBTypography className='' tag='h7'><strong>Please provide your tenancy reference number?</strong></MDBTypography>
                                </div>
                            </div> */}

                                <div style={{ width: '280px' }} className=" mt-2 help-content border border-grey rounded">
                                    <span className="far fa-question-circle help-icon"></span>
                                    <span className="help-text">
                                        <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text ">
                                            This can be found on your Tenancy Agreement</span>
                                    </span>
                                </div>

                                <div>
                                    <div className='mt-3' >
                                        <input style={{ width: '250px', fontSize: '13px' }} className='form-control' type='text' placeholder='Enter your tenancy agreement number' />
                                    </div>
                                </div>

                                <div className="help-content">
                                    <span className="help-text">
                                        <span style={{ fontSize: '12px' }} className="configured-help-text">
                                            Only certain people who are persons from abroad are eligible to join our housing register. The following questions will help us determine if you are eligible.</span>
                                    </span>
                                </div>
                            </region>

                            {/**********  Are you? */}
                            <region>
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
                                    <select style={{ overflow: 'scroll', width: '150px' }} className="form-select rounded" >
                                        <option selected>Please Select</option>
                                        <option value="1">A person who has limited or exceptional leave to enter or remain in the UK with recourse to public funds</option>
                                        <option value="2">A British citizen</option>
                                        <option value="3">A citizen of a country within the EEA with settled status</option>
                                        <option value="4">A citizen of a country within the EEA with pre-settled status</option>
                                        <option value="5">A Commonwealth citizen with a right of abode</option>
                                        <option value="6">A family member of a citizen of a country within the EEA with settled status</option>
                                        <option value="7">A family member of a citizen of a country within the EEA with pre-settled status</option>
                                        <option value="8">A person with leave to remain</option>
                                        <option value="9">An Irish citizen</option>
                                        <option value="6">Seeking, or have sought asylum in the UK</option>
                                        <option value="7">Someone granted humanitarian protection under immigration rules</option>
                                        <option value="8">Someone with permission to be in the UK because you have a sponsor</option>
                                        <option value="9">None of the above</option>
                                    </select>
                                </div>
                            </region>


                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                        <MDBCardBody>
                            <MDBTypography className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} ><strong>Connection to Birmingham</strong></MDBTypography>

                            {/**********  Connection to Birmingham */}
                            <region>
                                <div>
                                    <div className='mt-4'>
                                        <p style={{ fontSize: '17px' }}><strong>In order to help us understand why you want to live in Birmingham, we need to know about your connection to the city. Please choose from the following options. *</strong></p>
                                    </div>

                                    <div>
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I have lived in Birmingham for the last 24 months or more' />
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am currently employed or have a confirmed offer of employment in Birmingham' />
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Birmingham City Council has accepted a homeless duty to me and placed me outside of Birmingham' />
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am in, or due to undertake training or higher education in Birmingham that will last at least 6 months or more' />
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I have caring responsibility for someone resident in Birmingham' />
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am a care leaver aged 18 - 21 who is owed a duty of care by Birmingham City Council' />
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I need to be near specialist medical or support services only available in Birmingham' />
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am care leaver aged 22 to 25 who is owed a duty of care by Birmingham City Council and pursuing a programme of education' />
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am a current member of His Majestys Armed Forces' />
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am a current or former member of His Majestys Armed Forces and I need to move due to a medical condition that was caused by my military service' />
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am the spouse or civil partner of a person who has died as a result of their service in His Majestys Armed Forces and I am now leaving Services Accommodation' />
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am no longer a member of His Majestys Armed Forces, however I was discharged within the last 5 years' />
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am a former spouse or civil partner of a person in His Majestys Armed Forces and I am now leaving Services Accommodation' />
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am an adult child of Service personnel who is no longer able to remain in the family home due to the impact moving from base to base' />
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I have near relatives in Birmingham and they have been resident in Birmingham for the last 5 years or more' />
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I need to move away from another area to escape violence or harm' />
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='None of the above' />
                                    </div>
                                </div>
                            </region>

                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                        <MDBCardBody>

                            <div>
                                <p className='card-header' style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} ><strong>Login Details</strong></p>
                                <div className='mt-4'>
                                    <p style={{ fontSize: '17px' }}><strong>Enter your new memorable date</strong></p>

                                </div>
                            </div>
                            <div className='mt-2' >

                            </div>

                            <div className="help-content">
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

                            {/**********  Memorable date */}
                            <region>
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
                                        <select style={{ overflow: 'scroll', width: '70px' }} className="form-select rounded " >
                                            <option selected>dd</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select>

                                        <select style={{ overflow: 'scroll', width: '78px' }} className="form-select rounded " >
                                            <option selected>mm</option>
                                            <option value="1">January</option>
                                            <option value="2">February</option>
                                            <option value="3">March</option>
                                            <option value="4">April</option>
                                            <option value="5">May</option>
                                            <option value="6">June</option>
                                            <option value="7">July</option>
                                            <option value="8">August</option>
                                            <option value="9">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </select>
                                        <input className='form-control rounded' type='text' placeholder='year' style={{ width: '65px', float: 'left', borderColor: 'lightgrey', color: 'black' }} />

                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <p style={{ fontSize: '16px' }}><strong>Enter your new memorable date again*</strong></p>
                                    <div className='mt-2'>
                                        <div className='btn-group'>
                                            <select style={{ overflow: 'scroll', width: '70px' }} className="form-select rounded " >
                                                <option selected>dd</option>
                                                <option value="01">01</option>
                                                <option value="02">02</option>
                                                <option value="03">03</option>
                                                <option value="04">04</option>
                                                <option value="05">05</option>
                                                <option value="06">06</option>
                                                <option value="07">07</option>
                                                <option value="08">08</option>
                                                <option value="09">09</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                            </select>

                                            <select style={{ overflow: 'scroll', width: '78px' }} className="form-select rounded " >
                                                <option selected>mm</option>
                                                <option value="1">January</option>
                                                <option value="2">February</option>
                                                <option value="3">March</option>
                                                <option value="4">April</option>
                                                <option value="5">May</option>
                                                <option value="6">June</option>
                                                <option value="7">July</option>
                                                <option value="8">August</option>
                                                <option value="9">September</option>
                                                <option value="10">October</option>
                                                <option value="11">November</option>
                                                <option value="12">December</option>
                                            </select>
                                            <input className='form-control rounded' type='text' placeholder='year' style={{ width: '65px', float: 'left', borderColor: 'lightgrey', color: 'black' }} />

                                        </div>
                                    </div>
                                </div>
                            </region>

                            {/**********  Password */}
                            <region>
                                <div className='mt-4'>
                                    {/* <MDBTypography className='' tag='h5'  style={{ fontWeight: 'bold' }}><strong>Enter your new password</strong></MDBTypography> */}
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
                                    <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Password...'
                                        value={pwd} onChange={(e) => { setPwd(e.target.value) }}></input>
                                </div>

                                <div className='mt-4'>
                                    <p style={{ fontSize: '16px' }}><strong>Enter your new password again*</strong></p>

                                </div>
                                <div className='mb-4' >
                                    <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Reenter password...'
                                        value={reEnterPwd} onChange={(e) => { setReEnterPwd(e.target.value) }}></input>
                                </div>
                            </region>

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>

                <MDBCol className='mt-5' >
                    <MDBCard style={{ backgroundColor: '#f7f2f287' }}>
                        <MDBCardBody >
                            <ul className="list-group list-group-flush" >
                                <li className="list-group-item list-group-item-primary" style={{ fontSize: '18px' }}><strong>Application progress</strong></li>
                                <li className="list-group-item">1. National insurance number check</li>
                                <li className="list-group-item">2. Household Registration</li>
                                <li className="list-group-item">3. Joint Applicant and Other Household Members</li>
                            </ul>
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>
            <MDBRow>
                <hr className="mt-1 mb-3" size="5"></hr>
            </MDBRow>
            <MDBRow>
                <form className='d-flex w-auto mb-5'>
                    <MDBBtn style={{ fontSize: '18px', width: 'auto', textTransform: 'none' }} color='primary me-1'>
                        {/* <MDBIcon fas icon='caret-left' className='me-2' /> */}
                        Previous Page</MDBBtn>

                    <MDBBtn style={{ fontSize: '18px', width: 'auto', textTransform: 'none' }} color='primary'
                        onClick={showInConsole}>
                        {/* <MDBIcon fas icon='caret-right' className='me-2' /> */}
                        Next Page</MDBBtn>
                </form>
            </MDBRow>
        </MDBContainer >
    );
}