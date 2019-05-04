import React from 'react';
import { Flex } from 'rebass';
import RelativeBox from '../RelativeBox/RelativeBox';

import LandingTagline from '../LandingTagline/LandingTagline';
import LandingJumbotron from '../LandingJumbotron/LandingJumbotron';

const LandingSection = props => {
  const { tagline, image } = props;

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
        {image && <LandingJumbotron fluid={image.imageAsset.asset.fluid} />}
      </RelativeBox>
    </Flex>
  );
};

export default LandingSection;
