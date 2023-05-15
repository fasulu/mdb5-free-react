import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import { UserContext } from "../userContext/UserContext"

import Navbar from './Navbar';
import NavbarSecondary from './NavbarSecondary';
import Footer from '../components/footer';

import {
    MDBRipple,
    MDBCard, MDBCardBody, MDBCardImage,
    MDBRow, MDBCol, MDBIcon,
    MDBCheckbox, MDBTypography,
    MDBTabs, MDBTabsPane, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBContainer
} from 'mdb-react-ui-kit';

import { ToCamelCase } from '../validations/Validator.jsx'
import { refreshPage } from '../utility/refreshPage.js';
import BtnAccept from './btnAccept';
import PopUp from './popUp';


export default function SearchOptions() {

    const { clientId, setClientId } = useContext(UserContext);

    const propertyListUrl = "http://localhost:9001/property/list/";
    const propertySearch = "http://localhost:9001/guest/property/list/";

    const styleIcon = { fontSize: '20px', color: '#6e1583', textTransform: 'none', marginRight: '5px' };
    const labelStyle = { fontSize: '16px', width: '250px', color: '#464646' };
    const inputStyle = { fontSize: '14px', width: '250px' };
    const searchType = { fontSize: '16px' };
    const tab1Style = { borderRadius: '10px', color: 'green', fontSize: '16px', textTransform: 'none', backgroundColor: '#cdd4f5' }
    const tab2Style = { borderRadius: '10px', color: 'purple', fontSize: '16px', textTransform: 'none', backgroundColor: '#cef996' }
    const tab3Style = { borderRadius: '10px', color: 'green', fontSize: '16px', textTransform: 'none', backgroundColor: '#cdd4f5' }
    const searchPageHeader = { color: 'black', fontSize: '20px', borderBottom: '2px solid #d7cdcd' }

    const [showPropertyList, setShowPropertyList] = useState(false);

    const [propertyList, setPropertyList] = useState([]);

    const [searchArea, setSearchArea] = useState("");
    const [optionSelection, setOptionSection] = useState(true);

    const [socialCheck, setSocialCheck] = useState(false);
    const [affordableCheck, setAffordableCheck] = useState(false);

    const [bungalowCheck, setBungalowCheck] = useState(false);
    const [flatCheck, setFlatCheck] = useState(false);
    const [houseCheck, setHouseCheck] = useState(false);
    const [maisonetteCheck, setMaisonetteCheck] = useState(false);
    const [otherCheck, setOtherCheck] = useState(false);

    const [oneBedCheck, setOneBedCheck] = useState(false);
    const [twoBedCheck, setTwoBedCheck] = useState(false);
    const [threeBedCheck, setThreeBedCheck] = useState(false);
    const [fourBedCheck, setFourBedCheck] = useState(false);
    const [fiveBedCheck, setFiveBedCheck] = useState(false);
    const [sixBedCheck, setSixBedCheck] = useState(false);
    const [sevenBedCheck, setSevenBedCheck] = useState(false);
    const [eightBedCheck, setEightBedCheck] = useState(false);
    const [nineBedCheck, setNineBedCheck] = useState(false);
    const [tenBedCheck, setTenBedCheck] = useState(false);

    const tab1Name = "Advertised Properties";
    const tab2Name = "Average Waiting Time";
    const tab3Name = "Recent lets";

    const [basicActive, setBasicActive] = useState('tab1');

    const [showInfoModal, setShowInfoModal] = useState(false);
    const [modalInfo, setModalInfo] = useState("");

    useEffect(() => {
        fetchData(propertyListUrl)
        setOptionSection(true);
    }, [])

    const handleBasicClick = (tabValue) => {
        if (tabValue === basicActive) {
            return;
        }
        setBasicActive(tabValue);
    };

    async function fetchData() {
        try {

            const response = await axios.get(propertyListUrl)

            if (response.data.PropertyList.length > 0) {

                console.log(`Full property list from backend:- ${response.data.message}`)
                setPropertyList(response.data.PropertyList)
                console.log(`Full property list ${response.data}`)
            } else {
                setModalInfo("No new properties");
                setShowInfoModal(true);
                setTimeout(() => {
                    refreshPage();
                }, 5000);
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function searchItems(props) {

        console.log(propertySearch + props)
        try {

            const response = await axios.post(propertySearch, props)
            console.table(response.data)
            if (response.data.PropertyList.length > 0) {
                console.log(`Selected property list from backend:- ${response.data.message}`)
                setPropertyList(response.data.PropertyList)
                console.log(`Selected property list from backend ${response.data}`)
                setShowPropertyList(true);

            } else {
                setModalInfo("No new properties");
                setShowInfoModal(true);
                setTimeout(() => {
                    refreshPage();
                }, 5000);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const PropertyList = (
        <React.Fragment>
            {propertyList.map((property) => {
                return (
                    <MDBCard className='m-2'
                        key={property.propertyId} item='true'
                        style={{ backgroundColor: 'white' }} >
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
                                                <MDBTypography style={labelStyle}>Address:</MDBTypography>
                                            </MDBCol>
                                            <MDBCol className='col-lg-8'>

                                                <MDBTypography ><strong>{ToCamelCase(property.address)}, {ToCamelCase(property.town)}, {(property.postcode).toUpperCase()} </strong></MDBTypography>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol className='col-lg-4'>
                                                <MDBTypography style={labelStyle}>Council Tax:</MDBTypography>
                                            </MDBCol>
                                            <MDBCol className='col-lg-8'>
                                                <MDBTypography > <strong> Band {property.cTaxBand.toUpperCase()}</strong></MDBTypography>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol className='col-lg-4' >
                                                <MDBTypography style={labelStyle}>Available on:</MDBTypography>
                                            </MDBCol>
                                            <MDBCol className='col-lg-8'>
                                                <MDBTypography > <strong>{property.availableFrom}</strong></MDBTypography>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol className='col-lg-4'>
                                                <MDBTypography style={labelStyle}>Rent(PCM):</MDBTypography>
                                            </MDBCol>
                                            <MDBCol className='col-lg-8'>
                                                <MDBTypography > <strong> £ {property.rent}.00</strong></MDBTypography>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol className='col-lg-4'>
                                                <MDBTypography style={labelStyle}>Deposit:</MDBTypography>
                                            </MDBCol>
                                            <MDBCol className='col-lg-8'>
                                                <MDBTypography > <strong>£ {property.deposit}.00</strong></MDBTypography>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol className='col-lg-4'>
                                                <MDBTypography style={labelStyle}>Admin fees:</MDBTypography>
                                            </MDBCol>
                                            <MDBCol className='col-lg-8'>
                                                <MDBTypography > <strong>£ {property.fees}.00</strong></MDBTypography>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCol>
                                    <MDBCol className='col-lg-6 col-md-6'>

                                        <MDBRow className='mt-4'>
                                            <MDBCol className='col-lg-5'>
                                                <MDBTypography style={labelStyle}>Advert Type:</MDBTypography>
                                            </MDBCol>
                                            <MDBCol className='col-lg-7'>
                                                <MDBTypography ><strong>{ToCamelCase(property.advertType)} </strong></MDBTypography>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow >
                                            <MDBCol className='col-lg-5'>
                                                <MDBTypography style={labelStyle}>Type:</MDBTypography>
                                            </MDBCol>
                                            <MDBCol className='col-lg-7'>

                                                <MDBTypography ><strong>{ToCamelCase(property.type)} </strong></MDBTypography>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol className='col-lg-5'>
                                                <MDBTypography style={labelStyle}>Floor: </MDBTypography>
                                            </MDBCol>
                                            <MDBCol className='col-lg-7'>
                                                <MDBTypography > <strong>{property.floor}</strong></MDBTypography>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol className='col-lg-5'>
                                                <MDBTypography style={labelStyle}>Rooms:</MDBTypography>
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
                                                <MDBTypography style={labelStyle}>Reception:</MDBTypography>
                                            </MDBCol>
                                            <MDBCol className='col-lg-7'>
                                                <MDBTypography > <strong>{ToCamelCase(property.reception)}</strong></MDBTypography>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol className='col-lg-5'>
                                                <MDBTypography style={labelStyle}>Pets:</MDBTypography>
                                            </MDBCol>
                                            <MDBCol className='col-lg-7'>
                                                <MDBTypography > <strong>{ToCamelCase(property.pets)}</strong></MDBTypography>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol className='col-lg-5'>
                                                <MDBTypography style={labelStyle}>Tenancy:</MDBTypography>
                                            </MDBCol>
                                            <MDBCol className='col-lg-7'>
                                                <MDBTypography > <strong>{ToCamelCase(property.tenancyType)}</strong></MDBTypography>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol className='col-lg-5'>
                                                <MDBTypography style={labelStyle}>Kitchen:</MDBTypography>
                                            </MDBCol>
                                            <MDBCol className='col-lg-7'>
                                                <MDBTypography > <strong>{ToCamelCase(property.kitchenFitted)}</strong></MDBTypography>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol className='col-lg-5'>
                                                <MDBTypography style={labelStyle}>Furnished:</MDBTypography>
                                            </MDBCol>
                                            <MDBCol className='col-lg-7'>
                                                <MDBTypography > <strong>{ToCamelCase(property.furnished)}</strong></MDBTypography>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol className='col-lg-5'>
                                                <MDBTypography style={labelStyle}>Parking:</MDBTypography>
                                            </MDBCol>
                                            <MDBCol className='col-lg-7'>
                                                <MDBTypography > <strong>{ToCamelCase(property.parking)}</strong></MDBTypography>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol className='col-lg-5'>
                                                <MDBTypography style={labelStyle}>Garage:</MDBTypography>
                                            </MDBCol>
                                            <MDBCol className='col-lg-7'>
                                                <MDBTypography > <strong>{ToCamelCase(property.garage)}</strong></MDBTypography>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol className='col-lg-5'>
                                                <MDBTypography style={labelStyle}>Garden / Patio:</MDBTypography>
                                            </MDBCol>
                                            <MDBCol className='col-lg-7'>
                                                <MDBTypography > <strong>{ToCamelCase(property.garden)} / {ToCamelCase(property.patio)}</strong></MDBTypography>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol className='col-lg-2 col-md-4 col-sm-4'>
                                        <MDBTypography style={labelStyle}>Comments:</MDBTypography>
                                    </MDBCol>
                                    <MDBCol className='col-lg-9 col-md-8 col-sm-8'>
                                        <MDBTypography style={{ textAlign: 'left' }}>{property.comments}</MDBTypography>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBRipple>}
                    </MDBCard>
                );
            })}
        </React.Fragment >
    )

    const handleSearchBtn = (e) => {
        e.preventDefault();

        const searchInfo = {
            socialHousing: socialCheck ? socialCheck : null,
            affordableRent: affordableCheck ? affordableCheck : null,
            bungalow: bungalowCheck ? bungalowCheck : null,
            flat: flatCheck ? flatCheck : null,
            house: houseCheck ? houseCheck : null,
            maisonette: maisonetteCheck ? maisonetteCheck : null,
            other: otherCheck ? otherCheck : null,
            oneBed: oneBedCheck ? oneBedCheck : null,
            twoBed: twoBedCheck ? twoBedCheck : null,
            threeBed: threeBedCheck ? threeBedCheck : null,
            fourBed: fourBedCheck ? fourBedCheck : null,
            fiveBed: fiveBedCheck ? fiveBedCheck : null,
            sixBed: sixBedCheck ? sixBedCheck : null,
            sevenBed: sevenBedCheck ? sevenBedCheck : null,
            eightBed: eightBedCheck ? eightBedCheck : null,
            nineBed: nineBedCheck ? nineBedCheck : null,
            tenBed: tenBedCheck ? tenBedCheck : null,
            // searchArea: searchArea ? searchArea : null
            searchArea: searchArea ? searchArea : 'birmingham'
        }

        setOptionSection(false);
        searchItems(searchInfo);
    }

    const AdvertisedProperties = (
        <React.Fragment>
            <MDBTypography style={{ fontSize: '17px', color: 'blue' }} ><strong>Search properties</strong></MDBTypography>
            <MDBTypography style={{ fontSize: '13px', color: '#4f4f4f' }} ><strong> <span style={{ color: 'red', fontSize: '17px', fontWeight: 'extraBold' }}>*</span></strong> Atleast one from Advert type, Property type, Bed room and/or Town name need to be selected</MDBTypography>
            <MDBRow>
                <MDBCol>
                    <MDBTypography className='' style={searchType} ><strong>Advert type <span style={{ color: 'red' }}>*</span></strong></MDBTypography>
                    <div>
                        <MDBCheckbox value='social housing' id='flexCheck1' label='Social Housing' onClick={(e) => { let newChecked = { ...socialCheck }; newChecked = e.target.value; setSocialCheck(newChecked); }} />
                        <MDBCheckbox value='affordable rent' id='flexCheck2' label='Affordable Rent' onClick={(e) => { let newChecked = { ...affordableCheck }; newChecked = e.target.value; setAffordableCheck(newChecked); }} />
                    </div>
                </MDBCol>

                <MDBCol>
                    <MDBTypography className='' style={searchType} ><strong>Property type <span style={{ color: 'red' }}>*</span></strong></MDBTypography>
                    <div>
                        <MDBCheckbox value='bungalow' id='flexCheck3' label='Bungalow' onClick={(e) => { let newChecked = { ...bungalowCheck }; newChecked = e.target.value; setBungalowCheck(newChecked); }} />
                        <MDBCheckbox value='flat' id='flexCheck4' label='Flat' onClick={(e) => { let newChecked = { ...flatCheck }; newChecked = e.target.value; setFlatCheck(newChecked); }} />
                        <MDBCheckbox value='house' id='flexCheck5' label='House' onClick={(e) => { let newChecked = { ...houseCheck }; newChecked = e.target.value; setHouseCheck(newChecked); }} />
                        <MDBCheckbox value='maisonette' id='flexCheck6' label='Maisonette' onClick={(e) => { let newChecked = { ...maisonetteCheck }; newChecked = e.target.value; setMaisonetteCheck(newChecked); }} />
                        <MDBCheckbox value='other' id='flexCheck7' label='Other' onClick={(e) => { let newChecked = { ...otherCheck }; newChecked = e.target.value; setOtherCheck(newChecked); }} />
                    </div>
                </MDBCol>

                <MDBCol>
                    <MDBTypography className='' style={searchType} ><strong>Bed Rooms <span style={{ color: 'red' }}>*</span></strong></MDBTypography>
                    <div>
                        <MDBCheckbox value='1' id='flexCheck8' label='1 Bed' onClick={(e) => { let newChecked = { ...oneBedCheck }; newChecked = e.target.value; setOneBedCheck(newChecked); }} />
                        <MDBCheckbox value='2' id='flexCheck9' label='2 Beds' onClick={(e) => { let newChecked = { ...twoBedCheck }; newChecked = e.target.value; setTwoBedCheck(newChecked); }} />
                        <MDBCheckbox value='3' id='flexCheck10' label='3 Beds' onClick={(e) => { let newChecked = { ...threeBedCheck }; newChecked = e.target.value; setThreeBedCheck(newChecked); }} />
                        <MDBCheckbox value='4' id='flexCheck11' label='4 Beds' onClick={(e) => { let newChecked = { ...fourBedCheck }; newChecked = e.target.value; setFourBedCheck(newChecked); }} />
                        <MDBCheckbox value='5' id='flexCheck12' label='5 Beds' onClick={(e) => { let newChecked = { ...fiveBedCheck }; newChecked = e.target.value; setFiveBedCheck(newChecked); }} />
                        <MDBCheckbox value='6' id='flexCheck13' label='6 Beds' onClick={(e) => { let newChecked = { ...sixBedCheck }; newChecked = e.target.value; setSixBedCheck(newChecked); }} />
                        <MDBCheckbox value='7' id='flexCheck14' label='7 Beds' onClick={(e) => { let newChecked = { ...sevenBedCheck }; newChecked = e.target.value; setSevenBedCheck(newChecked); }} />
                        <MDBCheckbox value='8' id='flexCheck15' label='8 Beds' onClick={(e) => { let newChecked = { ...eightBedCheck }; newChecked = e.target.value; setEightBedCheck(newChecked); }} />
                        <MDBCheckbox value='9' id='flexCheck16' label='9 Beds' onClick={(e) => { let newChecked = { ...nineBedCheck }; newChecked = e.target.value; setNineBedCheck(newChecked); }} />
                        <MDBCheckbox value='10' id='flexCheck17' label='10 Beds' onClick={(e) => { let newChecked = { ...tenBedCheck }; newChecked = e.target.value; setTenBedCheck(newChecked); }} />
                    </div>
                </MDBCol>

                <MDBCol>
                    <MDBTypography className='' style={{ fontSize: '17px' }} ><strong>Properties in <span style={{ color: 'red' }}>*</span></strong></MDBTypography>
                    <div className='mb-4' >

                        <input style={inputStyle}
                            className='form-control'
                            type='text'
                            placeholder='Town or city'
                            maxLength={20} value={searchArea}
                            onChange={(e) => { let newEdit = { ...searchArea }; newEdit = e.target.value; setSearchArea(newEdit) }}>
                        </input>
                        <BtnAccept
                            onClick={(e) => { handleSearchBtn(e) }}>
                            Search <span style={{ color: '#ebe122', fontSize: '17px', fontWeight: 'extraBold' }}> *</span>
                        </BtnAccept>
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBTypography style={{ fontSize: '13px', color: '#4f4f4f' }} ><strong> <span style={{ color: '#92a35f', fontSize: '17px', fontWeight: 'extraBold' }}>*</span></strong> Blank search will show properties in Birmingham</MDBTypography>
            </MDBRow>
        </React.Fragment>
    )

    const AverageWaitingTime = (
        <React.Fragment>

            <MDBTypography style={{ fontSize: '17px', color: 'purple' }} ><strong>Average Waiting Time</strong></MDBTypography>
            <MDBTypography style={{ fontSize: '13px', color: '#4f4f4f' }} ><strong> Information about average waiting time is not available</strong></MDBTypography>

        </React.Fragment>
    )

    const RecentLets = (
        <React.Fragment>

            <MDBTypography style={{ fontSize: '17px', color: 'green' }} ><strong>Recent Lets Information</strong></MDBTypography>
            <MDBTypography style={{ fontSize: '13px', color: '#4f4f4f' }} ><strong> Information about recent let is not available</strong></MDBTypography>

        </React.Fragment>
    )

    const TabPage = (
        <React.Fragment>
            <MDBContainer className='ps-5'>
                <MDBTabs  >
                    <MDBTabsItem >
                        <MDBTabsLink style={tab1Style}
                            onClick={() => handleBasicClick('tab1')}
                            active={basicActive === 'tab1'}>
                            <strong >{tab1Name}</strong>
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink style={tab2Style}
                            onClick={() => handleBasicClick('tab2')}
                            active={basicActive === 'tab2'}>
                            <strong>{tab2Name}</strong>
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink style={tab3Style}
                            onClick={() => handleBasicClick('tab3')}
                            active={basicActive === 'tab3'}>
                            <strong>{tab3Name}</strong>
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent className='my-1 justify-content-center'>
                    <MDBTabsPane show={basicActive === 'tab1'}>{optionSelection ? AdvertisedProperties : PropertyList}</MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab2'}>{AverageWaitingTime}</MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab3'}>{RecentLets}</MDBTabsPane>
                </MDBTabsContent>
            </MDBContainer>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto ps-4 pt-4' style={{ backgroundColor: '#f7f2f287' }} >
                <MDBTypography className='card-header mb-2'
                    style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} >
                    <strong>Properties and recent lets search</strong>
                </MDBTypography>

                <MDBRow className='' bgcolor='#f7f2f287'>
                    <MDBCol className=''>
                        {
                            TabPage
                        }
                    </MDBCol>
                </MDBRow>
            </MDBCard>
            {
                showInfoModal && <PopUp modalInfo={modalInfo} setShowInfoModal={setShowInfoModal}></PopUp>
            }
        </React.Fragment>
    );
}