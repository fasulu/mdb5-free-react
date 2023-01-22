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
        <MDBContainer   >

            <MDBRow className='my-3 justify-content-center' bgColor='#f7f2f287'>
                {/* <MDBCol className='mx-5' size='md'> */}
                <MDBCol className='mx-2' size='md'  >
                    <MDBTypography tag='h6'><strong>Register your household</strong></MDBTypography>
                    <MDBTypography tag='h7'>Household Registration</MDBTypography>

                    <MDBCard className=' mx-auto' style={{backgroundColor:'#f7f2f287'}} >
                        <MDBCardBody >
                            <div className='mb-2'>
                                <MDBTypography className='card-header' style={{ backgroundColor: '#dcdcdc' }} tag='h6'><strong>Primary Applicant Details</strong></MDBTypography>
                                <MDBTypography tag='h7'><strong>Title *</strong></MDBTypography>
                                <MDBDropdown className='' >
                                    <MDBDropdownToggle className='border border-dark rounded' color='secondary'>
                                        Please Choose
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu style={{ overflow: 'scroll', height: '11em' }}>
                                        <MDBDropdownItem style={{ height: '25px' }} link>Dr</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '25px' }} link>Miss</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '25px' }} link>Mr</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '25px' }} link>Mrs</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '25px' }} link>Ms</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>

                            <MDBTypography className='mb-4' tag='h7'><strong>Your first name(s) *</strong></MDBTypography>
                            <div style={{ width: '650px' }} className="mb-2 mt-2 help-content border border-dark rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                </span>
                            </div>
                            <div className='mb-4' >
                                <input style={{ width: '250px' }} className='form-control' type='text' placeholder='First name...' />
                            </div>

                            <MDBTypography tag='h7'><strong>Your middle name(s) *</strong></MDBTypography>
                            <div style={{ width: '650px' }} className="mb-2 mt-2 help-content border border-dark rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                </span>
                            </div>
                            <div className='mb-4' >
                                <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Middle name...' />
                            </div>

                            <MDBTypography tag='h7'><strong>Your surname *</strong></MDBTypography>
                            <div style={{ width: '650px' }} className="mb-2 mt-2 help-content border border-dark rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                </span>
                            </div>
                            <div className='mb-4' >
                                <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Surname...' />
                            </div>

                            <MDBTypography style={{ fontSize: '14px' }}><strong>Have you ever used a different name, eg a maiden name or by deed poll? if so, please provide details</strong></MDBTypography>
                            <div style={{ width: '560px' }} className="mb-2 mt-2 help-content border border-dark rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">Have you ever used a different name, eg a maiden name or by deed poll? if so, please provide details</span>
                                </span>
                            </div>
                            <div className='mb-4' >
                                <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Have you ever used a different name, eg a maiden name or by deed poll? if so, please provide details' />
                            </div>

                            <MDBTypography tag='h7'><strong>Your National Insurance Number *</strong></MDBTypography>
                            <div className='mb-4' >
                                <input style={{ width: '250px' }} className='form-control' type='text' />
                            </div>

                            <MDBTypography tag='h7'><strong>Your date of birth *</strong></MDBTypography>
                            <div style={{ width: '650px' }} className="mb-2 mt-2 help-content border border-dark rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">This should be your full surname found on official documents, for example birth certificate, passport or driving licence.</span>
                                </span>
                            </div>
                            <div className="help-content">
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">For example 27 01 2000</span>
                                </span>
                            </div>

