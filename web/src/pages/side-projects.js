import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import GraphQLErrorList from '../components/GraphQLErrorList/GraphQLErrorList';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';

import PortfolioSection from '../sections/PortfolioSection/PortfolioSection';

export const query = graphql`
  {
    sandbox: sanitySandbox {
      title
      sandboxIndex {
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
const SideProjectsPage = props => {
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

  const { sandbox } = data;

  return (
    <React.Fragment>
      <SEO title="Rob Easthope" />

      <Layout>
        <PortfolioSection
          sectionId="side-projects"
          title={sandbox.title}
          portfolioIndex={sandbox.sandboxIndex}
        />
      </Layout>
    </React.Fragment>
  );
};

SideProjectsPage.defaultProps = {
  data: null,
  errors: null,
};

SideProjectsPage.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.arrayOf(PropTypes.string),
};

export default SideProjectsPage;
