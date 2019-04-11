import React from 'react';
import Image from 'gatsby-image';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';
import LandingTagline from '../components/LandingTagline/LandingTagline';
import Flex from '../components/Grid/Flex';
import Box from '../components/Grid/Box';

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
      <Flex>
        <Box width={1}>
          <Image
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
