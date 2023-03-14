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

import { validNINO } from '../validations/Validator';
import AccountRight from '../components/accountRight';
import AccountLeft from '../components/accountLeft';
import Navbar from '../components/Navbar';
import NavbarSecondary from '../components/NavbarSecondary';
import Footer from '../components/footer';
import JointApplicant from '../components/jointApplicant';
import MemberEdit from '../components/memberEdit';
import MembersList from '../components/membersList';
import UpdateContact from '../components/updateContact';
import UpdateLogin from '../components/updateLogin';
import JointApplicantEdit from '../components/jointApplicantEdit';
import HouseholdMember from '../components/householdMember';
import { decryptDetails } from '../utility/hashDetails';

export default function AccountPage() {

    const { clientId, setClientId } = useContext(UserContext);
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

    console.log(clientId);

    const [clientName, setClientName] = useState();

    const styleBtn = { fontSize: '13px', color: '#4f83c3', textTransform: 'none' };

    const styleBorder = { color: '#4f83c3', borderTop: '1px solid #d7cdcd', borderBottom: '1px solid #d7cdcd' };

    const iconRight = "fa-solid fa-caret-right";

    const logInOutBtn = () => {
        var btn = window.document.getElementById('LogInOutBtn');
        btn.innerText = btn.textContent = 'Log Out';
    }

    const hideRegisterBtn = () => {
        window.document.getElementById('RegisterBtn').style.visibility='hidden';
    }

    async function fetchData(getName) {

        // Whenever account page loaded check for make sure same 
        // applicant logged in by his/her id exist in primary client collection.
        // Verify the primary applicant is exist

        console.log(`Get name is ${getName}`)
        try {
            const response = await axios.get(getName)
            if (response) {
                console.log(response.data)
                setClientName(response.data.clientExist.client_firstname + " " + response.data.clientExist.client_surname);

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

    useEffect(() => {

        if (clientId) {
            fetchData(primaryApplicantNameUrl + clientId)
        }

        const id = decryptDetails();

        console.log(`${id}`)
        fetchData(primaryApplicantNameUrl + id)
        setClientId(id);

        logInOutBtn();
        hideRegisterBtn();

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

            if (clientIdExist.data) {

                console.log('Iam in edit joint applicant' + clientIdExist.data.jointApplicantDetails.clientId)

                setShowAccountPage(false);
                setShowJointApplicantPage(false);
                setShowJointApplicantEditPage(true);
                setShowMemberEditPage(false);
                setShowMemberListPage(false);
                setShowUpdateContactPage(false);
                setShowUpdateLoginPage(false);
                setShowHouseholdMemberPage(false);
            } else {
                console.log('Iam in new joint applicant' + clientIdExist.data.jointApplicantDetails.clientId)

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
            if (clientIdExist.data.clientId) {
                setShowAccountPage(false);
                setShowJointApplicantPage(false);
                setShowMemberEditPage(false);
                setShowMemberListPage(false);
                setShowUpdateContactPage(false);
                setShowJointApplicantEditPage(false);
                setShowHouseholdMemberPage(true);
                setShowUpdateLoginPage(false);

            } else {
                setShowAccountPage(false);
                setShowJointApplicantPage(false);
                setShowMemberEditPage(false);
                setShowMemberListPage(true);
                setShowUpdateContactPage(false);
                setShowJointApplicantEditPage(false);
                setShowUpdateLoginPage(false);
                setShowHouseholdMemberPage(false);
            }

        } catch (error) {

        }
    }

    const logout = () => {
        navigate('/login');
    }

    return (
        <React.Fragment>
            <Navbar />
            <NavbarSecondary />
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
                        showMemberEditPage && <MemberEdit />
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
                                        <p style={{ fontSize: '12px', color: 'black' }} ><strong>{clientId}</strong></p>
                                        <p style={{ color: 'black' }} ><strong>{clientName} </strong></p>
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
                                    <p><strong>My contact details</strong></p>
                                    <p style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'none' }} >Address</p>
                                    <p style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'none' }} >Contact details</p>
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