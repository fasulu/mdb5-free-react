import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import { ToCamelCase } from '../validations/Validator';

export default function TabSelect() {
  const [basicActive, setBasicActive] = useState('tab1');

  const tab1Name = "Advertised Properties";
  const tab2Name = "Average Waiting Time";
  const tab3Name = "Recent lets";

  const handleBasicClick = (strValue) => {
    if (strValue === basicActive) {
      return;
    }

    setBasicActive(strValue);
  };

  return (
    <React.Fragment>
      <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink style={{ fontSize: '18px', textTransform: 'none' }} onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            <strong>{tab1Name}</strong>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink style={{ fontSize: '18px', textTransform: 'none' }} onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            <strong>{tab2Name}</strong>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink style={{ fontSize: '18px', textTransform: 'none' }} onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
            <strong>{tab3Name}</strong>
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}>Tab 1 content</MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
      </MDBTabsContent>
    </React.Fragment >
  );
}