import React from 'react';

import OrgName from '../OrgName/OrgName';

const ProjectDetailText = (props) => {
  if (props.title) {
    return (
      <div>
        {props.detailTitle} - <OrgName title={props.title} url={props.url} />
      </div>
    );
  }
  return null;
};

export default ProjectDetailText;
