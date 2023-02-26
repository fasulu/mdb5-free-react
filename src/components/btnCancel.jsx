import React from 'react';
import {
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';


const btnSytle = { fontSize: '16px', width: 'auto', textTransform: 'none', marginRight: '10px' };

export default function BtnCancel() {

    return (
        <React.Fragment>
            <MDBRow className='p-2'>
                <div className='d-flex w-auto p-2'>
                    <MDBBtn style={btnSytle} color='secondary'>
                        Cancel
                    </MDBBtn>
                </div>
            </MDBRow>
        </React.Fragment>
    );
}