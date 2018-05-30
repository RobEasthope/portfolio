import React from 'react';

import { Row, Block } from '../Grid/Grid';
import OrgName from '../OrgName/OrgName';

const ProjectDetails = props => (
  <Row>
    <Block size={1 / 1}>
      <div>Client</div>
      <div>
        <OrgName title={props.content.client} url={props.content.client_url} />
      </div>
      <br />
    </Block>
    <Block size={1 / 1}>
      <div>Agency</div>
      <div>
        <OrgName title={props.content.agency} url={props.content.agency_url} />
      </div>

      <br />
    </Block>
    <Block size={1 / 1}>
      <div>Year</div>
      <div>{props.content.year}</div>
    </Block>
  </Row>
);

export default ProjectDetails;
