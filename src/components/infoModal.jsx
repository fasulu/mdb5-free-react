
import React, { useState,useEffect } from 'react';
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';

import closeIcon from "../../src/resources/images/close.png";
import markAsReadIcon from "../../src/resources/images/tick.png";

export default function InfoModal(props) {

    const [modal, setModal] = useState(true);

    const toggleShow = () => setModal(!modal);

    const closeInfoTitle = "Close"
    const acceptTitle = "Accept"

    const showInfo = props.value;

    useEffect(() => {
        
    }, [])

    const markAsRead = async (e) => {
        e.preventDefault()
        console.log("Iam in update markasread")
    }

    const closeMsgBox = (e) => {
        // e.preventDefault();
        setModal(false);
    }

    const ShowModal = (
        <React.Fragment>
            <MDBModal show={modal} setShow={setModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Confirmation</MDBModalTitle>
                        </MDBModalHeader>

                        <MDBModalBody>{showInfo}</MDBModalBody>

                        <MDBModalFooter>
                            <img src={closeIcon} style={{ cursor: 'pointer', maxWidth: '25px', float: 'right' }}
                                alt={closeInfoTitle} title={closeInfoTitle} onClick={(e) => { window.location.reload() }} />
                            <img src={markAsReadIcon} style={{ cursor: 'pointer', maxWidth: '25px', float: 'left' }}
                                alt={acceptTitle} title={acceptTitle} onClick={(e) => { markAsRead(e) }} />
                        </MDBModalFooter>

                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </React.Fragment >
    )

    return (
        <React.Fragment>
            {
                showInfo && ShowModal
            }
        </React.Fragment>
    );
}
