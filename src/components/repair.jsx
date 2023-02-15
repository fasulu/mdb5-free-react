import React from 'react';

import {
    MDBCard, MDBCardBody,
    MDBTypography
} from 'mdb-react-ui-kit';

export default function Repair() {

    const headStyle = { fontSize: '25px', textStyle: 'bolder' };
    const headStyle1 = { fontSize: '18px', backgroundColor: '#d1ecf1' };
    const headStyle2 = { fontSize: '16px', fontWeight: 'bold', color: '#970339', backgroundColor: '#ffc1c7' };

    const textStyle = { fontSize: '16px' };
    const pTagStyle = { margin: 0, padding: 0 };
    return (
        <React.Fragment>
            <MDBCard className='w-100 mx-auto'  >
                <MDBCardBody>
                    <MDBTypography className='border border-0 border-bottom border-secondary text-left'
                        style={headStyle}>
                        <strong>Empty Property Repair Standard</strong>
                    </MDBTypography>

                    <div>
                        <MDBTypography className='border border rounded  p-1 text-left'
                            style={headStyle1}>
                            Empty Property Repair Standard
                        </MDBTypography>
                        <p>Birmingham City Council aims to provide homes that are clean, safe and ready to move into. We have an empty property repair standard and our repairs contractors work to this standard to make sure that homes are fit to live in.&nbsp;</p>

                        <p>Here is a list of standards that every empty property will meet before it is let to a tenant.</p>

                        <p><strong><u>Inside the Property</u></strong><strong>&nbsp;</strong></p>

                        <p><strong>Kitchen</strong></p>

                        <ul>
                            <li>There will be a minimum of a sink unit, another base unit and a wall unit;</li>
                            <li>There will be a worktop;</li>
                            <li>All floor, wall and work surfaces will be clean and in good working order. All surfaces will be in a condition that allows you to clean them;</li>
                            <li>The sink and drains will be working and not blocked;</li>
                            <li>There will be a gas or electric cooker point in the kitchen;</li>
                            <li>There will be a row of tiles above the work surfaces.</li>
                        </ul>
                    </div>

                    <p><strong>Bathroom</strong></p>

                    <ul>
                        <li>The toilet, sink and bath will be in good working order;</li>
                        <li>There will be a row of sealed tiles around the bath and sink;</li>
                        <li>All surfaces, including the toilet, sink and bath, will be clean;</li>
                        <li>All surfaces will be in a condition that allows you to clean them.</li>
                    </ul>

                    <p><strong>Gas, Electric, Heating and Hot Water</strong></p>

                    <ul>
                        <li>There will be a heating appliance, in good working order, in the main living room area. This facility will be available on the day that you move in;</li>
                        <li>The gas and electric supply to your home will be in good working order on the day you move in, and checked and tested;</li>
                        <li>A copy of gas and electrical certificates will be provided;</li>
                        <li>A hot water supply will be available.</li>
                    </ul>

                    <p><strong>Doors, Floors and Stairs</strong></p>

                    <ul>
                        <li>Any missing and broken floor tiles in the kitchen and bathroom will be replaced with a surface that you can clean;</li>
                        <li>Missing or broken tiles in any other room will be replaced or patched;</li>
                        <li>All internal timbers such as floorboards and stair treads will be in good repair. Any damaged or rotten timbers will be repaired, treated, renewed or removed;</li>
                        <li>All external and internal doors will be fitted, secure and in good working order;</li>
                        <li>All door handles, locks and fittings will be securely fixed and in good working order.</li>
                    </ul>

                    <p>&nbsp;&nbsp;</p>

                    <p><strong>Glazing</strong></p>

                    <ul>
                        <li>Cracked and broken windows will be replaced on the day you move in.</li>
                    </ul>

                    <p><strong>Decoration</strong></p>

                    <p>Tenants are responsible for decoration, however we will:</p>

                    <ul>
                        <li>Remove graffiti;</li>
                        <li>Strip severely damaged wallpaper;</li>
                        <li>Paint polystyrene tiles with fire retardant paint;</li>
                        <li>Repair any severely damaged large areas of plaster;</li>
                        <li>In exceptional circumstances where decorations are very poor we will issue vouchers towards the cost of redecorating.&nbsp;</li>
                    </ul>

                    <p><strong>Cleanliness</strong></p>

                    <ul>
                        <li>All waste or building rubbish will be cleared from inside and outside the property, including rubbish from garages, sheds, outhouses and lofts;</li>
                        <li>All floors and surfaces will be clean;</li>
                        <li>All sanitary fittings will be clean.</li>
                    </ul>

                    <p><strong>Window Frames</strong></p>

                    <ul>
                        <li>All windows will be wind and watertight, usable and complete with handles;</li>
                        <li>Window frames that need renewing will be ordered and replaced. This work will be carried out as a routine repair and completed within 30 days of you moving in or as part of a planned window renewal programme.</li>
                    </ul>

                    <p><strong>Other Facilities</strong></p>

                    <ul>
                        <li>Curtain battens will be in place;</li>
                        <li>An energy efficient light bulb will be provided in every room.</li>
                    </ul>

                    <p><strong><u>Outside the Property</u></strong></p>

                    <p><strong>Gardens</strong></p>

                    <ul>
                        <li>Any trip hazard to slabbing and pathways that we find will be removed;</li>
                        <li>Broken fencing will be removed. Replacement fencing will normally be fitted after you move in;</li>
                        <li>Rubbish will be removed;</li>
                        <li>In exceptional circumstances when the garden is severely overgrown, and the customer is unable to carry out such work we will cut back the garden. This work may be completed after letting.</li>
                    </ul>

                    <p><strong>Roofs and Gutters</strong></p>

                    <ul>
                        <li>Roofs will be watertight. Any leaks we find will be repaired.</li>
                    </ul>

                    <p><strong>Non-standard fittings</strong></p>

                    <ul>
                        <li>Non-standard fittings are improvements such as showers, fire surrounds and verandas that the previous tenant fitted and are a tenant’s responsibility to maintain. We will check these are safe and suitable for use before leaving them in place. These will NOT be replaced once it becomes too expensive to repair them, and we will then remove them.</li>
                        <li>You should report all other non-urgent repairs to the repairs call centre for your area.</li>
                    </ul>

                    <p class="contentNormal"><strong>Useful Links for New Tenants</strong></p>

                    <p class="contentNormal">New tenants to Birmingham City Council may find the following links useful.</p>

                    <ul>
                        <li><a href="https://www.birminghamchoice.co.uk/Data/Pub/PublicWebsite/ImageLibrary/balcony-safety-nfcc.pdf">Balcony Safety</a></li>
                        <li><a href="https://www.birminghamchoice.co.uk/Data/Pub/PublicWebsite/ImageLibrary/Fire%20Safety%20in%20flats%202017%20leaflet.pdf">Fire Safety in Flats</a></li>
                        <li><a href="https://www.birminghamchoice.co.uk/Data/Pub/PublicWebsite/ImageLibrary/High%20Rise%20Sprinklers%20Information.pdf">High Rise Sprinklers Information</a></li>
                    </ul>
                </MDBCardBody>
            </MDBCard>
        </React.Fragment >
    );
}