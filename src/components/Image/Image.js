import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import rem from "../../utils/rem";

const ImageWrapper = styled("div")`
  margin-bottom: ${rem(18 * 1.65)};
`;

const Image = props => {
  if (props.src.url) {
    return (
      <ImageWrapper>
        <img src={props.src.url} alt={props.src.alt} />
      </ImageWrapper>
    );
  }
  return null;
};

Image.defaultProps = {
  src: [],
  url: "",
  alt: "",
};

Image.propTypes = {
  src: PropTypes.arrayOf(PropTypes.shape),
  url: PropTypes.string.required,
  alt: PropTypes.string,
};

export default Image;
