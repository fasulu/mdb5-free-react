import React from 'react';
import {
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function BtnAccept({children, color, btnStyle, onClick}) {

    return (
        <React.Fragment>
            <MDBRow className='p-2'>
                <div className='d-flex w-auto'>
                    <MDBBtn 
                    style={btnStyle}
                    color={color}
                    onClick={onClick} >
                        {children}
                    </MDBBtn>
                </div>
            </MDBRow>
        </React.Fragment>
    );
}