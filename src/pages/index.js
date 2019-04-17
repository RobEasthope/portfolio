import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';
import Container from '../components/Grid/Container';
import PortfolioIndex from '../components/PortfolioIndex/PortfolioIndex';
import Box from '../components/Grid/Box';
import PortfolioCard from '../components/PortfolioCard/PortfolioCard';
import PortfolioCardTitle from '../components/PortfolioCardTitle/PortfolioCardTitle';

export const query = graphql`
  {
    sanityPortfolio {
      portfolioIndex {
        id
        title
        slug {
          current
        }
        thumbnailImage {
          imageAsset {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
      seoMetaData {
        title
        description
        keywords
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout footer>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <PortfolioIndex as="ul" flexWrap="wrap">
        {data.sanityPortfolio.portfolioIndex.map(project => (
          <PortfolioCard
            as="li"
            width={{ b: 1 / 2, sm: 1 / 2, md: 1 / 3, lg: 1 / 4, xlg: 1 / 5 }}
            key={project.slug.current}
          >
            <Link to={project.slug.current}>
              <Image fluid={project.thumbnailImage.imageAsset.asset.fluid} />
              <PortfolioCardTitle>{project.title}</PortfolioCardTitle>
            </Link>
          </PortfolioCard>
        ))}
      </PortfolioIndex>
    </Container>
  </Layout>
);

export default IndexPage;
