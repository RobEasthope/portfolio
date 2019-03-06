import React from "react";
import PrismicReact from "prismic-reactjs";

import LinkOrNoLink from "../../../components/LinkOrNoLink/LinkOrNoLink";
import ProjectDetailText from "../ProjectDetailText/ProjectDetailText";

const ProjectDetail = props => {
  const { title, detailType, url } = props;

  if (title) {
    return (
      <ProjectDetailText>
        {PrismicReact.RichText.asText(detailType)}
        <span> × </span>
        <LinkOrNoLink title={title} url={url} />
      </ProjectDetailText>
    );
  }
  return null;
};

export default ProjectDetail;
