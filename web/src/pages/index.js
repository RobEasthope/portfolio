import React from 'react';
import { graphql } from 'gatsby';

import GraphQLErrorList from '../components/GraphQLErrorList/GraphQLErrorList';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';

import LandingSection from '../components/LandingSection/LandingSection';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';
import AboutSection from '../components/AboutSection/AboutSection';
import ContactSection from '../components/ContactSection/ContactSection';

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

  if (!data) {
    throw new Error('Missing landing page data.');
  }

  const { landing, portfolio } = data;

  return (
    <React.Fragment>
      <SEO title="Rob Easthope" />

      <Layout>
        {/* Landing */}
        <LandingSection title={landing.tagline} image={landing.image} />

        {/* Portfolio */}
        <PortfolioSection
          title={portfolio.title}
          portfolioIndex={portfolio.portfolioIndex}
        />

        {/* About */}
        <AboutSection title="About" />

        {/* Contact */}
        <ContactSection title="Contact" />
      </Layout>
    </React.Fragment>
  );
};

export default LandingPage;
