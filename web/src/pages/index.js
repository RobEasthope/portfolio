import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import GraphQLErrorList from '../components/GraphQLErrorList/GraphQLErrorList';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';

import LandingSection from '../sections/LandingSection/LandingSection';

export const query = graphql`
  {
    landing: sanityLanding {
      image {
        imageAsset {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        altText
      }
      video {
        asset {
          status
          playbackId
          assetId
          _type
          _key
        }
        _type
        _key
      }
    }
  }
`;
const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  if (!data) {
    throw new Error('Missing landing page data.');
  }

  const { landing } = data;

  return (
    <React.Fragment>
      <SEO title="Rob Easthope" />

      <Layout disableFooter landingPageStyling>
        <LandingSection image={landing.image} video={landing.video} />
      </Layout>
    </React.Fragment>
  );
};

IndexPage.defaultProps = {
  data: null,
  errors: null,
};

IndexPage.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.arrayOf(PropTypes.string),
};

export default IndexPage;
