import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';
import Container from '../components/Grid/Container';

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
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <h1>Portfolio</h1>
      <ul>
        {data.sanityPortfolio.portfolioIndex.map(project => (
          <li key={project.slug.current}>
            <h2 style={{ fontSize: '24px' }}>
              <Link to={project.slug.current}>
                <Image fluid={project.thumbnailImage.imageAsset.asset.fluid} />
                {project.title}
              </Link>
            </h2>
          </li>
        ))}
      </ul>
    </Container>
  </Layout>
);

export default IndexPage;
