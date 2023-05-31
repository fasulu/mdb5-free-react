import React from 'react';
import { useNavigate } from "react-router-dom";

import {
    MDBCard, MDBCardBody, MDBBtn
} from 'mdb-react-ui-kit';

export default function LoginRegister() {

    const navigate = useNavigate();
    const gotoRegisterPage = () => {
        navigate('/nino');
    }


    return (
        <React.Fragment>
            <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='w-100 mx-auto'>
                <MDBCardBody>
                    <ul className="list-group list-group-flush" >
                        <li className="list-group-item list-group-item-primary">
                            <strong>Register</strong>
                        </li>
                        <li className="list-group-item">
                            <MDBBtn onClick={gotoRegisterPage}>Register</MDBBtn>
                        </li>
                    </ul>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment>
    );
}