import React from 'react';
import {
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function BtnCancel({children, btnStyle, onClick}) {

    return (
        <React.Fragment>
            <MDBRow className='p-2'>
                <div className='d-flex w-auto p-2'>
                    <MDBBtn style={btnStyle} 
                        onClick={onClick} >
                        {children}
                    </MDBBtn>
                </div>
            </MDBRow>
        </React.Fragment>
    );
}