import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";

import { ConvertToLocalDate } from '../utility/dateConvertion';
import { decryptDetails } from '../utility/hashDetails';

import { UserContext } from "../userContext/UserContext"

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRipple,
  MDBTypography,
  MDBRow, MDBCol
} from 'mdb-react-ui-kit';

import { ToCamelCase } from '../validations/Validator'
import HouseholdMember from './householdMember';
import HouseholdMemberEdit from './householdMemberEdit';

export default function MembersList() {

  const { clientId, setClientId } = useContext(UserContext);


  const primaryClientIdUrl = "http://localhost:9001/member/clientid/";

  const inputStyle1 = { fontSize: '16px', width: '250px', color: '#464646' };

  const [membersList, setMembersList] = useState([])

  const [selectedMember, setSelectedMember] = useState("")

  const inputStyle = { maxHeight: 'auto', fontSize: '16px', minwidth: '250px', color: 'black' };

  const [showMemberToEdit, setShowMemberToEdit] = useState(false)
  const [showMemberToList, setShowMemberToList] = useState(false)
  const [showMemberToAdd, setShowMemberToAdd] = useState(false);

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
        setShowMemberToAdd(false);
        setShowMemberToEdit(false);
        setShowMemberToList(true)
      } else {

        setShowMemberToAdd(true);
        setShowMemberToEdit(false);
        setShowMemberToList(false)

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
    setShowMemberToAdd(false);
    setShowMemberToList(false)
    setSelectedMember(selectedMember1);
  }

  return (
    <>
      {
        showMemberToAdd && <HouseholdMember></HouseholdMember>
      }

      {
        showMemberToEdit && <HouseholdMemberEdit value={selectedMember}></HouseholdMemberEdit>
      }

      {
        showMemberToList &&

        <React.Fragment>
          <MDBContainer className='' >
            {membersList.map((memberList) => {
              return (
                <MDBCard className='m-2'
                  key={memberList._id} item='true'
                  style={{ backgroundColor: '#e0e0e0' }} >
                  {<MDBRipple rippleColor='dark' rippleTag='div' className='hover-overlay'>
                    <MDBCardBody >
                      <MDBRow alignment='center'>
                        <MDBCol className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                          <MDBTypography className='text-decoration-underline'
                            style={{ cursor: 'pointer', fontSize: '16px', color: '#1a82db' }} >
                            <strong onClick={(e) => openMember(e.target)}>{(memberList._id)}</strong>
                          </MDBTypography>
                          <MDBTypography style={inputStyle1}>Name: <strong>{(memberList.clientOtherHousehold_firstname)} {(memberList.clientOtherHousehold_surname)}</strong></MDBTypography>
                          <MDBTypography style={inputStyle1}>Date of birth: <strong>{ConvertToLocalDate(memberList.clientOtherHousehold_dateofbirth)}</strong></MDBTypography>
                          <MDBTypography style={inputStyle1}>Relationship:  <strong>{(memberList.clientOtherHousehold_relationshipWithClient)}</strong></MDBTypography>
                        </MDBCol>
                        <MDBCol className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                          <MDBTypography className='text-uppercase' style={inputStyle}> NINO:  <strong >{memberList.clientOtherHousehold_NINO} </strong> </MDBTypography>
                          <MDBTypography style={inputStyle1}>Illness:  <strong>{ToCamelCase(memberList.clientOtherHousehold_illness)}</strong></MDBTypography>
                          <MDBTypography style={inputStyle1}>Moved In:  <strong>{ConvertToLocalDate(memberList.clientOtherHousehold_moved_to_current_address)}</strong></MDBTypography>
                          <MDBTypography style={inputStyle1}>Sex:  <strong>{ToCamelCase(memberList.clientOtherHousehold_sex)}</strong></MDBTypography>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBRipple>}
                </MDBCard>
              );
            })}
          </MDBContainer >
        </React.Fragment >
      }
    </>
  );
}