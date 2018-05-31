import React from 'react';

import OrgName from '../OrgName/OrgName';
import ProjectDetailText from '../ProjectDetailText/ProjectDetailText';

const ProjectDetail = (props) => {
  if (props.title) {
    return (
      <ProjectDetailText>
        {props.detailTitle} - <OrgName title={props.title} url={props.url} />
      </ProjectDetailText>
    );
  }
  return null;
};

export default ProjectDetail;
