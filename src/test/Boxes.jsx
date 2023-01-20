import React from 'react';
import {
  MDBContainer,
  MDBTypography
} from 'mdb-react-ui-kit';

export default function Boxes() {
  return (
    <MDBContainer  >

      <div className="d-flex p-5 ">
        <div className="p-2 flex-shrink-2 "></div>
        <div className="p-2 w-100">
          <MDBTypography tag='h3'>Welcome to Birmingham Choice</MDBTypography>

          <MDBTypography tag='h7'>Social housing is a valuable but limited resource and demand for it is greater than the number of homes available.  Therefore, to allocate housing tenancies in a fair and transparent way, the Council manages a housing allocation scheme, as it must do by law. </MDBTypography>
          <MDBTypography tag='h7'>Social housing includes housing owned by the Council and by registered providers (formally known as housing associations). We allocate to some registered providers through nomination agreements. </MDBTypography>

          <MDBTypography className='mb-2 mt-2' tag='h6'><strong>*** New Housing Allocation Scheme Implemented 18th January 2023! ***</strong> </MDBTypography>
          <MDBTypography tag='h7'>Birmingham City Council implemented a new Housing Allocations Policy on 18th January 2023. </MDBTypography>
          <MDBTypography tag='h7'>The new policy aims to ensure the housing register is made up only of people with an identified housing need and we want to make sure it is fairer so that those most in need of social housing are prioritised. </MDBTypography>
          <MDBTypography tag='h7'>While it is important that we adapt and change our policy to better meet the needs of those living in overcrowded, insecure, or inadequate housing, reducing and preventing homelessness remains of highest importance. The new policy will help to ensure those with the highest need are given the appropriate priority to reflect this. </MDBTypography>
          <MDBTypography tag='h7'>The new policy includes changes to the qualification criteria, so that only those with an identified need for housing can join the register, as well as changes in local connection criteria and changes to circumstances in which applications may be given reduced priority due to non-bidding or refusal of a number of suitable properties. </MDBTypography>
          <MDBTypography tag='h7'>You dont need to contact us as we will let you know how you are affected when the policy goes live. Individual letters will be sent to everyone on the current register to notify them of their new banding. </MDBTypography>
          <MDBTypography tag='h7'>For further information on which applicants will be mostly affected by the new policy please click this link: Allocations Summary </MDBTypography>
          <br></br>
          <MDBTypography className='mb-2 mt-2' tag='h6'><strong>Housing advice and information</strong> </MDBTypography>
          <MDBTypography tag='h7'>For advice and information of your housing options please visit Birmingham City Council's main website for Housing Advice and Information and advice.  Alternatively, please see our Birmingham Housing Advice pack.   </MDBTypography>
          <MDBTypography className='mb-2 mt-2' tag='h6'><strong>Sheltered Housing</strong> </MDBTypography>
          <MDBTypography tag='h7'>Sheltered and Extra Care Housing Schemes provide support to their residents to help them live independently for longer. The schemes are aimed at people who can usually manage on their own, but feel safer knowing help and support is nearby if needed.For further information on shelered and extra care housing can be found here - Sheltered and Extra Care Housing </MDBTypography>
          <br></br>
          <MDBTypography className='mb-2 mt-2' tag='h6'><strong>Moving Into Your New Home</strong> </MDBTypography>
          <MDBTypography tag='h7'>If you are successful and have been shortlisted for a property then please start to consider and plan for moving into your new home as soon as possible. Once you have viewed and accepted the property, you need to be ready and organised to move into your new home. </MDBTypography>
          <MDBTypography tag='h7'>Birmingham City Council implemented a new Housing Allocations Policy on 18th January 2023. </MDBTypography>
        </div>
        <div className="p-2 flex-shrink-2">
          <img
            src="https://www.birminghamchoice.co.uk/Data/pub/PublicWebsite/SiteImages/client-image-hero-2.jpg" width="189" height="45" alt="Scheme logo"
            className='img-fluid hover-shadow'
          />
        {/* </div>
        <div> */}
          <img pt-5
            src="https://www.birminghamchoice.co.uk/Data/pub/PublicWebsite/SiteImages/client-image-hero-2.jpg" width="189" height="45" alt="Scheme logo"
            className='img-fluid hover-shadow'
          />
        </div>

      </div>
    </MDBContainer >

  );
}
