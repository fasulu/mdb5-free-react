import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBTypography
} from 'mdb-react-ui-kit';

export default function PageNotFound() {

  const navigate = useNavigate();

  const gotoHomePage = () => {
    navigate('/home');
  }

  return (
    <React.Fragment>
      <div className="p-5 font-extrabold p-12 text-black-500 ...">
      <h1 >
        404 Request Not Found
      </h1>
      <MDBBtn style={{backgroundColor: '#7eb6eb'}} onClick={gotoHomePage} to='/'>Home</MDBBtn>
      </div>
    </React.Fragment>
  );
}

// export default PageNotFound;
