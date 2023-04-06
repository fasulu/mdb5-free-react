import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";

import BtnAccept from '../components/btnEdit.jsx'

import { UserContext } from "../userContext/UserContext"

import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBRipple, MDBIcon,
    MDBTypography,
    MDBRow, MDBCol,
    MDBCardImage
} from 'mdb-react-ui-kit';

import { ToCamelCase } from '../validations/Validator'
import { refreshPage } from '../utility/refreshPage.js';

import bidIcon from '../../src/resources/images/bid.png'
import houseIcon from '../../src/resources/images/house.png'

export default function CardHouse() {

    const { clientId, setClientId } = useContext(UserContext);

    var date_="";
    const propertyListUrl = "http://localhost:9001/property/list/";
    const clientBidListUrl = "http://localhost:9001/bid/clientid/";
    const propertyBidUrl = "http://localhost:9001/client/bid/";
    const propertyIdUrl = "http://localhost:9001/property/propertyid/";
    const withdrawnBidUrl = "http://localhost:9001/property/bid/withdraw/";

    const todayDate = new Date().toISOString().slice(0, 19); // produces 2023-02-25

    const inputStyle1 = { fontSize: '16px', width: '250px', color: '#464646' };
    const styleIcon = { fontSize: '20px', color: '#6e1583', textTransform: 'none', marginRight: '5px' };
    const bidHeaderStyle = { fontSize: '18px', color: '#0a0a0a' };
    const bidDataStyle = { fontSize: '14px', fontWeight: 'bold', color: '#060846' };

    const bidIconTitle = "Bid on property";
    const propertyIconTitle = "View property list";

    const [propertyList, setPropertyList] = useState([])
    const [bidList, setBidList] = useState([])

    const inputStyle = { maxHeight: 'auto', fontSize: '16px', minwidth: '250px', color: 'black' };

    const [showOption, setShowOption] = useState(true)
    const [showPropertyList, setShowPropertyList] = useState(false)
    const [showBidList, setShowBidList] = useState(false)
    const [showProperty, setShowProperty] = useState(false)

    const [_id, set_id] = useState("");
    const [propertyId, setPropertyId] = useState("");
    const [address, setAddress] = useState("");
    const [type, setType] = useState("");
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
    const [imageUrl, setImageUrl] = useState("");
    const [comments, setComments] = useState("");

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
                refreshPage("No new properties");
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
                refreshPage(response.data.Status_Reply)
            } else {
                refreshPage(response.data.Status_Reply)
            }
        } catch (error) {
            console.log(error)
            refreshPage(response.data.Status_Reply)
        }
    }

    const myBids = async () => {
        try {

            const response = await axios.get(clientBidListUrl + clientId)

            if (response.data.BidList.length > 0) {

                console.log(`Response from backend:- ${response.data.message}`)
                setBidList(response.data.BidList)
                console.table(`list of bids ${response.data.BidList}`)
                setShowPropertyList(false); setShowBidList(true); setShowOption(false); setShowProperty(false);
            } else {
                setShowPropertyList(false); setShowBidList(false); setShowProperty(false); setShowOption(true);

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
                refreshPage(response.data.Status_Reply)
            } else {
                console.log(response.data.message)
                refreshPage(response.data.Status_Reply)
            }

        } catch (error) {
            console.log(response.data.message)
            refreshPage(response.data.Status_Reply)
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
                setAddress(response.data.PropertyInfo.address);
                setType(response.data.PropertyInfo.type);
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
                setDateRecorded(response.data.PropertyInfo.dateRecorded);
                // set_id(JSON.stringify(response.data.PropertyInfo._id));
                // setPropertyId(JSON.stringify(response.data.PropertyInfo.propertyId));
                // setAddress(JSON.stringify(response.data.PropertyInfo.address));
                // setType(JSON.stringify(response.data.PropertyInfo.type));
                // setBedRoom(JSON.stringify(response.data.PropertyInfo.bedRoom));
                // setBathRoom(JSON.stringify(response.data.PropertyInfo.bathRoom));
                // setReception(JSON.stringify(response.data.PropertyInfo.reception));
                // setCTaxBand(JSON.stringify(response.data.PropertyInfo.cTaxBand));
                // setTenancyType(JSON.stringify(response.data.PropertyInfo.tenancyType));
                // setAvailableFrom(JSON.stringify(response.data.PropertyInfo.availableFrom));
                // setFurnished(JSON.stringify(response.data.PropertyInfo.furnished));
                // setParking(JSON.stringify(response.data.PropertyInfo.parking));
                // setGarage(JSON.stringify(response.data.PropertyInfo.garage));
                // setGarden(JSON.stringify(response.data.PropertyInfo.garden));
                // setPatio(JSON.stringify(response.data.PropertyInfo.patio));
                // setFloor(JSON.stringify(response.data.PropertyInfo.floor));
                // setKitchenFitted(JSON.stringify(response.data.PropertyInfo.kitchenFitted));
                // setDeposit(JSON.stringify(response.data.PropertyInfo.deposit));
                // setFees(JSON.stringify(response.data.PropertyInfo.fees));
                // setRent(JSON.stringify(response.data.PropertyInfo.rent));
                // setPets(JSON.stringify(response.data.PropertyInfo.pets));
                // setImageUrl(JSON.stringify(response.data.PropertyInfo.imageUrl));
                // setComments(JSON.stringify(response.data.PropertyInfo.comments));
                // setDateRecorded(JSON.stringify(response.data.PropertyInfo.dateRecorded));

                setShowProperty(true); setShowPropertyList(false); setShowBidList(false); setShowOption(false);

            } else {
                setShowProperty(false); setShowPropertyList(false); setShowBidList(false); setShowOption(true);

            }
        } catch (error) {
            console.log(error)
        }

    }

    const OptionSelect = (
        <React.Fragment>
            <MDBContainer className='ps-5 pt-3' >
                <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                    <p style={{ color: 'black', fontSize: '22px', borderBottom: '2px solid #d7cdcd' }} ><strong>Property </strong></p>
                </MDBRow>
                <MDBCard className='w-100 mx-auto ps-5' style={{ alignItems: 'center' }} >
                    <MDBCardBody >

                        <MDBRow>
                            <MDBCol className='size-md mb-4'>
                                <MDBRipple
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                    rippleTag='div'
                                    rippleColor='light' >
                                    <img src={bidIcon} style={{ maxWidth: '100px' }} alt={bidIconTitle} title={bidIconTitle} />
                                    <a href='#!'>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                            onClick={(e) => { setShowBidList(true); setShowPropertyList(false); setShowProperty(false); setShowOption(false); myBids() }}>
                                        </div>
                                    </a>
                                </MDBRipple>
                            </MDBCol>

                            <MDBCol className='size-md mb-4'>
                                <MDBRipple
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                    rippleTag='div'
                                    rippleColor='light' >
                                    <img src={houseIcon} style={{ maxWidth: '105px' }} alt={propertyIconTitle} title={propertyIconTitle} />
                                    <a href='#!'>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                            onClick={(e) => { setShowPropertyList(true); setShowProperty(false); setShowBidList(false); setShowOption(false), propertyForBidList() }}>
                                        </div>
                                    </a>
                                </MDBRipple>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer >
        </React.Fragment >
    )

    const BidList = (
        <React.Fragment>
            <MDBContainer className='ps-5 pt-3' >
                <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                    <p style={{ color: 'black', fontSize: '22px', borderBottom: '2px solid #d7cdcd' }} ><strong>My Bids </strong></p>
                </MDBRow>
                {bidList.map((bid) => {
                    return (
                        <MDBCard className='m-2'
                            key={bid._id} item='true'
                            style={{ backgroundColor: '#e0e0e0' }} >
                            <MDBRipple rippleColor='dark' rippleTag='div' className='hover-overlay'
                                onClick={(e) => { reviewThisProperty(bid.propertyId) }} >
                                <MDBCardBody >
                                    <MDBRow alignment='center'>
                                        <MDBCol className=''>
                                            <MDBTypography
                                                style={bidHeaderStyle}
                                            >Property </MDBTypography>
                                            <MDBTypography
                                                style={bidDataStyle} >{(bid.propertyId).toUpperCase()}
                                            </MDBTypography>
                                        </MDBCol>
                                        <MDBCol className=''>
                                            <MDBTypography
                                                style={bidHeaderStyle}
                                            >Bid Position </MDBTypography>
                                            <MDBTypography
                                                style={bidDataStyle} >{(bid.bidPosition)}
                                            </MDBTypography>
                                        </MDBCol>
                                        <MDBCol className=''>
                                            <MDBTypography
                                                style={bidHeaderStyle}
                                            >Bid Date </MDBTypography>
                                            <MDBTypography
                                                // style={bidDataStyle} >{((bid.bidDate.slice(0, 10)))} @ {((bid.bidDate.slice(11, 16)))}
                                                style={bidDataStyle} >{date_= (date_ = new Date(bid.bidDate), date_= date_.toLocaleString('en-GB', { timeZone: 'UTC' }))}
                                            </MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBRipple>
                        </MDBCard>
                    );
                })}
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
                            key={property.propertyId} item='true'
                            style={{ backgroundColor: '#e0e0e0' }} >
                            {<MDBRipple rippleColor='dark' rippleTag='div' className='hover-overlay'>
                                <MDBCardBody >
                                    <MDBRow alignment='center'>
                                        <MDBCol className='col-lg-6 col-md-6'>
                                            <MDBRow>
                                                <MDBTypography className='fs-5'
                                                    style={{ fontSize: '16px', color: '#1a82db' }} ><strong>{(property.propertyId).toUpperCase()}</strong>
                                                </MDBTypography>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCardImage style={{ marginBottom: '15px' }} src={property.imageUrl} position='top' alt={ToCamelCase(property.address)} title={ToCamelCase(property.address)} />
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-4'>
                                                    <MDBTypography style={inputStyle1}>Address:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-8'>

                                                    <MDBTypography ><strong>{ToCamelCase(property.address)} </strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-4'>
                                                    <MDBTypography style={inputStyle1}>Council Tax:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-8'>
                                                    <MDBTypography > <strong> Band {property.cTaxBand.toUpperCase()}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>

                                            <MDBRow>
                                                <MDBCol className='col-lg-4' >
                                                    <MDBTypography style={inputStyle1}>Available on:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-8'>
                                                    <MDBTypography > <strong>{property.availableFrom}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-4'>
                                                    <MDBTypography style={inputStyle1}>Rent(PCM):</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-8'>
                                                    <MDBTypography > <strong> £ {property.rent}.00</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-4'>
                                                    <MDBTypography style={inputStyle1}>Deposit:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-8'>
                                                    <MDBTypography > <strong>£ {property.deposit}.00</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-4'>
                                                    <MDBTypography style={inputStyle1}>Admin fees:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-8'>
                                                    <MDBTypography > <strong>£ {property.fees}.00</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCol>

                                        <MDBCol className='col-lg-6 col-md-6'>

                                            <MDBRow className='mt-4'>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography style={inputStyle1}>Type:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>

                                                    <MDBTypography ><strong>{ToCamelCase(property.type)} </strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography style={inputStyle1}>Floor: </MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography > <strong>{property.floor}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography style={inputStyle1}>Rooms:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography >
                                                        <MDBIcon style={styleIcon} fas icon='bed' /><strong>x {property.bedRoom} and </strong><span>
                                                            <MDBIcon style={styleIcon} fas icon='bath' /><strong>x {property.bathRoom}</strong>
                                                        </span></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography style={inputStyle1}>Reception:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography > <strong>{ToCamelCase(property.reception)}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography style={inputStyle1}>Pets:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography > <strong>{ToCamelCase(property.pets)}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography style={inputStyle1}>Tenancy:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography > <strong>{ToCamelCase(property.tenancyType)}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography style={inputStyle1}>Kitchen:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography > <strong>{ToCamelCase(property.kitchenFitted)}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography style={inputStyle1}>Furnished:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography > <strong>{ToCamelCase(property.furnished)}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography style={inputStyle1}>Parking:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography > <strong>{ToCamelCase(property.parking)}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography style={inputStyle1}>Garage:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography > <strong>{ToCamelCase(property.garage)}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className='col-lg-5'>
                                                    <MDBTypography style={inputStyle1}>Garden / Patio:</MDBTypography>
                                                </MDBCol>
                                                <MDBCol className='col-lg-7'>
                                                    <MDBTypography > <strong>{ToCamelCase(property.garden)} / {ToCamelCase(property.patio)}</strong></MDBTypography>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-2 col-md-2 2 col-sm-3'>
                                            <MDBTypography style={inputStyle1}>Comments:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-10 col-md-8 col-sm-9'>
                                            <MDBTypography style={{ textAlign: 'left' }}>{property.comments}</MDBTypography>
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
                                        <MDBTypography className='fs-5'
                                            style={{ fontSize: '16px', color: '#1a82db' }} ><strong>{(propertyId).toUpperCase()}</strong>
                                        </MDBTypography>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCardImage src={imageUrl} position='top' alt={ToCamelCase(address)} title={ToCamelCase(address)} />
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-4'>
                                            <MDBTypography style={inputStyle1}>Address:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-8'>

                                            <MDBTypography ><strong>{ToCamelCase(address)} </strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-4'>
                                            <MDBTypography style={inputStyle1}>Council Tax:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-8'>
                                            <MDBTypography > <strong> Band {cTaxBand.toUpperCase()}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow>
                                        <MDBCol className='col-lg-4' >
                                            <MDBTypography style={inputStyle1}>Available on:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-8'>
                                            <MDBTypography > <strong>{availableFrom}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-4'>
                                            <MDBTypography style={inputStyle1}>Rent(PCM):</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-8'>
                                            <MDBTypography > <strong> £ {rent}.00</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-4'>
                                            <MDBTypography style={inputStyle1}>Deposit:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-8'>
                                            <MDBTypography > <strong>£ {deposit}.00</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-4'>
                                            <MDBTypography style={inputStyle1}>Admin fees:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-8'>
                                            <MDBTypography > <strong>£ {fees}.00</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>

                                <MDBCol className='col-lg-6 col-md-6'>

                                    <MDBRow className='mt-4'>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography style={inputStyle1}>Type:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>

                                            <MDBTypography ><strong>{ToCamelCase(type)} </strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography style={inputStyle1}>Floor: </MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography > <strong>{floor}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography style={inputStyle1}>Rooms:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography >
                                                <MDBIcon style={styleIcon} fas icon='bed' /><strong>x {bedRoom} and </strong><span>
                                                    <MDBIcon style={styleIcon} fas icon='bath' /><strong>x {bathRoom}</strong>
                                                </span></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography style={inputStyle1}>Reception:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography > <strong>{ToCamelCase(reception)}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography style={inputStyle1}>Pets:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography > <strong>{ToCamelCase(pets)}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography style={inputStyle1}>Tenancy:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography > <strong>{ToCamelCase(tenancyType)}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography style={inputStyle1}>Kitchen:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography > <strong>{ToCamelCase(kitchenFitted)}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography style={inputStyle1}>Furnished:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography > <strong>{ToCamelCase(furnished)}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography style={inputStyle1}>Parking:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography > <strong>{ToCamelCase(parking)}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography style={inputStyle1}>Garage:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography > <strong>{ToCamelCase(garage)}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className='col-lg-5'>
                                            <MDBTypography style={inputStyle1}>Garden / Patio:</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='col-lg-7'>
                                            <MDBTypography > <strong>{ToCamelCase(garden)} / {ToCamelCase(patio)}</strong></MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol className='col-lg-2 col-md-2 2 col-sm-3'>
                                    <MDBTypography style={inputStyle1}>Comments:</MDBTypography>
                                </MDBCol>
                                <MDBCol className='col-lg-10 col-md-8 col-sm-9'>
                                    <MDBTypography style={{ textAlign: 'left' }}>{comments}</MDBTypography>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <BtnAccept
                                    onClick={(e) => { handleWithdrawBid(e) }}>Withdraw from bid</BtnAccept>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBRipple>}
                </MDBCard>
            </MDBContainer >
        </React.Fragment >
    )

    return (
        <>
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
        </>
    );
}
