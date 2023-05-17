import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";

import BtnAccept from './btnAccept.jsx';
import PopUp from './popUp';
import { ConvertToDate, ConvertToTimeStamp } from '../utility/dateConvertion';

import { UserContext } from "../userContext/UserContext.jsx"

import {
    MDBContainer,
    MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText,
    MDBCardFooter,
    MDBCol,
    MDBTypography,
    MDBBadge,
    MDBRow
} from 'mdb-react-ui-kit';

import { ToCamelCase } from '../validations/Validator.jsx'
import { refreshPage } from '../utility/refreshPage.js';
import { decryptDetails } from '../utility/hashDetails';
import { ConvertToLocalDate } from '../utility/dateConvertion.jsx';

import closeIcon from "../../src/resources/images/close.png";
import markAsReadIcon from "../../src/resources/images/tick.png";

import mailOpen from "../../src/resources/images/mail-open.png";
import mailClose from "../../src/resources/images/mail-close.png";

export default function MyMessages() {

    const { clientId, setClientId } = useContext(UserContext);

    const messageListUrl = "http://localhost:9001/message/listmsg/";
    const messageUpdateUrl = "http://localhost:9001/message/updatemsg/";

    // const todayDate = ()=>{let date_ = new Date(); date_ = date_.toLocaleString('en-GB', { timeZone: 'UTC' })}

    const closeInfoTitle = "Close";
    const markAsReadTitle = "Mark as read";
    const closeMailTitle = "New message";
    const openMailTitle = "Read";
    const msgHeader = { color: 'black', fontSize: '22px', borderBottom: '2px solid #d7cdcd' };
    const tableHead = { padding: '5px', border: '1px solid #e3ebf7', backgroundColor: '#d2e1e9', fontSize: '16px', textAlign: 'center', color: 'black' };

    const [myMessages, setMyMessages] = useState([]);

    const [showMessageDetails, setShowMessageDetails] = useState(false);
    const [showListMessageDetails, setShowListMessageDetails] = useState(false);

    const [_id, set_id] = useState("");
    const [Date_, setDate_] = useState("");
    const [Subject_, setSubject_] = useState("");
    const [From_, setFrom_] = useState("");
    const [message_, setMessage_] = useState("");
    const [status_, setStatus_] = useState("");

    const [showInfoModal, setShowInfoModal] = useState(false);
    const [modalInfo, setModalInfo] = useState("");

    useEffect(() => {
        fetchData();

    }, [])

    async function fetchData() {
        try {
            const idRef = decryptDetails();     // get id and reference from local storage using dcrypDetails() module.
            console.log(idRef)
            setClientId(idRef.decryptedID);     // get id and reference from local storage using dcrypDetails() module.
            console.log(clientId);

            if (!clientId) {
                setModalInfo('Unable to identify client');
                setShowInfoModal(true);
            } else {

                console.log(messageListUrl + idRef.decryptedID)
                const response = await axios.get(messageListUrl + idRef.decryptedID)
                console.table(`list of messages ${response.data.Status_Reply}`)

                if (response) {

                    console.log(`To do response from backend:- ${response.data.message}`)
                    setMyMessages(response.data.MessageList)
                    console.log(`list of members ${response.data}`)
                    setShowListMessageDetails(true)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSelectedMessage = (e, selectedMsg) => {
        set_id(selectedMsg._id)
        setDate_(ConvertToLocalDate(selectedMsg.messageDate))
        setSubject_(selectedMsg.messageSubject)
        setFrom_(selectedMsg.messageFrom)
        setMessage_(selectedMsg.message)
        setStatus_(selectedMsg.messageStatus);

        setShowMessageDetails(true);

        // Below is to show message information in popUp component, need few tinkering to work 
        // setModalInfo(`Message:- ${selectedMsg.message}`);
        // setShowInfoModal(true);

    }

    const markAsRead = async (e) => {
        e.preventDefault()

        try {
            console.log("Iam in update markasread")

            const messageInfo = {
                clientId: clientId,
                messageStatus: true
            }
            const response = await axios.put(messageUpdateUrl + _id, messageInfo)
            if (response) {
                console.log(response.data.message);

                refreshPage();
            } else {
                setModalInfo(response.data.Status_Reply);
                setShowInfoModal(true);
            }
        } catch (error) {
            console.log(error)
            setModalInfo(response.data.Status_Reply);
            setShowInfoModal(true);
        }
    }

    const closeMsgBox = (e) => {
        e.preventDefault();
        setShowMessageDetails(false)
    }

    const ShowMsgDetails = (
        <React.Fragment>
            <MDBContainer className='ps-5 pt-3 overlay' autoFocus={true} >
                <MDBCard alignment='center' shadow='0' border='info' background='white' className='mb-3'>
                    <MDBCardHeader><strong> {Subject_} </strong>
                        <img src={closeIcon} style={{ cursor: 'pointer', maxWidth: '25px', float: 'right' }}
                            alt={closeInfoTitle} title={closeInfoTitle} onClick={(e) => { closeMsgBox(e) }} />
                        <img src={markAsReadIcon} style={{ cursor: 'pointer', maxWidth: '25px', float: 'left' }}
                            alt={markAsReadTitle} title={markAsReadTitle} onClick={(e) => { markAsRead(e) }} />
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle></MDBCardTitle>
                        <MDBCardText>{message_}</MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter>
                        <MDBRow>
                            <MDBCol>
                                <strong> {Date_} </strong>
                            </MDBCol>
                            <MDBCol>
                                <strong> {From_} </strong>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardFooter>
                </MDBCard>
            </MDBContainer >
        </React.Fragment>
    )

    const ShowListMessages = (
        <React.Fragment>
            <MDBCardBody >
                <MDBRow className='mx-1'>
                    <MDBCol style={tableHead} className='col-lg-1 col-md-1 col-sm-1 d-none d-sm-block' md='1'>S/N </MDBCol>
                    <MDBCol style={tableHead} className='col-lg-2 col-md-2 col-sm-2 d-none d-sm-block' md='1'>Status </MDBCol>
                    <MDBCol style={tableHead} className='col-lg-2 col-md-2 col-sm-2 d-none d-sm-block' md='2'>Date </MDBCol>
                    <MDBCol style={tableHead} className='col-lg-3 col-md-3 col-sm-3 d-none d-sm-block' md='3'>From </MDBCol>
                    <MDBCol style={tableHead} className='col-lg-4 col-md-4 col-sm-4 d-none d-sm-block' md='4'>Subject </MDBCol>
                </MDBRow>
                {myMessages.map((myMessage, index) => (

                    <div key={index}
                        className='d-flex justify-content-between py-1 border-bottom border-rounded' 
                        style={{cursor:'progress'}} title={myMessage.message}>
                        <MDBCol className='col-lg-1 col-md-1 col-sm-1 text-center' >
                            {<span className='mx-2' >{index + 1}</span>}
                        </MDBCol>
                        <MDBCol className='col-lg-2 col-md-2 col-sm-2 text-center' >
                            <MDBBadge light style={{ backgroundColor: '#ffffff', cursor: 'pointer', fontSize: '16px' }}
                                onClick={(e) => { handleSelectedMessage(e, myMessage) }}>
                                {
                                    myMessage.messageStatus
                                        ?
                                        <img src={mailOpen} style={{ cursor: 'pointer', maxWidth: '19px', float: 'right' }}
                                            alt={openMailTitle} title={openMailTitle} />
                                        :
                                        <img src={mailClose} style={{ cursor: 'pointer', maxWidth: '19px', float: 'right' }}
                                            alt={closeMailTitle} title={closeMailTitle} />
                                }
                            </MDBBadge>
                        </MDBCol>
                        <MDBCol className='col-lg-2 col-md-2 col-sm-2'>
                            {ConvertToLocalDate(myMessage.messageDate)}
                        </MDBCol>
                        <MDBCol className='col-lg-3 col-md-3 col-sm-3'>
                            {ToCamelCase(myMessage.messageFrom)}
                        </MDBCol>
                        <MDBCol className='col-lg-4 col-md-4 col-sm-4'>
                            {ToCamelCase(myMessage.messageSubject)}
                        </MDBCol>
                    </div>
                ))}
            </MDBCardBody>
        </React.Fragment>
    )

    return (
        < React.Fragment >
            <MDBCard className='w-100 mx-auto ps-4 pt-4' style={{ backgroundColor: '#f7f2f287' }} >
                <MDBTypography component={'div'} className='card-header'
                    style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} >
                    <strong>My Messages</strong>
                </MDBTypography>
            </MDBCard>
            {
                showMessageDetails && ShowMsgDetails
            }

            {
                showListMessageDetails && ShowListMessages
            }

            {/* the below popup code has been deactivated due to malfunction, will fix later */}
            {
                showInfoModal && <PopUp modalInfo={modalInfo} setShowInfoModal={setShowInfoModal}></PopUp>
            }
        </React.Fragment >
    );
}
