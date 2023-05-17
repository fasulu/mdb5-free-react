import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";

import BtnAccept from './btnAccept.jsx'

import { UserContext } from "../userContext/UserContext.jsx"

import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBRipple, MDBIcon,
    MDBTypography,
    MDBRow, MDBCol,
    MDBCardImage,
    MDBTable, MDBTableHead, MDBTableBody
} from 'mdb-react-ui-kit';

import { ToCamelCase } from '../validations/Validator.jsx'
import { ConvertToTimeStamp } from '../utility/dateConvertion';
import PopUp from './popUp';

import bidIcon from '../../src/resources/images/bid.png'
import houseIcon from '../../src/resources/images/house.png'

export default function PropertyCard() {

    const { clientId, setClientId } = useContext(UserContext);

    var date_ = "";
    const propertyListUrl = "http://localhost:9001/property/list/";
    const clientBidListUrl = "http://localhost:9001/bid/clientid/";
    const propertyBidUrl = "http://localhost:9001/client/bid/";
    const propertyIdUrl = "http://localhost:9001/property/propertyid/";
    const withdrawnBidUrl = "http://localhost:9001/property/bid/withdraw/";
    const msgLoginDetailUrl = "http://localhost:9001/message/newmsg/";

    const todayDate = new Date().toISOString().slice(0, 19); // produces 2023-02-25
    // const todayDate = ()=>{let date_ = new Date(); date_ = date_.toLocaleString('en-GB', { timeZone: 'UTC' })}

    const msgDate_ = ConvertToTimeStamp(new Date().toISOString().slice(0, 10));
    const msgSubject_ = "Bid information"
    const From_ = "Housing Department"
    const message_ = "Your bid has been placed successfully. This is an auto-generated message, do not reply or request any detail."

    const labelStyle = { fontSize: '16px', width: '250px', color: '#464646' };
    const styleIcon = { fontSize: '20px', color: '#6e1583', textTransform: 'none', marginRight: '5px' };

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

    const [showInfoModal, setShowInfoModal] = useState(false);
    const [modalInfo, setModalInfo] = useState("");

    useEffect(() => {
        fetchData();

    }, [])

    async function fetchData() {

    }

    const propertyForBidList = async (e) => {

        try {

            const response = await axios.get(propertyListUrl)

            if (response.data.PropertyList.length > 0) {

                console.log(`Response from backend:- ${response.data.message}`)
                setPropertyList(response.data.PropertyList)
                console.log(`list of property ${response.data}`)
                setShowPropertyList(true)
            } else {
                setModalInfo('No new properties');
                setShowInfoModal(true);
                setShowOption(true);
                setShowPropertyList(false);
                setShowBidList(false);
                setShowProperty(false);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleBid = async (property) => {
        // create a collection in backend for bids with clientId, propertyId, date & time of bid and position
        console.log("Iam in handle bid", property)

        try {
            const bidInfo = {
                clientId: clientId,
                propertyId: property,
                bidDate: todayDate,
                bidPosition: 1
            }
            console.log(bidInfo);

            const response = await axios.post(propertyBidUrl, bidInfo)
            if (response.data) {
                console.log(response.data.message);
                console.log(response.data.Status_Reply);
                console.log(response.data.BidInfo);
                setModalInfo(response.data.Status_Reply);
                setShowInfoModal(true);

                const messageInfo = {
                    clientId: clientId,
                    messageDate: msgDate_,
                    messageSubject: msgSubject_,
                    messageFrom: From_,
                    message: message_,
                    messageStatus: false
                }
                const result = sendMessage(messageInfo);

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

    const myBids = async () => {
        try {

            const response = await axios.get(clientBidListUrl + clientId)

            if (response.data.BidList.length > 0) {

                console.log(`Response from backend:- ${response.data.message}`)
                setBidList(response.data.BidList)
                console.table(`list of bids ${response.data.BidList}`)
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
            console.log(error)
        }
    }

    const handleWithdrawBid = async (e) => {
        e.preventDefault();
        console.log(propertyId);

        try {
            console.log(withdrawnBidUrl + propertyId)
            const response = await axios.delete(withdrawnBidUrl + propertyId);

            if (response.data) {
                console.log(response.data.Status_Reply)
                setModalInfo(response.data.Status_Reply);
                setShowInfoModal(true);
            } else {
                console.log(response.data.message)
                setModalInfo(response.data.Status_Reply);
                setShowInfoModal(true);
            }

        } catch (error) {
            console.log(response.data.message)
            setModalInfo(response.data.Status_Reply);
            setShowInfoModal(true);
        }
    }

    const reviewThisProperty = async (propertyId) => {
        console.log(propertyId)

        try {
            console.log(propertyIdUrl + propertyId)

            const response = await axios.get(propertyIdUrl + propertyId)
            console.log(`Response from backend:- ${response.data.message}`)

            // if (response.data.PropertyInfo.length > 0) {
            if (response.data) {

                console.log(`Response from backend:- ${response.data.message}`)

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
                setShowProperty(false);
                setShowPropertyList(false);
                setShowBidList(false);
                setShowOption(true);

            }
        } catch (error) {
            console.log(error)
        }
    }

    const OptionSelect = (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto ps-4 pt-4' style={{ backgroundColor: '#f7f2f287' }} >
                <MDBTypography component={'div'} className='card-header'
                    style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} >
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
                                    onClick={(e) => { reviewThisProperty(bid.propertyId) }}>
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
                    <p style={{ color: 'black', fontSize: '22px', borderBottom: '2px solid #d7cdcd' }} ><strong>New Property List </strong></p>
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
                                                    style={{ fontSize: '16px', color: '#1a82db' }} ><strong>{(property.propertyId).toUpperCase()}</strong>
                                                </MDBTypography>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCardImage style={{ marginBottom: '15px' }} src={property.imageUrl} position='top' alt={ToCamelCase(property.address)} title={ToCamelCase(property.address)} />
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-4'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Address:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-8'>

                                                    <MDBTypography component={'div'} ><strong>{ToCamelCase(property.address)}, {ToCamelCase(property.town)}, {(property.postcode).toUpperCase()} </strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-4'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Council Tax:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-8'>
                                                    <MDBTypography component={'div'} > <strong> Band {property.cTaxBand.toUpperCase()}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>

                                            <MDBRow>
                                                <MDBCol className='col-lg-4' >
                                                    <MDBTypography component={'div'} style={labelStyle}>Available on:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-8'>
                                                    <MDBTypography component={'div'} > <strong>{property.availableFrom}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-4'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Rent(PCM):</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-8'>
                                                    <MDBTypography component={'div'} > <strong> £ {property.rent}.00</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-4'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Deposit:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-8'>
                                                    <MDBTypography component={'div'} > <strong>£ {property.deposit}.00</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-4'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Admin fees:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-8'>
                                                    <MDBTypography component={'div'} > <strong>£ {property.fees}.00</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCol>

                                        <MDBCol className='col-lg-6 col-md-6'>

                                            <MDBRow className='mt-4'>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Advert Type:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} ><strong>{ToCamelCase(property.advertType)} </strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow >
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Type:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>

                                                    <MDBTypography component={'div'} ><strong>{ToCamelCase(property.type)} </strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Floor: </MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} > <strong>{property.floor}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Rooms:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} >
                                                        <MDBIcon style={styleIcon} fas icon='bed' /><strong>x {property.bedRoom} and </strong><span>
                                                            <MDBIcon style={styleIcon} fas icon='bath' /><strong>x {property.bathRoom}</strong>
                                                        </span></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Reception:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} > <strong>{ToCamelCase(property.reception)}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Pets:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} > <strong>{ToCamelCase(property.pets)}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Tenancy:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} > <strong>{ToCamelCase(property.tenancyType)}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Kitchen:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} > <strong>{ToCamelCase(property.kitchenFitted)}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Furnished:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} > <strong>{ToCamelCase(property.furnished)}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Parking:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} > <strong>{ToCamelCase(property.parking)}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Garage:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} > <strong>{ToCamelCase(property.garage)}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography component={'div'} style={labelStyle}>Garden / Patio:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography component={'div'} > <strong>{ToCamelCase(property.garden)} / {ToCamelCase(property.patio)}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-2 col-md-2 2 col-sm-3'>
                                            <MDBTypography component={'div'} style={labelStyle}>Comments:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-10 col-md-8 col-sm-9'>
                                            <MDBTypography component={'div'} style={{ textAlign: 'left' }}>{property.comments}</MDBTypography>
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
                                            style={{ fontSize: '16px', color: '#1a82db' }} ><strong>{(propertyId).toUpperCase()}</strong>
                                        </MDBTypography>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCardImage src={imageUrl} position='top' alt={ToCamelCase(address)} title={ToCamelCase(address)} />
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-4'>
                                            <MDBTypography component={'div'} style={labelStyle}>Address:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-8'>

                                            <MDBTypography component={'div'} ><strong>{ToCamelCase(address)}, {ToCamelCase(town)}, {(postcode).toUpperCase()} </strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-4'>
                                            <MDBTypography component={'div'} style={labelStyle}>Council Tax:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-8'>
                                            <MDBTypography component={'div'} > <strong> Band {cTaxBand.toUpperCase()}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow>
                                        <MDBCol className='col-lg-4' >
                                            <MDBTypography component={'div'} style={labelStyle}>Available on:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-8'>
                                            <MDBTypography component={'div'} > <strong>{availableFrom}</strong></MDBTypography>
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

                                            <MDBTypography component={'div'} ><strong>{ToCamelCase(advertType)} </strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow >
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Type:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography component={'div'} ><strong>{ToCamelCase(type)} </strong></MDBTypography>
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
                                            <MDBTypography component={'div'} > <strong>{ToCamelCase(reception)}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Pets:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography component={'div'} > <strong>{ToCamelCase(pets)}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Tenancy:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography component={'div'} > <strong>{ToCamelCase(tenancyType)}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Kitchen:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography component={'div'} > <strong>{ToCamelCase(kitchenFitted)}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Furnished:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography component={'div'} > <strong>{ToCamelCase(furnished)}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Parking:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography component={'div'} > <strong>{ToCamelCase(parking)}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Garage:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography component={'div'} > <strong>{ToCamelCase(garage)}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography component={'div'} style={labelStyle}>Garden / Patio:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography component={'div'} > <strong>{ToCamelCase(garden)} / {ToCamelCase(patio)}</strong></MDBTypography>
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
                                <BtnAccept
                                    onClick={(e) => { if (window.confirm('Withdraw from this bid?')) handleWithdrawBid(e) }}>Withdraw from bid</BtnAccept>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBRipple>}
                </MDBCard>
            </MDBContainer >
        </React.Fragment >
    )

    const sendMessage = async (messageInfo) => {

        console.log("Iam in send message")

        try {
            console.table(messageInfo)

            const response = await axios.post(msgLoginDetailUrl, messageInfo)
            if (response) {
                console.log(response.data.Status_Reply);
                return response.data.Status_Reply;
            } else {
                return response.data.Status_Reply;
            }
        } catch (error) {
            console.log(error)
            setModalInfo(response.data.Status_Reply)
            setShowInfoModal(true);
        }

    }

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
