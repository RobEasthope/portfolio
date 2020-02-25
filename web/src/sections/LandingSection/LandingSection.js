import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import RelativeBox from '../../components/RelativeBox/RelativeBox';

import LandingTagline from '../../components/LandingTagline/LandingTagline';
// import LandingJumbotron from '../../components/LandingJumbotron/LandingJumbotron';
import LandingVideoJumbotron from '../../components/LandingVideoJumbotron/LandingVideoJumbotron';

const LandingTaglineWrapper = styled(Box)`
  z-index: -1;
`;

const LandingSection = props => {
  const { tagline, video } = props;

  return (
    <Flex as="section">
      <RelativeBox width={1} px="0" style={{ zIndex: -1 }}>
        {tagline && (
          // <LandingTaglineWrapper>
          <LandingTagline
            as="h1"
            width="100%"
            px="4"
            m="0"
            fontSize={{ sm: 5, md: 6, lg: 7, xlg: 8 }}
          >
            {tagline}
          </LandingTagline>
          // </LandingTaglineWrapper>
        )}
        {/* {image && <LandingJumbotron fluid={image.imageAsset.asset.fluid} />} */}
        {video && (
          <LandingVideoJumbotron
            assetDocument={video.asset}
            autoplay
            autoload
            showControls={false}
            muted
            loop
          />
        )}
      </RelativeBox>
    </Flex>
  );
};

LandingSection.defaultProps = {
  tagline: '',
  education: [],
};

LandingSection.propTypes = {
  tagline: PropTypes.string,
  video: PropTypes.object,
};

export default LandingSection;
