import React, { useState, useEffect } from 'react';
import { useNavigation } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

import { dates, months } from '../resources/datePicker';
import { testData } from '../resources/testData';
import { validEmail, validNumber, validDate } from '../validations/Validator';

import {
    MDBCard,
    MDBCardBody,
    MDBRadio,
    MDBTypography,
    MDBBtn,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';

import { ToCamelCase } from '../validations/Validator'

export default function MemberEdit() {

    const navigate = useNavigate();
    const location = useLocation();

    const findOneMemberUrl = "http://localhost:9001/member/member/";

    let memberid = location.state.memberID
    console.log(memberid);

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

    const datePickerStyle = { maxWidth: '70px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const monthPickerStyle = { maxWidth: '130px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const yearPickerStyle = { width: '80px', float: 'left', border: '5' };

    const [member, setMember] = useState([]);

    const [primaryApplicantID, setPrimaryApplicantID] = useState("asd34dfsg324fdg65hgj");
    const [householdMemberID, setHouseholdMemberID] = useState(memberid);
    const [relationship, setRelationship] = useState("")
    const [title, setTitle] = useState("");
    const [fName, setFName] = useState("");
    const [mName, setMName] = useState("");
    const [sName, setSName] = useState("");
    const [nINO, setNINO] = useState("");
    const [sex, setSex] = useState("");
    var tempDOB = ""; tempDOB = tempDOB.split('/')[2] + '/' + tempDOB.split('/')[1] + tempDOB.split('/')[0] + '/';
    const [dateofbirth, setdateofbirth] = useState(tempDOB);
    var tempMovedDate = "";
    // const [movedInDate, setMovedInDate] = useState(tempMovedDate.split('/')[1]);
    // const [movedInMonth, setMovedInMonth] = useState(tempMovedDate.split('/')[0]);
    // const [movedInYear, setMovedInYear] = useState(tempMovedDate.split('/')[2]);
    const [movedInDate, setMovedInDate] = useState();
    const [movedInMonth, setMovedInMonth] = useState();
    const [movedInYear, setMovedInYear] = useState();
    const [movedDate, setMovedDate] = useState(tempMovedDate);
    const [currentlyLiveWithYou, setCurrentlyLiveWithYou] = useState("yes");

    const [currentAddress, setCurrentAddress] = useState("");

    const [isShePregnant, setIsShePregnant] = useState("");
    const [nameofSpouse, setNameofSpouse] = useState("tempo");
    var tempDelDate = "";
    // const [delDate, setDelDate] = useState(tempDelDate.split('/')[1]);
    // const [delMonth, setDelMonth] = useState(tempDelDate.split('/')[0]);
    // const [delYear, setDelYear] = useState(tempDelDate.split('/')[2]);
    const [delDate, setDelDate] = useState();
    const [delMonth, setDelMonth] = useState();
    const [delYear, setDelYear] = useState();
    const [deliveryDate, setDeliveryDate] = useState(tempDelDate);
    const [telephone, setTelephone] = useState("");
    const [workPhone, setWorkPhone] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [areYouWorker, setAreYouWorker] = useState("");
    const [healthCondition, setHealthCondition] = useState("");
    const [comments, setComments] = useState("");

    const [showPregnantField, setShowPregnantField] = useState(false)

    useEffect(() => {
        fetchData();

        if (sex.toLowerCase() == "male") {
            setShowPregnantField(false);
        } else { setShowPregnantField(true) }

    }, [sex])

    async function fetchData() {
        try {
            const response = await axios.get(findOneMemberUrl + memberid)
            // const response = await axios.get(findOneMemberUrl + "63ff81c10cea542e631b61f1")
            if (response.data) {

                console.log(`Response from backend:- ${response.data.message}`)
                setMember(response.data.memberExist);

                setRelationship(response.data.memberExist.clientOtherHousehold_relationshipWithClient);
                setFName(response.data.memberExist.clientOtherHousehold_firstname);
                setMName(response.data.memberExist.clientOtherHousehold_middlename);
                setSName(response.data.memberExist.clientOtherHousehold_surname);
                setNINO(response.data.memberExist.clientOtherHousehold_NINO);
                setdateofbirth(response.data.memberExist.clientOtherHousehold_dateofbirth.slice(0, 10));
                setSex(response.data.memberExist.clientOtherHousehold_sex);
                setCurrentlyLiveWithYou(response.data.memberExist.clientOtherHousehold_live_with_you);
                tempMovedDate = (response.data.memberExist.clientOtherHousehold_moved_to_current_address.slice(0, 10));
                console.log(tempMovedDate)
                setMovedInDate(tempMovedDate.split('-')[2])
                setMovedInMonth(tempMovedDate.split('-')[1])
                setMovedInYear(tempMovedDate.split('-')[0])
                setCurrentAddress(response.data.memberExist.clientOtherHousehold_current_address);
                setIsShePregnant(response.data.memberExist.clientOtherHousehold_is_she_pregnant);
                if(response.data.memberExist.clientOtherHousehold_DeliveryDate){
                    tempDelDate = (response.data.memberExist.clientOtherHousehold_DeliveryDate.slice(0, 10));
                }
                console.log(tempDelDate)
                setDelDate(tempDelDate.split('-')[2])
                setDelMonth(tempDelDate.split('-')[1])
                setDelYear(tempDelDate.split('-')[0])
                setNameofSpouse(response.data.memberExist.clientOtherHousehold_Nameof_spouse);
                setTelephone(response.data.memberExist.clientOtherHousehold_telephone_home);
                setWorkPhone(response.data.memberExist.clientOtherHousehold_telephone_work);
                setMobile(response.data.memberExist.clientOtherHousehold_telephone_mobile);
                setEmail(response.data.memberExist.clientOtherHousehold_email);
                setAreYouWorker(response.data.memberExist.clientOtherHousehold_are_you_work);
                setHealthCondition(response.data.memberExist.clientOtherHousehold_illness);
                setComments(response.data.memberExist.clientOtherHousehold_comments);

            } else {

                console.log(`Response from backend:- ${response.data.message}`)

            }
            // console.log(`UseEffect :- ${primaryClientIdUrl + primaryApplicantClientId}`)

            // const token = TokenVerify()

            // console.log(`adminPage useEffect token result is ${token}`)

            // const response = await axios.get(loggedInUrl, {
            //     headers: {
            //         Authorization: "Bearer " + token
            //     }
            // })

            // console.log(response.data.validUser)      

        } catch (error) {
            console.log(error)
        }
    }

    const gotoAccountPage = (e) => {
        navigate('/account');
    }

    const saveJointMember = (e) => {
        e.preventDefault();

        const moved = movedInMonth + '/' + movedInDate + '/' + movedInYear;
        setMovedDate(moved);
        const delvy = delMonth + '/' + delDate + '/' + delYear;
        setDeliveryDate(delvy);

        const deliveryErr = validDate(delvy);
        const moveDateErr = validDate(moved);
        const emailErr = validEmail(email);
        const telephoneErr = validNumber(telephone);
        const workphoneErr = validNumber(workPhone);
        const mobileErr = validNumber(mobile);

        console.log(`Validation result is  email ${emailErr}, 
        home telephone ${telephoneErr}, work telephone ${workphoneErr}, 
        mobile ${mobileErr}, delivery ${deliveryErr}, moveDate ${moveDateErr}`)

        if ((!deliveryErr) || (!moveDateErr) || (!emailErr) || (!telephoneErr) || (!workphoneErr) || (!mobileErr)) {

            !deliveryErr && alert('Delivery date error');
            !moveDateErr && alert('Moved In date error');
            !emailErr && alert('Email error');
            !telephoneErr && alert('Home telephone number error');
            !workphoneErr && alert('Work telephone number error');
            !mobileErr && alert('Mobile number error');

        } else {
            console.log('FINAL Result passed', healthCondition, currentlyLiveWithYou, currentAddress,
                movedDate, areYouWorker, isShePregnant, deliveryDate, nameofSpouse, telephone,
                mobile, workPhone, email, comments);
        }
    }

    return (
        <React.Fragment>

            <MDBCard className='w-100 mx-auto' style={{ backgroundColor: '#f7f2f287' }} >

                <MDBCardBody className='p-1' >
                    <MDBRow alignment='center'>
                        <MDBTypography className='card-header mb-4' style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} >
                            <strong>Edit Member Details</strong>
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
                                <MDBTypography style={labelStyle}>Relation:  <strong style={memberStyle}>{relationship.toUpperCase()}</strong></MDBTypography>
                            </MDBCol>
                        </MDBRow>
                    </MDBRow>

                    <hr style={{ height: '4px' }}></hr>

                    <MDBTypography className='card-header mb-2'
                        style={headerStyle} >
                        <strong>Does this member have any physical or mental health conditions or illnesses lasting or expected to last for 12 months or more?</strong>
                    </MDBTypography>
                    <div className='px-4 mb-2' >
                        <select style={{ overflow: 'scroll', width: '150px' }} className="form-select rounded"
                            onChange={(e) => { let newEdit = { ...healthCondition }; newEdit = e.target.value; setHealthCondition(newEdit) }} >
                            <option defaultValue>Please Select</option>
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                            <option value="prefer not to say">Prefer not to say</option>
                        </select>
                    </div>

                    <MDBTypography className='card-header mb-2'
                        style={headerStyle} >
                        <strong>Does this member currently live with you?</strong>
                    </MDBTypography>
                    <div className='px-4 mb-2' >
                        <MDBRow>
                            <MDBCol className='col-3'>
                                <MDBRadio name='currentlyLiveWithYouRadio' label='Yes' value='yes'
                                    inline id='currentlyLiveWithYouYes' htmlFor="currentlyLiveWithYouYes"
                                    onClick={(e) => {
                                        let newEdit1 = { ...currentlyLiveWithYou }; newEdit1 = e.target.value; setCurrentlyLiveWithYou(newEdit1);
                                        let newEdit2 = { ...currentAddress }; newEdit2 = "Living with primary applicant"; setCurrentAddress(newEdit2)
                                    }}></MDBRadio>
                            </MDBCol>

                            <MDBCol className='col-3'>
                                <MDBRadio name='currentlyLiveWithYouRadio' label='No' value='no'
                                    inline id='currentlyLiveWithYouNo' htmlFor='currentlyLiveWithYouNo'
                                    onClick={(e) => {
                                        let newEdit = { ...currentlyLiveWithYou }; newEdit = e.target.value; setCurrentlyLiveWithYou(newEdit)
                                        let newEdit2 = { ...currentAddress }; newEdit2 = "Living in different address"; setCurrentAddress(newEdit2)
                                    }}></MDBRadio>
                            </MDBCol>
                        </MDBRow>
                    </div>

                    <MDBTypography className='card-header mb-2'
                        style={headerStyle} >
                        <strong>Current address</strong>
                    </MDBTypography>
                    <div className='px-4 mb-2' >
                        <MDBRow>
                            <MDBCol className='col-8'>
                                <div  >
                                    <input style={inputStyle} className='form-control' type='text' placeholder='Spouse name...'
                                        maxLength={20} value={currentAddress} readOnly
                                        onChange={(e) => { let newEdit = { ...currentAddress }; newEdit = e.target.value; setCurrentAddress(newEdit) }}></input>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </div>

                    <MDBTypography className='card-header mb-2'
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

                    <MDBTypography className='card-header mb-2'
                        style={headerStyle} >
                        <strong>Does this member work?</strong>
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
                                    inline id='areYouWorkNo' htmlFor='areYouWorkNo'
                                    onClick={(e) => { let newEdit = { ...areYouWorker }; newEdit = e.target.value; setAreYouWorker(newEdit) }}></MDBRadio>
                            </MDBCol>
                        </MDBRow>
                    </div>

                    <MDBTypography className='card-header mb-2'
                        style={headerStyle} >
                        <strong>Spouse Name</strong>
                    </MDBTypography>
                    <div className='px-4 mb-2' >
                        <MDBRow>
                            <MDBCol className='col-6'>
                                <div  >
                                    <input style={inputStyle} className='form-control' type='text' placeholder='Spouse name...'
                                        maxLength={20} value={nameofSpouse}
                                        onChange={(e) => { let newEdit = { ...nameofSpouse }; newEdit = e.target.value; setNameofSpouse(newEdit) }}></input>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </div>

                    <MDBTypography className='card-header mb-2'
                        style={headerStyle} >
                        <strong>Home telephone</strong>
                    </MDBTypography>
                    <div className='px-4 mb-2' >
                        <MDBRow>
                            <MDBCol className='col-6'>
                                <div  >
                                    <input style={inputStyle} className='form-control' type='text' placeholder='Home telephone...'
                                        maxLength={20} value={telephone}
                                        onChange={(e) => { let newEdit = { ...telephone }; newEdit = e.target.value; setTelephone(newEdit) }}></input>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </div>

                    <MDBTypography className='card-header mb-2'
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

                    <MDBTypography className='card-header mb-2'
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

                    <MDBTypography className='card-header mb-2'
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

                    {showPregnantField &&
                        <>
                            <MDBTypography className='card-header mb-2'
                                style={headerStyle} >
                                <strong>Is she pregnant?</strong>
                            </MDBTypography>
                            <div className='px-4 mb-2' >
                                <MDBRow>
                                    <MDBCol className='col-3'>
                                        <MDBRadio name='isShePregnantRadio' label='Yes' value='yes'
                                            inline id='isShePregnantYes' htmlFor="isShePregnantYes"
                                            onClick={(e) => { let newEdit = { ...isShePregnant }; newEdit = e.target.value; setIsShePregnant(newEdit) }}></MDBRadio>
                                    </MDBCol>

                                    <MDBCol className='col-3'>
                                        <MDBRadio name='isShePregnantRadio' label='No' value='no'
                                            inline id='isShePregnantNo' htmlFor='isShePregnantNo'
                                            onClick={(e) => { let newEdit = { ...isShePregnant }; newEdit = e.target.value; setIsShePregnant(newEdit) }}></MDBRadio>
                                    </MDBCol>
                                </MDBRow>
                            </div>

                            <MDBTypography className='card-header mb-2'
                                style={headerStyle} >
                                <strong>Delivery date</strong>
                            </MDBTypography>
                            <div className='px-4 mb-2' >
                                <div className='btn-group' >
                                    <select style={datePickerStyle}
                                        className="form-select rounded"
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
                                        min={yearMin + 70}
                                        max={yearMax}
                                        placeholder='year'
                                        value={delYear}
                                        onChange={(e) => { let newEdit = { ...delYear }; newEdit = e.target.value; setDelYear(newEdit) }} >
                                    </input>
                                </div>
                            </div>
                        </>
                    }

                    <MDBTypography className='card-header mb-2'
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

                    {/**********  Confirmat and save */}
                    <form className='d-flex w-auto mt-3 p-4'>
                        <MDBBtn style={btnSytle}
                            onClick={saveJointMember} >
                            Save
                        </MDBBtn>
                        <MDBBtn style={btnSytle}
                            color='secondary' onClick={gotoAccountPage}>
                            Cancel
                        </MDBBtn>
                    </form>
                </MDBCardBody>
            </MDBCard>

        </React.Fragment >

    );
}