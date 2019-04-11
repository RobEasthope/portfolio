import React from 'react';
import { Flex, Box } from 'rebass';
import LandingJumbotron from '../components/LandingJumbotron/LandingJumbotron';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';
import LandingTagline from '../components/LandingTagline/LandingTagline';

export const query = graphql`
  {
    sanityLandingPage {
      tagline
      landingImage {
        imageAsset {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        altText
      }
      seoMetaData {
        title
        description
        keywords
      }
    }
  }
`;

const LandingPage = ({ data }) => (
  <React.Fragment>
    <SEO
      title={data.sanityLandingPage.seoMetaData.title}
      description={data.sanityLandingPage.seoMetaData.description}
      keywords={data.sanityLandingPage.seoMetaData.keywords}
    />

    <Layout>
      <Flex flexDirection="column">
        <Box width={1}>
          <LandingJumbotron
            fluid={data.sanityLandingPage.landingImage.imageAsset.asset.fluid}
          />
          <LandingTagline as="h1">
            {data.sanityLandingPage.tagline}
          </LandingTagline>
        </Box>
      </Flex>
    </Layout>
  </React.Fragment>
);

export default LandingPage;
