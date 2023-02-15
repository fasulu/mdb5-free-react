import React, { useState } from 'react';

import {
    MDBCard, MDBCardBody, MDBContainer
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function AboutRight() {

    const [selectedItem, setSelectedItem] = useState(false);
    const selectedStyle = { color: 'blue' };
    const unSelectedStyle = { color: 'black' }

    const doToggle = () => {

    }

    return (
        <React.Fragment>
                <MDBCard style={{ backgroundColor: '#f7f2f287' }} className='w-100 mx-auto'>
                    <MDBCardBody>
                        <ul className="list-group list-group-flush" >
                            <li className="list-group-item list-group-item-primary" ><strong>Topics</strong></li>
                            <a href="/nino" className="list-group-item list-group-item-action" > Register</a>
                            <a href='/whatisnext' className="list-group-item list-group-item-action"> What happens next</a>
                            <a href='/priority' className="list-group-item list-group-item-action"> Prioritising applications</a>
                            <a href='/size' className="list-group-item list-group-item-action"> The size of properties</a>
                            <a href='/anychange' className="list-group-item list-group-item-action"> Change of Circumstances</a>
                            <a href='/shortlisting' className="list-group-item list-group-item-action"> Shortlisting property</a>
                            <a href='/repair' className="list-group-item list-group-item-action"> Empty property repair standard</a>
                            <a href='/guide' className="list-group-item list-group-item-action"> Guide of registering for housing</a>
                            <a href='/keyfacts' className="list-group-item list-group-item-action"> Key facts</a>
                        </ul>
                        
                        {/* <ul className="list-group list-group-flush" >
                            <li className="list-group-item list-group-item-primary" ><strong>Topics</strong></li>
                            <Link to="/nino" state={{ pageName: 'nino' }} className="list-group-item list-group-item-action" > Register</Link>
                            <Link to='/whatisnext' state={{ pageName: 'whatisnext' }} className="list-group-item list-group-item-action"> What happens next</Link>
                            <Link to='/priority' state={{ pageName: 'priority' }} className="list-group-item list-group-item-action"> Prioritising applications</Link>
                            <Link to='/size' state={{ pageName: 'size' }} className="list-group-item list-group-item-action"> The size of properties</Link>
                            <Link to='/anychange' state={{ pageName: 'anychange' }} className="list-group-item list-group-item-action"> Change of Circumstances</Link>
                            <Link to='/shortlisting' state={{ pageName: 'shortlisting' }} className="list-group-item list-group-item-action"> Shortlisting property</Link>
                            <Link to='/repair' state={{ pageName: 'repair' }} className="list-group-item list-group-item-action"> Empty property repair standard</Link>
                            <Link to='/guide' state={{ pageName: 'guide' }} className="list-group-item list-group-item-action"> Guide of registering for housing</Link>
                            <Link to='/keyfacts' state={{ pageName: 'keyfacts' }} className="list-group-item list-group-item-action"> Key facts</Link>
                        </ul> */}
                    </MDBCardBody>
                </MDBCard> 
        </React.Fragment>
    )
};