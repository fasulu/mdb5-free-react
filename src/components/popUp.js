import React from 'react'

import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody
} from 'mdb-react-ui-kit';

import closeIcon from "../../src/resources/images/close.png";

export default function PopUp({ setShowInfoModal, modalInfo }) {

    const showInfoModal = true;

    const closeInfoTitle = "Close"

    return (

        <React.Fragment>
            <MDBModal show={showInfoModal} setShow={setShowInfoModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader style={{ borderBottom: '2px solid #4e4e6a' }}>
                            <MDBModalTitle >Information</MDBModalTitle>
                            <img src={closeIcon} style={{ cursor: 'pointer', maxWidth: '25px', float: 'right' }}
                                alt={closeInfoTitle} title={closeInfoTitle} onClick={(e) => { setShowInfoModal(false) }} />
                        </MDBModalHeader>
                        <MDBModalBody >{modalInfo}</MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </React.Fragment>
    )

    // return (
    //     <div className="modalBackground">
    //         <div className="modalContainer">
    //             <div className="titleCloseBtn">
    //                 <button
    //                     onClick={() => {
    //                         setShowInfoModal(false);
    //                     }}
    //                 >
    //                     X
    //                 </button>
    //             </div>
    //             <div className="title">
    //                 <h1>Are You Sure You Want to Continue?</h1>
    //             </div>
    //             <div className="body">
    //                 <p>{modalInfo}</p>
    //             </div>
    //             <div className="footer">
    //                 <button
    //                     onClick={() => {
    //                         setShowInfoModal(false);
    //                     }}
    //                     id="cancelBtn"
    //                 >
    //                     Cancel
    //                 </button>
    //                 <button>Continue</button>
    //             </div>
    //         </div>
    //     </div>
    // );
}

