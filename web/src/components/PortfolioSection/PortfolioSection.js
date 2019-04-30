import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';

import SectionTitle from '../SectionTitle/SectionTitle';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import PortfolioCardLink from '../PortfolioCardLink/PortfolioCardLink';
import PortfolioCardTitle from '../PortfolioCardTitle/PortfolioCardTitle';
import PortfolioCardDescription from '../PortfolioCardDescription/PortfolioCardDescription';
import PortfolioCardThumbnail from '../PortfolioCardThumbnail/PortfolioCardThumbnail';

const PortfolioIndexWrapper = styled(Box)`
  list-style-type: none;
`;

const PortfolioSection = props => {
  const { title, portfolioIndex } = props;

  return (
    <Flex
      id="portfolio"
      as="section"
      flexDirection="row"
      flexWrap="wrap"
      px={{ b: 3, md: 4 }}
      justifyContent={{ b: 'flex-start', md: 'flex-end' }}
    >
      <SectionTitle as="h2" width={1} textAlign={{ b: 'left', md: 'right' }}>
        {title}
      </SectionTitle>

      <PortfolioIndexWrapper
        as="ul"
        width="auto"
        pb="4"
        px="0"
        m="0"
        flexWrap="wrap"
      >
        {portfolioIndex.map(project => (
          <PortfolioCard as="li" width={1} mb="3" key={project.slug.current}>
            <PortfolioCardLink href={project.slug.current}>
              {project.thumbnailImage && (
                <PortfolioCardThumbnail>
                  <Image
                    fluid={project.thumbnailImage.asset.fluid}
                    className="projectThumbnail"
                  />
                </PortfolioCardThumbnail>
              )}
              <div>
                <PortfolioCardTitle ml={{ b: 0, md: '0.25em' }} mr="0.3em">
                  {project.shortTitle}
                </PortfolioCardTitle>
                <PortfolioCardDescription>
                  {project.description}
                </PortfolioCardDescription>
              </div>
            </PortfolioCardLink>
          </PortfolioCard>
        ))}
      </PortfolioIndexWrapper>
    </Flex>
  );
};

export default PortfolioSection;
