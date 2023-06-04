import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

import BtnAccept from './btnAccept.jsx'

import { UserContext } from "../userContext/UserContext.jsx"

import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBRipple, MDBBtn, MDBIcon,
    MDBTypography,
    MDBRow, MDBCol,
    MDBCardImage,
    MDBTable, MDBTableHead, MDBTableBody
} from 'mdb-react-ui-kit';

import { ToCamelCase } from '../validations/Validator.jsx'
import { ConvertToTimeStamp } from '../utility/dateConvertion.jsx';
import PopUp from './popUp.js';
import { refreshPage } from '../utility/refreshPage.js';

import bidIcon from '../../src/resources/images/bid.png'
import houseIcon from '../../src/resources/images/house.png'
import SaveErrDetail from '../utility/saveErrDetail.jsx';

export default function BidAndProperty() {

    const { clientId, setClientId } = useContext(UserContext);

    const navigate = useNavigate();

    var date_ = "";
    const propertyListUrl = "http://localhost:9001/property/list/";
    const clientBidListUrl = "http://localhost:9001/bid/clientid/";
    const propertyBidUrl = "http://localhost:9001/client/bid/";
    const getBidUrl = "http://localhost:9001/bid/property/position/";
    const propertyIdUrl = "http://localhost:9001/property/propertyid/";
    const withdrawnBidUrl = "http://localhost:9001/property/bid/withdraw/";
    const msgLoginDetailUrl = "http://localhost:9001/message/newmsg/";

    const todayDate = new Date().toJSON(); // produces 2023-05-17T11:06:51.369Z
    // const todayDate = new Date().toISOString().slice(0, 10); // produces 2023-02-25

    const msgDate_ = ConvertToTimeStamp(new Date().toISOString().slice(0, 10));
    const msgSubject_ = "Bid information"
    const From_ = "Housing Department"
    const bidMessage_ = "Your bid has been placed successfully. This is an auto-generated message, do not reply or request any detail."
    const withdrawBidMessage_ = "Your bid has been withdrawn successfully. This is an auto-generated message, do not reply or request any detail."

    const headStyle = { fontSize: 'clamp(18px, 2.5vw, 20px)', backgroundColor: '#dcdcdc' };
    const labelStyle = { fontSize: '16px', width: '250px', color: '#464646' };
    const styleIcon = { fontSize: '20px', color: '#6e1583', textTransform: 'none', marginRight: '5px' };
    const inputStyle = { fontSize: '17px', width: 'auto', float: 'left' };

    const bidListHeader = { color: 'black', fontSize: '22px', borderBottom: '2px solid #d7cdcd' };
    const bidTableHead = { border: '1px solid #e3ebf7', backgroundColor: '#d2e1e9', fontSize: '16px', textAlign: 'center', color: 'black' };
    const bidRow = { paddingLeft: '25px', textAlign: 'center' };
    const bidDataRow = { cursor: 'pointer', fontWeight: 'bold', color: '#3737dd', textDecorationLine: 'underline' }

    const bidHeaderStyle = { fontSize: '18px', color: '#0a0a0a' };
    const bidDataStyle = { fontSize: '14px', fontWeight: 'bold', color: '#060846' };

    const bidIconTitle = "Bid on property";
    const propertyIconTitle = "View property list";

    const [propertyList, setPropertyList] = useState([]);
    const [bidList, setBidList] = useState([]);

    const [showOption, setShowOption] = useState(true);
    const [showPropertyList, setShowPropertyList] = useState(false);
    const [showBidList, setShowBidList] = useState(false);
    const [showProperty, setShowProperty] = useState(false);
    const [bidOnThisProperty, setBidOnThisProperty] = useState(false);
    const [selectedPropertyBidStatus, setSelectedPropertyBidStatus] = useState(false)

    const [_id, set_id] = useState("");
    const [propertyId, setPropertyId] = useState("");
    const [advertType, setAdvertType] = useState("");
    const [type, setType] = useState("");
    const [address, setAddress] = useState("");
    const [town, setTown] = useState("");
    const [postcode, setPostcode] = useState("");
    const [bedRoom, setBedRoom] = useState("");
    const [bathRoom, setBathRoom] = useState("");
    const [reception, setReception] = useState("");
    const [cTaxBand, setCTaxBand] = useState("");
    const [tenancyType, setTenancyType] = useState("");
    const [availableFrom, setAvailableFrom] = useState("");
    const [furnished, setFurnished] = useState("");
    const [parking, setParking] = useState("");
    const [garage, setGarage] = useState("");
    const [garden, setGarden] = useState("");
    const [patio, setPatio] = useState("");
    const [floor, setFloor] = useState("");
    const [kitchenFitted, setKitchenFitted] = useState("");
    const [deposit, setDeposit] = useState("");
    const [fees, setFees] = useState("");
    const [rent, setRent] = useState("");
    const [pets, setPets] = useState("");
    const [imageUrl, setImageUrl] = useState("src\resources\images\house.png");
    const [comments, setComments] = useState("");

    const [searchProperty, setSearchProperty] = useState("");

    const [showInfoModal, setShowInfoModal] = useState(false);
    const [modalInfo, setModalInfo] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {

        console.log("Iam in useEffect fetchData")

        try {

            if (!clientId) {

                setModalInfo('Bid101: Unable to identify client');
                setShowInfoModal(true);
                setTimeout(() => {
                    navigate('/home');
                }, 5000);
            }
        } catch (error) {

            let result = error.message;
            const errDetails = {
                error_Location: 'Bid101',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            // console.log(response)

            setModalInfo("Bid101: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);

            setTimeout(() => {
                navigate('/home');
            }, 3000);
        }
    }

    const propertyForBidList = async (e) => {

        console.log("Iam in propertyForBidList")

        try {

            const response = await axios.get(propertyListUrl)

            if (response.data.PropertyList.length > 0) {

                // console.log(`Response from backend:- ${response.data.message}`)
                setPropertyList(response.data.PropertyList)
                // console.log(`list of property ${response.data}`)
                setShowPropertyList(true)
            } else {
                setModalInfo('No new properties');
                setShowInfoModal(true);
                setTimeout(() => {
                    refreshPage()
                }, 2000);

                setShowOption(true);
                setShowPropertyList(false);
                setShowBidList(false);
                setShowProperty(false);
            }
        } catch (error) {
            let result = error.message;
            const errDetails = {
                error_Location: 'Bid103',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails);
            // console.log(response)

            setModalInfo("Bid103: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const handleBid = async (property) => {

        console.log("Iam in handleBid", property)

        try {
            const bidInfo = {
                clientId: clientId,
                propertyId: property,
                bidDate: todayDate,
                bidPosition: 1
            }
            // console.log(bidInfo);

            const response = await axios.post(propertyBidUrl, bidInfo)
            if (response.data) {
                // console.log(response.data.message);
                // console.log(response.data.Status_Reply);
                // console.log(response.data.BidInfo);
                setModalInfo(response.data.Status_Reply);
                setShowInfoModal(true);
                setTimeout(() => {
                    refreshPage()
                }, 2000);

                const messageInfo = {
                    clientId: clientId,
                    messageDate: msgDate_,
                    messageSubject: msgSubject_,
                    messageFrom: From_,
                    message: bidMessage_,
                    messageStatus: false
                }
                const result = sendMessage(messageInfo);

            } else {
                setModalInfo(response.data.Status_Reply);
                setShowInfoModal(true);
                setTimeout(() => {
                    refreshPage();
                }, 2000);
            }
        } catch (error) {
            let result = error.message;
            const errDetails = {
                error_Location: 'Bid104',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails);
            // console.log(response)

            setModalInfo("Bid104: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const myBids = async () => {

        console.log('Im in myBids')

        try {

            const response = await axios.get(clientBidListUrl + clientId)

            if (response.data.BidList.length > 0) {

                // console.log(`Response from backend:- ${response.data.message}`)
                setBidList(response.data.BidList)
                // console.table(`list of bids ${response.data.BidList}`)
                setShowPropertyList(false);
                setShowBidList(true);
                setShowOption(false);
                setShowProperty(false);
            } else {
                setShowPropertyList(false);
                setShowBidList(false);
                setShowProperty(false);
                setShowOption(true);

            }
        } catch (error) {
            let result = error.message;
            const errDetails = {
                error_Location: 'Bid105',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails);
            // console.log(response)

            setModalInfo("Bid105: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const handleWithdrawBid = async (e) => {
        e.preventDefault();

        console.log('Im in handleWithdrawBid');

        try {
            // console.log(withdrawnBidUrl + propertyId)
            const response = await axios.delete(withdrawnBidUrl + propertyId);

            if (response.data) {
                // console.log(response.data.Status_Reply)
                setModalInfo(response.data.Status_Reply);
                setShowInfoModal(true);
                setTimeout(() => {
                    refreshPage()
                }, 2000);

                const messageInfo = {
                    clientId: clientId,
                    messageDate: msgDate_,
                    messageSubject: msgSubject_,
                    messageFrom: From_,
                    message: withdrawBidMessage_,
                    messageStatus: false
                }
                const result = sendMessage(messageInfo);

            } else {
                // console.log(response.data.message)
                setModalInfo(response.data.Status_Reply);
                setShowInfoModal(true);
                setTimeout(() => {
                    refreshPage()
                }, 2000);
            }

        } catch (error) {
            let result = error.message;
            const errDetails = {
                error_Location: 'Bid106',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails);
            // console.log(response)

            setModalInfo("Bid106: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const reviewThisProperty = async (propertyId) => {

        console.log('Im in reviewThisProperty', propertyId);

        try {
            const response = await axios.get(getBidUrl + propertyId)
            // console.table(response.data.BidInfo)
            if (response.data.BidInfo) {
                setSelectedPropertyBidStatus(true);
                setBidOnThisProperty(false);
            } else {
                setBidOnThisProperty(true);
                setSelectedPropertyBidStatus(false);
            }
        } catch (error) {
            let result = error.message;
            const errDetails = {
                error_Location: 'Bid107',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails);

            setModalInfo("Bid107: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);

        }
        try {
            // console.log(propertyIdUrl + propertyId)

            const response = await axios.get(propertyIdUrl + propertyId)
            // console.log(`Response from backend:- ${response.data.message}`)

            if (response.data.Status_Reply === "Success") {

                // console.log(`Response from backend:- ${response.data.message}`)

                set_id(response.data.PropertyInfo._id);
                setPropertyId(response.data.PropertyInfo.propertyId);
                setAdvertType(response.data.PropertyInfo.advertType);
                setType(response.data.PropertyInfo.type);
                setAddress(response.data.PropertyInfo.address);
                setTown(response.data.PropertyInfo.town);
                setPostcode(response.data.PropertyInfo.postcode);
                setBedRoom(response.data.PropertyInfo.bedRoom);
                setBathRoom(response.data.PropertyInfo.bathRoom);
                setReception(response.data.PropertyInfo.reception);
                setCTaxBand(response.data.PropertyInfo.cTaxBand);
                setTenancyType(response.data.PropertyInfo.tenancyType);
                setAvailableFrom(response.data.PropertyInfo.availableFrom);
                setFurnished(response.data.PropertyInfo.furnished);
                setParking(response.data.PropertyInfo.parking);
                setGarage(response.data.PropertyInfo.garage);
                setGarden(response.data.PropertyInfo.garden);
                setPatio(response.data.PropertyInfo.patio);
                setFloor(response.data.PropertyInfo.floor);
                setKitchenFitted(response.data.PropertyInfo.kitchenFitted);
                setDeposit(response.data.PropertyInfo.deposit);
                setFees(response.data.PropertyInfo.fees);
                setRent(response.data.PropertyInfo.rent);
                setPets(response.data.PropertyInfo.pets);
                setImageUrl(response.data.PropertyInfo.imageUrl);
                setComments(response.data.PropertyInfo.comments);

                setShowProperty(true);
                setShowPropertyList(false);
                setShowBidList(false);
                setShowOption(false);

            } else {
                setModalInfo(response.data.message);
                setShowInfoModal(true);
                setTimeout(() => {
                    refreshPage()
                }, 2000);

                setShowProperty(false);
                setShowPropertyList(false);
                setShowBidList(false);
                setShowOption(true);

            }
        } catch (error) {
            let result = error.message;
            const errDetails = {
                error_Location: 'Bid107',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails);
            // console.log(response)

            setModalInfo("Bid107: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const sendMessage = async (messageInfo) => {

        console.table("Iam in send message")

        try {
            // console.table(messageInfo)

            const response = await axios.post(msgLoginDetailUrl, messageInfo)
            if (response) {
                // console.log(response.data.Status_Reply);
                return response.data.Status_Reply;
            } else {
                return response.data.Status_Reply;
            }
        } catch (error) {
            let result = error.message;
            const errDetails = {
                error_Location: 'Bid108',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails);
            // console.log(response)

            setModalInfo("Bid108: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const gotoAccountPage = (e) => {
        setModalInfo('Cancelled')
        setShowInfoModal(true);
        setTimeout(() => {
            refreshPage();
        }, 2000);
    }

    const OptionSelect = (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto ps-4 pt-4' style={{ backgroundColor: '#f7f2f287' }} >
                <MDBTypography component={'div'} className='card-header'
                    style={headStyle} >
                    <strong>Bid and Property</strong>
                </MDBTypography>
                <MDBCardBody className='d-flex justify-content-center'>
                    <MDBRow>
                        <MDBCol className='size-md mx-2'>
                            <MDBRow>
                                <MDBRipple
                                    className='bg-image hover-overlay shadow-0-strong'
                                    rippleTag='div'
                                    rippleColor='light' >
                                    <img src={bidIcon} style={{ maxWidth: '100px' }} alt={bidIconTitle} title={bidIconTitle} />
                                    <a href='#!'>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                            onClick={(e) => { setShowBidList(true); setShowPropertyList(false); setShowProperty(false); setShowOption(false); myBids() }}>
                                        </div>
                                    </a>
                                </MDBRipple>
                            </MDBRow>
                            <MDBRow>
                                <MDBTypography component={'div'} style={{ textAlign: 'center', paddingTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>
                                    My Bids
                                </MDBTypography>
                            </MDBRow>
                        </MDBCol>

                        <MDBCol className='size-md'>
                            <MDBRow>
                                <MDBRipple
                                    className='bg-image hover-overlay shadow-0-strong'
                                    rippleTag='div'
                                    rippleColor='light' >
                                    <img src={houseIcon} style={{ maxWidth: '100px' }} alt={propertyIconTitle} title={propertyIconTitle} />
                                    <a href='#!'>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                            onClick={(e) => { setShowPropertyList(true); setShowProperty(false); setShowBidList(false); setShowOption(false), propertyForBidList() }}>
                                        </div>
                                    </a>
                                </MDBRipple>
                            </MDBRow>
                            <MDBRow>
                                <MDBTypography component={'div'} style={{ textAlign: 'center', paddingTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>
                                    Properties
                                </MDBTypography>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    )

    const BidList = (
        <React.Fragment>
            <MDBContainer className='ps-5 pt-3' >
                <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                    <p style={bidListHeader} ><strong>My Bids </strong></p>
                </MDBRow>
                <MDBTable className='table table-striped table-hover' >
                    <MDBTableHead>
                        <tr style={bidTableHead}>
                            <th scope='col'>Property Ref</th>
                            <th scope='col'>Bid Position</th>
                            <th scope='col'>Bid Date</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {bidList.map((bid) => {
                            return (
                                <tr style={bidRow} key={bid._id}
                                    onClick={(e) => { setSelectedPropertyBidStatus(true), reviewThisProperty(bid.propertyId) }}>
                                    <td style={bidDataRow} >{(bid.propertyId).toUpperCase()}</td>
                                    <td >{bid.bidPosition}</td>
                                    <td >{date_ = (date_ = new Date(bid.bidDate), date_ = date_.toLocaleString('en-GB', { timeZone: 'UTC' }))}</td>
                                </tr>
                            )
                        })}
                    </MDBTableBody>
                </MDBTable>
            </MDBContainer >
        </React.Fragment >
    )

    const PropertyList = (
        <React.Fragment>
            <MDBContainer className='ps-5 pt-3' >
                <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                    <MDBCol className='md' >
                        <p style={{ width: 'auto', color: 'black', fontSize: 'clamp(13px, 2.5vw, 22px)', borderBottom: '2px solid #d7cdcd' }} ><strong>New Property List </strong></p>
                    </MDBCol>
                </MDBRow>
                <MDBRow>

                    <MDBCol className='md'>
                        <input style={inputStyle}
                            className='form-control'
                            type='text'
                            placeholder='Property Reference'
                            value={searchProperty.toLowerCase()}
                            onChange={(e) => { let newEdit = { ...searchProperty }; newEdit = e.target.value; setSearchProperty(newEdit) }}>
                        </input>
                        <MDBBtn className='border border-info mx-2'
                            style={{ fontSize: '11px', width: 'auto', float: 'left' }} color='info'
                            onClick={(e) => { reviewThisProperty(searchProperty) }} >
                            <MDBIcon fas icon='search'
                                onClick={(e) => { reviewThisProperty(searchProperty) }} />
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>

                {propertyList.map((property) => {
                    return (
                        <MDBCard className='m-2'
                            key={property.propertyId} item='true'>
                            {<MDBRipple rippleColor='dark' rippleTag='div' className='hover-overlay'>
                                <MDBCardBody >
                                    <MDBRow alignment='center'>
                                        <MDBCol className='col-lg-6 col-md-6'>
                                            <MDBRow>
                                                <MDBTypography component={'div'} className='fs-5'
                                                    style={{ fontSize: '16px', color: '#1a82db' }} ><strong>{property.propertyId ? (property.propertyId).toUpperCase() : null}</strong>
                                                </MDBTypography>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCardImage style={{ marginBottom: '15px' }} src={property.imageUrl} position='top' alt={property.address ? ToCamelCase(property.address) : null} title={property.address ? ToCamelCase(property.address) : null} />
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-4'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Address:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-8'>

                                                    <MDBTypography component={'div'} ><strong>{property.address ? ToCamelCase(property.address) : null}, {property.town ? ToCamelCase(property.town) : null}, {property.postcode ? (property.postcode).toUpperCase() : null} </strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-4'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Council Tax:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-8'>
                                                    <MDBTypography component={'div'} > <strong> Band {property.cTaxBand ? property.cTaxBand.toUpperCase() : null}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>

                                            <MDBRow>
                                                <MDBCol className='col-lg-4' >
                                                    <MDBTypography component={'div'} style={labelStyle}>Available on:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-8'>
                                                    <MDBTypography component={'div'} > <strong>{property.availableFrom ? property.availableFrom : null}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-4'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Rent(PCM):</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-8'>
                                                    <MDBTypography component={'div'} > <strong> £ {property.rent ? property.rent : null}.00</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-4'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Deposit:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-8'>
                                                    <MDBTypography component={'div'} > <strong>£ {property.deposit ? property.deposit : null}.00</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-4'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Admin fees:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-8'>
                                                    <MDBTypography component={'div'} > <strong>£ {property.fees ? property.fees : null}.00</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCol>

                                        <MDBCol className='col-lg-6 col-md-6'>

                                            <MDBRow className='mt-4'>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Advert Type:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} ><strong>{property.advertType ? ToCamelCase(property.advertType) : null} </strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow >
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Type:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>

                                                    <MDBTypography component={'div'} ><strong>{property.type ? ToCamelCase(property.type) : null} </strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Floor: </MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} > <strong>{property.floor ? property.floor : null}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Rooms:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} >
                                                        <MDBIcon style={styleIcon} fas icon='bed' /><strong>x {property.bedRoom ? property.bedRoom : null} and </strong><span>
                                                            <MDBIcon style={styleIcon} fas icon='bath' /><strong>x {property.bathRoom ? property.bathRoom : null}</strong>
                                                        </span></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Reception:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} > <strong>{property.reception ? ToCamelCase(property.reception) : null}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Pets:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} > <strong>{property.pets ? ToCamelCase(property.pets) : null}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Tenancy:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} > <strong>{property.tenancyType ? ToCamelCase(property.tenancyType) : null}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Kitchen:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} > <strong>{property.kitchenFitted ? ToCamelCase(property.kitchenFitted) : null}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Furnished:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} > <strong>{property.furnished ? ToCamelCase(property.furnished) : null}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Parking:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} > <strong>{property.parking ? ToCamelCase(property.parking) : null}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Garage:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} > <strong>{property.garage ? ToCamelCase(property.garage) : null}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Garden / Patio:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} > <strong>{property.garden ? ToCamelCase(property.garden) : null} / {property.patio ? ToCamelCase(property.patio) : null}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-2 col-md-2 2 col-sm-3'>
                                            <MDBTypography component={'div'} style={labelStyle}>Comments:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-10 col-md-8 col-sm-9'>
                                            <MDBTypography component={'div'} style={{ textAlign: 'left' }}>{property.comments ? property.comments : null}</MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <BtnAccept
                                            onClick={(e) => { handleBid(property.propertyId) }}>Bid on this property</BtnAccept>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBRipple>}
                        </MDBCard>
                    );
                })}
            </MDBContainer >
        </React.Fragment >
    )

    const PropertyInfo = (
        <React.Fragment>
            <MDBContainer className='ps-5 pt-3' >
                <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                    <p style={{ color: 'black', fontSize: '22px', borderBottom: '2px solid #d7cdcd' }} ><strong>Review your bid </strong></p>
                </MDBRow>
                <MDBCard className='m-2'
                    style={{ backgroundColor: '#e0e0e0' }} >
                    {<MDBRipple rippleColor='dark' rippleTag='div' className='hover-overlay'>
                        <MDBCardBody >
                            <MDBRow alignment='center'>
                                <MDBCol className='col-lg-6 col-md-6'>
                                    <MDBRow>
                                        <MDBTypography component={'div'} className='fs-5'
                                            style={{ fontSize: '16px', color: '#1a82db' }} ><strong>{propertyId ? (propertyId).toUpperCase() : null}</strong>
                                        </MDBTypography>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCardImage src={imageUrl} position='top' alt={address ? ToCamelCase(address) : null} title={address ? ToCamelCase(address) : null} />
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-4'>
                                            <MDBTypography component={'div'} style={labelStyle}>Address:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-8'>
                                            <MDBTypography component={'div'} ><strong>{address ? ToCamelCase(address) : null}, {address ? ToCamelCase(town) : null}, {address ? (postcode).toUpperCase() : null} </strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-4'>
                                            <MDBTypography component={'div'} style={labelStyle}>Council Tax:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-8'>
                                            <MDBTypography component={'div'} > <strong> Band {cTaxBand ? cTaxBand.toUpperCase() : null}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow>
                                        <MDBCol className='col-lg-4' >
                                            <MDBTypography component={'div'} style={labelStyle}>Available on:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-8'>
                                            <MDBTypography component={'div'} > <strong>{availableFrom ? availableFrom : null}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-4'>
                                            <MDBTypography component={'div'} style={labelStyle}>Rent(PCM):</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-8'>
                                            <MDBTypography component={'div'} > <strong> £ {rent}.00</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-4'>
                                            <MDBTypography component={'div'} style={labelStyle}>Deposit:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-8'>
                                            <MDBTypography component={'div'} > <strong>£ {deposit}.00</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-4'>
                                            <MDBTypography component={'div'} style={labelStyle}>Admin fees:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-8'>
                                            <MDBTypography component={'div'} > <strong>£ {fees}.00</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>

                                <MDBCol className='col-lg-6 col-md-6'>

                                    <MDBRow className='mt-4'>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Advert Type:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>

                                            <MDBTypography component={'div'} ><strong>{advertType ? ToCamelCase(advertType) : null} </strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow >
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Type:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography component={'div'} ><strong>{type ? ToCamelCase(type) : null} </strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Floor: </MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography component={'div'} > <strong>{floor}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Rooms:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography component={'div'} >
                                                <MDBIcon style={styleIcon} fas icon='bed' /><strong>x {bedRoom} and </strong><span>
                                                    <MDBIcon style={styleIcon} fas icon='bath' /><strong>x {bathRoom}</strong>
                                                </span></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Reception:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography component={'div'} > <strong>{reception ? ToCamelCase(reception) : null}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Pets:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography component={'div'} > <strong>{pets ? ToCamelCase(pets) : null}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Tenancy:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography component={'div'} > <strong>{tenancyType ? ToCamelCase(tenancyType) : null}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Kitchen:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography component={'div'} > <strong>{kitchenFitted ? ToCamelCase(kitchenFitted) : null}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Furnished:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography component={'div'} > <strong>{furnished ? ToCamelCase(furnished) : null}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Parking:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography component={'div'} > <strong>{parking ? ToCamelCase(parking) : null}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Garage:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography component={'div'} > <strong>{garage ? ToCamelCase(garage) : null}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Garden / Patio:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography component={'div'} > <strong>{garden ? ToCamelCase(garden) : null} / {patio ? ToCamelCase(patio) : null}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol className='col-lg-2 col-md-2 2 col-sm-3'>
                                    <MDBTypography component={'div'} style={labelStyle}>Comments:</MDBTypography>
                                </MDBCol>
                                <MDBCol className='col-lg-10 col-md-8 col-sm-9'>
                                    <MDBTypography component={'div'} style={{ textAlign: 'left' }}>{comments}</MDBTypography>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol className='col-4'>

                                    {/* {
                                        bidOnThisProperty ?
                                            <BtnAccept
                                                onClick={(e) => { if (window.confirm('Bid on this property?')) handleBid(propertyId) }}>Bid on this property
                                            </BtnAccept>
                                            :
                                            <BtnAccept
                                                onClick={(e) => { if (window.confirm('Withdraw from this bid?')) handleWithdrawBid(e) }}>Withdraw from bid
                                            </BtnAccept>
                                    } */}
                                    {
                                        bidOnThisProperty &&
                                        <BtnAccept
                                            onClick={(e) => { if (window.confirm('Bid on this property?')) handleBid(propertyId) }}>Bid on this property
                                        </BtnAccept>
                                    }
                                    {
                                        selectedPropertyBidStatus &&
                                        <BtnAccept
                                            onClick={(e) => { if (window.confirm('Withdraw from this bid?')) handleWithdrawBid(e) }}>Withdraw from bid
                                        </BtnAccept>
                                    }

                                </MDBCol>
                                <MDBCol>
                                    <BtnAccept
                                        color='secondary' onClick={(e) => { if (window.confirm("Cancel update?")) gotoAccountPage(e) }}>
                                        Cancel
                                    </BtnAccept>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBRipple>}
                </MDBCard>
            </MDBContainer >
        </React.Fragment >
    )

    return (
        <React.Fragment>
            {
                showOption && OptionSelect
            }
            {
                showPropertyList && PropertyList
            }
            {
                showBidList && BidList
            }
            {
                showProperty && PropertyInfo
            }
            {
                showInfoModal &&
                <PopUp
                    modalInfo={modalInfo}
                    setShowInfoModal={setShowInfoModal}>
                </PopUp>
            }
        </React.Fragment >
    );
}
