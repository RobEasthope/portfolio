import React from "react";

import SlimWrapper from "../../../components/SlimWrapper/SlimWrapper";
import ProjectDetail from "../ProjectDetail/ProjectDetail";

const ProjectDetails = props => {
  const { content } = props;

  return (
    <SlimWrapper>
      <ProjectDetail
        detailTitle="Client"
        title={content.client}
        url={content.client_url}
      />
      <ProjectDetail
        detailTitle="Agency"
        title={content.agency}
        url={content.agency_url}
      />
    </SlimWrapper>
  );
};

export default ProjectDetails;
