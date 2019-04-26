import React from 'react';
import { Flex, Box, Heading } from 'rebass';
import { graphql } from 'gatsby';

import LandingJumbotron from '../components/LandingJumbotron/LandingJumbotron';
import Layout from '../components/Layout/Layout';
import RelativeBox from '../components/RelativeBox/RelativeBox';
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
const LandingPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = data;

  if (!page) {
    throw new Error('Missing landing page data.');
  }

  return (
    <React.Fragment>
      <SEO
        title="Rob Easthope"
        keywords={data.sanityLandingPage.seoMetaData.keywords}
      />

      <Layout>
        <Flex>
          <RelativeBox width={1} px="0">
            <LandingTagline
              as="h1"
              width="100%"
              px="4"
              m="0"
              fontSize={{ sm: 5, md: 6, lg: 7, xlg: 8 }}
            >
              {data.sanityLandingPage.tagline}
            </LandingTagline>
            <LandingJumbotron
              fluid={data.sanityLandingPage.landingImage.imageAsset.asset.fluid}
            />
          </RelativeBox>
        </Flex>
        <Flex flexDirection="row">
          <Box width={1} p="4" as="section">
            <Heading
              as="h2"
              justifySelf="flex-end"
              fontSize={{ sm: 5, md: 5, lg: 6, xlg: 7 }}
              textAlign="right"
            >
              Portfolio
            </Heading>
            <Heading
              as="h2"
              justifySelf="flex-end"
              fontSize={{ sm: 5, md: 5, lg: 6, xlg: 7 }}
              textAlign="right"
            >
              About
            </Heading>
            <Heading
              as="h2"
              justifySelf="flex-end"
              fontSize={{ sm: 5, md: 5, lg: 6, xlg: 7 }}
              textAlign="right"
            >
              Contact
            </Heading>
          </Box>
        </Flex>
      </Layout>
    </React.Fragment>
  );
};
// const LandingPage = ({ data }) => (

// );

export default LandingPage;
