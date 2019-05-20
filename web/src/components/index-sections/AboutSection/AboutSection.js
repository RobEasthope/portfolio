import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'rebass';
import BlockContent from '@sanity/block-content-to-react';
import Image from 'gatsby-image';

import SectionTitle from '../../SectionTitle/SectionTitle';
import ProjectText from '../../ProjectText/ProjectText';
import TextWrapper from '../../TextWrapper/TextWrapper';

const AboutSection = ({ title, blurb, portrait }) => (
  <Flex
    id="about"
    as="section"
    flexDirection="row"
    flexWrap="wrap"
    px={{ b: 3, md: 4 }}
    justifyContent="flex-end"
  >
    {title && (
      <Flex width={1} justifyContent={{ md: 'flex-end' }}>
        <SectionTitle as="h2" textAlign={{ b: 'left', md: 'right' }}>
          {title}
        </SectionTitle>
      </Flex>
    )}
    <TextWrapper
      flexWrap="wrap"
      flexDirection="row"
      justifyContent={{ b: 'flex-start', md: 'flex-end' }}
    >
      {portrait && (
        <Box width={1}>
          <Image fluid={portrait.asset.fluid} />
        </Box>
      )}
      {blurb && (
        <Box width={1} pb={3}>
          <ProjectText mt="2em">
            <BlockContent blocks={blurb} />
          </ProjectText>
        </Box>
      )}
    </TextWrapper>
  </Flex>
);

AboutSection.defaultProps = {
  title: '',
  blurb: [],
  portrait: {},
};

AboutSection.propTypes = {
  title: PropTypes.string,
  blurb: PropTypes.arrayOf(PropTypes.object),
  portrait: PropTypes.object,
};

export default AboutSection;
