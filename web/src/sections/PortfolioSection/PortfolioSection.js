import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';

import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import PortfolioCardLink from '../../components/PortfolioCardLink/PortfolioCardLink';
import PortfolioCardTitle from '../../components/PortfolioCardTitle/PortfolioCardTitle';
import PortfolioCardDescription from '../../components/PortfolioCardDescription/PortfolioCardDescription';
import PortfolioCardThumbnail from '../../components/PortfolioCardThumbnail/PortfolioCardThumbnail';
import RelativeBox from '../../components/RelativeBox/RelativeBox';

const PortfolioIndexWrapper = styled(Box)`
  list-style-type: none;
`;

const PortfolioSection = props => {
  const { portfolioIndex } = props;

  return (
    <Flex
      as="section"
      flexDirection="row"
      flexWrap="wrap"
      ml={{ b: 0, md: 4 }}
      pt={{ b: 3, md: 4 }}
      px={{ b: 3, md: 4 }}
      justifyContent={{ b: 'flex-start', md: 'flex-end' }}
    >
      <PortfolioIndexWrapper
        as="ul"
        width="auto"
        pb="4"
        px="0"
        m="0"
        flexWrap="wrap"
      >
        {portfolioIndex.map(project => (
          <PortfolioCard
            as="li"
            width={1}
            pt={3}
            pb={2}
            key={project.slug.current}
          >
            <RelativeBox>
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
                  <PortfolioCardTitle ml={{ b: 0 }} mr="0.3em">
                    {project.shortTitle}
                  </PortfolioCardTitle>
                  <PortfolioCardDescription>
                    {project.description}
                  </PortfolioCardDescription>
                </div>
              </PortfolioCardLink>
            </RelativeBox>
          </PortfolioCard>
        ))}
      </PortfolioIndexWrapper>
    </Flex>
  );
};

PortfolioSection.defaultProps = {
  portfolioIndex: [],
};

PortfolioSection.propTypes = {
  portfolioIndex: PropTypes.arrayOf(PropTypes.object),
};

export default PortfolioSection;
