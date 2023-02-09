import React from 'react';

import {
    MDBContainer, MDBRow, MDBCol
} from 'mdb-react-ui-kit';
import Navbar from '../components/Navbar';
import NavbarSecondary from '../components/NavbarSecondary';
import Register from '../components/loginRegister';
import Login from '../components/login';
import LoginRegister from '../components/loginRegister';
import Footer from '../components/footer';

export default function LoginPage() {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <NavbarSecondary></NavbarSecondary>
            <MDBRow className='my-3 mt-5 justify-content-center' bgcolor='#f7f2f287'>
                <MDBCol className='col-lg-6 col-md-6 col-sm-6'>
                    <Login />
                </MDBCol>
                <MDBCol className='col-lg-4 col-md-4 col-sm-4'>
                    <LoginRegister />
                </MDBCol>
            </MDBRow>
            <Footer></Footer>
        </React.Fragment>
    );
}