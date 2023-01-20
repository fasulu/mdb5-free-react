import React from 'react';
import {
    MDBIcon,
    MDBCard, MDBCardBody,
    MDBContainer, MDBRow, MDBCol,
    MDBTypography,
    MDBInputGroup, MDBBtn
} from 'mdb-react-ui-kit';

export default function NINOCheck() {
    return (
        <MDBContainer  >

            <MDBRow className='mt-5 mb-5'>

                <MDBCol className='mx-5' size='md'>
                    <MDBTypography tag='h6'><strong>Register your household</strong></MDBTypography>

                    <MDBTypography tag='h7'>National insurance number check</MDBTypography>
                    <MDBCard className='' >
                        <MDBCardBody>
                            <p className='lh-2' ><strong>National Insurance Check</strong></p>
                            <p className='lh-2' >To begin, please enter the National Insurance number of the primary applicant, and if applicable, the joint applicant.</p>
                            <p className='1h-2' >A National Insurance Number is made up of two letters, six numbers and a final letter, which is always A, B, C, or D. You can find it on any official papers you may have at home. Look on any of the following; an end of year statement of tax and NICs paid (P60), payslip (recent or old), official correspondence, annual tax return, sub-contractor's tax certificate (CIS6) or employer's wage records</p>

                            <MDBTypography tag='h7'><strong>Primary applicant national insurance number *</strong></MDBTypography>
                            <MDBInputGroup className='mb-3' >
                                <input className='form-control' type='text' placeholder='login reference' />
                            </MDBInputGroup>

                            <MDBTypography tag='h7'><strong>Joint applicant national insurance number</strong></MDBTypography>
                            <MDBInputGroup className='mb-3' >
                                <input className='form-control' type='text' placeholder='login reference' />
                            </MDBInputGroup>

                            <form className='d-flex input-group w-auto mt-5'>
                                <MDBBtn style={{ fontSize: '15px' }} color='primary'>

                                    Next Page<MDBIcon fas icon='caret-right' className='mx-2' />

                                </MDBBtn>
                            </form>
                        </MDBCardBody>

                    </MDBCard>
                </MDBCol>
                <MDBCol className='mx-5' size='md'>
                    <MDBCard className='w-100 mx-auto'>
                        <MDBCardBody>
                            <ul className="list-group list-group-flush" >
                                <li className="list-group-item list-group-item-primary"><strong>Application progress</strong></li>
                                <li className="list-group-item">1. National insurance number check</li>
                                <li className="list-group-item">2. Household Registration</li>
                                <li className="list-group-item">3. Joint Applicant and Other Household Members</li>
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