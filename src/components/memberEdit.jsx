import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

import { dates, months } from '../resources/datePicker';
import { validEmail, validNumber, validDate } from '../validations/Validator';
import { ConvertToDate, ConvertToTimeStamp } from '../utility/dateConvertion';

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
    const memberUpdateUrl = "http://localhost:9001/member/update/"

    let memberid = location.state.memberID
    // console.log(memberid);

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

    const [primaryApplicantID, setPrimaryApplicantID] = useState("");
    const [householdMemberID, setHouseholdMemberID] = useState(memberid);
    const [relationship, setRelationship] = useState("")
    const [fName, setFName] = useState("");
    const [mName, setMName] = useState("");
    const [sName, setSName] = useState("");
    const [nINO, setNINO] = useState("");
    const [sex, setSex] = useState("");

    var tempDOB = ""; tempDOB = tempDOB.split('/')[2] + '/' + tempDOB.split('/')[1] + tempDOB.split('/')[0] + '/';
    const [dateofbirth, setdateofbirth] = useState(tempDOB);

    var tempMovedDate = "";
    const [movedInDate, setMovedInDate] = useState();
    const [movedInMonth, setMovedInMonth] = useState();
    const [movedInYear, setMovedInYear] = useState();
    const [movedDate, setMovedDate] = useState(tempMovedDate);
    const [currentlyLiveWithYou, setCurrentlyLiveWithYou] = useState("yes");

    const [currentAddress, setCurrentAddress] = useState("");

    const [isShePregnant, setIsShePregnant] = useState("");
    const [nameofSpouse, setNameofSpouse] = useState("");
    var tempDelDate = "";
    const [delDate, setDelDate] = useState();
    const [delMonth, setDelMonth] = useState();
    const [delYear, setDelYear] = useState();
    const [deliveryDate, setDeliveryDate, getDeliveryDate] = useState(tempDelDate);

    const [telephone, setTelephone] = useState("");
    const [workPhone, setWorkPhone] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");

    const [areYouWorker, setAreYouWorker] = useState("");
    const [healthCondition, setHealthCondition] = useState("");
    const [comments, setComments] = useState("");

    const [showPregnantField, setShowPregnantField] = useState()
    const [showPregnantOption, setShowPregnantOption] = useState()

    useEffect(() => {
        fetchData();

        if (sex.toLowerCase() == "female") {
            setShowPregnantOption(true)
            // window.document.getElementById('PregnantOption').hidden = 'true';
        } else {
            setShowPregnantOption(false)
            // window.document.getElementById('PregnantOption').hidden = 'false';
        }

    }, [sex])

    async function fetchData() {
        try {
            const response = await axios.get(findOneMemberUrl + memberid)
            // const response = await axios.get(findOneMemberUrl + "63ff81c10cea542e631b61f1")
            if (response.data) {

                console.log(`Response from backend:- ${response.data.message}`)
                setMember(response.data.memberExist);

                setRelationship(response.data.memberExist.clientOtherHousehold_relationshipWithClient);
                setHouseholdMemberID(response.data.memberExist._id)
                setFName(response.data.memberExist.clientOtherHousehold_firstname);
                setMName(response.data.memberExist.clientOtherHousehold_middlename);
                setSName(response.data.memberExist.clientOtherHousehold_surname);
                setNINO(response.data.memberExist.clientOtherHousehold_NINO);
                setdateofbirth(response.data.memberExist.clientOtherHousehold_dateofbirth.slice(0, 10));
                setSex(response.data.memberExist.clientOtherHousehold_sex);
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
                tempDelDate = (response.data.memberExist.clientOtherHousehold_DeliveryDate)
                tempDelDate = ConvertToDate(tempDelDate)
                setDelDate(tempDelDate.split('-')[2]); setDelMonth(tempDelDate.split('-')[1]); setDelYear(tempDelDate.split('-')[0]);

                // if (response.data.memberExist.clientOtherHousehold_is_she_pregnant == 'yes') {
                //     window.document.getElementById('IsShePregnantYes').checked = 'true';
                //     tempDelDate = (response.data.memberExist.clientOtherHousehold_DeliveryDate)
                //     tempDelDate = ConvertToDate(tempDelDate)
                //     setDelDate(tempDelDate.split('-')[2]); setDelMonth(tempDelDate.split('-')[1]); setDelYear(tempDelDate.split('-')[0]);
                // } else {
                //     window.document.getElementById('IsShePregnantNo').checked = 'false';
                // }

                setCurrentAddress(response.data.memberExist.clientOtherHousehold_current_address);

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
        } catch (error) {
            console.log(error)
        }
    }

    const gotoAccountPage = (e) => {
        navigate('/account');
    }

    const handleJointMember = (e) => {
        e.preventDefault();

        const moved = movedInYear + '-' + movedInMonth + '-' + movedInDate;
        const delvy = delYear + '-' + delMonth + '-' + delDate;

        const moveDateErr = validDate(moved);
        console.log(moved);
        if (moveDateErr) {
            tempMovedDate = ConvertToTimeStamp(moved)
            let newEdit = { ...movedDate }; newEdit = tempMovedDate; setMovedDate(newEdit) 
            console.log(tempMovedDate)
            console.log(movedDate)

        }
        const deliveryErr = validDate(delvy);
        console.log(delvy);
        if (deliveryErr) {
            tempDelDate = ConvertToTimeStamp(delvy)
            let newEdit = { ...deliveryDate }; newEdit = tempDelDate; setDeliveryDate(newEdit)
            console.log(tempDelDate)
            console.log(deliveryDate)
        }
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

            //  if not pregnant set data to empty string
            if (isShePregnant == "no") {
                tempDelDate="";
            }
            saveMember();
        }
    }

    const saveMember = async () => {

        console.log(`In save household member id is ${householdMemberID}`);

        const memberInfo = {
            clientOtherHousehold_live_with_you: currentlyLiveWithYou,
            clientOtherHousehold_moved_to_current_address: tempMovedDate,
            clientOtherHousehold_is_she_pregnant: isShePregnant,
            clientOtherHousehold_DeliveryDate: tempDelDate,
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

            if (response.status === 200) {
                console.log(`Status from backend ${response.data.message}`);
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <React.Fragment>

            <MDBCard className='w-100 mx-auto' style={{ backgroundColor: '#f7f2f287' }} >

                <MDBCardBody className='p-1' >
                    <MDBRow alignment='center'>
                        <MDBTypography className='card-header mb-4' style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} >
                            <strong>Edit Member Details {householdMemberID}</strong>
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

                    {showPregnantOption &&

                        <div id="" className=' mb-2' >
                            <MDBTypography className='card-header mb-2'
                                style={headerStyle} >
                                <strong>Is she pregnant?</strong>
                            </MDBTypography>
                            <MDBRow className=' px-4' >
                                <MDBCol className='col-3'>
                                    <MDBRadio id='IsShePregnantYes' name='isShePregnantRadio' label='Yes' value='yes'
                                        inline htmlFor="isShePregnantYes"
                                        onClick={(e) => { let newEdit = { ...isShePregnant }; newEdit = e.target.value; setIsShePregnant(newEdit); setShowPregnantField(true) }}></MDBRadio>
                                </MDBCol>

                                <MDBCol className='col-3'>
                                    <MDBRadio id='IsShePregnantNo' name='isShePregnantRadio' label='No' value='no'
                                        inline htmlFor='isShePregnantNo' defaultChecked
                                        onClick={(e) => { let newEdit = { ...isShePregnant }; newEdit = e.target.value; setIsShePregnant(newEdit); setShowPregnantField(false) }}></MDBRadio>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    }

                    {showPregnantField &&
                        <div id='PregnantDate' className='px-4 mb-2' >
                            <MDBTypography className='card-header mb-2'
                                style={headerStyle} >
                                <strong>Delivery date</strong>
                            </MDBTypography>
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
                                    border={5}
                                    min={new Date().getFullYear()}
                                    max={new Date().getFullYear() + 1}
                                    placeholder='year'
                                    value={delYear}
                                    onChange={(e) => { let newEdit = { ...delYear }; newEdit = e.target.value; setDelYear(newEdit) }} >
                                </input>
                            </div>
                        </div>
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

        </React.Fragment >

    );
}