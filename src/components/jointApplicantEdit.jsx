import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { dates, months } from '../resources/datePicker';
import { validEmail, validDate, validPostcode, validNumber } from '../validations/Validator.jsx';

import {
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBRow, MDBCol,
    MDBTypography,
    MDBBtn,
    MDBRadio
} from 'mdb-react-ui-kit';

export default function JointApplicantEdit() {

    const navigate = useNavigate();

    const datesData = dates;
    const monthsData = months;

    const yearMax = new Date().getFullYear();        // year picker up to current year
    const yearMin = new Date().getFullYear() - 120;  // year picker 120 year back from current year

    const labelStyle = { maxHeight: 'auto', fontSize: '16px', width: 'auto', color: '#4f4f4f' };
    const inputStyle = { maxHeight: 'auto', fontSize: '16px', minwidth: '250px', color: 'black' };
    const commentStyle = { minHeight: '150px', fontSize: '16px', minWidth: '250px', color: 'black' };
    const memberStyle = { paddingLeft: '10px', color: 'black', };
    const headerStyle = { fontSize: '17px', backgroundColor: '#e3f6fd' };
    const btnSytle = { fontSize: '16px', width: 'auto', textTransform: 'none', marginRight: '10px' };

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
    let tempMovedDate = "12/20/2019";
    const [movedDate, setMovedDate] = useState(tempMovedDate);
    const [movedInDate, setMovedInDate] = useState(tempMovedDate.split('/')[1]);
    const [movedInMonth, setMovedInMonth] = useState(tempMovedDate.split('/')[0]);
    const [movedInYear, setMovedInYear] = useState(tempMovedDate.split('/')[2]);

    const [livingInDiffAddress, setLivingInDiffAddress] = useState("no");
    const [showCorrespondenceAddress, setShowCorrespondenceAddress] = useState(false)
    const [corresPostcode, setCorresPostcode] = useState("LP1 1QW");
    const [addLine1, setAddLine1] = useState("12 Blackpool Avenue");
    const [addLine2, setAddLine2] = useState("Kensington");
    const [addLine3, setAddLine3] = useState("London");
    const [addLine4, setAddLine4] = useState("UK");
    const [isShePregnant, setIsShePregnant] = useState("no");
    const [showDeliveryDate, setShowDeliveryDate] = useState(false);

    let tempDelDate = "11/30/2023";
    const [deliveryDate, setDeliveryDate] = useState(tempDelDate);
    const [delDate, setDelDate] = useState(tempDelDate.split('/')[1]);
    const [delMonth, setDelMonth] = useState(tempDelDate.split('/')[0]);
    const [delYear, setDelYear] = useState(tempDelDate.split('/')[2]);
    const [telephone, setTelephone] = useState("0204568542");
    const [mobile, setMobile] = useState("07874598965");
    const [workPhone, setWorkPhone] = useState("02012564789");
    const [email, setEmail] = useState("pretypaty@msn.com");
    const [healthCondition, setHealthCondition] = useState("no");
    const [areYouWorker, setAreYouWorker] = useState("no");
    const [comments, setComments] = useState("none");

    // joint:-
    // jointId
    // moved_to_current_address
    // corres_postcode
    // corres_address_line1
    // corres_address_line2
    // corres_address_line3
    // corres_address_line4
    // is_she_pregnant
    // delivery_date
    // illness
    // are_you_worker
    // telephone_home
    // telephone_mobile
    // telephone_work
    // email
    // comments

    useEffect(() => {

    }, [])

    const findPostcodeAddress = (e) => {
        e.preventDefault();
        setShowCorrespondenceAddress(true);
        alert('Sorry... \nPostcode search is not able to connect with UK Post Office API, \nplease enter the address manually')
    }

    const saveJointMember = (e) => {
        e.preventDefault();

        const delvy = delMonth + '/' + delDate + '/' + delYear;
        setDeliveryDate(delvy);
        const moved = movedInMonth + '/' + movedInDate + '/' + movedInYear;
        setMovedDate(moved);

        if (currentlyLiveWithYou === 'yes') {
            setCurrentlyLiveWithYou(true);
        } else { setCurrentlyLiveWithYou(false) };

        const postcodeErr = validPostcode(corresPostcode);
        const movedDateErr = validDate(moved)
        const deliveryErr = validDate(delvy);
        const emailErr = validEmail(email);
        const telephoneErr = validNumber(telephone);
        const workphoneErr = validNumber(workPhone);
        const mobileErr = validNumber(mobile);

        console.log(`Validation result is postcode ${postcodeErr} email ${emailErr}, 
        home telephone ${telephoneErr}, work telephone ${workphoneErr}, 
        mobile ${mobileErr}, delivery ${deliveryErr}, movedDate ${movedDateErr}`)

        if ((!postcodeErr) || (!movedDateErr) || (!deliveryErr) ||
            (!emailErr) || (!telephoneErr) || (!workphoneErr) || (!mobileErr)) {
            !postcodeErr && alert('Postcode error');
            !movedDateErr && alert('Moved In date error');
            !deliveryErr && alert('Delivery date error');
            !emailErr && alert('Email error');
            !telephoneErr && alert('Telephone number error');
            !workphoneErr && alert('Work telephone number error');
            !mobileErr && alert('Mobile number error');
        } else {
            console.log('FINAL Result passed', healthCondition, currentlyLiveWithYou,
                movedDate, corresPostcode, addLine1, addLine2, addLine3, addLine4,
                currentlyLiveWithYou, telephone, mobile, workPhone,
                isShePregnant, deliveryDate, areYouWorker
            )
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

                        <MDBRow alignment='center'>
                            <MDBTypography className='card-header mb-4' style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} >
                                <strong>Partner/Joint Applicant Details</strong>
                            </MDBTypography>
                            <MDBRow>
                                <MDBCol className='col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                                    <MDBTypography style={labelStyle}>Full Name: <strong style={memberStyle}>{fName.toUpperCase() + " " + mName.toUpperCase() + " " + sName.toUpperCase()}</strong></MDBTypography>

                                </MDBCol>
                                <MDBCol className='col-lg-3 col-md-4 col-sm-6 col-xs-6'>
                                    <MDBTypography style={labelStyle}>NINO:  <strong style={memberStyle}>{nINO.toUpperCase()}</strong></MDBTypography>

                                </MDBCol>
                                <MDBCol className='col-lg-3 col-md-2 col-sm-6 col-xs-6'>
                                    <MDBTypography style={labelStyle}>DOB: <strong style={memberStyle}>{dateofbirth.toUpperCase()}</strong></MDBTypography>

                                </MDBCol>
                                <MDBCol className='col-lg-2 col-md-2 col-sm-6 col-xs-6'>
                                    <MDBTypography style={labelStyle}>Relation:  <strong style={memberStyle}>{relationWithPrimaryApplicant.toUpperCase()}</strong></MDBTypography>
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
                                <option >{healthCondition}</option>
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
                                        htmlFor="currentlyLiveWithYouYes" defaultChecked
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
                                label={primaryApplicantAddress} htmlFor='livingInDiffAddressYes'
                                    value='yes' defaultChecked onChange={(e) => { setLivingInDiffAddress("Living with primary applicant"); setShowCorrespondenceAddress(false); }}></MDBRadio>     {/* Get and show primary applicant address in this place */}

                            </MDBRow>
                            <MDBRow>
                                <MDBRadio className='mx-3' name='livingInDiffAddressRadio' id='livingInDiffAddressNo' label='This person is living at a different addres' htmlFor='livingInDiffAddressNo'
                                    value='no' onChange={(e) => { setLivingInDiffAddress("Living in different address"); setShowCorrespondenceAddress(true); }}></MDBRadio>     {/* Spouse or partner living in different address */}
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
                                                    maxLength={8} value={corresPostcode} onChange={(e) => { setCorresPostcode(e.target.value) }} />
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
                                            maxLength={20} value={email}
                                            onChange={(e) => { let newEdit = { ...email }; newEdit = e.target.value; setEmail(newEdit) }}></input>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </div>

                        <MDBTypography className='card-header mt-4 mb-2'
                            style={headerStyle} >
                            <strong>Is she pregnant?</strong>
                        </MDBTypography>
                        <div className='px-4 mb-2' >
                            <MDBRow>
                                <MDBCol className='col-3'>
                                    <MDBRadio name='isShePregnantRadio' label='Yes' value='yes'
                                        inline id='isShePregnantYes' htmlFor="isShePregnantYes"
                                        onClick={(e) => { let newEdit = { ...isShePregnant }; newEdit = e.target.value; setIsShePregnant(newEdit); setShowDeliveryDate(true) }}></MDBRadio>
                                </MDBCol>

                                <MDBCol className='col-3'>
                                    <MDBRadio name='isShePregnantRadio' label='No' value='no'
                                        inline id='isShePregnantNo' htmlFor='isShePregnantNo' defaultChecked
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
                                            <span  className="configured-help-text">This information can be found in the pregnancy green book.</span>
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
                                onClick={saveJointMember} >
                                Save </MDBBtn>
                            <MDBBtn style={btnSytle}
                                color='secondary' onClick={gotoAccountPage}>
                                Cancel</MDBBtn>
                        </form>

                    </MDBCardBody>
                </MDBCard>
            </MDBContainer >
        </React.Fragment >
    );
}