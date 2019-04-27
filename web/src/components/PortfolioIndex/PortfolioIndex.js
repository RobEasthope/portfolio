import styled from 'styled-components';
import { Box } from 'rebass';

const PortfolioIndexWrapper = styled(Box)`
  list-style-type: none;
`;

const PortfolioIndex = props => {
  const { portfolioIndex } = props;

  return (
    <PortfolioIndexWrapper
      as="ul"
      width="auto"
      py="4"
      px="2"
      m="0"
      flexWrap="wrap"
    >
      {portfolioIndex.map(project => (
        <PortfolioCard
          as="li"
          width={1}
          px="3"
          mb="4"
          key={project.slug.current}
        >
          <PortfolioCardLink href={project.slug.current}>
            {project.thumbnailImage && (
              <PortfolioCardThumbnail>
                <Image
                  className="projectThumbnail"
                  fluid={project.thumbnailImage.asset.fluid}
                />
              </PortfolioCardThumbnail>
            )}
            <div>
              <PortfolioCardTitle>{project.shortTitle}</PortfolioCardTitle>
              <PortfolioCardDescription>
                {project.description}
              </PortfolioCardDescription>
            </div>
          </PortfolioCardLink>
        </PortfolioCard>
      ))}
    </PortfolioIndexWrapper>
  );
};

export default PortfolioIndex;
