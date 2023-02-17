import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import MemberEdit from './memberEdit';
import {
  MDBCard,
  MDBIcon,
  MDBCardBody,
  MDBRipple,
  MDBTypography,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCardFooter
} from 'mdb-react-ui-kit';

import { testData } from '../resources/testData';

import { ToCamelCase } from '../validations/Validator'

export default function MembersList(props) {

  const navigate = useNavigate();

  const inputStyle = { fontSize: '16px', width: '250px', color: '#464646' };

  const boxStyle = {
    backgroundColor: '#e0e0e0'
  };

  const openMember = (e) => {
    // window.location.reload();
    console.log(typeof e)

    const selectedMember1 = e.innerText
    console.log(selectedMember1)

    navigate('/memberedit', { state: { test: selectedMember1 } });
  }

  return (
    <React.Fragment>
      {testData.map((membersList) => {
        return (
          <MDBCard className='m-2' style={boxStyle} >
            {<MDBRipple rippleColor='dark' rippleTag='div' className='hover-overlay'>
              <MDBCardBody key={membersList.dataKey} item='true' >
                <MDBRow alignment='center'>
                  <MDBCol className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                    <MDBTypography style={{ cursor: 'pointer', fontSize: '16px', color: '#1a82db', textDecoration: 'blue' }}>
                      Id: <strong onClick={(e) => openMember(e.target)}>{ToCamelCase(membersList.householdMemberID)}</strong>
                    </MDBTypography>
                    <MDBTypography style={inputStyle}>Date of birth: <strong>{membersList.dob.toUpperCase()}</strong></MDBTypography>
                    <MDBTypography style={inputStyle}>Relationship:  <strong>{membersList.relationship.toUpperCase()}</strong></MDBTypography>
                  </MDBCol>
                  <MDBCol className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                    <MDBTypography style={inputStyle}> NINO:  <strong >{membersList.nino.toUpperCase()} </strong> </MDBTypography>
                    <MDBTypography style={inputStyle}>Illness:  <strong>{membersList.illness.toUpperCase()}</strong></MDBTypography>
                    <MDBTypography style={inputStyle}>Moved In:  <strong>{membersList.movedin.toUpperCase()}</strong></MDBTypography>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBRipple>}
          </MDBCard>
        );
      })}
    </React.Fragment >

  );
}