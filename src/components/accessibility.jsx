import React from 'react';

import {
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBTypography
} from 'mdb-react-ui-kit';

export default function Accessibility() {

    const headStyle = { fontSize: '25px' };
    const subHeadStyle = { fontSize: '20px' };
    const textStyle = { fontSize: '18px' };

    return (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto' style={{ backgroundColor: '#f7f2f287' }} >
                <MDBCardBody>
                    <MDBTypography className='border border-0 border-bottom border-secondary'
                        style={headStyle}>
                        <strong>Accessibility Statement</strong>
                    </MDBTypography>

                    <p style={subHeadStyle}><strong>Accessibility statement for Birmingham Choice</strong></p>

                    <p className='mt-3 mb-2' style={textStyle}>This accessibility statement applies to <a href="https://www.birminghamchoice.co.uk/" className="link-info">https://www.birminghamchoice.co.uk/</a>.</p>
                    <p className='mt-3 mb-2' style={textStyle}>This website is run by Birmingham City Council. We want as many people as possible to be able to use this website. For example, that means you should be able to:</p>

                    <div>
                        <ul>
                            <li >Change colours, contrast levels and fonts</li>
                            <li >Zoom in up to 300% without the text spilling off the screen</li>
                            <li >Navigate most of the website using just a keyboard</li>
                            <li >Navigate most of the website using speech recognition software</li>
                            <li >Listen to most of the website using a screen reader </li>
                        </ul>
                    </div>
                    <p className='mt-3 mb-2' style={textStyle}><a href="https://mcmw.abilitynet.org.uk/" className="link-info">AbilityNet </a> has advice on making your device easier to use if you have a disability.</p>

                    <MDBTypography className='border border-0 border-bottom border-secondary'
                        style={headStyle}>
                        <strong>How accessible this website is</strong>
                    </MDBTypography>

                    <div>
                        <ul>
                            <li >You can select the Accessibility option to change the font size to large or extra-large without the text spilling off the screen.</li>
                            <li >You can also select a Text only option without images or the Graphical viewing option.</li>
                            <li >The website is more accessible in Mobile view.</li>
                            <li >We know some parts of this website are not fully accessible.</li>
                            <li >Some of our online forms are difficult to navigate using just a keyboard</li>
                            <li >You cannot skip to the main content when using a screen reader</li>
                            <li >On some parts of the website users are not alerted to fresh content appearing</li>
                            <li >Some error messages appear underneath input fields.</li>
                            <li >On some forms screen readers is not notified of new content.</li>
                            <li >On some pages a screen reader user is autofocused on the first form element on the page, forcing the user to interact with the form without any context.</li>
                            <li >Not all elements on the website that can receive focus have visible focus styling.</li>
                            <li >Google translate is used on every page and inserts a H1 heading ‘Original Text’ into the page – we cannot amend this.</li>
                        </ul>
                    </div>

                    <MDBTypography className='border border-0 border-bottom border-secondary'
                        style={headStyle}>
                        <strong>Reporting accessibility problems with this website</strong>
                    </MDBTypography>

                    <p className='mt-3 mb-2' style={textStyle}>We’re always looking to improve the accessibility of this website. If you find any problems not listed on this page or think we’re not meeting accessibility requirements, contact us</p>

                    <MDBTypography className='border border-0 border-bottom border-secondary'
                        style={headStyle}>
                        <strong>Enforcement procedure</strong>
                    </MDBTypography>

                    <p className='mt-3 mb-2' style={textStyle}>The Equality and Human Rights Commission (EHRC) is responsible for enforcing the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018 (the ‘accessibility regulations’). If you’re not happy with how we respond to your complaint, contact the Equality Advisory and Support Service (EASS).</p>
                    <p className='mt-3 mb-2' style={textStyle}></p>

                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    );
}