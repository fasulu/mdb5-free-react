import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter style={{ backgroundColor: '#333', fontSize: '14px', lineHeight: '19px' }} >
      <MDBContainer className='text-center text-lg-left text-white p-1'>
        <MDBRow className=''>
          <MDBCol size='1'>
            Privacy Policy
          </MDBCol>
          <MDBCol size='2'>
            Cookie Policy
          </MDBCol>
          <MDBCol size='2'>
            Site Map
          </MDBCol>
          <MDBCol size='2'>
            Accessebility Policy
          </MDBCol>
          <MDBCol size='2'>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div style={{ backgroundColor: 'white' }} >
        <a style={{ fontSize: '17px', justifyContent: 'left', marginLeft:'50px' }} className=''>
          © Copyright Civica UK Limited 2023
        </a>
      </div>
    </MDBFooter>
  );
}