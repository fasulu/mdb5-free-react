import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { ConvertToDate, ConvertToTimeStamp } from '../utility/dateConvertion';

import { useNavigate } from "react-router-dom";
import { UserContext } from "../userContext/UserContext"

import MemberEdit from './memberEdit';

import {
  MDBCard,
  MDBCardBody,
  MDBRipple,
  MDBTypography,
  MDBRow, MDBCol
} from 'mdb-react-ui-kit';

import { ToCamelCase } from '../validations/Validator'
import { render } from 'react-dom';

export default function MembersList() {

  const { clientId, setClientId } = useContext(UserContext);

  const navigate = useNavigate();

  const primaryClientIdUrl = "http://localhost:9001/member/clientid/";

  const inputStyle = { fontSize: '16px', width: '250px', color: '#464646' };

  const [primaryApplicantClientId, setPrimaryApplicantClientId] = useState(clientId)

  const [membersList, setMembersList] = useState([])

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    try {
      const response = await axios.get(primaryClientIdUrl + primaryApplicantClientId)
      // const response = await axios.get(primaryClientIdUrl + "63ff81bc0cea542e631b614a")
      if (response.data) {

        console.log(`Response from backend:- ${response.data.message}`)
        setMembersList(response.data.memberList)

      } else {

        console.log(`Response from backend:- ${response.data.message}`)
        navigate('/member', { });
      } 
    } catch (error) {
      console.log(error)
    }
  }

  const boxStyle = {
    backgroundColor: '#e0e0e0'
  };

  const openMember = (e) => {
    // window.location.reload();
    console.log(typeof e)
    
    const selectedMember1 = e.innerText
    console.log(selectedMember1)
    navigate('/memberedit', { state: { memberID: selectedMember1 } });

  }
  
  return (
    <React.Fragment>
      {membersList.map((memberList) => {
        return (
          <MDBCard className='m-2' style={boxStyle} >
            {<MDBRipple rippleColor='dark' rippleTag='div' className='hover-overlay'>
              <MDBCardBody key={membersList._id} item='true' >
                <MDBRow alignment='center'>
                  <MDBCol className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                    <MDBTypography component={'div'} className='text-uppercase text-decoration-underline' style={{ cursor: 'pointer', fontSize: '16px', color: '#1a82db' }}
                      key={memberList._id}>
                      <strong onClick={(e) => openMember(e.target)}>{(memberList._id)}</strong>
                    {/* <MemberEdit memberID={memberList._id}></MemberEdit> */}
                    </MDBTypography>
                    <MDBTypography component={'div'} style={inputStyle}>Name: <strong>{ToCamelCase(memberList.clientOtherHousehold_firstname)} {ToCamelCase(memberList.clientOtherHousehold_surname)}</strong></MDBTypography>
                    <MDBTypography component={'div'} style={inputStyle}>Date of birth: <strong>{memberList.clientOtherHousehold_dateofbirth.slice(0, 10)}</strong></MDBTypography>
                    <MDBTypography component={'div'} style={inputStyle}>Relationship:  <strong>{ToCamelCase(memberList.clientOtherHousehold_relationshipWithClient)}</strong></MDBTypography>
                  </MDBCol>
                  <MDBCol className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                    <MDBTypography component={'div'} className='text-uppercase'  style={inputStyle}> NINO:  <strong >{memberList.clientOtherHousehold_NINO} </strong> </MDBTypography>
                    <MDBTypography component={'div'} style={inputStyle}>Illness:  <strong>{ToCamelCase(memberList.clientOtherHousehold_illness)}</strong></MDBTypography>
                    <MDBTypography component={'div'} style={inputStyle}>Moved In:  <strong>{ConvertToDate(memberList.clientOtherHousehold_moved_to_current_address)}</strong></MDBTypography>
                    <MDBTypography component={'div'} style={inputStyle}>Sex:  <strong>{ToCamelCase(memberList.clientOtherHousehold_sex)}</strong></MDBTypography>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBRipple>}
          </MDBCard>
        );
      })}
      {/* {testData.map((membersList) => {
        return (
          <MDBCard className='m-2' style={boxStyle} >
            {<MDBRipple rippleColor='dark' rippleTag='div' className='hover-overlay'>
              <MDBCardBody key={testData.dataKey} item='true' >
                <MDBRow alignment='center'>
                  <MDBCol className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                    <MDBTypography component={'div'} style={{ cursor: 'pointer', fontSize: '16px', color: '#1a82db', textDecoration: 'blue' }}>
                      Id: <strong onClick={(e) => openMember(e.target)}>{ToCamelCase(membersList.householdMemberID)}</strong>
                    </MDBTypography>
                    <MDBTypography component={'div'} style={inputStyle}>Date of birth: <strong>{membersList.dob.toUpperCase()}</strong></MDBTypography>
                    <MDBTypography component={'div'} style={inputStyle}>Relationship:  <strong>{membersList.relationship.toUpperCase()}</strong></MDBTypography>
                    </MDBCol>
                    <MDBCol className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                    <MDBTypography component={'div'} style={inputStyle}> NINO:  <strong >{membersList.nino.toUpperCase()} </strong> </MDBTypography>
                    <MDBTypography component={'div'} style={inputStyle}>Illness:  <strong>{membersList.illness.toUpperCase()}</strong></MDBTypography>
                    <MDBTypography component={'div'} style={inputStyle}>Moved In:  <strong>{membersList.movedin.toUpperCase()}</strong></MDBTypography>
                    </MDBCol>
                    </MDBRow>
                    </MDBCardBody>
                    </MDBRipple>}
                    </MDBCard>
                    );
                  })} */}
    </React.Fragment >

  );
}