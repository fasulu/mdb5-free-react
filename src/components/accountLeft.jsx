import React, { useState, useEffect, useContext } from 'react';
import { decryptDetails } from '../utility/hashDetails';
import axios from 'axios';
import PopUp from './popUp';
import { UserContext } from "../userContext/UserContext"

import {
    MDBTypography,
    MDBContainer, MDBCard,
    MDBRow, MDBCol
} from 'mdb-react-ui-kit';

const AccountLeft = (props) => {

    const { clientId, setClientId } = useContext(UserContext);

    // const styleBtn = { fontSize: '13px', color: '#4f83c3', textTransform: 'none' };

    // const styleBorder = { color: '#4f83c3', borderTop: '1px solid #d7cdcd', borderBottom: '1px solid #d7cdcd' };

    // const iconRight = "fa-solid fa-caret-right";

    // const iconStatus = props.iconStatus;

    const errorDetailUrl = "http://localhost:9001/client/err/";

    const todayDate = new Date().toISOString().slice(0, 19);
    // const todayDate = () => { let date_ = new Date(); date_ = date_.toLocaleString('en-GB', { timeZone: 'UTC' }) }


    const headStyle = { color: 'black', fontSize: 'clamp(17px, 2.5vw, 22px)', borderBottom: '2px solid #d7cdcd' };
    const subHeadStyleA = { color: '#4f83c3', fontSize: 'clamp(17px, 2.5vw, 22px)', borderBottom: '4px solid #4f83c3a3' };
    const subHeadStyleB = { fontSize: 'clamp(15px, 2.5vw, 17px)', backgroundColor: '#dcdcdc', color: 'black' };

    const [loginReference, setLoginReference] = useState();

    const [showInfoModal, setShowInfoModal] = useState(false);
    const [modalInfo, setModalInfo] = useState("");

    useEffect(() => {

        fetchData();

    }, [])

    async function fetchData() {
        try {

            const loginRef = decryptDetails();

            // console.log(`${loginRef.loginRef}`)
            setLoginReference((loginRef.loginRef).toUpperCase())

        } catch (error) {

            let result = error.message;
            const errDetails = {
                clientId: 'Unknown',
                error_Location: 'ActLft101',
                error_Date: todayDate,
                error_Detail: result + "\nUnable to identify user, please try again later."
            }
            const response = await axios.post(errorDetailUrl, errDetails);

            setModalInfo("Acct101: Unable to identify user, please try again later.");
            setShowInfoModal(true);
        }
    }

    return (
        <React.Fragment>
            {
                <MDBContainer className='ps-5 pt-3' >
                    <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                        <p style={headStyle} ><strong>My Account</strong></p>
                    </MDBRow>
                    <MDBRow >
                        <MDBCol>
                            <p style={subHeadStyleA} ><strong>My Activity</strong></p>

                            <p> Your Login Reference: <strong>{loginReference}</strong></p>
                            <p> Please make a note of this login reference and your memorable date as you will need them to login again the next time you visit this site </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow >
                        <MDBCol>
                            <p style={subHeadStyleA} ><strong>My Application</strong></p>
                            <MDBCard>
                                <MDBTypography component={'div'} className='card-header' style={subHeadStyleB} ><strong>Social housing</strong></MDBTypography>

                                <MDBRow className='mt-3 m-2'>
                                    <p >Applicaiton reference: </p>
                                    <p >State Reason: </p>
                                    <p >Start Date: </p>
                                    <p >Preferred Area: </p>
                                </MDBRow>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            }
            {
                showInfoModal && <PopUp modalInfo={modalInfo} setShowInfoModal={setShowInfoModal}></PopUp>
            }
        </React.Fragment>
    )
};

export default AccountLeft;