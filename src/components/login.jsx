import React from 'react';
import {
    MDBIcon,
    MDBCard, MDBCardBody,
    MDBContainer, MDBRow, MDBCol,
    MDBTypography,
    MDBInputGroup, MDBBtn
} from 'mdb-react-ui-kit';

export default function Login() {
    return (
        <MDBContainer  >

            <MDBRow className='mt-5 mb-5'>
                <MDBCol className='mx-5' size='md'>
                    <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='w-100 mx-auto' >
                        <MDBCardBody>
                            <MDBTypography tag='h3'>Login</MDBTypography>

                            <MDBTypography tag='h7'><strong>Your login reference*</strong></MDBTypography>

                            <MDBInputGroup className='mb-3' >
                                <input className='form-control' type='text' placeholder='login reference' />
                            </MDBInputGroup>
                            <a href="#" className="stretched-link">I have forgotten my login reference</a>
                            <form className='d-flex input-group w-auto mt-5'>
                                <MDBBtn style={{ fontSize: '18px', width: 'auto', textTransform: 'none' }} color='primary'>

                                    Continue<MDBIcon fas icon='caret-right' className='mx-2' />

                                </MDBBtn>
                            </form>
                        </MDBCardBody>

                    </MDBCard>
                </MDBCol>
                <MDBCol className='mx-5' size='md'>
                    <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='w-100 mx-auto'>
                        <MDBCardBody>
                            <ul className="list-group list-group-flush" >
                                <li className="list-group-item list-group-item-primary"><strong>Register</strong></li>
                                <li className="list-group-item">Register</li>
                            </ul>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>

            {/* <div className="d-flex p-5 ">
                <div className="p-2 flex-shrink-2 "></div>
                <div className="p-2 w-100">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBTypography tag='h3'>Welcome to Birmingham Choice</MDBTypography>

                            <MDBTypography tag='h7'><strong>Your login reference*</strong></MDBTypography>
                            <MDBInputGroup >
                                <input className='form-control' type='text' placeholder='login reference' />
                            </MDBInputGroup>
                            <a href="#" className="stretched-link">I have forgotten my login reference</a>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard>
                        <MDBCardBody>
                            <div className="p-2 flex-shrink-2">
                                <div className="p-2 w-100">
                                    <MDBTypography tag='h6'><strong>Register</strong></MDBTypography>
                                    <MDBTypography tag='h7'>Register</MDBTypography>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>



                </div>
            </div> */}
        </MDBContainer >
    );
}