import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import RelativeBox from '../../components/RelativeBox/RelativeBox';

import LandingTagline from '../../components/LandingTagline/LandingTagline';
import LandingVideoJumbotron from '../../components/LandingVideoJumbotron/LandingVideoJumbotron';

const LandingSection = props => {
  const { tagline, video } = props;

  return (
    <Flex as="section">
      <RelativeBox width={1} p="1em" pl={{ md: 0 }} style={{ zIndex: -1 }}>
        {tagline && (
          <LandingTagline
            as="h1"
            width="100%"
            px="4"
            m="0"
            fontSize={{ sm: 5, md: 6, lg: 7, xlg: 8 }}
          >
            {tagline}
          </LandingTagline>
        )}

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
