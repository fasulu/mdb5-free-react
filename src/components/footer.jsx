import React from 'react';
import {
  MDBContainer,
  MDBFooter,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function Footer() {

  const footerStyle = { backgroundColor: '#21313c', fontSize: '14px' };
  return (
    <MDBFooter style={footerStyle} >
      <MDBContainer className='text-center text-lg-left text-white p-1'>
        <MDBRow>
          <MDBCol>
            <p>Education purpose only</p>
          </MDBCol>
          <MDBCol>
            <p>© Copyright Fasulu Rahman, UK - 2023</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}