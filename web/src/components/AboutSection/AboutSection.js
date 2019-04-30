import React from 'react';
import { Flex, Box } from 'rebass';
import BlockContent from '@sanity/block-content-to-react';
import Image from 'gatsby-image';

import SectionTitle from '../SectionTitle/SectionTitle';
import ProjectText from '../ProjectText/ProjectText';

const AboutSection = ({ title, blurb, portrait }) => (
  <Flex
    id="about"
    as="section"
    flexDirection="row"
    flexWrap="wrap"
    px={{ b: 3, md: 4 }}
    justifyContent="flex-end"
  >
    <SectionTitle as="h2" width={1} textAlign={{ b: 'left', md: 'right' }}>
      {title}
    </SectionTitle>
    <Flex
      flexWrap="wrap"
      flexDirection="row"
      justifyContent={{ b: 'flex-start', md: 'flex-end' }}
    >
      <Box width={1} pb={3}>
        <Image fluid={portrait.asset.fluid} />
      </Box>
      <Box width={1} pb={3}>
        <ProjectText>
          <BlockContent blocks={blurb} />
        </ProjectText>
      </Box>
    </Flex>
  </Flex>
);

export default AboutSection;
