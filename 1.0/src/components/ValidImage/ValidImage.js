import React from "react";
import PropTypes from "prop-types";

const ValidImage = props => {
  const { src } = props;
  if (src.url) {
    return <img src={src.url} alt={src.alt} />;
  }
  return null;
};

ValidImage.defaultProps = {
  src: []
};

ValidImage.propTypes = {
  src: PropTypes.arrayOf(PropTypes.shape)
};

export default ValidImage;
