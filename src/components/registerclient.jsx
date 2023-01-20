import React from 'react';


import {
    MDBIcon,
    MDBCard, MDBCardBody,
    MDBContainer, MDBRow, MDBCol,
    MDBTypography,
    MDBInputGroup, MDBBtn,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,
    MDBRadio, MDBCheckbox 
} from 'mdb-react-ui-kit';

export default function Registerclient() {


    return (
        <MDBContainer fluid  >

            <MDBRow className='mt-5 mb-5'>
                <MDBCol className='mx-5' size='md'>
                    <MDBTypography tag='h6'><strong>Register your household</strong></MDBTypography>
                    <MDBTypography tag='h7'>Household Registration</MDBTypography>

                    <MDBCard className=' mx-auto'>
                        <MDBCardBody >
                            <div className='mb-2'>
                                <MDBTypography className='card-header' style={{ backgroundColor: '#dcdcdc' }} tag='h6'><strong>Primary Applicant Details</strong></MDBTypography>
                                <MDBTypography tag='h7'><strong>Title *</strong></MDBTypography>
                                <MDBDropdown className='' >
                                    <MDBDropdownToggle tag='a' className='border border-dark rounded' >
                                        Please Choose
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu color=''>
                                        {/* <MDBDropdownItem link>Please choose</MDBDropdownItem> */}
                                        <MDBDropdownItem link>Dr</MDBDropdownItem>
                                        <MDBDropdownItem link>Miss</MDBDropdownItem>
                                        <MDBDropdownItem link>Mr</MDBDropdownItem>
                                        <MDBDropdownItem link>Mrs</MDBDropdownItem>
                                        <MDBDropdownItem link>Ms</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>

                            <MDBTypography className='mb-4' tag='h7'><strong>Your first name(s) *</strong></MDBTypography>
                            <div className="help-content">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                </span>
                            </div>
                            <MDBInputGroup className='mb-4' >
                                <input className='form-control' type='text' placeholder='First name...' />
                            </MDBInputGroup>

                            <MDBTypography tag='h7'><strong>Your middle name(s) *</strong></MDBTypography>
                            <div className="help-content">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                </span>
                            </div>
                            <MDBInputGroup className='mb-4' >
                                <input className='form-control' type='text' placeholder='Middle name...' />
                            </MDBInputGroup>

                            <MDBTypography tag='h7'><strong>Your surname *</strong></MDBTypography>
                            <div className="help-content">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                </span>
                            </div>
                            <MDBInputGroup className='mb-4' >
                                <input className='form-control' type='text' placeholder='Surname...' />
                            </MDBInputGroup>

                            <MDBTypography style={{ fontSize: '14px' }}><strong>Have you ever used a different name, eg a maiden name or by deed poll? if so, please provide details</strong></MDBTypography>
                            <MDBInputGroup className='mb-4' >
                                <input className='form-control' type='text' placeholder='Have you ever used a different name, eg a maiden name or by deed poll? if so, please provide details' />
                            </MDBInputGroup>

                            <MDBTypography tag='h7'><strong>Your National Insurance Number *</strong></MDBTypography>
                            <MDBInputGroup className='mb-4' >
                                <input className='form-control' type='text' />
                            </MDBInputGroup>

                            <MDBTypography tag='h7'><strong>Your date of birth *</strong></MDBTypography>
                            <div className="help-content">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                </span>
                            </div>
                            <div className="help-content">
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">For example 01 01 2000</span>
                                </span>
                            </div>

                            <div>
                                <MDBInputGroup className='mb-2' >
                                    <input className='form-control' type='text' />
                                    <input className='form-control' type='text' />
                                    <input className='form-control' type='text' />
                                </MDBInputGroup>
                            </div>

                            <div className=''>
                                <MDBTypography tag='h7'><strong>Your sex *</strong></MDBTypography>
                                <MDBDropdown className='' >
                                    <MDBDropdownToggle tag='a' className='border border-dark rounded' >
                                        Please Choose
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu color=''>
                                        {/* <MDBDropdownItem link>Please choose</MDBDropdownItem> */}
                                        <MDBDropdownItem link>Male</MDBDropdownItem>
                                        <MDBDropdownItem link>Female</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className='mt-4'>
                        <MDBCardBody>
                            <MDBTypography className='card-header' style={{ backgroundColor: '#dcdcdc' }} tag='h6'><strong>Lived Abroad</strong></MDBTypography>
                            <MDBTypography tag='h7'><strong>Have you or any member of your household lived abroad in the last 5 years? *</strong></MDBTypography>
                            <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Yes' inline />
                            <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='No' inline />

                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className='mt-4'>
                        <MDBCardBody>
                            <div>
                                <MDBTypography className='card-header' style={{ backgroundColor: '#dcdcdc' }} tag='h6'><strong>Current Address</strong></MDBTypography>
                                <MDBTypography className='mb-4' tag='h7'><strong>1. Address details</strong></MDBTypography>

                            </div>
                            <MDBTypography className='mb-2' style={{ fontSize: '14px' }}><strong>Postcode*</strong></MDBTypography>
                            <div className="help-content">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the postcode using capital letters. For example: B1 1BB. If your address is outside UK please enter XY1 1YX.</span>
                                </span>
                            </div>
                            <MDBInputGroup className='mb-4' >
                                <input className='form-control' type='text' placeholder='postcode...' />
                            </MDBInputGroup>

                            <div className="help-content">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">Enter a postcode and click the find address button to search for an address by postcode or use the enter address button to fill in the address fields manually.</span>
                                </span>
                            </div>
                            <form className='d-flex input-group w-auto mt-1'>
                                <MDBBtn style={{ fontSize: '10px', border: 'solid 1px #bbb' }} color='light'>

                                    Find address

                                </MDBBtn>
                                <MDBBtn style={{ fontSize: '10px', border: 'solid 1px #bbb', marginLeft: '5px' }} color='light'>

                                    Enter an address manually

                                </MDBBtn>
                            </form>

                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Address line 1*</strong></MDBTypography>
                            </div>
                            <div className="help-content">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the house or flat number and street name. For example: 12 High Street</span>
                                </span>
                            </div>
                            <MDBInputGroup className='' >
                                <input className='form-control' type='text' placeholder='house or flat number and street name' />
                            </MDBInputGroup>

                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Address line 2*</strong></MDBTypography>
                            </div>
                            <div className="help-content">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the second line of your address</span>
                                </span>
                            </div>
                            <MDBInputGroup className='' >
                                <input className='form-control' type='text' placeholder='Address line 2' />
                            </MDBInputGroup>

                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Address line 3*</strong></MDBTypography>
                            </div>
                            <div className="help-content">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the third line of your address</span>
                                </span>
                            </div>
                            <MDBInputGroup className='' >
                                <input className='form-control' type='text' placeholder='Address line 3' />
                            </MDBInputGroup>

                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Address line 4*</strong></MDBTypography>
                            </div>
                            <div className="help-content">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the fourth line of your address</span>
                                </span>
                            </div>
                            <MDBInputGroup className='' >
                                <input className='form-control' type='text' placeholder='Address line 4' />
                            </MDBInputGroup>

                            <div className='mt-4'>

                                <MDBTypography tag='h7'><strong>2. When did you move into this address?</strong></MDBTypography>
                                <div className="help-content">
                                    <MDBTypography className='' style={{ fontSize: '14px' }}><strong>Date you moved into this address *</strong></MDBTypography>

                                </div>

                                <div className="help-content">
                                    <span className="help-text">
                                        <span style={{ fontSize: '12px' }} className="configured-help-text">For example 01 01 2000</span>
                                    </span>
                                </div>

                                <div>
                                    <MDBInputGroup className='mb-4' >
                                        <input className='form-control' type='text' />
                                        <input className='form-control' type='text' />
                                        <input className='form-control' type='text' />
                                    </MDBInputGroup>
                                </div>
                                <div>
                                    <div className='mt-4'>
                                        <MDBTypography className='' tag='h7'><strong>Is this a rented property?*</strong></MDBTypography>
                                    </div>

                                    <div >
                                        <div>
                                            <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Yes' inline />
                                            <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='No' inline />
                                        </div>
                                    </div>
                                </div>

                                <div>

                                    <div className='mt-4'>
                                        <MDBTypography className='mb-4' tag='h7'><strong>3. Correspondence Address</strong></MDBTypography>

                                    </div>
                                    <div className='mt-4'>
                                        <MDBTypography tag='h7'><strong>Where would you like any letters related to your application sent:</strong></MDBTypography>
                                    </div>

                                    <div >
                                        <div>
                                            <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='To my current address' inline />
                                        </div>
                                        <div>
                                            <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='To my correspondence addres' inline />
                                        </div>
                                    </div>

                                    <div className='mt-4'>
                                        <MDBTypography tag='h7'><strong>Correspondence description</strong></MDBTypography>
                                        <MDBDropdown className='' >
                                            <MDBDropdownToggle tag='a' className='border border-dark rounded' >
                                                Please Choose
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu color=''>
                                                {/* <MDBDropdownItem link>Please choose</MDBDropdownItem> */}
                                                <MDBDropdownItem link>Home</MDBDropdownItem>
                                                <MDBDropdownItem link>Work</MDBDropdownItem>
                                                <MDBDropdownItem link>Solicitor</MDBDropdownItem>
                                                <MDBDropdownItem link>Parents</MDBDropdownItem>
                                                <MDBDropdownItem link>Other</MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </div>

                                    <div className='mt-4'>
                                        <MDBTypography tag='h7'><strong>Were you placed at this address in Birmingham by another local Authority?*</strong></MDBTypography>
                                    </div>

                                    <div >
                                        <div>
                                            <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Yes' inline />
                                            <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='No' inline />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='mt-4'>
                                            <MDBTypography className='' tag='h7'><strong>If yes, by which local authority?</strong></MDBTypography>
                                        </div>

                                        <MDBInputGroup className='' >
                                            <input className='form-control' type='text' placeholder='Enter the local authority name' />
                                        </MDBInputGroup>
                                    </div>

                                    <div className='mt-4'>
                                        <MDBTypography className='mb-2' style={{ fontSize: '14px' }}><strong>Postcode*</strong></MDBTypography>
                                        <div className="help-content">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the postcode using capital letters. For example: B1 1BB. If your address is outside UK please enter XY1 1YX.</span>
                                            </span>
                                        </div>
                                        <MDBInputGroup className='mb-4' >
                                            <input className='form-control' type='text' placeholder='postcode...' />
                                        </MDBInputGroup>

                                        <div className="help-content">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px' }} className="configured-help-text">Enter a postcode and click the find address button to search for an address by postcode or use the enter address button to fill in the address fields manually.</span>
                                            </span>
                                        </div>
                                        <form className='d-flex input-group w-auto mt-1'>
                                            <MDBBtn style={{ fontSize: '10px', border: 'solid 1px #bbb' }} color='light'>

                                                Find address

                                            </MDBBtn>
                                            <MDBBtn style={{ fontSize: '10px', border: 'solid 1px #bbb', marginLeft: '5px' }} color='light'>

                                                Enter an address manually

                                            </MDBBtn>
                                        </form>

                                        <div className='mt-4'>
                                            <MDBTypography className='' tag='h7'><strong>Correspondence address line 1*</strong></MDBTypography>
                                        </div>
                                        <div className="help-content">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the house or flat number and street name. For example: 12 High Street</span>
                                            </span>
                                        </div>
                                        <MDBInputGroup className='' >
                                            <input className='form-control' type='text' placeholder='house or flat number and street name' />
                                        </MDBInputGroup>

                                        <div className='mt-4'>
                                            <MDBTypography className='' tag='h7'><strong>Correspondence address line 2*</strong></MDBTypography>
                                        </div>
                                        <div className="help-content">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the second line of your Correspondence address</span>
                                            </span>
                                        </div>
                                        <MDBInputGroup className='' >
                                            <input className='form-control' type='text' placeholder='Correspondence address line 2' />
                                        </MDBInputGroup>

                                        <div className='mt-4'>
                                            <MDBTypography className='' tag='h7'><strong>Correspondence address line 3*</strong></MDBTypography>
                                        </div>
                                        <div className="help-content">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the third line of your Correspondence address</span>
                                            </span>
                                        </div>
                                        <MDBInputGroup className='' >
                                            <input className='form-control' type='text' placeholder='Correspondence address line 3' />
                                        </MDBInputGroup>

                                        <div className='mt-4'>
                                            <MDBTypography className='' tag='h7'><strong>Correspondence address line 4*</strong></MDBTypography>
                                        </div>
                                        <div className="help-content">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the fourth line of your Correspondence address</span>
                                            </span>
                                        </div>
                                        <MDBInputGroup className='' >
                                            <input className='form-control' type='text' placeholder='Correspondence address line 4' />
                                        </MDBInputGroup>
                                    </div>
                                </div>

                            </div>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className='mt-4'>
                        <MDBCardBody>
                            <div>
                                <MDBTypography className='card-header' style={{ backgroundColor: '#dcdcdc' }} tag='h6'><strong>Contact Details</strong></MDBTypography>
                                <div className='mt-4'>
                                    <MDBTypography className='' tag='h7'><strong>Home telephone*</strong></MDBTypography>
                                </div>
                            </div>
                            <div className="help-content">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">including area code</span>
                                </span>
                            </div>
                            <div>
                                <MDBInputGroup className='mt-2' >
                                    <input className='form-control' type='text' placeholder='home telephone' />
                                </MDBInputGroup>
                            </div>

                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Work telephone*</strong></MDBTypography>
                            </div>
                            <div>
                                <MDBInputGroup className='mt-2' >
                                    <input className='form-control' type='text' placeholder='work telephone' />
                                </MDBInputGroup>
                            </div>

                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Mobile telephone*</strong></MDBTypography>
                            </div>
                            <div>
                                <MDBInputGroup className='mt-2' >
                                    <input className='form-control' type='text' placeholder='mobile telephone' />
                                </MDBInputGroup>
                            </div>
                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Email address*</strong></MDBTypography>
                            </div>
                            <div>
                                <MDBInputGroup className='mt-2' >
                                    <input className='form-control' type='text' placeholder='email address' />
                                </MDBInputGroup>
                            </div>
                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Please re-enter your email address*</strong></MDBTypography>
                            </div>
                            <div>
                                <MDBInputGroup className='mt-2' >
                                    <input className='form-control' type='text' placeholder='re-enter email address' />
                                </MDBInputGroup>
                            </div>

                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className='mt-4'>
                        <MDBCardBody>
                            <div>
                                <MDBTypography className='card-header' style={{ backgroundColor: '#dcdcdc' }} tag='h6'><strong>Equality and Diversity Monitoring</strong></MDBTypography>
                            </div>

                            <div className='mt-4'>
                                <div >
                                    <MDBTypography className='' tag='h7'><strong>What is your ethnic group? *</strong></MDBTypography>
                                </div>

                                <div>
                                    <MDBDropdown className='mt-2' >
                                        <MDBDropdownToggle tag='a' className='border border-dark rounded' >
                                            Please Choose
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu color=''>
                                            {/* <MDBDropdownItem link>Please choose</MDBDropdownItem> */}
                                            <MDBDropdownItem link> Asian or Asian British: Any Other Asian Background</MDBDropdownItem>
                                            <MDBDropdownItem link> Asian or Asian British: Bangladeshi</MDBDropdownItem>
                                            <MDBDropdownItem link> Asian or Asian British: Chinese</MDBDropdownItem>
                                            <MDBDropdownItem link> Asian or Asian British: Indian</MDBDropdownItem>
                                            <MDBDropdownItem link> Asian or Asian British: Pakistani</MDBDropdownItem>
                                            <MDBDropdownItem link> Black or Black British: African</MDBDropdownItem>
                                            <MDBDropdownItem link> Black or Black British: Any Other Black/African/Caribbean background</MDBDropdownItem>
                                            <MDBDropdownItem link> Black or Black British: Caribbean</MDBDropdownItem>
                                            <MDBDropdownItem link> Mixed: Any Other Mixed Background</MDBDropdownItem>
                                            <MDBDropdownItem link> Mixed: White and Asian</MDBDropdownItem>
                                            <MDBDropdownItem link> Mixed: White and Black African</MDBDropdownItem>
                                            <MDBDropdownItem link> Mixed: White and Black Caribbean/African</MDBDropdownItem>
                                            <MDBDropdownItem link> Not known</MDBDropdownItem>
                                            <MDBDropdownItem link> Other Ethnic: Any other ethnic group</MDBDropdownItem>
                                            <MDBDropdownItem link> Other Ethnic: Arab</MDBDropdownItem>
                                            <MDBDropdownItem link> Prefer not to say</MDBDropdownItem>
                                            <MDBDropdownItem link> Refused</MDBDropdownItem>
                                            <MDBDropdownItem link> White: Gypsy or Irish Traveller</MDBDropdownItem>
                                            <MDBDropdownItem link> White: Irish</MDBDropdownItem>
                                            <MDBDropdownItem link> White: Other White: Any other white background</MDBDropdownItem>
                                            <MDBDropdownItem link> White: Welsh / English / Scottish / Northern Irish</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>What is your nationality? *</strong></MDBTypography>
                            </div>

                            <div>
                                <MDBDropdown className='mt-2' >
                                    <MDBDropdownToggle tag='a' className='border border-dark rounded' >
                                        Please Choose
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu color=''>
                                        {/* <MDBDropdownItem link>Please choose</MDBDropdownItem> */}
                                        <MDBDropdownItem link>UK National</MDBDropdownItem>
                                        <MDBDropdownItem link>UK National returning from residence overseas</MDBDropdownItem>
                                        <MDBDropdownItem link>Bulgaria</MDBDropdownItem>
                                        <MDBDropdownItem link>Croatia</MDBDropdownItem>
                                        <MDBDropdownItem link>Czech Republic</MDBDropdownItem>
                                        <MDBDropdownItem link>Estonia</MDBDropdownItem>
                                        <MDBDropdownItem link>Hungary</MDBDropdownItem>
                                        <MDBDropdownItem link>Ireland</MDBDropdownItem>
                                        <MDBDropdownItem link>Latvia</MDBDropdownItem>
                                        <MDBDropdownItem link>Lithuania</MDBDropdownItem>
                                        <MDBDropdownItem link>Poland</MDBDropdownItem>
                                        <MDBDropdownItem link>Romania</MDBDropdownItem>
                                        <MDBDropdownItem link>Slovakia</MDBDropdownItem>
                                        <MDBDropdownItem link>Slovenia</MDBDropdownItem>
                                        <MDBDropdownItem link>Other EEA national</MDBDropdownItem>
                                        <MDBDropdownItem link>Non-EEA national</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>

                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>What is your sexual orientation? *</strong></MDBTypography>
                            </div>

                            <div>
                                <MDBDropdown className='mt-2' >
                                    <MDBDropdownToggle tag='a' className='border border-dark rounded' >
                                        Please Choose
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu color=''>
                                        {/* <MDBDropdownItem link>Please choose</MDBDropdownItem> */}
                                        <MDBDropdownItem link>Heterosexual or Straight</MDBDropdownItem>
                                        <MDBDropdownItem link>Gay or Lesbian</MDBDropdownItem>
                                        <MDBDropdownItem link>Prefer not to say</MDBDropdownItem>
                                        <MDBDropdownItem link>Other</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>
                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>What is your religion or belief? *</strong></MDBTypography>
                            </div>

                            <div>
                                <MDBDropdown className='mt-2' >
                                    <MDBDropdownToggle tag='a' className='border border-dark rounded' >
                                        Please Choose
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu color=''>
                                        {/* <MDBDropdownItem link>Please choose</MDBDropdownItem> */}
                                        <MDBDropdownItem link>Buddhist</MDBDropdownItem>
                                        <MDBDropdownItem link>Christian (including all denominations)</MDBDropdownItem>
                                        <MDBDropdownItem link>Hindu</MDBDropdownItem>
                                        <MDBDropdownItem link>Jewish</MDBDropdownItem>
                                        <MDBDropdownItem link>Muslim</MDBDropdownItem>
                                        <MDBDropdownItem link>Sikh</MDBDropdownItem>
                                        <MDBDropdownItem link>Any other religion</MDBDropdownItem>
                                        <MDBDropdownItem link>Not known</MDBDropdownItem>
                                        <MDBDropdownItem link>Prefer not to say</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>
                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Do you have any physical or mental health conditions or illnesses lasting or expected to last for 12 months or more? *</strong></MDBTypography>
                            </div>

                            <div>
                                <MDBDropdown className='mt-2' >
                                    <MDBDropdownToggle tag='a' className='border border-dark rounded' >
                                        Please Choose
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu color=''>
                                        {/* <MDBDropdownItem link>Please choose</MDBDropdownItem> */}
                                        <MDBDropdownItem link>No</MDBDropdownItem>
                                        <MDBDropdownItem link>Yes</MDBDropdownItem>
                                        <MDBDropdownItem link>Prefer not to say</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>
                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Which language do you prefer using? *</strong></MDBTypography>
                            </div>

                            <div>
                                <MDBDropdown className='mt-2' >
                                    <MDBDropdownToggle tag='a' className='border border-dark rounded' >
                                        Please Choose
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu color=''>
                                        {/* <MDBDropdownItem link>Please choose</MDBDropdownItem> */}
                                        <MDBDropdownItem link>Albanian</MDBDropdownItem>
                                        <MDBDropdownItem link>Bengali</MDBDropdownItem>
                                        <MDBDropdownItem link>BSL - British sign language</MDBDropdownItem>
                                        <MDBDropdownItem link>Chinese</MDBDropdownItem>
                                        <MDBDropdownItem link>Czechoslovakian</MDBDropdownItem>
                                        <MDBDropdownItem link>English</MDBDropdownItem>
                                        <MDBDropdownItem link>Farsi</MDBDropdownItem>
                                        <MDBDropdownItem link>French</MDBDropdownItem>
                                        <MDBDropdownItem link>German</MDBDropdownItem>
                                        <MDBDropdownItem link>Greek</MDBDropdownItem>
                                        <MDBDropdownItem link>Gujarati</MDBDropdownItem>
                                        <MDBDropdownItem link>Halari</MDBDropdownItem>
                                        <MDBDropdownItem link>Hindi</MDBDropdownItem>
                                        <MDBDropdownItem link>Israeli (Hebrew)</MDBDropdownItem>
                                        <MDBDropdownItem link>Italian</MDBDropdownItem>
                                        <MDBDropdownItem link>Kosovan</MDBDropdownItem>
                                        <MDBDropdownItem link>Lingala</MDBDropdownItem>
                                        <MDBDropdownItem link>Luganda</MDBDropdownItem>
                                        <MDBDropdownItem link>Macedonian</MDBDropdownItem>
                                        <MDBDropdownItem link>Other</MDBDropdownItem>
                                        <MDBDropdownItem link>Portuguese</MDBDropdownItem>
                                        <MDBDropdownItem link>Punjabi</MDBDropdownItem>
                                        <MDBDropdownItem link>Romanian</MDBDropdownItem>
                                        <MDBDropdownItem link>Russian</MDBDropdownItem>
                                        <MDBDropdownItem link>Slovakian</MDBDropdownItem>
                                        <MDBDropdownItem link>Somali</MDBDropdownItem>
                                        <MDBDropdownItem link>Sorani - Kurdish Sorani</MDBDropdownItem>
                                        <MDBDropdownItem link>Spanish</MDBDropdownItem>
                                        <MDBDropdownItem link>Swahili</MDBDropdownItem>
                                        <MDBDropdownItem link>Tamil</MDBDropdownItem>
                                        <MDBDropdownItem link>Turkish</MDBDropdownItem>
                                        <MDBDropdownItem link>Ugandan</MDBDropdownItem>
                                        <MDBDropdownItem link>Urdu</MDBDropdownItem>
                                        <MDBDropdownItem link>Yugoslavian</MDBDropdownItem>
                                        <MDBDropdownItem link>Zulu</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>
                            <div className='mt-4'>
                                <MDBTypography tag='h7'><strong>Do you require an interpreter? *</strong></MDBTypography>
                            </div>

                            <div >
                                <div>
                                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Yes' inline />
                                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='No' inline />
                                </div>
                            </div>

                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className='mt-4'>
                        <MDBCardBody>
                            <div>
                                <MDBTypography className='card-header' style={{ backgroundColor: '#dcdcdc' }} tag='h6'><strong>Eligibility</strong></MDBTypography>
                                <div className='mt-4'>
                                    <MDBTypography className='' tag='h7'><strong>What is your current tenure? *</strong></MDBTypography>
                                </div>
                            </div>
                            <div>
                                <MDBDropdown className='mt-2' >
                                    <MDBDropdownToggle tag='a' className='border border-dark rounded' >
                                        Please Choose
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu color=''>
                                        <MDBDropdownItem link>Birmingham City Council Tenant</MDBDropdownItem>
                                        <MDBDropdownItem link>Registered Provider / Housing Association tenant</MDBDropdownItem>
                                        <MDBDropdownItem link>Living with friends or family</MDBDropdownItem>
                                        <MDBDropdownItem link>Private Tenant</MDBDropdownItem>
                                        <MDBDropdownItem link>Owner Occupier</MDBDropdownItem>
                                        <MDBDropdownItem link>Temporary Accommodation</MDBDropdownItem>
                                        <MDBDropdownItem link>Other</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>

                            <div className="help-content">
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">
                                    As a Birmingham City Council Tenant when accepting an offer you MUST give vacant possession of your property. Failure to do so will result in your offer being withdrawn!</span>
                                </span>
                            </div>

                            <div>
                                <MDBTypography className='card-header' style={{ backgroundColor: '#dcdcdc' }} tag='h6'><strong>Eligibility</strong></MDBTypography>
                                <div className='mt-4'>
                                    <MDBTypography className='' tag='h7'><strong>Please provide your tenancy reference number?</strong></MDBTypography>
                                </div>
                            </div>

                            <div className="help-content border border-dark rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text ">
                                    This can be found on your Tenancy Agreement</span>
                                </span>
                            </div>

                            <div>
                                <MDBInputGroup className='mt-2' >
                                    <input className='form-control' type='text' placeholder='Enter your tenancy agreement number' />
                                </MDBInputGroup>
                            </div>

                            <div className="help-content">
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">
                                        Only certain people who are persons from abroad are eligible to join our housing register. The following questions will help us determine if you are eligible.</span>
                                </span>
                            </div>
                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Are you?*</strong></MDBTypography>
                            </div>
                            <div className="help-content border border-dark rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text ">
                                        The EEA includes EU countries and also Iceland, Liechtenstein and Norway. It allows them to be part of the EU's single market.Switzerland is neither an EU or EEA member but is part of the single market - this means Swiss nationals have the same rights to live and work in the UK as other EEA nationals.</span>
                                </span>
                            </div>
                            <div>
                                <MDBDropdown className='mt-2' >
                                    <MDBDropdownToggle tag='a' className='border border-dark rounded' >
                                        Please Choose
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu color=''>
                                        <MDBDropdownItem link>A person who has limited or exceptional leave to enter or remain in the UK with recourse to public funds</MDBDropdownItem>
                                        <MDBDropdownItem link>A British citizen</MDBDropdownItem>
                                        <MDBDropdownItem link>A citizen of a country within the EEA with settled status</MDBDropdownItem>
                                        <MDBDropdownItem link>A citizen of a country within the EEA with pre-settled status</MDBDropdownItem>
                                        <MDBDropdownItem link>A Commonwealth citizen with a right of abode</MDBDropdownItem>
                                        <MDBDropdownItem link>A family member of a citizen of a country within the EEA with settled status</MDBDropdownItem>
                                        <MDBDropdownItem link>A family member of a citizen of a country within the EEA with pre-settled status</MDBDropdownItem>
                                        <MDBDropdownItem link>A person with leave to remain</MDBDropdownItem>
                                        <MDBDropdownItem link>An Irish citizen</MDBDropdownItem>
                                        <MDBDropdownItem link>Seeking, or have sought asylum in the UK</MDBDropdownItem>
                                        <MDBDropdownItem link>Someone granted humanitarian protection under immigration rules</MDBDropdownItem>
                                        <MDBDropdownItem link>Someone with permission to be in the UK because you have a sponsor</MDBDropdownItem>
                                        <MDBDropdownItem link>None of the above</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>

                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className='mt-4'>
                        <MDBCardBody>
                            <div>
                                <MDBTypography className='card-header' style={{ backgroundColor: '#dcdcdc' }} tag='h6'><strong>Connection to Birmingham</strong></MDBTypography>
                                <div className='mt-4'>
                                    <MDBTypography className='' tag='h7'><strong>In order to help us understand why you want to live in Birmingham, we need to know about your connection to the city. Please choose from the following options. *</strong></MDBTypography>
                                </div>

                                <div>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I have lived in Birmingham for the last 24 months or more' />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am currently employed or have a confirmed offer of employment in Birmingham' />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Birmingham City Council has accepted a homeless duty to me and placed me outside of Birmingham' />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am in, or due to undertake training or higher education in Birmingham that will last at least 6 months or more' />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I have caring responsibility for someone resident in Birmingham' />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am a care leaver aged 18 - 21 who is owed a duty of care by Birmingham City Council' />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I need to be near specialist medical or support services only available in Birmingham' />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am care leaver aged 22 to 25 who is owed a duty of care by Birmingham City Council and pursuing a programme of education' />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am a current member of His Majestys Armed Forces' />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am a current or former member of His Majestys Armed Forces and I need to move due to a medical condition that was caused by my military service' />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am the spouse or civil partner of a person who has died as a result of their service in His Majestys Armed Forces and I am now leaving Services Accommodation' />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am no longer a member of His Majestys Armed Forces, however I was discharged within the last 5 years' />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am a former spouse or civil partner of a person in His Majestys Armed Forces and I am now leaving Services Accommodation' />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I am an adult child of Service personnel who is no longer able to remain in the family home due to the impact moving from base to base' />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I have near relatives in Birmingham and they have been resident in Birmingham for the last 5 years or more' />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I need to move away from another area to escape violence or harm' />
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='None of the above' />
                                </div>
                            </div>
                            

                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                {/* <MDBCol className='mx-5' size='md'>
                    <MDBTypography tag='h6'><strong>Register your household</strong></MDBTypography>

                    <MDBTypography tag='h7'>Household Registration</MDBTypography>
                    <MDBCard className='card-header' style={{ backgroundColor: '#f5f5f5' }} ><strong>Primary Applicant Details</strong>
                        <MDBCardBody style={{ backgroundColor: '#f5f5f5' }} >

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
                </MDBCol> */}
                <MDBCol className='mx-5' size='md'>
                    <MDBCard className=''>
                        <MDBCardBody >
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