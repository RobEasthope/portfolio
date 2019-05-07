import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import GraphQLErrorList from '../components/GraphQLErrorList/GraphQLErrorList';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';

import LandingSection from '../components/LandingSection/LandingSection';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';
import AboutSection from '../components/AboutSection/AboutSection';

export const query = graphql`
  {
    landing: sanityLanding {
      tagline
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
          _id
          _rev
          _type
          data {
            aspect_ratio
            created_at
            duration
            id
            max_stored_frame_rate
            max_stored_resolution
            mp4_support
            passthrough
            playback_ids {
              id
              policy
            }
            status
            tracks {
              duration
              id
              max_frame_rate
              max_height
              max_width
              type
            }
          }
          filename
          playbackId
          status
          thumbTime
        }
      }
    }
    portfolio: sanityPortfolio {
      title
      portfolioIndex {
        id
        shortTitle
        description
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
    }
    about: sanityAbout {
      title
      _rawBody
      portrait {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
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

  const { landing, portfolio, about } = data;

  return (
    <React.Fragment>
      <SEO title="Rob Easthope" />

      <Layout>
        <LandingSection
          tagline={landing.tagline}
          image={landing.image}
          video={landing.video}
        />

        <PortfolioSection
          title={portfolio.title}
          portfolioIndex={portfolio.portfolioIndex}
        />

        <AboutSection
          title={about.title}
          blurb={about._rawBody}
          portrait={about.portrait}
        />
      </Layout>
    </React.Fragment>
  );
};

IndexPage.defaultProps = {
  data: {},
  errors: null,
};

IndexPage.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.arrayOf(PropTypes.string),
};

export default IndexPage;
