import React from 'react';
import { useNavigate } from "react-router-dom";

import {
    MDBIcon,
    MDBCard, MDBCardBody,
    MDBContainer, MDBRow, MDBCol,
    MDBTypography,
    MDBInputGroup, MDBBtn
} from 'mdb-react-ui-kit';

export default function LoginRegister() {

    const navigate = useNavigate();
    const gotoRegisterPage = () => {
        navigate('/account');
    }


    return (
        <React.Fragment>
            <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='w-100 mx-auto'>
                <MDBCardBody>
                    <ul className="list-group list-group-flush" >
                        <li className="list-group-item list-group-item-primary"><strong>Register</strong></li>
                        <li className="list-group-item" onClick={gotoRegisterPage}>Register</li>
                    </ul>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment>
    );
}