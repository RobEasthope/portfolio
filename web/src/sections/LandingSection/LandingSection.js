import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import RelativeBox from '../../components/RelativeBox/RelativeBox';

import LandingVideoJumbotron from '../../components/LandingVideoJumbotron/LandingVideoJumbotron';

const LandingSection = props => {
  const { video } = props;

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
