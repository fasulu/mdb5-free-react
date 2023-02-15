import React, { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { dates, months } from '../resources/datePicker';

import {
    MDBCard,
    MDBCardBody,
    MDBRadio,
    MDBTypography,
    MDBBtn,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';

import ToCamelCase from '../validations/Validator'

export default function MemberEdit() {

    const navigate = useNavigate();
    const location = useLocation();

    let memberid = location.state.test

    const datesData = dates;
    const monthsData = months;
    const yearMax = new Date().getFullYear();        // year picker up to current year
    const yearMin = new Date().getFullYear() - 120;  // year picker 120 year back from current year

    const inputStyle = { fontSize: '14px', width: '250px', color: 'black' };

    const datePickerStyle = { maxWidth: '70px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const monthPickerStyle = { maxWidth: '130px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const yearPickerStyle = { width: '80px', float: 'left', border: '5' };

    const [primaryApplicantID, setPrimaryApplicantID] = useState("asd34dfsg324fdg65hgj");
    const [householdMemberID, setHouseholdMemberID] = useState(memberid);
    const [relationWithPrimaryApplicant, setRelationWithPrimaryApplicant] = useState("Wife")
    const [title, setTitle] = useState("Mrs");
    const [fName, setFName] = useState("Prity");
    const [mName, setMName] = useState("");
    const [sName, setSName] = useState("Patel");
    const [nINO, setNINO] = useState("WF123456A");
    let tempDOB = "10/25/1975"
    tempDOB = tempDOB.split('/')[1] + '/' + tempDOB.split('/')[0] + '/' + tempDOB.split('/')[2]
    const [dateofbirth, setdateofbirth] = useState(tempDOB);
    const [movedDate, setMovedDate] = useState("10/20/2021");
    const [movedInDate, setMovedInDate] = useState("");
    const [movedInMonth, setMovedInMonth] = useState("");
    const [movedInYear, setMovedInYear] = useState("");
    const [currentlyLiveWithYou, setCurrentlyLiveWithYou] = useState("yes");
    const [healthCondition, setHealthCondition] = useState("no");

    const gotoAccountPage = (e) => {
        navigate('/account');

    }

    const saveJointMember = (e) => {
        e.preventDefault();
        setMovedDate(movedInMonth + '/' + movedInDate + '/'+ movedInYear);
        console.log(`Ready to save ${movedDate} ${currentlyLiveWithYou} ${healthCondition}`);
    }

    return (
        <React.Fragment>

            <h5>{householdMemberID}</h5>
            <MDBCard className='w-100 mx-auto' style={{ backgroundColor: '#f7f2f287' }} >
                <p style={{ fontSize: '17px' }}><strong>Edit Member</strong></p>

                {/* ********** Household member relationship  */}

                <MDBCardBody >
                    <div >
                        <MDBTypography className='card-header' style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} >
                            <strong>Main Details</strong>
                        </MDBTypography>
                        <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Relationship to primary applicant *</strong></p>
                        <input style={inputStyle} className='form-control' type='text'
                            value={relationWithPrimaryApplicant} readOnly >
                        </input>
                    </div>

                    {/* ********** First name  */}
                    <div>
                        <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Title</strong></p>
                        <div className='mb-4' >
                            <input style={inputStyle} className='form-control' type='text' placeholder='First name...'
                                maxLength={20} value={title} readOnly ></input>
                        </div>
                    </div>

                    {/* ********** First name  */}
                    <div>
                        <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>First name(s)</strong></p>
                        <div className='mb-4' >
                            <input style={inputStyle} className='form-control' type='text' placeholder='First name...'
                                maxLength={20} value={fName} readOnly ></input>
                        </div>
                    </div>

                    {/* ********** Middle name  */}
                    <div>

                        <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Middle name(s)</strong></p>

                        <div className='mb-4' >
                            <input style={inputStyle} className='form-control' type='text' placeholder='Middle name...'
                                maxLength={20} value={mName} readOnly ></input>
                        </div>
                    </div>

                    {/* ********** Surname  */}
                    <div>

                        <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Surname</strong></p>

                        <div className='mb-4' >
                            <input style={inputStyle} className='form-control' type='text' placeholder='Surname...'
                                maxLength={20} value={sName} readOnly ></input>
                        </div>

                    </div>

                    {/* ********** NINO   */}
                    <div>
                        <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>NINO</strong></p>
                        <div className='mb-4' >
                            <input style={inputStyle} className='form-control' type='text'
                                maxLength={9} value={nINO} readOnly ></input>
                        </div>
                    </div>

                    {/* *********** Date of Birth  */}
                    <div>
                        <p className='mt-3 mb-2' style={{ fontSize: '16px' }}><strong>Date of birth</strong></p>

                        <div >
                            <input style={inputStyle} className='form-control' type='text'
                                maxLength={9} value={dateofbirth} readOnly ></input>
                        </div>
                    </div>
                </MDBCardBody>
            </MDBCard>

            {/* ********** Does you this household member currently live with you?  */}

            <MDBCard className='mt-4 mb-2' style={{ backgroundColor: '#f7f2f287' }}>
                <MDBCardBody>
                    <div className='mb-2'>
                        <MDBTypography className='card-header'
                            style={{ fontSize: '17px', backgroundColor: '#dcdcdc' }} >
                            <strong>Does this household member currently live with you?</strong>
                        </MDBTypography>
                    </div>
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

                    {/* *********** When moved to this address  */}

                    <div className='mt-4'>
                        <p style={{ fontSize: '16px' }}><strong>Date moved into this address?</strong></p>

                        <div className='mt-1'>
                            <div className='btn-group' >
                                <select style={datePickerStyle}
                                    className="form-select rounded"
                                    onChange={(e) => { setMovedInDate(e.target.value) }} >
                                    {datesData.map((option) => (
                                        <option key={option.dKey} value={option.dKey}>{option.dValue}</option>
                                    ))}
                                </select>

                                <select style={monthPickerStyle}
                                    className="form-select rounded"
                                    onChange={(e) => { setMovedInMonth(e.target.value) }} >
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
                                    onChange={(e) => { setMovedInYear(e.target.value) }} >
                                </input>
                            </div>
                        </div>
                    </div>
                </MDBCardBody>
            </MDBCard>

            {/**********  Health condition */}

            <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                <MDBCardBody>
                    <div>
                        <div className='mt-4'>
                            <p style={{ fontSize: '17px' }}><strong>Does this have any physical or mental health conditions or illnesses lasting or expected to last for 12 months or more? *</strong></p>
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
                </MDBCardBody>
            </MDBCard>

            {/**********  Confirmat and save */}

            <MDBCard className='mt-4' style={{ backgroundColor: '#f7f2f287' }}>
                <MDBCardBody>
                    <form className='d-flex w-auto mt-3'>
                        <MDBBtn style={{ fontSize: '16px', width: 'auto', textTransform: 'none' }}
                            color='success me-1' onClick={saveJointMember} >
                            Save
                        </MDBBtn>
                        <MDBBtn style={{ fontSize: '16px', width: 'auto', textTransform: 'none' }}
                            color='warning' onClick={gotoAccountPage}>
                            Cancel
                        </MDBBtn>
                    </form>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >

    );
}