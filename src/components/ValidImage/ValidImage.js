import React from "react";
import PropTypes from "prop-types";

const ValidImage = props => {
  if (props.src.url) {
    return <img src={props.src.url} alt={props.src.alt} />;
  }
  return null;
};

ValidImage.defaultProps = {
  src: [],
  url: "",
  alt: "",
};

ValidImage.propTypes = {
  src: PropTypes.arrayOf(PropTypes.shape),
  url: PropTypes.string.required,
  alt: PropTypes.string,
};

export default ValidImage;
