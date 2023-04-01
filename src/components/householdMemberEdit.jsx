import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import { UserContext } from "../userContext/UserContext"

import { dates, months } from '../resources/datePicker';
import { validEmail, validName, validPostcode, validNumber, emailMatch, pwdMatch, memDateMatch, validNINO, validDate } from '../validations/Validator.jsx';
import { ConvertToLocalDate, ConvertToDate, ConvertToTimeStamp } from '../utility/dateConvertion';
import { decryptDetails } from '../utility/hashDetails';
import { refreshPage } from '../utility/refreshPage';

import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBTypography,
    MDBRow, MDBCol,
    MDBRadio,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function HouseholdMemberEdit(props) {

    const { clientId, setClientId } = useContext(UserContext);

    console.log(props.value)
    let memberId = props.value;

    const findOneMemberUrl = "http://localhost:9001/member/member/";
    const memberUpdateUrl = "http://localhost:9001/member/update/"

    const [selectedMember, setSelectedMember] = useState(memberId)
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

    const [householdMemberID, setHouseholdMemberID] = useState("641ad959b0fcb85f0216e3e8");
    console.log(`props from selected member is ${householdMemberID}`)
    const [relationship, setRelationship] = useState("")
    const [fName, setFName] = useState("");
    const [mName, setMName] = useState("");
    const [sName, setSName] = useState("");
    const [nINO, setNINO] = useState("");
    const [sex, setSex] = useState("");

    const [dateofbirth, setdateofbirth] = useState("");

    var tempMovedDate = "";
    const [movedInDate, setMovedInDate] = useState("");
    const [movedInMonth, setMovedInMonth] = useState("");
    const [movedInYear, setMovedInYear] = useState("");
    const [movedDate, setMovedDate] = useState(tempMovedDate);
    const [currentlyLiveWithYou, setCurrentlyLiveWithYou] = useState("yes");

    const [currentAddress, setCurrentAddress] = useState("");

    const [isShePregnant, setIsShePregnant] = useState("no");
    const [nameofSpouse, setNameofSpouse] = useState("");

    const [telephone, setTelephone] = useState("");
    const [workPhone, setWorkPhone] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");

    const [areYouWorker, setAreYouWorker] = useState("yes");
    const [healthCondition, setHealthCondition] = useState("no");
    const [comments, setComments] = useState("none");

    const [showPregnantOption, setShowPregnantOption] = useState(false)

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            const response = await axios.get(findOneMemberUrl + householdMemberID)
            // const response = await axios.get(findOneMemberUrl + "63ff81c10cea542e631b61f1")
            if (response.data) {

                setRelationship(response.data.memberExist.clientOtherHousehold_relationshipWithClient);
                //   setHouseholdMemberID(response.data.memberExist._id)
                console.log(response.data.memberExist._id)
                setFName(response.data.memberExist.clientOtherHousehold_firstname);
                setMName(response.data.memberExist.clientOtherHousehold_middlename);
                setSName(response.data.memberExist.clientOtherHousehold_surname);
                setNINO(response.data.memberExist.clientOtherHousehold_NINO);

                let birth_ = ConvertToLocalDate(response.data.memberExist.clientOtherHousehold_dateofbirth)
                console.log(birth_)
                setdateofbirth(birth_)

                setSex(response.data.memberExist.clientOtherHousehold_sex);
                if (sex === 'female') {
                    setShowPregnantOption(true);
                } else {
                    setShowPregnantOption(false);
                }

                setCurrentlyLiveWithYou(response.data.memberExist.clientOtherHousehold_live_with_you);
                if (response.data.memberExist.clientOtherHousehold_live_with_you == 'yes') {
                    window.document.getElementById('CurrentlyLiveWithYouYes').checked = 'true';
                } else {
                    window.document.getElementById('CurrentlyLiveWithYouNo').checked = 'false';
                }

                tempMovedDate = (response.data.memberExist.clientOtherHousehold_moved_to_current_address);
                console.log(tempMovedDate)
                tempMovedDate = ConvertToDate(tempMovedDate);
                setMovedInDate(tempMovedDate.split('-')[2]); setMovedInMonth(tempMovedDate.split('-')[1]); setMovedInYear(tempMovedDate.split('-')[0]);

                setIsShePregnant(response.data.memberExist.clientOtherHousehold_is_she_pregnant);

                setCurrentAddress(response.data.memberExist.clientOtherHousehold_current_address);

                setNameofSpouse(response.data.memberExist.clientOtherHousehold_spouse_another_member_name);
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
        } catch (error) {
            console.log(error)
        }
    }

    const handleJointMember = (e) => {
        e.preventDefault();

        const moved = movedInYear + '-' + movedInMonth + '-' + movedInDate;

        const moveDateValid = validDate(moved);
        console.log(moved);
        if (moveDateValid) {
            tempMovedDate = ConvertToTimeStamp(moved)
            let newEdit = { ...movedDate }; newEdit = tempMovedDate; setMovedDate(newEdit)
            console.log(tempMovedDate)
            console.log(movedDate)
        } else {
            alert("Invalid Moved-In date")
        }

        const emailValid = validEmail(email);
        const telephoneValid = validNumber(telephone);
        const workphoneValid = validNumber(workPhone);
        const mobileValid = validNumber(mobile);

        console.log(`Validation result is  email ${emailValid}, 
    home telephone ${telephoneValid}, work telephone ${workphoneValid}, 
    mobile ${mobileValid},  moveDate ${moveDateValid}`)

        if ((!moveDateValid) || (!emailValid) || (!telephoneValid) || (!workphoneValid) || (!mobileValid)) {

            !moveDateValid && alert('Moved In date error');
            !emailValid && alert('Email error');
            !telephoneValid && alert('Home telephone number error');
            !workphoneValid && alert('Work telephone number error');
            !mobileValid && alert('Mobile number error');

        } else {
            console.log('FINAL Result passed', healthCondition, currentlyLiveWithYou, currentAddress,
                movedDate, areYouWorker, isShePregnant, nameofSpouse, telephone,
                mobile, workPhone, email, comments);

            saveMember();
        }
    }

    const saveMember = async () => {

        console.log(`In save household member id is ${householdMemberID}`);

        const memberInfo = {
            clientOtherHousehold_live_with_you: currentlyLiveWithYou,
            clientOtherHousehold_moved_to_current_address: tempMovedDate,
            clientOtherHousehold_is_she_pregnant: isShePregnant,
            clientOtherHousehold_current_address: currentAddress,
            clientOtherHousehold_Nameof_spouse: nameofSpouse,
            clientOtherHousehold_telephone_home: telephone,
            clientOtherHousehold_telephone_work: workPhone,
            clientOtherHousehold_telephone_mobile: mobile,
            clientOtherHousehold_email: email,
            clientOtherHousehold_are_you_work: areYouWorker,
            clientOtherHousehold_illness: healthCondition,
            clientOtherHousehold_comments: comments,
        }
        console.table(memberInfo)
        try {

            console.log(`Saving household member ${householdMemberID} ${memberUpdateUrl}`);

            const response = await axios.put(memberUpdateUrl + householdMemberID, memberInfo, {})
            console.log(`Output from backend ${response.data.MemberId}`)
            refreshPage(response.data.message)

        } catch (error) {
            console.log(error)
        }
    }

    const gotoAccountPage = (e) => {
        refreshPage('Update cancelled')
    }

    return (
        <React.Fragment>
            <MDBContainer className='' >
                <MDBCard className='my-5 w-100 mx-auto' style={{ backgroundColor: '#f7f2f287' }} >

                    <MDBCardBody className='p-1' >
                        <MDBRow alignment='center'>
                            <MDBTypography className='card-header mb-4' style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} >
                                <strong>Edit Member Details {selectedMember}</strong>
                            </MDBTypography>
                            <MDBRow>
                                <MDBCol className='col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                                    <MDBTypography style={labelStyle}>Full Name: <strong style={memberStyle}>{fName + " " + mName + " " + sName}</strong></MDBTypography>

                                </MDBCol>
                                <MDBCol className='col-lg-3 col-md-4 col-sm-6 col-xs-6'>
                                    <MDBTypography style={labelStyle}>NINO:  <strong style={memberStyle}>{nINO}</strong></MDBTypography>

                                </MDBCol>
                                <MDBCol className='col-lg-3 col-md-2 col-sm-6 col-xs-6'>
                                    <MDBTypography style={labelStyle}>DOB: <strong style={memberStyle}>{dateofbirth}</strong></MDBTypography>

                                </MDBCol>
                                <MDBCol className='col-lg-2 col-md-2 col-sm-6 col-xs-6'>
                                    <MDBTypography style={labelStyle}>Relation:  <strong style={memberStyle}>{relationship}</strong></MDBTypography>
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
                                    <MDBRadio id='CurrentlyLiveWithYouYes' name='currentlyLiveWithYouRadio'
                                        inline htmlFor="currentlyLiveWithYouYes" label='Yes' value='yes'
                                        onClick={(e) => {
                                            let newEdit1 = { ...currentlyLiveWithYou }; newEdit1 = e.target.value; setCurrentlyLiveWithYou(newEdit1);
                                            let newEdit2 = { ...currentAddress }; newEdit2 = "Living with primary applicant"; setCurrentAddress(newEdit2)
                                        }}></MDBRadio>
                                </MDBCol>

                                <MDBCol className='col-3'>
                                    <MDBRadio id='CurrentlyLiveWithYouNo' name='currentlyLiveWithYouRadio'
                                        inline htmlFor='currentlyLiveWithYouNo' label='No' value='no'
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
                                        <input className='form-control' type='text' placeholder='Spouse name...'
                                            maxLength={20} value={currentAddress} disabled
                                            onChange={(e) => { let newEdit = { ...currentAddress }; newEdit = e.target.value; setCurrentAddress(newEdit) }} ></input>
                                        {/* <MDBTypography style={inputStyle}>{currentAddress}</MDBTypography> */}
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
                                        inline id='areYouWorkYes' htmlFor="areYouWorkYes" defaultChecked
                                        onClick={(e) => { let newEdit = { ...areYouWorker }; newEdit = e.target.value; setAreYouWorker(newEdit) }}></MDBRadio>
                                </MDBCol>

                                <MDBCol className='col-3'>
                                    <MDBRadio name='areYouWorkRadio' label='No' value='no'
                                        inline id='areYouWorkNo' htmlFor='areYouWorkNo'
                                        onClick={(e) => { let newEdit = { ...areYouWorker }; newEdit = e.target.value; setAreYouWorker(newEdit) }}></MDBRadio>
                                </MDBCol>
                            </MDBRow>
                        </div>

                        {showPregnantOption &&
                            <>
                                <MDBTypography className='card-header mt-4 mb-2'
                                    style={headerStyle} >
                                    <strong>Is she pregnant?</strong>
                                </MDBTypography>
                                <div className='px-4 mb-2' >
                                    <MDBRow>
                                        <MDBCol className='col-3'>
                                            <MDBRadio id='IsShePregnantYes' name='isShePregnantRadio'
                                                inline htmlFor="isShePregnantYes" label='Yes' value='yes'
                                                onClick={(e) => { let newEdit = { ...isShePregnant }; newEdit = e.target.value; setIsShePregnant(newEdit); }}></MDBRadio>
                                        </MDBCol>

                                        <MDBCol className='col-3'>
                                            <MDBRadio id='IsShePregnantNo' name='isShePregnantRadio'
                                                inline htmlFor='isShePregnantNo' label='No' value='no'
                                                onClick={(e) => { let newEdit = { ...isShePregnant }; newEdit = e.target.value; setIsShePregnant(newEdit); }}></MDBRadio>
                                        </MDBCol>
                                    </MDBRow>
                                </div>
                            </>
                        }

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
                                onClick={handleJointMember} >
                                Save
                            </MDBBtn>
                            <MDBBtn style={btnSytle}
                                color='secondary' onClick={gotoAccountPage}>
                                Cancel
                            </MDBBtn>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer >
        </React.Fragment >
    );
}