{/*                         <div >
                                <input className='form-control' type='text' style={{ width: '50px', float: 'left', marginRight: '5px' }} />
                                <input className='form-control' type='text' style={{ width: '50px', float: 'left', marginRight: '5px' }} />
                                <input className='form-control' type='text' style={{ width: '50px' }} />
                            </div>

                            <div className='mt-4'>
                                <MDBTypography tag='h7'><strong>Your date of birth*</strong></MDBTypography>
                            </div> */}
                            <div className='mt-2'>
                                <div className='btn-group'>
                                    <MDBDropdown style={{ marginRight: '5px' }}>
                                        <MDBDropdownToggle className='border border-dark rounded' color='secondary' >
                                            Date
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu style={{ overflow: 'scroll', height: '12em' }} >
                                            <MDBDropdownItem style={{height: '25px' }} link>01</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>02</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>03</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>04</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>05</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>06</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>07</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>08</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>09</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>10</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>11</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>12</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>13</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>14</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>15</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>16</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>17</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>18</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>19</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>20</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>21</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>22</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>23</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>24</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>25</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>26</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>27</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>28</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>29</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>30</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>31</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>

                                    <MDBDropdown  style={{ marginRight: '5px' }} className='dropdown btn-group' >
                                        <MDBDropdownToggle className='border border-dark rounded' color='secondary' >
                                            Month
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu style={{ overflow: 'scroll', height: '12em' }} >
                                            <MDBDropdownItem style={{height: '25px' }} link>January</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>February</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>March</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>April</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>May</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>June</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>July</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>August</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>September</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>October</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>November</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>December</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>

                                <input className='form-control border border-dark rounded' type='text' placeholder='YEAR' style={{ width: '65px', float: 'left', borderColor:'black', color:'black', background:'#e3ebf7'}} />

                                </div>
                            </div>

                            <div className='mt-4'>
                                <MDBTypography tag='h7'><strong>Your sex *</strong></MDBTypography>
                                <MDBDropdown className='' >
                                    <MDBDropdownToggle className='border border-dark rounded' color='secondary' >
                                        Please Choose
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu style={{height: '5em' }}>
                                        <MDBDropdownItem style={{ height: '30px' }} link>Male</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '30px' }} link>Female</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className='mt-4' style={{backgroundColor:'#f7f2f287'}}>
                        <MDBCardBody>
                            <MDBTypography className='card-header' style={{ backgroundColor: '#dcdcdc' }} tag='h6'><strong>Lived Abroad</strong></MDBTypography>
                            <MDBTypography tag='h7'><strong>Have you or any member of your household lived abroad in the last 5 years? *</strong></MDBTypography>
                            <div>
                                <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Yes' inline />
                                <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='No' inline />
                            </div>

                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className='mt-4' style={{backgroundColor:'#f7f2f287'}}>
                        <MDBCardBody>
                            <div>
                                <MDBTypography className='card-header' style={{ backgroundColor: '#dcdcdc' }} tag='h6'><strong>Current Address</strong></MDBTypography>
                                <MDBTypography className='mb-4' tag='h7'><strong>1. Address details</strong></MDBTypography>

                            </div>
                            <MDBTypography className='mb-2' style={{ fontSize: '14px' }}><strong>Postcode*</strong></MDBTypography>
                            <div style={{ width: '625px' }} className="mb-2 mt-2 help-content border border-dark rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the postcode using capital letters. For example: B1 1BB. If your address is outside UK please enter XY1 1YX.</span>
                                </span>
                            </div>
                            <div className='mb-4' >
                                <input style={{ width: '250px' }} className='form-control' type='text' placeholder='postcode...' />
                            </div>

                            <div style={{ width: '700px' }} className="mb-2 mt-2 help-content border border-dark rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">Enter a postcode and click the find address button to search for an address by postcode or use the enter address button to fill in the address fields manually.</span>
                                </span>
                            </div>
                            <form className='d-flex input-group w-auto mt-1'>
                                <MDBBtn style={{ fontSize: '13px', border: 'solid 1px #bbb' }} color='light'>

                                    Find address

                                </MDBBtn>
                                <MDBBtn style={{ fontSize: '13px', border: 'solid 1px #bbb', marginLeft: '5px' }} color='light'>

                                    Enter an address manually

                                </MDBBtn>
                            </form>

                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Address line 1*</strong></MDBTypography>
                            </div>
                            <div style={{ width: '425px' }} className="mb-2 mt-2 help-content border border-dark rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the house or flat number and street name. For example: 12 High Street</span>
                                </span>
                            </div>
                            <div className='' >
                                <input style={{ width: '250px' }} className='form-control' type='text' placeholder='house or flat number and street name' />
                            </div>

                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Address line 2*</strong></MDBTypography>
                            </div>
                            <div style={{ width: '220px' }} className="mb-2 mt-2 help-content border border-dark rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the second line of your address</span>
                                </span>
                            </div>
                            <div className='' >
                                <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Address line 2' />
                            </div>

                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Address line 3*</strong></MDBTypography>
                            </div>
                            <div style={{ width: '220px' }} className="mb-2 mt-2 help-content border border-dark rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the third line of your address</span>
                                </span>
                            </div>
                            <div className='' >
                                <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Address line 3' />
                            </div>

                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Address line 4*</strong></MDBTypography>
                            </div>
                            <div style={{ width: '220px' }} className="mb-2 mt-2 help-content border border-dark rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the fourth line of your address</span>
                                </span>
                            </div>
                            <div className='' >
                                <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Address line 4' />
                            </div>

                            <div className='mt-4'>

                                <MDBTypography tag='h7'><strong>2. When did you move into this address?</strong></MDBTypography>
                                <div className="help-content">
                                    <MDBTypography className='' style={{ fontSize: '14px' }}><strong>Date you moved into this address *</strong></MDBTypography>

                                </div>

                                <div className="help-content">
                                    <span className="help-text">
                                        <span style={{ fontSize: '12px' }} className="configured-help-text">For example 27 01 2000</span>
                                    </span>
                                </div>

                                {/* <div >
                                    <input className='form-control' type='text' style={{ width: '50px', float: 'left', marginRight: '5px' }} />
                                    <input className='form-control' type='text' style={{ width: '50px', float: 'left', marginRight: '5px' }} />
                                    <input className='form-control' type='text' style={{ width: '50px' }} />
                                </div> */}
