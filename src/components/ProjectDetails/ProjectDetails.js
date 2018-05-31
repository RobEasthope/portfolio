import React from 'react';

import { Row, Block } from '../Grid/Grid';
import OrgName from '../OrgName/OrgName';

const ProjectDetails = props => (
  <Row>
    <Block size={1 / 1}>
      Client - <OrgName title={props.content.client} url={props.content.client_url} />
    </Block>
    <Block size={1 / 1}>
      Agency - <OrgName title={props.content.agency} url={props.content.agency_url} />
    </Block>
    <Block size={1 / 1}>Year - {props.content.year}</Block>
  </Row>
);

export default ProjectDetails;
