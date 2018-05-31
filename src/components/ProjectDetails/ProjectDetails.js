import React from 'react';

import SlimWrapper from '../SlimWrapper/SlimWrapper';
import ProjectDetailText from '../ProjectDetailText/ProjectDetailText';

const ProjectDetails = props => (
  <SlimWrapper>
    <ProjectDetailText
      detailTitle="Client"
      title={props.content.client}
      url={props.content.client_url}
    />
    <ProjectDetailText
      detailTitle="Agency"
      title={props.content.agency}
      url={props.content.agency_url}
    />
  </SlimWrapper>
);

export default ProjectDetails;
