import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";

import { UserContext } from "../userContext/UserContext.jsx"

import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBRipple,
    MDBTypography,
    MDBRow, MDBCol,
    MDBCheckbox,
    MDBBadge,
    MDBTable, MDBTableHead, MDBTableBody
} from 'mdb-react-ui-kit';

import BtnAccept from './btnAccept.jsx';
import PopUp from './popUp';
import SaveErrDetail from '../utility/saveErrDetail.jsx';

import { refreshPage } from '../utility/refreshPage.js';
import { decryptDetails } from '../utility/hashDetails';

import addIcon from '../../src/resources/images/add.png'
import listIcon from '../../src/resources/images/list.png'
import { ConvertToDate, ConvertToTimeStamp, ConvertToLocalDate, ConvertToLocalToDoDate } from '../utility/dateConvertion.jsx';

export default function MyToDoList() {

    const { clientId, setClientId } = useContext(UserContext);

    const toDoAddUrl = "http://localhost:9001/todo/newtodo/";
    const todoListUrl = "http://localhost:9001/todo/client/";
    const todoUpdateUrl = "http://localhost:9001/todo/client/update/";
    const todoGetInfoUrl = "http://localhost:9001/todo/client/info/";

    // const todayDate = ()=>{let date_ = new Date(); date_ = date_.toLocaleString('en-GB', { timeZone: 'UTC' })}

    const textAreaStyle = { fontSize: '18px', maxWidth: '500px', minHeight: '150px', color: '#464646' };
    const inputStyle = { fontSize: '18px', maxWidth: '500px' };
    const dateStyle = { fontSize: '18px', minHeight: '39px', width: '150px', color: '#464646', border: '1px solid #4f4f4f', borderRadius: '4px', outlineColor: 'green!important' };

    const btnAddSytle = { fontSize: '16px', width: 'auto', textTransform: 'none', marginRight: '10px', backgroundColor: '#3b71ca' };
    const btnCancelSytle = { fontSize: '16px', color: 'blue', width: 'auto', textTransform: 'none', marginRight: '10px', backgroundColor: '#9cbaea' };

    const bidListHeader = { color: 'black', fontSize: '22px', borderBottom: '2px solid #d7cdcd' };
    const bidTableHead = { border: '1px solid #e3ebf7', backgroundColor: '#d2e1e9', fontSize: '16px', textAlign: 'center', color: 'black' };
    const bidRow = { paddingLeft: '25px', textAlign: 'center' };
    const bidDataRow = { cursor: 'pointer', fontWeight: 'bold', color: '#3737dd', textDecorationLine: 'underline' }

    const listIconTitle = "List of to do";
    const addIconTitle = "Add new to do";

    const [toDoList, setToDoList] = useState([]);

    let toDoInfo;

    const [showOption, setShowOption] = useState(true);
    const [showAddToDo, setShowAddToDo] = useState(false);
    const [showUpdateToDo, setShowUpdateToDo] = useState(false);
    const [showToDoList, setShowToDoList] = useState(false);

    const [_id, set_id] = useState("");
    const [toDoDate, setToDoDate] = useState(new Date().toISOString().slice(0, 10));
    const [toDoTask, setToDoTask] = useState("");
    const [toDoStatus, setToDoStatus] = useState(false);
    const [comments, setComments] = useState("");

    const [showInfoModal, setShowInfoModal] = useState(false);
    const [modalInfo, setModalInfo] = useState("");

    var date_;

    useEffect(() => {
        fetchData();

    }, [])

    async function fetchData() {
        try {
            const idRef = decryptDetails();     // get id and reference from local storage using dcrypDetails() module.
            console.log(idRef)
            setClientId(idRef.decryptedID);     // get id and reference from local storage using dcrypDetails() module.
            console.log(clientId);

            if (!setClientId) {
                setModalInfo("Unable to identify client");
                setShowInfoModal(true);
                setTimeout(() => {
                    refreshPage();
                }, 5000);
            } else {

                const response = await axios.get(todoListUrl + idRef.decryptedID)

                if (response.length > 0) {

                    console.log(`To do response from backend:- ${response.data.message}`)
                    setToDoList(response.data.TodoList)
                    console.log(`list of members ${response.data}`)
                }
            }
        } catch (error) {
            let result = error.message;
            const errDetails = {
                error_Location: 'Todo101',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            console.log(response)

            setModalInfo("Todo101: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const handleTodoAdd = async (e) => {

        try {
            setToDoDate((e.target.value));
            let status_;

            let checkBox = window.document.getElementById('statusAddCheck');
            console.log(`checkbox checked ${checkBox}`)

            if (checkBox.checked) {
                status_ = true;
            } else {
                status_ = false;
            }

            const toDoInfo = {
                clientId: clientId,
                toDoDate: ConvertToTimeStamp(toDoDate),
                toDoTask: toDoTask,
                toDoStatus: status_,
                comments: comments
            }

            console.table(toDoInfo)
            addNewToDo(toDoInfo);

        } catch (error) {

            let result = error.message;
            const errDetails = {
                error_Location: 'Todo102',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            console.log(response)

            setModalInfo("Todo102: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }

    }

    const myToDoList = async (e) => {

        try {

            console.log(`Get todo list url is ${todoListUrl + clientId}`)

            const response = await axios.get(todoListUrl + clientId)

            if (response) {

                console.log(`To do response from backend:- ${response.data.message}`)
                setToDoList(response.data.TodoList)
                console.log(`list of todos ${response.data}`)
                setShowToDoList(true);
                setShowOption(false)
                setShowAddToDo(false)
            } else {
                // refreshPage("No new to dos");
                setModalInfo("No new to dos");
                setShowInfoModal(true);
                setTimeout(() => {
                    refreshPage();
                }, 5000);
                setShowToDoList(false);
                setShowOption(true)
                setShowAddToDo(false)
            }
        } catch (error) {
            let result = error.message;
            const errDetails = {
                error_Location: 'Todo103',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            console.log(response)

            setModalInfo("Todo103: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);
        }
    }

    const addNewToDo = async (toDoInfo) => {

        console.log("Iam in handle todo", toDoInfo)

        try {

            console.table(toDoInfo);

            const response = await axios.post(toDoAddUrl, toDoInfo)
            if (response.data) {
                console.log(response.data.message);
                console.log(response.data.Status_Reply);
                console.log(response.data.ToDoInfo);
                // refreshPage(response.data.Status_Reply)
                setModalInfo(response.data.Status_Reply);
                setShowInfoModal(true);
                setTimeout(() => {
                    refreshPage();
                }, 3000);
            } else {
                // refreshPage(response.data.Status_Reply)
                setModalInfo(response.data.Status_Reply);
                setShowInfoModal(true);
                setTimeout(() => {
                    refreshPage();
                }, 3000);
            }
        } catch (error) {
            let result = error.message;
            const errDetails = {
                error_Location: 'Todo104',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            console.log(response)

            setModalInfo("Todo104: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);

            setTimeout(() => {
                refreshPage();
            }, 3000);
        }
    }

    const handleTodoUpdate = async (e, toDo) => {
        e.preventDefault();

        console.log(toDo._id, toDo.toDoDate, toDo.toDoTask, toDo.toDoStatus, toDo.comments);

        console.log(toDo._id, ConvertToLocalToDoDate(toDo.toDoDate), toDo.toDoTask, toDo.toDoStatus, toDo.comments);

        set_id(toDo._id);
        setToDoDate(ConvertToDate(toDo.toDoDate));
        setToDoTask(toDo.toDoTask);
        setToDoStatus(toDo.toDoStatus);
        setComments(toDo.comments);

        setShowUpdateToDo(true);
        setShowAddToDo(false);
        setShowOption(false);
        setShowToDoList(false);
    }

    const updateToDo = async (e) => {
        e.preventDefault()

        console.log("Iam in update todo")
        let status_;

        let checkBox = window.document.getElementById('statusUpdateCheck');
        console.log(`checkbox checked ${checkBox}`)

        try {

            if (checkBox.checked) {
                status_ = true;
            } else {
                status_ = false;
            }

            console.log(_id, toDoDate, toDoTask, status_, comments);

            const toDoInfo = {
                clientId: clientId,
                toDoDate: ConvertToTimeStamp(toDoDate),
                toDoTask: toDoTask,
                toDoStatus: status_,
                comments: comments
            }

            const response = await axios.put(todoUpdateUrl + _id, toDoInfo)
            if (response.data) {

                setModalInfo(response.data.Status_Reply);

                setShowInfoModal(true);
                setTimeout(() => {
                    refreshPage();
                }, 3000);
            } else {
                setModalInfo(response.data.Status_Reply);

                setShowInfoModal(true);
                setTimeout(() => {
                    refreshPage();
                }, 5000);
            }
        } catch (error) {
            let result = error.message;
            const errDetails = {
                error_Location: 'Todo105',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            console.log(response)

            setModalInfo("Todo105: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);

            setTimeout(() => {
                refreshPage();
            }, 5000);
        }
    }

    const handleDeleteToDo = async (e) => {
        e.preventDefault();
        console.log();

        try {
            console.log(withdrawnBidUrl + propertyId)
            const response = await axios.delete(withdrawnBidUrl + propertyId);

            if (response.data) {

                setModalInfo(response.data.Status_Reply);
                setShowInfoModal(true);
                setTimeout(() => {
                    refreshPage();
                }, 3000);
            } else {
                setModalInfo(response.data.Status_Reply);
                setShowInfoModal(true);

                setTimeout(() => {
                    refreshPage();
                }, 5000);
            }

        } catch (error) {
            let result = error.message;
            const errDetails = {
                error_Location: 'Todo106',
                error_Detail: result + "\nOops! Something went wrong, please try again later."
            }
            const response = SaveErrDetail(errDetails)
            console.log(response)

            setModalInfo("Todo106: Oops! Something went wrong, please try again later.");
            setShowInfoModal(true);

            setTimeout(() => {
                refreshPage();
            }, 5000);
        }
    }

    const OptionSelectPage = (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto ps-4 pt-4' style={{ backgroundColor: '#f7f2f287' }} >
                <MDBTypography component={'div'} className='card-header'
                    style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} >
                    <strong>My To Do</strong>
                </MDBTypography>
                <MDBCardBody className='d-flex justify-content-center'>
                    <MDBRow>
                        <MDBCol className='size-md'>
                            <MDBRow>
                                <MDBRipple
                                    className='bg-image hover-overlay shadow-0-strong'
                                    rippleTag='div'
                                    rippleColor='light' >
                                    <img src={addIcon} style={{ maxWidth: '100px' }} alt={addIconTitle} title={addIconTitle} />
                                    <a href='#!'>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                            onClick={(e) => { setShowAddToDo(true); setShowToDoList(false); setShowOption(false) }}>
                                        </div>
                                    </a>
                                </MDBRipple>
                            </MDBRow>
                            <MDBRow>
                                <MDBTypography component={'div'} style={{ textAlign: 'center', paddingTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>
                                    Add to do
                                </MDBTypography>
                            </MDBRow>
                        </MDBCol>

                        <MDBCol className='size-md mx-2'>
                            <MDBRow>
                                <MDBRipple
                                    className='bg-image hover-overlay shadow-0-strong'
                                    rippleTag='div'
                                    rippleColor='light' >
                                    <img src={listIcon} style={{ maxWidth: '100px' }} alt={listIconTitle} title={listIconTitle} />
                                    <a href='#!'>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                            onClick={(e) => { setShowToDoList(true); setShowAddToDo(false); setShowOption(false); myToDoList() }}>
                                        </div>
                                    </a>
                                </MDBRipple>
                            </MDBRow>
                            <MDBRow>
                                <MDBTypography component={'div'} style={{ textAlign: 'center', paddingTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>
                                    List of to do
                                </MDBTypography>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    )

    const ToDoListPage = (
        < React.Fragment >

            <MDBContainer className='ps-5 pt-3' >
                <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                    <p style={bidListHeader} ><strong>To do List Status </strong></p>
                </MDBRow>
                <MDBTable className='table-hover' >
                    <MDBTableHead>
                        <tr style={bidTableHead}>
                            <th scope='col'>S/N</th>
                            <th scope='col'>Status</th>

                            <th scope='col'>Date</th>
                            <th scope='col'>Task</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {toDoList.map((toDo, index) => {
                            return (
                                <tr style={bidRow} key={index}
                                    onClick={(e) => { handleTodoUpdate(e, toDo) }}>
                                    <td >{index + 1}</td>
                                    {toDo.toDoStatus ?
                                        <td style={{ cursor: 'pointer', fontSize: '16px', color: '#228f22', fontWeight: 'bold' }} >Completed</td> :
                                        <td style={{ cursor: 'pointer', fontSize: '16px', color: '#e43b3b', fontWeight: 'bold' }} >Incomplete</td>
                                    }
                                    <td >{(ConvertToLocalDate(toDo.toDoDate))}</td>
                                    <td style={{ cursor: 'progress' }} title={toDo.comments} alt={toDo.comments} >{toDo.toDoTask}</td>
                                </tr>
                            )
                        })}
                    </MDBTableBody>
                </MDBTable>
            </MDBContainer >

        </React.Fragment >
    )

    const AddNewToDoPage = (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto ps-4 pt-4' style={{ backgroundColor: '#f7f2f287' }}>
                <MDBTypography component={'div'} className='card-header'
                    style={{ fontSize: '16px', backgroundColor: '#dcdcdc' }} >
                    <strong>Add new to do</strong>
                </MDBTypography>

                <MDBCardBody >
                    <MDBRow alignment='center'>
                        <MDBCol className='col-lg-6'>
                            <div>
                                <p style={{ fontSize: '17px' }}><strong>Date*</strong></p>
                                <input style={dateStyle} type="date" value={toDoDate} autoFocus={true}
                                    onChange={(e) => { let newEdit = { ...toDoDate }; newEdit = e.target.value; setToDoDate(newEdit) }} />
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className='col-lg-6'>
                            <div className='mt-3'>
                                <p style={{ fontSize: '17px' }}><strong>To do*</strong></p>
                                <input style={inputStyle} className='form-control'
                                    value={toDoTask} type='text' placeholder='To do information...'
                                    onChange={(e) => { let newEdit = { ...toDoTask }; newEdit = e.target.value; setToDoTask(newEdit) }} />
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className='col-lg-6'>
                            <div className='mt-3' >
                                <p style={{ fontSize: '17px' }}><strong>Status</strong></p>
                                <MDBCheckbox id='statusAddCheck'
                                    name='taskCheckbox'
                                    label='Task Completed ?' />
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <div className='mt-3'>
                            <p style={{ fontSize: '17px' }}><strong>Comments</strong></p>

                            <textarea style={textAreaStyle} className='form-control'
                                value={comments} type='text' placeholder='Comments...'
                                minLength={4} maxLength={500}
                                onChange={(e) => { let newEdit = { ...comments }; newEdit = e.target.value; setComments(newEdit) }} />
                        </div>
                    </MDBRow>
                    <MDBRow>
                        <form className='d-flex w-auto p-3'>
                            <BtnAccept btnStyle={btnAddSytle}
                                onClick={(e) => { if (window.confirm(`Save this to do?`)) handleTodoAdd(e) }}>
                                Add
                            </BtnAccept>
                            <BtnAccept btnStyle={btnCancelSytle}
                                onClick={(e) => { if (window.confirm(`Cancel this to do?`)) gotoAccountPage(e) }}>
                                Cancel
                            </BtnAccept>
                        </form>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    )

    const UpdateToDoPage = (
        <React.Fragment>
            <MDBContainer className='ps-5 pt-3' >
                <MDBRow className='my-3 justify-content-center' bgcolor='#f7f2f287'>
                    <p style={{ color: 'black', fontSize: '22px', borderBottom: '2px solid #d7cdcd' }} ><strong>View To Do Details </strong></p>
                </MDBRow>
                <MDBCard >
                    <MDBCardBody >
                        <MDBRow alignment='center'>
                            <MDBCol className='col-lg-6'>
                                <div>
                                    <MDBTypography component={'div'} style={{ fontSize: '17px' }}><strong>Date:- </strong>{date_ = (date_ = new Date(toDoDate), date_ = date_.toLocaleString('en-GB').slice(0, 10))}</MDBTypography>
                                    {/* <p style={{ fontSize: '17px' }}><strong>Date:-</strong></p> */}
                                    <input style={dateStyle} hidden={true} readOnly={true} type="text" value={toDoDate} />
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className='col-lg-6'>
                                <div className='mt-0'>
                                    <MDBTypography component={'div'} style={{ fontSize: '17px' }}><strong>To do:- </strong>{toDoTask}</MDBTypography>
                                    {/* <p style={{ fontSize: '17px' }}><strong>To do*</strong></p> */}
                                    <input style={inputStyle} className='form-control'
                                        value={toDoTask} hidden={true} readOnly={true} type='text' placeholder='To do information...' />
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className='col-lg-6'>
                                <div className='mt-0' >
                                    <MDBTypography component={'div'} style={{ fontSize: '17px' }}><strong>Status</strong></MDBTypography>
                                    <MDBCheckbox id='statusUpdateCheck'
                                        name='taskCheckbox'
                                        label='Task Completed ?'
                                        defaultChecked={toDoStatus ? true : false} />   {/* Checkbox status check according to todo status value  */}
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <div className='mt-2'>
                                <MDBTypography component={'div'} style={{ fontSize: '17px' }}><strong>Comments</strong></MDBTypography>

                                <textarea style={textAreaStyle} className='form-control'
                                    value={comments} type='text' placeholder='Comments...'
                                    minLength={4} maxLength={500}
                                    onChange={(e) => { let newEdit = { ...comments }; newEdit = e.target.value; setComments(newEdit) }} />
                            </div>
                        </MDBRow>
                        <MDBRow>
                            <form className='d-flex w-auto p-3'>
                                <BtnAccept btnStyle={btnAddSytle}
                                    onClick={(e) => { if (window.confirm(`Update this to do? `)) updateToDo(e) }}>
                                    Update
                                </BtnAccept>
                                <BtnAccept btnStyle={btnCancelSytle}
                                    onClick={(e) => { if (window.confirm(`Cancel this to do?`)) gotoAccountPage(e) }}>
                                    Cancel
                                </BtnAccept>
                            </form>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer >
        </React.Fragment >
    )

    const gotoAccountPage = (e) => {
        // refreshPage('Submitt cancelled')
        setModalInfo('Submitt cancelled');
        setShowInfoModal(true);
        setTimeout(() => {
            refreshPage();
        }, 3000);
    }

    return (
        <React.Fragment>
            {
                showOption && OptionSelectPage
            }
            {
                showToDoList && ToDoListPage
            }
            {
                showAddToDo && AddNewToDoPage
            }
            {
                showUpdateToDo && UpdateToDoPage
            }
            {
                showInfoModal && <PopUp modalInfo={modalInfo} setShowInfoModal={setShowInfoModal}></PopUp>
            }
        </React.Fragment >
    );
}
