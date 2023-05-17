import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";

import { dates, months } from '../resources/datePicker';
import { validEmail, validNumber, validDate } from '../validations/Validator';
import { ConvertToLocalDate, ConvertToDate, ConvertToTimeStamp } from '../utility/dateConvertion';
import { decryptDetails } from '../utility/hashDetails';

import { useNavigate } from "react-router-dom";
import { UserContext } from "../userContext/UserContext"

import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBRipple,
    MDBTypography,
    MDBRow, MDBCol,
} from 'mdb-react-ui-kit';

import { ToCamelCase } from '../validations/Validator'
import { refreshPage } from '../utility/refreshPage';

export default function HouseholdMembersList(props) {

    const { clientId, setClientId } = useContext(UserContext);

    console.log(`props from account ${props.value}`);

    const primaryClientIdUrl = "http://localhost:9001/member/clientid/";
    const findOneMemberUrl = "http://localhost:9001/member/member/";
    const memberUpdateUrl = "http://localhost:9001/member/update/"


    const inputStyle1 = { fontSize: '16px', width: '250px', color: '#464646' };
    const styleBtn = { fontSize: '16px', color: '#4f83c3', textTransform: 'none' };

    const [primaryApplicantClientId, setPrimaryApplicantClientId] = useState(clientId)

    const [membersList, setMembersList] = useState([])

    const [selectedMember, setSelectedMember] = useState("")
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
    const [householdMemberID, setHouseholdMemberID] = useState(selectedMember);
    const [relationship, setRelationship] = useState("")
    const [fName, setFName] = useState("");
    const [mName, setMName] = useState("");
    const [sName, setSName] = useState("");
    const [nINO, setNINO] = useState("");
    const [sex, setSex] = useState("");

    // var tempDOB = ""; tempDOB = tempDOB.split('/')[2] + '/' + tempDOB.split('/')[1] + tempDOB.split('/')[0] + '/';
    // const [dateofbirth, setdateofbirth] = useState(tempDOB);
    const [dateofbirth, setdateofbirth] = useState("");

    //   var tempMovedDate = "";
    //   const [movedInDate, setMovedInDate] = useState("");
    //   const [movedInMonth, setMovedInMonth] = useState("");
    //   const [movedInYear, setMovedInYear] = useState("");
    //   const [movedDate, setMovedDate] = useState(tempMovedDate);
    //   const [currentlyLiveWithYou, setCurrentlyLiveWithYou] = useState("yes");

    //   const [currentAddress, setCurrentAddress] = useState("");

    //   const [isShePregnant, setIsShePregnant] = useState("no");
    //   const [nameofSpouse, setNameofSpouse] = useState("");
    // var tempDelDate = "";
    // const [delDate, setDelDate] = useState();
    // const [delMonth, setDelMonth] = useState();
    // const [delYear, setDelYear] = useState();
    // const [deliveryDate, setDeliveryDate, getDeliveryDate] = useState(tempDelDate);

    //   const [telephone, setTelephone] = useState("");
    //   const [workPhone, setWorkPhone] = useState("");
    //   const [mobile, setMobile] = useState("");
    //   const [email, setEmail] = useState("");

    //   const [areYouWorker, setAreYouWorker] = useState("yes");
    //   const [healthCondition, setHealthCondition] = useState("no");
    //   const [comments, setComments] = useState("none");

    //   const [showPregnantOption, setShowPregnantOption] = useState(false)

    //   const [showMemberToEdit, setShowMemberToEdit] = useState(false)
    //   const [showMemberToList, setShowMemberToList] = useState(false)
    //   const [showMemberToAdd, setShowMemberToAdd] = useState(false);

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            const idRef = decryptDetails();     // get id and reference from local storage using dcrypDetails() module.
            console.log(idRef)
            setClientId(idRef.decryptedID);     // get id and reference from local storage using dcrypDetails() module.
            console.log(clientId);

              const response = await axios.get(primaryClientIdUrl + idRef.decryptedID)
            // const response = await axios.get(primaryClientIdUrl + "63ff81bc0cea542e631b614a")
            if (response.data.memberList.length > 0) {

                console.log(`Response from backend:- ${response.data.message}`)
                setMembersList(response.data.memberList)
                console.log(`list of members ${response.data}`)
                // setShowMemberToList(true)
            } else {

                setShowMemberToAdd(true);
                // setShowMemberToEdit(false);
                // setShowMemberToList(false)

            }
        } catch (error) {
            console.log(error)
        }
    }

    const openMember = (e) => {
        console.log(typeof e)
        const selectedMember1 = e.innerText
        console.log(selectedMember1)
        setShowMemberToEdit(true);
        setSelectedMember(selectedMember1);
    }

    const householdMemberList = membersList.map(memberList =>

        <MDBCard className='m-2'
            key={memberList._id} item='true'
            style={{ backgroundColor: '#e0e0e0' }} >
            <MDBRipple rippleColor='dark' rippleTag='div' className='hover-overlay'>
                <MDBCardBody >
                    <MDBRow alignment='center'>
                        <MDBCol className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                            <MDBTypography component={'div'} className='text-decoration-underline'
                                style={{ cursor: 'pointer', fontSize: '16px', color: '#1a82db' }} >
                                <strong onClick={(e) => openMember(e.target)}>{(memberList._id)}</strong>
                            </MDBTypography>
                            <MDBTypography component={'div'} style={inputStyle1}>Name: <strong>{(memberList.clientOtherHousehold_firstname)} {(memberList.clientOtherHousehold_surname)}</strong></MDBTypography>
                            <MDBTypography component={'div'} style={inputStyle1}>Date of birth: <strong>{ConvertToLocalDate(memberList.clientOtherHousehold_dateofbirth)}</strong></MDBTypography>
                            <MDBTypography component={'div'} style={inputStyle1}>Relationship:  <strong>{(memberList.clientOtherHousehold_relationshipWithClient)}</strong></MDBTypography>
                        </MDBCol>
                        <MDBCol className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                            <MDBTypography component={'div'} className='text-uppercase' style={inputStyle}> NINO:  <strong >{memberList.clientOtherHousehold_NINO} </strong> </MDBTypography>
                            <MDBTypography component={'div'} style={inputStyle1}>Illness:  <strong>{ToCamelCase(memberList.clientOtherHousehold_illness)}</strong></MDBTypography>
                            <MDBTypography component={'div'} style={inputStyle1}>Moved In:  <strong>{ConvertToLocalDate(memberList.clientOtherHousehold_moved_to_current_address)}</strong></MDBTypography>
                            <MDBTypography component={'div'} style={inputStyle1}>Sex:  <strong>{ToCamelCase(memberList.clientOtherHousehold_sex)}</strong></MDBTypography>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBRipple>
        </MDBCard>
    )
    return (

        householdMemberList
    )
    
}