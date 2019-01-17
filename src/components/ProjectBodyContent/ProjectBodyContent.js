import React from "react";
import PrismicReact from "prismic-reactjs";
import shortid from "shortid";

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
          <SlimWrapper key={shortid.generate()}>
            {slice.items.map(content => (
              <React.Fragment key={shortid.generate()}>
                {PrismicReact.RichText.render(content.rich_text)}
              </React.Fragment>
            ))}
          </SlimWrapper>
        );

      case "image_gallery":
        return (
          <WideWrapper key={shortid.generate()}>
            <Row>
              {slice.items.map(content => (
                <Block key={shortid.generate()} size={1 / 1}>
                  <Image src={content.image} />
                </Block>
              ))}
            </Row>
          </WideWrapper>
        );

      case "single_image":
        return (
          <SlimWrapper key={shortid.generate()}>
            {slice.items.map(content => (
              <Image key={shortid.generate()} src={content.image} />
            ))}
          </SlimWrapper>
        );

      case "project_type_year":
        return (
          <SlimWrapper key={shortid.generate()}>
            <ProjectMiscDetails>
              {PrismicReact.RichText.asText(slice.primary.project_type)}
              <span>⋅</span>
              {slice.primary.project_year}
            </ProjectMiscDetails>
          </SlimWrapper>
        );

      case "project_details":
        return (
          <SlimWrapper key={shortid.generate()}>
            {slice.items.map(content => (
              <ProjectDetail
                key={shortid.generate()}
                detailType={content.detail_type}
                title={content.detail_text}
                url={content.detail_url}
              />
            ))}
          </SlimWrapper>
        );

      case "development_details":
        return (
          <SlimWrapper key={shortid.generate()}>
            <ProjectDevDetail>
              <a
                href={PrismicReact.Link.url(
                  slice.primary.site_url,
                  prismicLinkResolver
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
        return (
          <div key={shortid.generate()}>Slice module hasn't been templated</div>
        );
    }
  });

export default ProjectBodyContent;
