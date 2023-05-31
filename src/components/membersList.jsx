import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";

import { ConvertToLocalDate } from '../utility/dateConvertion';
import { decryptDetails } from '../utility/hashDetails';

import { UserContext } from "../userContext/UserContext"

import {
  MDBCard,
  MDBCardBody,
  MDBRipple,
  MDBTypography,
  MDBRow, MDBCol, MDBFooter
} from 'mdb-react-ui-kit';

import { ToCamelCase } from '../validations/Validator'
import HouseholdMember from './householdMember';
import HouseholdMemberEdit from './householdMemberEdit';
import addIcon from '../../src/resources/images/familyAdd.png'
import SaveErrDetail from '../utility/saveErrDetail.jsx';

export default function MembersList() {

  const { clientId, setClientId } = useContext(UserContext);

  const primaryClientIdUrl = "http://localhost:9001/member/clientid/";

  const inputStyle1 = { fontSize: '16px', width: '250px', color: '#464646' };

  const addIconTitle = "Add member";

  const [membersList, setMembersList] = useState([])

  const [selectedMember, setSelectedMember] = useState("")

  const inputStyle = { maxHeight: 'auto', fontSize: '16px', minwidth: '250px', color: 'black' };

  const nINOInfo = "To add/rectify please call housing department or delete and add as new member";

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
      let result = error.message;
      const errDetails = {
        error_Location: 'MemLst101',
        error_Detail: result + "\nOops! Something went wrong, please try again later."
      }
      const response = SaveErrDetail(errDetails)
      console.log(response)

      setModalInfo("MemLst101: Oops! Something went wrong, please try again later.");
      setShowInfoModal(true);
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
    <React.Fragment>
      {
        showMemberToAdd && <HouseholdMember></HouseholdMember>
      }

      {
        showMemberToEdit && <HouseholdMemberEdit value={selectedMember}></HouseholdMemberEdit>
      }

      {
        showMemberToList &&

        <React.Fragment>
          <MDBCard className='w-100 mx-auto ps-4 pt-4' style={{ backgroundColor: '#f7f2f287' }} >
            <MDBCol>
              <MDBTypography component={'div'} className='card-header'
                style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} >
                <strong>Household Member List</strong>
                <span style={{ float: 'right' }}>
                  <MDBRipple
                    className='bg-image hover-overlay bg-image hover-zoom' >
                    <img src={addIcon} style={{ maxWidth: '37px' }} />
                    <a href='#!' className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                      alt={addIconTitle} title={addIconTitle}
                      onClick={(e) => { setShowMemberToAdd(true); setShowMemberToList(false) }}>
                    </a>
                  </MDBRipple>
                </span>
              </MDBTypography>
            </MDBCol>

            {membersList.map((memberList) => {
              return (
                <MDBCard className='m-2'
                  key={memberList._id} item='true'
                  style={{ backgroundColor: '#f9f7f7' }} >
                  {<MDBRipple className='hover-overlay'>
                    <MDBCardBody >
                      <MDBRow alignment='center'>
                        <MDBCol className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                          <MDBTypography component={'div'} className='text-decoration-underline'
                            style={{ cursor: 'pointer', fontSize: '16px', color: '#1a82db' }} >
                            <strong onClick={(e) => openMember(e.target)}>{(memberList._id)}</strong>
                          </MDBTypography>
                          <MDBTypography component={'div'} style={inputStyle1}>Name: <strong>{ToCamelCase(memberList.clientOtherHousehold_firstname)} {ToCamelCase(memberList.clientOtherHousehold_surname)}</strong></MDBTypography>
                          <MDBTypography component={'div'} style={inputStyle1}>Date of birth: <strong>{ConvertToLocalDate(memberList.clientOtherHousehold_dateofbirth)}</strong></MDBTypography>
                          <MDBTypography component={'div'} style={inputStyle1}>Relationship:  <strong>{(memberList.clientOtherHousehold_relationshipWithClient)}</strong></MDBTypography>
                        </MDBCol>
                        <MDBCol className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                          <MDBTypography component={'div'} className='text-uppercase' style={inputStyle} title={nINOInfo}>
                            NINO<span style={{ cursor: 'progress', color: 'red', fontSize: '15px', fontWeight: 'bold' }}>
                              * </span>:
                            <strong >
                              {memberList.clientOtherHousehold_NINO ? memberList.clientOtherHousehold_NINO.toUpperCase() : "Unknown"}
                            </strong>
                          </MDBTypography>
                          <MDBTypography component={'div'} style={inputStyle1}>Illness:  <strong>{ToCamelCase(memberList.clientOtherHousehold_illness)}</strong></MDBTypography>
                          <MDBTypography component={'div'} style={inputStyle1}>Moved In:  <strong>{ConvertToLocalDate(memberList.clientOtherHousehold_moved_to_current_address)}</strong></MDBTypography>
                          <MDBTypography component={'div'} style={inputStyle1}>Sex:  <strong>{ToCamelCase(memberList.clientOtherHousehold_sex)}</strong></MDBTypography>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBRipple>}
                </MDBCard>
              );
            })}
            <MDBFooter className='w-100 mx-auto ps-4 pt-2'>
              <span style={{ color: 'red', fontSize: '18px', fontWeight: 'bold' }}> * </span>
              <span style={{ color: '#474747', fontSize: '12px' }}>{nINOInfo}</span>
            </MDBFooter>
          </MDBCard>
        </React.Fragment >
      }
    </React.Fragment >
  );
}