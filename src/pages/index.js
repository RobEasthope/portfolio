import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';
import Container from '../components/Grid/Container';
import PortfolioIndex from '../components/PortfolioIndex/PortfolioIndex';
import PortfolioCard from '../components/PortfolioCard/PortfolioCard';
import PortfolioCardTitle from '../components/PortfolioCardTitle/PortfolioCardTitle';

export const query = graphql`
  {
    sanityPortfolio {
      portfolioIndex {
        id
        shortTitle
        slug {
          current
        }
        thumbnailImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      seoMetaData {
        keywords
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout footer>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <PortfolioIndex as="ul" p="0" m="0" flexWrap="wrap">
        {data.sanityPortfolio.portfolioIndex.map(project => (
          <PortfolioCard
            as="li"
            width={{ b: 1 / 2, sm: 1 / 2, md: 1 / 3, lg: 1 / 4, xlg: 1 / 5 }}
            px="2"
            pb="3"
            key={project.slug.current}
          >
            <Link to={project.slug.current}>
              {project.thumbnailImage && (
                <Image fluid={project.thumbnailImage.asset.fluid} />
              )}
              <PortfolioCardTitle p="2">
                {project.shortTitle}
              </PortfolioCardTitle>
            </Link>
          </PortfolioCard>
        ))}
      </PortfolioIndex>
    </Container>
  </Layout>
);

export default IndexPage;
