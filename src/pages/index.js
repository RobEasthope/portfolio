import React from 'react';
import { Flex, Box } from 'rebass';
import { graphql } from 'gatsby';

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
        keywords
      }
    }
  }
`;

const LandingPage = ({ data }) => (
  <React.Fragment>
    <SEO keywords={data.sanityLandingPage.seoMetaData.keywords} />

    <Layout>
      <Flex flexDirection="column">
        <Box width={1} px="4">
          <LandingJumbotron
            fluid={data.sanityLandingPage.landingImage.imageAsset.asset.fluid}
          />
          <LandingTagline as="h1" fontSize={{ sm: 5, md: 5, lg: 6, xlg: 7 }}>
            {data.sanityLandingPage.tagline}
          </LandingTagline>
        </Box>
      </Flex>
    </Layout>
  </React.Fragment>
);

export default LandingPage;
