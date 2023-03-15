import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { dates, months } from '../resources/datePicker';
import { validDate, validPwd } from '../validations/Validator';
import { UserContext } from "../userContext/UserContext"

import { encryptDetails, decryptDetails } from '../utility/hashDetails';

import {
    MDBIcon,
    MDBCard, MDBCardBody,
    MDBRow, MDBCol,
    MDBTypography,
    MDBInputGroup, MDBBtn
} from 'mdb-react-ui-kit';

export default function Login() {

    const navigate = useNavigate();

    const { clientId, setClientId } = useContext(UserContext);

    const clientRefUrl = "http://localhost:9001/client/clientOneref/";
    const clientLoginUrl = "http://localhost:9001/client/clientlogin/";

    const datesData = dates;
    const monthsData = months;
    const ageMax = new Date().getFullYear();        // year picker up to current year
    const ageMin = new Date().getFullYear() - 120;  // year picker 120 year back from current year

    const inputStyle = { fontSize: '14px', width: '270px' };
    const datePickerStyle = { maxWidth: '70px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const monthPickerStyle = { maxWidth: '130px', overflow: 'scroll', maxHeight: '38px', fontSize: '16px', textAlign: 'left' }
    const yearPickerStyle = { width: '80px', float: 'left', border: '5' };
    const btnSytle = { fontSize: '16px', width: 'auto', textTransform: 'none', marginRight: '10px' };

    const [loginReference, setLoginReference] = useState("");
    // const [loginReference, setLoginReference] = useState("bs61864");


    const [ref_, setRef_] = useState("")
    const [id_, setId_] = useState("")
    const [pwd, setPwd] = useState("");
    var newFNameEdit = "";
    var newSNameEdit = "";

    const [memo, setMemo] = useState("");
    const [password, setPassword] = useState("");
    const [memorableDate, setMemorableDate] = useState("");
    const [memDate, setMemDate] = useState("");
    const [memMonth, setMemMonth] = useState("");
    const [memYear, setMemYear] = useState("");

    const [showGetLoginInfo, setShowGetLoginInfo] = useState(false)
    const [showGetLoginRefInfo, setShowGetLoginRefInfo] = useState(true)

    useEffect(() => {
        if (window.localStorage.getItem('cref')) {
            window.localStorage.removeItem('cref');
        }
    }, [])

    const cancelEntry = (e) => {
        navigate('/login');
    }

    const GetLoginDetails = (
        <>
            <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='w-100 mx-auto' >
                <MDBCardBody>
                    <MDBTypography style={{ fontSize: '18px' }}><strong>Client Reference:- {ref_.toUpperCase()}</strong></MDBTypography>

                    {/**********  Password */}
                    <MDBRow>
                        <MDBCol className='size=md p-2'>
                            <div className='p-2'>
                                <p style={{ fontSize: '17px' }}>Enter your new password</p>
                                <input style={inputStyle} className='form-control' type='password' placeholder='Password...'
                                    minLength={6} maxLength={10} value={password}
                                    onChange={(e) => { let newEdit = { ...password }; newEdit = e.target.value; setPassword(newEdit) }}></input>
                            </div>
                        </MDBCol>
                    </MDBRow>

                    {/**********  Memorable date */}
                    <MDBRow>
                        <MDBCol className='size=md p-2'>
                            <div className='p-2'>
                                <p style={{ fontSize: '16px' }}><strong>Enter your new memorable date*</strong></p>
                                <div className='btn-group'>
                                    <select style={datePickerStyle}
                                        className="form-select rounded"
                                        onChange={(e) => { let newEdit = { ...setMemDate }; newEdit = e.target.value; setMemDate(newEdit) }} >
                                        {datesData.map((option) => (
                                            <option key={option.dKey} value={option.dKey}>{option.dValue}</option>
                                        ))}
                                    </select>

                                    <select style={monthPickerStyle}
                                        className="form-select rounded"
                                        onChange={(e) => { let newEdit = { ...setMemMonth }; newEdit = e.target.value; setMemMonth(newEdit) }} >
                                        {monthsData.map((option) => (
                                            <option key={option.mKey} value={option.mKey}>{option.mValue}</option>
                                        ))}
                                    </select>

                                    <input className='form-control rounded'
                                        style={yearPickerStyle}
                                        type='number'
                                        min={ageMin}
                                        max={ageMax}
                                        placeholder='year'
                                        onChange={(e) => { let newEdit = { ...setMemYear }; newEdit = e.target.value; setMemYear(newEdit) }} >
                                    </input>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <form className='d-flex w-auto p-2'>
                            <MDBBtn style={btnSytle}
                                onClick={(e) => { handleLogin(e) }}>
                                Continue
                            </MDBBtn>

                            <MDBBtn style={btnSytle}
                                color='secondary'
                                onClick={cancelEntry}>
                                Cancel
                            </MDBBtn>
                        </form>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </>
    );

    const GetLoginRefInfo = (
        <>
            <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='w-100 mx-auto' >

                <MDBCardBody>
                    <MDBTypography style={{ fontSize: '18px' }}><strong>Login</strong></MDBTypography>

                    <MDBTypography style={{ fontSize: '17px' }}>Your login reference*</MDBTypography>

                    <input className='form-control' type='text' placeholder='login reference'
                        onChange={(e) => { let newEdit = { ...loginReference }; newEdit = e.target.value; setLoginReference(newEdit) }} >
                    </input>

                    <a href='' className="">I have forgotten my login reference</a>

                    <form className='d-flex input-group w-auto mt-5'>
                        <MDBBtn style={btnSytle}
                            color='primary'
                            onClick={(e) => { handleReference(e), setShowGetLoginInfo(true) }}>
                            Continue<MDBIcon fas icon='caret-right' className='mx-2' />
                        </MDBBtn>
                    </form>
                </MDBCardBody>
            </MDBCard>
        </>
    );

    const handleReference = async (e) => {

        e.preventDefault()

        try {
            console.log(clientRefUrl + loginReference)
            const response = await axios.get(clientRefUrl + loginReference, {})

            setRef_(response.data.clientRef)
            setId_(response.data.clientid)
            setPwd(response.data.clientPwd)
            setMemo(response.data.clientDt)
            console.log(`Output from backend ${setRef_,
                setId_,
                setPassword,
                setMemorableDate}`
            );
            console.log(response.request.status, response.data.clientPwd, response.data.clientDt)

            if (response.data.message === "Client reference found") {
                setShowGetLoginRefInfo(false);
                setShowGetLoginInfo(true);
            }

        } catch (error) {
            console.log(error)
            setShowGetLoginRefInfo(true);
            setShowGetLoginInfo(false);
        }
    }

    const formatDate = () => {

        let dateMemorable = { ...memorableDate }; dateMemorable = (memYear + "-" + memMonth + "-" + memDate); setMemorableDate(dateMemorable);

        console.log(`Validation result is dateMemorable date ${dateMemorable}`)
    }

    const Login_ = async () => {

        const primaryLoginInfo = {
            clientId: id_,
            client_password: password,
            client_memorable_date: memorableDate,
        }

        try {
            console.log(clientRefUrl, primaryLoginInfo)
            const response = await axios.post(clientLoginUrl, primaryLoginInfo)

            newFNameEdit = response.data.FName;
            newSNameEdit = response.data.SName;
            const name = newFNameEdit + " " + newSNameEdit;
            console.log(`Output from backend 
            ${id_}, ${newFNameEdit}, ${newSNameEdit}`);

            encryptDetails(id_, loginReference);

            navigate('/account', {
                state:
                {
                    // clientid: id_
                    // clientRef: loginReference
                }
            });

        } catch (error) {
            console.log(error)
        }
    }

    const handleLogin = async (e) => {

        e.preventDefault();

        formatDate();

        console.log(`Validation result is pwd ${password} and 
        memorable date ${memorableDate}`)

        Login_();
    }

    return (
        <React.Fragment>
            {
                showGetLoginRefInfo && GetLoginRefInfo
            }
            {
                showGetLoginInfo && GetLoginDetails
            }
        </React.Fragment >
    );
}