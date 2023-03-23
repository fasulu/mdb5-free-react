import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../userContext/UserContext"

import {
    MDBIcon,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

import AccountLeft from '../components/accountLeft';
import Navbar from '../components/Navbar';
import NavbarSecondary from '../components/NavbarSecondary';
import Footer from '../components/footer';
import MembersList from '../components/membersList';
// import MemberEdit from '../components/memberEdit';
import UpdateContact from '../components/updateContact';
import UpdateLogin from '../components/updateLogin';
import JointApplicant from '../components/jointApplicant';
import JointApplicantEdit from '../components/jointApplicantEdit';
import HouseholdMember from '../components/householdMember';
import { decryptDetails } from '../utility/hashDetails';

export default function AccountPage() {

    const { clientId, setClientId } = useContext(UserContext);
    // const [clientId, setClientId] = useState("64182ff5c11918c62cd57a13");
    // const [clientId, setClientId] = useState("6401c0931f74dea710de3e82");

    const [showAccountPage, setShowAccountPage] = useState(true);
    const [showHouseholdMemberPage, setShowHouseholdMemberPage] = useState(false);
    const [showJointApplicantEditPage, setShowJointApplicantEditPage] = useState(false);
    const [showJointApplicantPage, setShowJointApplicantPage] = useState(false);
    const [showMemberEditPage, setShowMemberEditPage] = useState(false);
    const [showMemberListPage, setShowMemberListPage] = useState(false);
    const [showUpdateContactPage, setShowUpdateContactPage] = useState(false);
    const [showUpdateLoginPage, setShowUpdateLoginPage] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const primaryApplicantNameUrl = "http://localhost:9001/client/clientid/"
    const jointApplicantNameUrl = "http://localhost:9001/joint/clientid/"
    const memmberExistUrl = "http://localhost:9001/member/clientid/" + clientId
    const jointExistUrl = "http://localhost:9001/joint/clientid/" + clientId

    let memberid = location.state.nino
    const [loginReference, setLoginReference] = useState();
    // const [clientName, setClientName] = useState(location.state.clientName);
    const [clientName, setClientName] = useState();
    const [jointName, setJointName] = useState();
    const [postcode, setPostcode] = useState();
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [addressLine3, setAddressLine3] = useState("");
    const [addressLine4, setAddressLine4] = useState();

    const styleBtn = { fontSize: '13px', color: '#4f83c3', textTransform: 'none' };

    const styleBorder = { color: '#4f83c3', borderTop: '1px solid #d7cdcd', borderBottom: '1px solid #d7cdcd' };

    const iconRight = "fa-solid fa-caret-right";

    async function fetchDataPrimary(getName) {

        // Whenever account page loaded check for make sure same 
        // applicant logged in by his/her id exist in primary client collection.
        // Verify the primary applicant is exist

        console.log(`Get name is ${getName}`)
        try {
            const response = await axios.get(getName)
            if (response) {
                console.log(response.data)
                setClientName(response.data.clientExist.client_firstname + " " + response.data.clientExist.client_surname);
                setAddressLine1(response.data.clientExist.client_address_line1); 
                setAddressLine2(response.data.clientExist.client_address_line2);
                setAddressLine3(response.data.clientExist.client_address_line3);
                setAddressLine4(response.data.clientExist.client_address_line4);
                setPostcode(response.data.clientExist.client_postcode);

                console.log(clientName);
            } else {
                console.log(`Unable to identify primary applicant`);
                navigate('/login');
            }
        } catch (error) {
            console.log(`Unable to identify primary applicant`);
            console.log(error)
            navigate('/login');
        }
    }

    async function fetchDataJoint(getName) {

        // Whenever account page loaded check for make sure same 
        // applicant logged in by his/her id exist in primary client collection.
        // Verify the primary applicant is exist

        console.log(`Get name is ${getName}`)
        try {
            const response = await axios.get(getName)
            if (response) {
                console.log(response.data)
                setJointName(response.data.jointApplicantDetails.clientJoint_firstname + " " + response.data.jointApplicantDetails.clientJoint_surname);

                console.log(jointName,);
            } else {
                console.log(`Unable to identify joint applicant`);
                navigate('/login');
            }
        } catch (error) {
            console.log(`Unable to identify joint applicant`);
            console.log(error)
            navigate('/login');
        }
    }

    useEffect(() => {

        try {
            console.log(`Im in accountPage useEffect`)
        const idRef = decryptDetails();     // get id and reference from local storage using dcrypDetails() module.

        setClientId(idRef.decryptedID);     // get id and reference from local storage using dcrypDetails() module.
        console.log(clientId);

        if (clientId) {
            fetchDataPrimary(primaryApplicantNameUrl + clientId)
            
            // fetchDataJoint(jointApplicantNameUrl + clientId)
        }

        console.log(`${idRef.decryptedID}`)
        fetchDataPrimary(primaryApplicantNameUrl + idRef.decryptedID)

        // fetchDataJoint(jointApplicantNameUrl + idRef.decryptedID)
        } catch (error) {
            console.log(error)
        }        

    }, [])

    const gotoUpdateContactPage = () => {
        setShowAccountPage(false);
        setShowJointApplicantPage(false);
        setShowMemberEditPage(false);
        setShowMemberListPage(false);
        setShowUpdateContactPage(true);
        setShowUpdateLoginPage(false);
        setShowJointApplicantEditPage(false);
        setShowHouseholdMemberPage(false);
    }

    const gotoUpdateLoginPage = () => {
        // navigate('/updatelogin');
        setShowAccountPage(false);
        setShowJointApplicantPage(false);
        setShowMemberEditPage(false);
        setShowMemberListPage(false);
        setShowUpdateContactPage(false);
        setShowUpdateLoginPage(true);
        setShowJointApplicantPage(false);
        setShowHouseholdMemberPage(false);
        setShowJointApplicantEditPage(false);
    }

    const gotoJointApplicant = async () => {

        try {

            console.log(`${jointExistUrl} In fetch data`)
            const clientIdExist = await axios.get(jointExistUrl, {})
            console.log(clientIdExist.data)

            if (clientIdExist.data.jointApplicantDetails) {

                console.log('Iam in edit joint applicant')

                setShowAccountPage(false);
                setShowJointApplicantPage(false);
                setShowJointApplicantEditPage(true);
                setShowMemberEditPage(false);
                setShowMemberListPage(false);
                setShowUpdateContactPage(false);
                setShowUpdateLoginPage(false);
                setShowHouseholdMemberPage(false);
            } else {
                console.log('Iam in new joint applicant')

                setShowAccountPage(false);
                setShowJointApplicantPage(true);
                setShowJointApplicantEditPage(false);
                setShowMemberEditPage(false);
                setShowMemberListPage(false);
                setShowUpdateContactPage(false);
                setShowUpdateLoginPage(false);
                setShowHouseholdMemberPage(false);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const gotoAccount = () => {
        setShowAccountPage(true);
        setShowJointApplicantPage(false);
        setShowMemberEditPage(false);
        setShowMemberListPage(false);
        setShowUpdateContactPage(false);
        setShowJointApplicantEditPage(false);
        setShowHouseholdMemberPage(false);
        setShowUpdateLoginPage(false);
    }

    const gotoMembersList = async () => {

        try {
                console.log(`${memmberExistUrl + clientId} In fetch data`)
                const clientIdExist = await axios.get(memmberExistUrl)
                console.log(`${clientIdExist.data.message}, ${clientId}`)
                if (!clientIdExist.data.clientId) {
                    setShowAccountPage(false);
                    setShowJointApplicantPage(false);
                    setShowMemberEditPage(false);
                    setShowMemberListPage(true);
                    setShowUpdateContactPage(false);
                    setShowJointApplicantEditPage(false);
                    setShowHouseholdMemberPage(false);
                    setShowUpdateLoginPage(false);
    
                } else {
                    setShowAccountPage(false);
                    setShowJointApplicantPage(false);
                    setShowMemberEditPage(false);
                    setShowMemberListPage(false);
                    setShowUpdateContactPage(false);
                    setShowJointApplicantEditPage(false);
                    setShowUpdateLoginPage(false);
                    setShowHouseholdMemberPage(true);
                }
    
            } catch (error) {
                console.log(error)
            }

    }

    const logout = () => {
        window.localStorage.removeItem('cref')
        navigate('/login');
    }

    return (
        <React.Fragment>
            <Navbar loginStatus={true}></Navbar>
            <NavbarSecondary loginStatus={true}></NavbarSecondary>
            <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                <MDBCol className='col-lg-8 col-md-8 col-sm-8'>
                    {
                        showAccountPage && <AccountLeft />
                    }
                    {
                        showJointApplicantPage && <JointApplicant />
                    }
                    {
                        showJointApplicantEditPage && <JointApplicantEdit />
                    }
                    {
                        showHouseholdMemberPage && <HouseholdMember />
                    }
                    {
                        showMemberListPage && <MembersList />
                    }
                    {
                        // showMemberEditPage && <MemberEdit />
                    }
                    {
                        showUpdateContactPage && <UpdateContact />
                    }
                    {
                        showUpdateLoginPage && <UpdateLogin />
                    }

                </MDBCol>
                <MDBCol className='col-lg-4 col-md-4 col-sm-4'>
                    <React.Fragment>
                        {
                            <MDBContainer className='pe-5 pt-3' >
                                <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                                    <div style={{ backgroundColor: '#b0cce3' }} className="list-group-item list-group-item-primary">
                                        <p style={{ color: 'black' }} ><strong>{clientName} </strong></p>
                                        <p style={{ color: 'black' }} ><strong>{jointName} </strong></p>
                                    </div >
                                </MDBRow>
                                <MDBRow >
                                    <MDBCol>
                                        <MDBBtn className='btn btn-lg' style={styleBtn} color='tertiary'
                                            onClick={gotoAccount}> My Account </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow >
                                    <MDBCol>
                                        <MDBBtn className='btn btn-lg' style={styleBtn} color='tertiary' > My Messages </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow >
                                    <MDBCol>
                                        <MDBBtn style={styleBtn} color='tertiary' > My bids </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow >
                                    <MDBCol>
                                        <MDBBtn style={styleBtn} color='tertiary'
                                            onClick={gotoJointApplicant} > My Partner </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow >
                                    <MDBCol>
                                        <MDBBtn style={styleBtn} color='tertiary'
                                            onClick={gotoMembersList} > My Members </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow >
                                    <MDBCol style={styleBorder}>
                                        <MDBBtn style={styleBtn} color='tertiary'
                                            onClick={logout}  >
                                            <MDBIcon style={styleBtn} fas icon={iconRight} /> Logout </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow >
                                    <p><strong>My contact details</strong> Id:- {clientId}</p>
                                    <p style={{ margin:'0', fontSize: '14px', fontWeight: 'bold', textTransform: 'none' }} >{addressLine1}</p>
                                    <p style={{ margin:'0', fontSize: '14px', fontWeight: 'bold', textTransform: 'none' }} >{addressLine2}</p>
                                    <p style={{ margin:'0', fontSize: '14px', fontWeight: 'bold', textTransform: 'none' }} >{addressLine3}</p>
                                    <p style={{ margin:'0', fontSize: '14px', fontWeight: 'bold', textTransform: 'none' }} >{addressLine4}</p>
                                    <p style={{ margin:'0', fontSize: '14px', fontWeight: 'bold', textTransform: 'none' }} >{postcode}</p>
                                </MDBRow>
                                <MDBRow >
                                    <MDBCol>
                                        <MDBBtn style={styleBtn} color='tertiary'
                                            onClick={gotoUpdateContactPage}>
                                            Update contact details
                                        </MDBBtn>
                                    </MDBCol>
                                    <MDBCol>
                                        <MDBBtn style={styleBtn} color='tertiary'
                                            onClick={gotoUpdateLoginPage}>
                                            Update your login details
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBRow>

                                <MDBRow style={{ backgroundColor: '#f7f2f287', textTransform: 'none' }}
                                    className='my-3 justify-content-center' bgcolor='#f7f2f287'>

                                </MDBRow>
                            </MDBContainer>
                        }
                    </React.Fragment>
                </MDBCol>
            </MDBRow>
            <Footer />

        </React.Fragment>
    );
}