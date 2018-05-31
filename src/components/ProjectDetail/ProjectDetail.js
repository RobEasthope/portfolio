import React from 'react';

import LinkOrNoLink from '../LinkOrNoLink/LinkOrNoLink';
import ProjectDetailText from '../ProjectDetailText/ProjectDetailText';

const ProjectDetail = (props) => {
  if (props.title) {
    return (
      <ProjectDetailText>
        {props.detailTitle} >> <LinkOrNoLink title={props.title} url={props.url} />
      </ProjectDetailText>
    );
  }
  return null;
};

export default ProjectDetail;
