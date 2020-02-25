import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import RelativeBox from '../../components/RelativeBox/RelativeBox';

import LandingCaption from '../../components/LandingCaption/LandingCaption';
import LandingVideoJumbotron from '../../components/LandingVideoJumbotron/LandingVideoJumbotron';

const LandingSection = props => {
  const { video, caption } = props;

  return (
    <Flex as="section">
      <RelativeBox width={1} p="1em" pl={{ md: 0 }} style={{ zIndex: -1 }}>
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
        {caption && (
          <LandingCaption as="p" m="0">
            {caption}
          </LandingCaption>
        )}
      </RelativeBox>
    </Flex>
  );
};

LandingSection.defaultProps = {
  tagline: '',
  video: {},
};

LandingSection.propTypes = {
  tagline: PropTypes.string,
  video: PropTypes.object,
};

export default LandingSection;
