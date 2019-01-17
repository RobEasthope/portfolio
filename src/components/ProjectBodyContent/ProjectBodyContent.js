import React from "react";
import PrismicReact from "prismic-reactjs";

import { Row, Block } from "../Grid/Grid";
import SlimWrapper from "../SlimWrapper/SlimWrapper";
import WideWrapper from "../WideWrapper/WideWrapper";
import ProjectDetail from "../../pages/Project/ProjectDetail/ProjectDetail";
import ProjectDevDetail from "../../pages/Project/ProjectDevDetail/ProjectDevDetail";
import ProjectMiscDetails from "../../pages/Project/ProjectMiscDetails/ProjectMiscDetails";
import prismicLinkResolver from "../../prismic-link-resolver";
import Image from "../Image/Image";

const ProjectBodyContent = props =>
  props.content.map(slice => {
    switch (slice.slice_type) {
      case "general_content":
        return (
          <SlimWrapper>
            {slice.items.map(content =>
              PrismicReact.RichText.render(content.rich_text),
            )}
          </SlimWrapper>
        );

      case "image_gallery":
        return (
          <WideWrapper>
            <Row>
              {slice.items.map(content => (
                <Block size={1 / 1}>
                  <Image src={content.image} />
                </Block>
              ))}
            </Row>
          </WideWrapper>
        );

      case "single_image":
        return (
          <SlimWrapper>
            {slice.items.map(content => (
              <Image src={content.image} />
            ))}
          </SlimWrapper>
        );

      case "project_type_year":
        return (
          <SlimWrapper>
            <ProjectMiscDetails>
              {PrismicReact.RichText.asText(slice.primary.project_type)}
              <span>⋅</span>
              {slice.primary.project_year}
            </ProjectMiscDetails>
          </SlimWrapper>
        );

      case "project_details":
        return (
          <SlimWrapper>
            {slice.items.map(content => (
              <ProjectDetail
                detailType={content.detail_type}
                title={content.detail_text}
                url={content.detail_url}
              />
            ))}
          </SlimWrapper>
        );

      case "development_details":
        return (
          <SlimWrapper>
            <ProjectDevDetail>
              <a
                href={PrismicReact.Link.url(
                  slice.primary.site_url,
                  prismicLinkResolver,
                )}
              >
                {PrismicReact.RichText.asText(slice.primary.site_text)}
              </a>
              {/* <span> × </span>
              <a href={PrismicReact.Link.url(slice.primary.github_url, prismicLinkResolver)}>
                {PrismicReact.Link.url(slice.primary.github_url, prismicLinkResolver)}
              </a> */}
            </ProjectDevDetail>
          </SlimWrapper>
        );

      default:
        return <div>Slice module hasn't been templated</div>;
    }
  });

export default ProjectBodyContent;