<div className='mt-2'>
                                <div className='btn-group'>
                                    <MDBDropdown style={{ marginRight: '5px' }}>
                                        <MDBDropdownToggle className='border border-dark rounded' color='secondary' >
                                            Date
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu style={{ overflow: 'scroll', height: '12em' }} >
                                            <MDBDropdownItem style={{height: '25px' }} link>01</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>02</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>03</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>04</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>05</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>06</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>07</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>08</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>09</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>10</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>11</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>12</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>13</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>14</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>15</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>16</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>17</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>18</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>19</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>20</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>21</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>22</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>23</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>24</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>25</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>26</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>27</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>28</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>29</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>30</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>31</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>

                                    <MDBDropdown  style={{ marginRight: '5px' }} className='dropdown btn-group' >
                                        <MDBDropdownToggle className='border border-dark rounded' color='secondary' >
                                            Month
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu style={{ overflow: 'scroll', height: '12em' }} >
                                            <MDBDropdownItem style={{height: '25px' }} link>January</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>February</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>March</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>April</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>May</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>June</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>July</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>August</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>September</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>October</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>November</MDBDropdownItem>
                                            <MDBDropdownItem style={{height: '25px' }} link>December</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>

                                <input className='form-control border border-dark rounded' type='text' placeholder='YEAR' style={{ width: '65px', float: 'left', borderColor:'black', color:'black', background:'#e3ebf7'}} />

                                </div>
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
                                            <MDBDropdownToggle className='border border-dark rounded' color='secondary'>
                                                Please Choose
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu style={{ overflow: 'scroll', height: '11em' }}>
                                                {/* <MDBDropdownItem link>Please choose</MDBDropdownItem> */}
                                                <MDBDropdownItem style={{ height: '26px' }} link>Home</MDBDropdownItem>
                                                <MDBDropdownItem style={{ height: '26px' }} link>Work</MDBDropdownItem>
                                                <MDBDropdownItem style={{ height: '26px' }} link>Solicitor</MDBDropdownItem>
                                                <MDBDropdownItem style={{ height: '26px' }} link>Parents</MDBDropdownItem>
                                                <MDBDropdownItem style={{ height: '26px' }} link>Other</MDBDropdownItem>

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

                                        <div className='' >
                                            <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Enter the local authority name' />
                                        </div>
                                    </div>

                                    <div className='mt-4'>
                                        <MDBTypography className='mb-2' style={{ fontSize: '14px' }}><strong>Postcode*</strong></MDBTypography>
                                        <div style={{ width: '625px' }} className="mb-2 mt-2 help-content border border-dark rounded">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the postcode using capital letters. For example: B1 1BB. If your address is outside UK please enter XY1 1YX.</span>
                                            </span>
                                        </div>
                                        <div className='mb-4' >
                                            <input style={{ width: '250px' }} className='form-control' type='text' placeholder='postcode...' />
                                        </div>

                                        <div style={{ width: '615px' }} className="mb-2 mt-2 help-content border border-dark rounded">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px' }} className="configured-help-text">Enter a postcode and click the find address or use the enter address button to fill in the address fields manually.</span>
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
                                        <div style={{ width: '430px' }} className="mb-2 mt-2 help-content border border-dark rounded">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the house or flat number and street name. For example: 12 High Street</span>
                                            </span>
                                        </div>
                                        <div className='' >
                                            <input style={{ width: '250px' }} className='form-control' type='text' placeholder='house or flat number and street name' />
                                        </div>

                                        <div className='mt-4'>
                                            <MDBTypography className='' tag='h7'><strong>Correspondence address line 2*</strong></MDBTypography>
                                        </div>
                                        <div style={{ width: '315px' }} className="mb-2 mt-2 help-content border border-dark rounded">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the second line of your Correspondence address</span>
                                            </span>
                                        </div>
                                        <div className='' >
                                            <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Correspondence address line 2' />
                                        </div>

                                        <div className='mt-4'>
                                            <MDBTypography className='' tag='h7'><strong>Correspondence address line 3*</strong></MDBTypography>
                                        </div>
                                        <div style={{ width: '300px' }} className="mb-2 mt-2 help-content border border-dark rounded">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the third line of your Correspondence address</span>
                                            </span>
                                        </div>
                                        <div className='' >
                                            <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Correspondence address line 3' />
                                        </div>

                                        <div className='mt-4'>
                                            <MDBTypography className='' tag='h7'><strong>Correspondence address line 4*</strong></MDBTypography>
                                        </div>
                                        <div style={{ width: '310px' }} className="mb-2 mt-2 help-content border border-dark rounded">
                                            <span className="far fa-question-circle help-icon"></span>
                                            <span className="help-text">
                                                <span style={{ fontSize: '12px' }} className="configured-help-text">Enter the fourth line of your Correspondence address</span>
                                            </span>
                                        </div>
                                        <div className='' >
                                            <input style={{ width: '250px' }} className='form-control' type='text' placeholder='Correspondence address line 4' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className='mt-4' style={{backgroundColor:'#f7f2f287'}}>
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
                                <div className='mt-2' >
                                    <input style={{ width: '250px' }} className='form-control' type='text' placeholder='home telephone' />
                                </div>
                            </div>

                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Work telephone*</strong></MDBTypography>
                            </div>
                            <div>
                                <div className='mt-2' >
                                    <input style={{ width: '250px' }} className='form-control' type='text' placeholder='work telephone' />
                                </div>
                            </div>

                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Mobile telephone*</strong></MDBTypography>
                            </div>
                            <div>
                                <div className='mt-2' >
                                    <input style={{ width: '250px' }} className='form-control' type='text' placeholder='mobile telephone' />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Email address*</strong></MDBTypography>
                            </div>
                            <div>
                                <div className='mt-2' >
                                    <input style={{ width: '250px' }} className='form-control' type='text' placeholder='email address' />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Please re-enter your email address*</strong></MDBTypography>
                            </div>
                            <div>
                                <div className='mt-2' >
                                    <input style={{ width: '250px' }} className='form-control' type='text' placeholder='re-enter email address' />
                                </div>
                            </div>

                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className='mt-4' style={{backgroundColor:'#f7f2f287'}}>
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
                                        <MDBDropdownToggle className='border border-dark rounded' color='secondary'>
                                            Please Choose
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu style={{ overflow: 'scroll', height: '15em' }}>
                                            {/* <MDBDropdownItem link>Please choose</MDBDropdownItem> */}
                                            <MDBDropdownItem style={{ height: '26px' }} link> Asian or Asian British: Any Other Asian Background</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> Asian or Asian British: Bangladeshi</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> Asian or Asian British: Chinese</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> Asian or Asian British: Indian</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> Asian or Asian British: Pakistani</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> Black or Black British: African</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> Black or Black British: Any Other Black/African/Caribbean background</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> Black or Black British: Caribbean</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> Mixed: Any Other Mixed Background</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> Mixed: White and Asian</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> Mixed: White and Black African</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> Mixed: White and Black Caribbean/African</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> Not known</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> Other Ethnic: Any other ethnic group</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> Other Ethnic: Arab</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> Prefer not to say</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> Refused</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> White: Gypsy or Irish Traveller</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> White: Irish</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> White: Other White: Any other white background</MDBDropdownItem>
                                            <MDBDropdownItem style={{ height: '26px' }} link> White: Welsh / English / Scottish / Northern Irish</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>What is your nationality? *</strong></MDBTypography>
                            </div>

                            <div>
                                <MDBDropdown className='mt-2' >
                                    <MDBDropdownToggle className='border border-dark rounded' color='secondary'>
                                        Please Choose
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu style={{ overflow: 'scroll', height: '15em' }}>
                                        {/* <MDBDropdownItem link>Please choose</MDBDropdownItem> */}
                                        <MDBDropdownItem style={{ height: '26px' }} link>UK National</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>UK National returning from residence overseas</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Bulgaria</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Croatia</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Czech Republic</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Estonia</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Hungary</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Ireland</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Latvia</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Lithuania</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Poland</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Romania</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Slovakia</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Slovenia</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Other EEA national</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Non-EEA national</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>

                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>What is your sexual orientation? *</strong></MDBTypography>
                            </div>

                            <div>
                                <MDBDropdown className='mt-2' >
                                    <MDBDropdownToggle className='border border-dark rounded' color='secondary'>
                                        Please Choose
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu style={{ height: '8em' }}>
                                        {/* <MDBDropdownItem link>Please choose</MDBDropdownItem> */}
                                        <MDBDropdownItem style={{ height: '26px' }} link>Heterosexual or Straight</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Gay or Lesbian</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Prefer not to say</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Other</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>
                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>What is your religion or belief? *</strong></MDBTypography>
                            </div>

                            <div>
                                <MDBDropdown className='mt-2' >
                                    <MDBDropdownToggle className='border border-dark rounded' color='secondary'>
                                        Please Choose
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu style={{ height: '17.5em' }}>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Buddhist</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Christian (including all denominations)</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Hindu</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Jewish</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Muslim</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Sikh</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Any other religion</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Not known</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '26px' }} link>Prefer not to say</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>
                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Do you have any physical or mental health conditions or illnesses lasting or expected to last for 12 months or more? *</strong></MDBTypography>
                            </div>

                            <div>
                                <MDBDropdown className='mt-2' >
                                    <MDBDropdownToggle className='border border-dark rounded' color='secondary'>
                                        Please Choose
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu style={{ height: '7em' }}>
                                        <MDBDropdownItem style={{ height: '29px' }} link>No</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '29px' }} link>Yes</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '29px' }} link>Prefer not to say</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>
                            <div className='mt-4'>
                                <MDBTypography className='' tag='h7'><strong>Which language do you prefer using? *</strong></MDBTypography>
                            </div>

                            <div>
                                <MDBDropdown className='mt-2' >
                                    <MDBDropdownToggle className='border border-dark rounded' color='secondary'>
                                        Please Choose
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu style={{ overflow: 'scroll', height: '18em' }}>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Albanian</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Bengali</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>BSL - British sign language</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Chinese</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Czechoslovakian</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>English</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Farsi</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>French</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>German</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Greek</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Gujarati</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Halari</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Hindi</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Israeli (Hebrew)</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Italian</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Kosovan</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Lingala</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Luganda</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Macedonian</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Other</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Portuguese</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Punjabi</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Romanian</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Russian</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Slovakian</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Somali</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Sorani - Kurdish Sorani</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Spanish</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Swahili</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Tamil</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Turkish</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Ugandan</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Urdu</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Yugoslavian</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Zulu</MDBDropdownItem>
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

                    <MDBCard className='mt-4' style={{backgroundColor:'#f7f2f287'}}>
                        <MDBCardBody>
                            <div>
                                <MDBTypography className='card-header' style={{ backgroundColor: '#dcdcdc' }} tag='h6'><strong>Eligibility</strong></MDBTypography>
                                <div className='mt-4'>
                                    <MDBTypography className='' tag='h7'><strong>What is your current tenure? *</strong></MDBTypography>
                                </div>
                            </div>
                            <div>
                                <MDBDropdown className='mt-2' >
                                    <MDBDropdownToggle className='border border-dark rounded' color='secondary'>
                                        Please Choose
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu style={{ height: '15em' }}>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Birmingham City Council Tenant</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Registered Provider / Housing Association tenant</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Living with friends or family</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Private Tenant</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Owner Occupier</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Temporary Accommodation</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Other</MDBDropdownItem>
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
                                <div className='mt-3'>
                                    <MDBTypography className='' tag='h7'><strong>Please provide your tenancy reference number?</strong></MDBTypography>
                                </div>
                            </div>

                            <div style={{ width: '270px' }} className=" mt-2 help-content border border-dark rounded">
                                <span className="far fa-question-circle help-icon"></span>
                                <span className="help-text">
                                    <span style={{ fontSize: '12px' }} className="configured-help-text ">
                                        This can be found on your Tenancy Agreement</span>
                                </span>
                            </div>

                            <div>
                                <div className='mt-3' >
                                    <input style={{ width: '250px', fontSize: '13px' }} className='form-control' type='text' placeholder='Enter your tenancy agreement number' />
                                </div>
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
                                    <span style={{ fontSize: '12px', padding: '5px' }} className="configured-help-text ">
                                        The EEA includes EU countries and also Iceland, Liechtenstein and Norway. It allows them to be part of the EU's single market. Switzerland is neither an EU or EEA member but is part of the single market - this means Swiss nationals have the same rights to live and work in the UK as other EEA nationals.</span>
                                </span>
                            </div>
                            <div>
                                <MDBDropdown className='mt-3' >
                                    <MDBDropdownToggle className='border border-dark rounded' color='secondary'>
                                        Please Choose
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu style={{ overflow: 'scroll', height: '16em' }}>
                                        <MDBDropdownItem style={{ height: '28px' }} link>A person who has limited or exceptional leave to enter or remain in the UK with recourse to public funds</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>A British citizen</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>A citizen of a country within the EEA with settled status</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>A citizen of a country within the EEA with pre-settled status</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>A Commonwealth citizen with a right of abode</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>A family member of a citizen of a country within the EEA with settled status</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>A family member of a citizen of a country within the EEA with pre-settled status</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>A person with leave to remain</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>An Irish citizen</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Seeking, or have sought asylum in the UK</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Someone granted humanitarian protection under immigration rules</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>Someone with permission to be in the UK because you have a sponsor</MDBDropdownItem>
                                        <MDBDropdownItem style={{ height: '28px' }} link>None of the above</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>

                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className='mt-4' style={{backgroundColor:'#f7f2f287'}}>
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

                <MDBCol className='' >
                    <MDBCard className='' style={{backgroundColor:'#f7f2f287'}}>
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

        </MDBContainer >
    );
}