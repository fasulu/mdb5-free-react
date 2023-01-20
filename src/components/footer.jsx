import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBTypography
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter style={{ backgroundColor: '#333', fontSize: '12px', lineHeight: '16px' }} >
      <MDBContainer className='text-center text-lg-left text-white p-1'>
        <MDBRow className=''>
          <MDBCol lg-auto md-auto sm-auto size='1'>
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

      <div style={{ backgroundColor: '#fbfbfb' }} className=''>
        {/* &copy; {new Date().getFullYear()} Copyright:{' '} */}
        <a className='text-center text-lg-left text-dark p-1'>
          © Copyright Civica UK Limited 2017
        </a>
      </div>
    </MDBFooter>
  );
}