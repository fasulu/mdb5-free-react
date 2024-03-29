import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../userContext/UserContext"

import {
    MDBIcon,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBTypography
} from 'mdb-react-ui-kit';

import AccountLeft from '../components/accountLeft';
import Navbar from '../components/Navbar';
import NavbarSecondary from '../components/NavbarSecondary';
import Footer from '../components/footer';
import MembersList from '../components/membersList';
import UpdateContact from '../components/updateContact';
import UpdateLogin from '../components/updateLogin';
import JointApplicant from '../components/jointApplicant';
import JointApplicantEdit from '../components/jointApplicantEdit';
import HouseholdMember from '../components/householdMember';
import BidAndPropety from '../components/bidAndProperty';

import { ToCamelCase } from '../validations/Validator';
import { decryptDetails } from '../utility/hashDetails';
import SearchOptions from '../components/searchOptions';
import MyToDoList from '../components/myToDoList';
import MyMessages from '../components/myMessages';

import PopUp from '../components/popUp';
import SaveErrDetail from '../utility/saveErrDetail';
import { refreshPage } from '../utility/refreshPage';

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
    const [showBidPage, setShowBidPage] = useState(false);
    const [showSearchPage, setShowSearchPage] = useState(false);
    const [showToDoPage, setShowToDoPage] = useState(false);
    const [showMyMessagePage, setShowMyMessagePage] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const primaryApplicantNameUrl = "http://localhost:9001/client/clientid/";
    const jointApplicantNameUrl = "http://localhost:9001/joint/clientid/";
    const memmberExistUrl = "http://localhost:9001/member/clientid/" + clientId;
    const jointExistUrl = "http://localhost:9001/joint/clientid/" + clientId;

    const [loginReference, setLoginReference] = useState();
    // const [clientName, setClientName] = useState(location.state.clientName);
    const [clientName, setClientName] = useState();
    const [jointName, setJointName] = useState();
    const [postcode, setPostcode] = useState();
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [addressLine3, setAddressLine3] = useState("");
    const [addressLine4, setAddressLine4] = useState();

    const styleBtn = { margin: '0px', fontSize: '14px', color: '#4f83c3', textTransform: 'none' };

    const styleBorder = { color: '#4f83c3', borderTop: '1px solid #d7cdcd', borderBottom: '1px solid #d7cdcd' };
    const addressStyle = { margin: '0', fontSize: '14px', fontWeight: 'bold', textTransform: 'none' };

    const iconRight = "fa-solid fa-caret-right";

    const [showInfoModal, setShowInfoModal] = useState(false);
    const [modalInfo, setModalInfo] = useState("");

    useEffect(() => {

        try {
            console.log(`Im in accountPage useEffect`)
            const idRef = decryptDetails();     // get id and reference from local storage using dcrypDetails() module.
            setClientId(idRef.decryptedID);
            console.log(clientId);

            if (clientId) {
                fetchDataPrimary(primaryApplicantNameUrl + clientId)

                fetchDataJoint(jointApplicantNameUrl + clientId)

            } else {

                // console.log(`${idRef.decryptedID}`)
                fetchDataPrimary(primaryApplicantNameUrl + idRef.decryptedID)

                fetchDataJoint(jointApplicantNameUrl + idRef.decryptedID)
            }

        } catch (error) {

            let result = error.message;
            const errDetails = {
                error_Location: 'AcPge102',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            // console.log(response)

            setModalInfo("AcPge102: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);

            setTimeout(() => {
                navigate('/home');
            }, 3000);
        }

    }, [])

    async function fetchDataPrimary(getName) {

        // console.log(`Get name is ${getName}`)
        try {
            const response = await axios.get(getName)
            if (response) {
                // console.log(response.data)
                setClientName(ToCamelCase(response.data.clientExist.client_firstname) + " " + ToCamelCase(response.data.clientExist.client_surname));

                setAddressLine1(() => { let newVal = addressLine1; newVal = response.data.clientExist.client_address_line1; setAddressLine1(ToCamelCase(newVal)) });
                setAddressLine2(() => { let newVal = addressLine2; newVal = response.data.clientExist.client_address_line2; setAddressLine2(ToCamelCase(newVal)) });
                setAddressLine3(() => { let newVal = addressLine3; newVal = response.data.clientExist.client_address_line3; setAddressLine3(ToCamelCase(newVal)) });
                setAddressLine4(() => { let newVal = addressLine4; newVal = response.data.clientExist.client_address_line4; setAddressLine4(ToCamelCase(newVal)) });
                setPostcode(() => { let newVal = postcode; newVal = response.data.clientExist.client_postcode; setPostcode(newVal.toUpperCase()) });

            } else {
                const errDetails = {
                    error_Location: 'AcPge103: Unable to locate primary applicant name',
                    error_Detail: "\nOops! Unable to locate primary applicant name."
                }
                const response = SaveErrDetail(errDetails)
                // console.log(response)

                setModalInfo("AcPge103: \nOops! Something went wrong, please try again later.");
                setShowInfoModal(true);
                setTimeout(() => {
                    navigate('/login');
                }, 3000);

            }
        } catch (error) {

            let result = error.message;
            const errDetails = {
                error_Location: 'AcPge101',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            // console.log(response)

            setModalInfo("AcPge101: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);

            setTimeout(() => {
                navigate('/login');
            }, 3000);
        }
    }

    async function fetchDataJoint(getName) {

        // Whenever account page loaded check for make sure same 
        // applicant logged in by his/her id exist in primary client collection.
        // Verify the primary applicant is exist

        console.log(`Get name is ${getName}`)
        try {
            const response = await axios.get(getName)
            if (response.data.jointApplicantDetails) {
                console.log(response.data.jointApplicantDetails)
                setJointName(ToCamelCase(response.data.jointApplicantDetails.clientJoint_firstname) + " " + ToCamelCase(response.data.jointApplicantDetails.clientJoint_surname));

                console.log(jointName);
            } else {
                setJointName("")
            }
        } catch (error) {
            let result = error.message;
            const errDetails = {
                error_Location: 'AcPge101',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            // console.log(response)

            setModalInfo("AcPge101: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);

            setTimeout(() => {
                navigate('/login');
            }, 3000);
        }
    }

    const gotoUpdateContactPage = () => {
        setShowAccountPage(false);
        setShowJointApplicantPage(false);
        setShowMemberEditPage(false);
        setShowMemberListPage(false);
        setShowUpdateContactPage(true);
        setShowUpdateLoginPage(false);
        setShowJointApplicantEditPage(false);
        setShowHouseholdMemberPage(false);
        setShowBidPage(false);
        setShowSearchPage(false);
        setShowToDoPage(false);
        setShowMyMessagePage(false);
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
        setShowBidPage(false);
        setShowSearchPage(false);
        setShowToDoPage(false);
        setShowMyMessagePage(false);
    }

    const gotoBid = () => {
        // navigate('/updatelogin');
        setShowBidPage(true)
        setShowAccountPage(false);
        setShowJointApplicantPage(false);
        setShowMemberEditPage(false);
        setShowMemberListPage(false);
        setShowUpdateContactPage(false);
        setShowUpdateLoginPage(false);
        setShowJointApplicantPage(false);
        setShowHouseholdMemberPage(false);
        setShowJointApplicantEditPage(false);
        setShowSearchPage(false);
        setShowToDoPage(false);
        setShowMyMessagePage(false);
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
                setShowBidPage(false);
                setShowSearchPage(false);
                setShowToDoPage(false);
                setShowMyMessagePage(false);

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
                setShowBidPage(false);
                setShowSearchPage(false);
                setShowToDoPage(false);
                setShowMyMessagePage(false);

            }
        } catch (error) {
            let result = error.message;
            const errDetails = {
                error_Location: 'AcPge101',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            // console.log(response)

            setModalInfo("AcPge101: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);

            setTimeout(() => {
                refreshPage();
            }, 3000);
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
        setShowBidPage(false);
        setShowSearchPage(false);
        setShowToDoPage(false);
        setShowMyMessagePage(false);

    }

    const gotoMessages = () => {
        setShowMyMessagePage(true);
        setShowAccountPage(false);
        setShowJointApplicantPage(false);
        setShowMemberEditPage(false);
        setShowMemberListPage(false);
        setShowUpdateContactPage(false);
        setShowJointApplicantEditPage(false);
        setShowHouseholdMemberPage(false);
        setShowUpdateLoginPage(false);
        setShowBidPage(false);
        setShowSearchPage(false);
        setShowToDoPage(false);

    }

    const gotoPropertySearch = () => {
        setShowSearchPage(true);
        setShowAccountPage(false);
        setShowJointApplicantPage(false);
        setShowMemberEditPage(false);
        setShowMemberListPage(false);
        setShowUpdateContactPage(false);
        setShowJointApplicantEditPage(false);
        setShowHouseholdMemberPage(false);
        setShowUpdateLoginPage(false);
        setShowBidPage(false);
        setShowToDoPage(false);
        setShowMyMessagePage(false);

    }

    const goToDo = () => {
        setShowToDoPage(true);
        setShowSearchPage(false);
        setShowAccountPage(false);
        setShowJointApplicantPage(false);
        setShowMemberEditPage(false);
        setShowMemberListPage(false);
        setShowUpdateContactPage(false);
        setShowJointApplicantEditPage(false);
        setShowHouseholdMemberPage(false);
        setShowUpdateLoginPage(false);
        setShowBidPage(false);
        setShowMyMessagePage(false);

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
                setShowBidPage(false);
                setShowSearchPage(false);
                setShowToDoPage(false);
                setShowMyMessagePage(false);

            } else {
                setShowAccountPage(false);
                setShowJointApplicantPage(false);
                setShowMemberEditPage(false);
                setShowMemberListPage(false);
                setShowUpdateContactPage(false);
                setShowJointApplicantEditPage(false);
                setShowUpdateLoginPage(false);
                setShowHouseholdMemberPage(true);
                setShowBidPage(false);
                setShowSearchPage(false);
                setShowToDoPage(false);
                setShowMyMessagePage(false);

            }

        } catch (error) {
            let result = error.message;
            const errDetails = {
                error_Location: 'AcPge101',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            // console.log(response)

            setModalInfo("AcPge101: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);

            setTimeout(() => {
                refreshPage();
            }, 3000);
        }
    }

    const logout = () => {
        window.localStorage.removeItem('cref')
        setModalInfo("Logged out successfully");
        setShowInfoModal(true);
        setTimeout(() => {
            navigate('/home');
        }, 5000);
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
                        showUpdateContactPage && <UpdateContact />
                    }
                    {
                        showUpdateLoginPage && <UpdateLogin />
                    }
                    {
                        showBidPage && <BidAndPropety />
                    }
                    {
                        showSearchPage && <SearchOptions />
                    }
                    {
                        showToDoPage && <MyToDoList />
                    }
                    {
                        showMyMessagePage && <MyMessages />
                    }
                    {
                        showInfoModal &&
                        <PopUp
                            modalInfo={modalInfo}
                            setShowInfoModal={setShowInfoModal}>
                        </PopUp>
                    }
                </MDBCol>
                <MDBCol className='col-lg-4 col-md-4 col-sm-4'>
                    <React.Fragment>
                        {
                            <MDBContainer className='pe-5 pt-3' >
                                <MDBRow className='justify-content-center' bgcolor='#f7f2f287'>
                                    <ul style={{ backgroundColor: '#b0cce3' }}
                                        className="list-group border border-primary">
                                        <li className="list-group-item" style={{ fontSize: '19px', color: '#000000de', backgroundColor: '#f7f2f287' }} >
                                            <p style={{ margin: '0px', fontSize: '14px', color: 'blue' }}>Applicant(s)</p>
                                            <strong> {clientName} </strong> <br></br>
                                            {jointName && <strong> {jointName} </strong>}
                                        </li>
                                    </ul >
                                </MDBRow>
                                <MDBRow className='mx-1 mt-2'>
                                    <MDBCol >
                                        <MDBBtn className='btn btn-sm' style={styleBtn} color='tertiary'
                                            onClick={gotoAccount}> My Account </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className='mx-1'>
                                    <MDBCol>
                                        <MDBBtn className='btn btn-sm' style={styleBtn} color='tertiary'
                                            onClick={gotoMessages}> My Messages </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className='mx-1'>
                                    <MDBCol>
                                        <MDBBtn className='btn btn-sm' style={styleBtn} color='tertiary'
                                            onClick={gotoBid} > My bids </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className='mx-1'>
                                    <MDBCol>
                                        <MDBBtn className='btn btn-sm' style={styleBtn} color='tertiary'
                                            onClick={gotoJointApplicant} > My Partner </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className='mx-1'>
                                    <MDBCol>
                                        <MDBBtn className='btn btn-sm' style={styleBtn} color='tertiary'
                                            onClick={gotoMembersList} > My Members </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className='mx-1'>
                                    <MDBCol>
                                        <MDBBtn className='btn btn-sm' style={styleBtn} color='tertiary'
                                            onClick={goToDo} > My To Do </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className='mx-1'>
                                    <MDBCol>
                                        <MDBBtn className='btn btn-sm' style={styleBtn} color='tertiary'
                                            onClick={gotoPropertySearch}> Property Search </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className='mx-1'>
                                    <MDBCol style={styleBorder}>
                                        <MDBBtn style={styleBtn} color='tertiary'
                                            onClick={(e) => { if (window.confirm("Log Out?")) logout(e) }}  >
                                            <MDBIcon style={styleBtn} fas icon={iconRight} /> Logout </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    {/* <p style={{visibility:'hidden'}}>Id:- {clientId}</p> */}
                                    <p className='mt-2 mb-1 text-decoration-underline'><strong>My contact details</strong> </p>
                                    <p className='mx-3' style={addressStyle} >{addressLine1}</p>
                                    <p className='mx-3' style={addressStyle} >{addressLine2}</p>
                                    <p className='mx-3' style={addressStyle} >{addressLine3}</p>
                                    <p className='mx-3' style={addressStyle} >{addressLine4}</p>
                                    <p className='mx-3' style={addressStyle} >{postcode}</p>
                                </MDBRow>
                                <MDBRow >
                                    <MDBCol className='col-lg-6 col-md-6 col-sm-6'>
                                        <MDBBtn style={styleBtn} color='tertiary'
                                            onClick={gotoUpdateContactPage}>
                                            Update contact detail
                                        </MDBBtn>
                                    </MDBCol>
                                    <MDBCol className='col-lg-6 col-md-6 col-sm-6'>
                                        <MDBBtn style={styleBtn} color='tertiary'
                                            onClick={gotoUpdateLoginPage}>
                                            Update login detail
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