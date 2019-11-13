import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import GraphQLErrorList from '../components/GraphQLErrorList/GraphQLErrorList';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';

import PortfolioSection from '../sections/PortfolioSection/PortfolioSection';

export const query = graphql`
  {
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
const PortfolioPage = props => {
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

  const { portfolio } = data;

  return (
    <React.Fragment>
      <SEO title="Rob Easthope" />

      <Layout>
        <PortfolioSection
          title={portfolio.title}
          portfolioIndex={portfolio.portfolioIndex}
        />
      </Layout>
    </React.Fragment>
  );
};

PortfolioPage.defaultProps = {
  data: null,
  errors: null,
};

PortfolioPage.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.arrayOf(PropTypes.string),
};

export default PortfolioPage;
