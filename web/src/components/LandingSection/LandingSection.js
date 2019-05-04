import React from 'react';
import { Flex } from 'rebass';
import RelativeBox from '../RelativeBox/RelativeBox';

import LandingTagline from '../LandingTagline/LandingTagline';
import LandingJumbotron from '../LandingJumbotron/LandingJumbotron';
import LandingVideoJumbotron from '../LandingVideoJumbotron/LandingVideoJumbotron';

const LandingSection = props => {
  const { tagline, image, video } = props;

  return (
    <Flex as="section">
      <RelativeBox width={1} px="0">
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

export default LandingSection;
