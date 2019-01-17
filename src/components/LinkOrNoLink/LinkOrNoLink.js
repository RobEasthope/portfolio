import React from "react";
import PropTypes from "prop-types";
import PrismicReact from "prismic-reactjs";
import prismicLinkResolver from "../../prismic-link-resolver";

const LinkOrNoLink = props => {
  const { title, url } = props;

  if (title !== null && url.url == null) {
    return PrismicReact.RichText.asText(props.title);
  }
  if (title !== null && url.url !== null) {
    return (
      <a href={PrismicReact.Link.url(props.url, prismicLinkResolver)}>
        {PrismicReact.RichText.asText(props.title)}
      </a>
    );
  }
  return null;
};

LinkOrNoLink.defaultProps = {
  title: [],
  url: []
};

LinkOrNoLink.propTypes = {
  title: PropTypes.arrayOf(PropTypes.shape),
  url: PropTypes.arrayOf(PropTypes.shape)
};

export default LinkOrNoLink;
