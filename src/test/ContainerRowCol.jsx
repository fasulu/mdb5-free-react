import React from 'react';
import {
  MDBContainer,
  MDBRow, 
  MDBCol 
} from 'mdb-react-ui-kit';

export default function ContainerRowCol() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size='md'>
          One of three columns
        </MDBCol>
        <MDBCol size='md'>
          One of three columns
        </MDBCol>
        <MDBCol size='md'>
          One of three columns
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}