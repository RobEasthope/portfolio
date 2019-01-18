import React from "react";
import PrismicReact from "prismic-reactjs";
import shortid from "shortid";

import SlimWrapper from "../SlimWrapper/SlimWrapper";
import ProjectDetail from "../../pages/Project/ProjectDetail/ProjectDetail";
import ProjectDevDetail from "../../pages/Project/ProjectDevDetail/ProjectDevDetail";
import ProjectMiscDetails from "../../pages/Project/ProjectMiscDetails/ProjectMiscDetails";
import prismicLinkResolver from "../../prismic-link-resolver";

import GeneralContentSlice from "../../slices/GeneralContentSlice/GeneralContentSlice";
import WideImageGallery from "../../slices/WideImageGallery/WideImageGallery";
import SingleImage from "../../slices/SingleImage/SingleImage";

const ProjectBodyContent = props =>
  props.content.map(slice => {
    switch (slice.slice_type) {
      case "general_content":
        return <GeneralContentSlice key={shortid.generate()} slice={slice} />;

      case "image_gallery":
        return <WideImageGallery key={shortid.generate()} slice={slice} />;

      case "single_image":
        return <SingleImage key={shortid.generate()} slice={slice} />;

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
