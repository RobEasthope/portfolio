import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import rem from "../../utils/rem";

const ImageWrapper = styled("div")`
  margin-bottom: ${rem(18 * 1.65)};
`;

const Image = props => {
  const { src } = props;

  if (src.url) {
    return (
      <ImageWrapper>
        <img src={src.url} alt={src.alt} />
      </ImageWrapper>
    );
  }
  return null;
};

Image.defaultProps = {
  src: []
};

Image.propTypes = {
  src: PropTypes.arrayOf(PropTypes.shape)
};

export default Image;
