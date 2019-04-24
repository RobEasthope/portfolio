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
    <SEO
      title="Rob Easthope"
      keywords={data.sanityLandingPage.seoMetaData.keywords}
    />

    <Layout>
      <Flex>
        <Box width={1} px="0">
          <LandingTagline
            as="h1"
            width="100%"
            px="4"
            m="0"
            fontSize={{ sm: 5, md: 5, lg: 6, xlg: 7 }}
          >
            {data.sanityLandingPage.tagline}
          </LandingTagline>
          <LandingJumbotron
            fluid={data.sanityLandingPage.landingImage.imageAsset.asset.fluid}
          />
        </Box>
      </Flex>
    </Layout>
  </React.Fragment>
);

export default LandingPage;
